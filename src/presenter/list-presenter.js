import PointsListView from '../view/points-list-view.js';
import PointPresenter from './point-presenter.js';
import FormPresenter from './form-presenter.js';
import NoPointsView from '../view/no-points-view.js';
import { MODE, POINT_AMOUNT } from '../const.js';
import { render } from '../render.js';

export default class ListPresenter {
  #pointContainer = null;
  #pointListComponent = null;
  #pointModel = null;

  #pointList = [];
  #pointPresenter = new Map();
  #formPresenter = null;
  #formDestroy = null;

  #mode = MODE.DEFAULT;
  #renderPointsCount = POINT_AMOUNT;

  constructor({pointContainer, pointModel}) {
    this.#pointContainer = pointContainer;
    this.#pointModel = pointModel;
    this.#pointListComponent = new PointsListView();
    this.#formDestroy = FormPresenter.destroy;
  }

  init() {
    this.#pointList = [...this.#pointModel.point];
    render(this.#pointListComponent, this.#pointContainer);

    if (this.#pointList.every((point) => point.isArchive)) {
      render(new NoPointsView(), this.#pointListComponent.element);
    } else 
      for (let i = 0; i < this.#pointList.length; i++) {
        this.#renderPoint(this.#pointList[i]);
      }
    }
  }

  clearOnChangeMode() {
    return this.#formDestroy;
  }

  #renderPoint(point){
    const pointPresenter = new PointPresenter(this.#pointListComponent.element, point, this.clearOnChangeMode());
    this.#formPresenter = new FormPresenter(this.#pointListComponent.element, point);

    const replacePointToEdit = () => {
      if(this.#mode === MODE.DEFAULT) {
        this.#pointListComponent.element.replaceChild(this.#formPresenter.form.element, pointPresenter.pointComponent.element);
      } this.clearOnChangeMode();
    };
    const replaceEditToPoint = () =>{
      if(this.#mode === MODE.EDITING) {
        this.#pointListComponent.element.replaceChild(pointPresenter.pointComponent.element, this.#formPresenter.form.element);
      } this.clearOnChangeMode();
    };
    const documentKeyDownHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceEditToPoint();
        document.removeEventListener('keydown', documentKeyDownHandler);
        this.#mode = MODE.DEFAULT;
      }
    };

    pointPresenter.init(point);
    this.#pointPresenter.set(point.id, point);

    pointPresenter.pointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replacePointToEdit();
      document.addEventListener('keydown', documentKeyDownHandler);
      this.#mode = MODE.EDITING;
    });
    this.#formPresenter.form.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceEditToPoint();
      document.removeEventListener('keydown', documentKeyDownHandler);
      this.#mode = MODE.DEFAULT;
    });
    this.#formPresenter.form.element.querySelector('form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceEditToPoint();
      document.removeEventListener('keydown', documentKeyDownHandler);
      this.#mode = MODE.DEFAULT;
    });
  }
}
