import PointsListView from '../view/points-list-view.js';
import PointPresenter from './point-presenter.js';
import FormPresenter from './form-presenter.js';
import { MODE } from '../const.js';
import { render } from '../render.js';

export default class ListPresenter {
  #pointContainer = null;
  #pointListComponent = null;
  #pointModel = null;

  #pointList = [];
  #pointPresenter = new Map();
  #formPresenter = new Map();
  #formDestroy = null;

  #mode = MODE.DEFAULT;

  constructor({pointContainer, pointModel}) {
    this.#pointContainer = pointContainer;
    this.#pointModel = pointModel;
    this.#pointListComponent = new PointsListView();
    this.#formDestroy = FormPresenter.destroy;

  }

  init() {
    this.#pointList = [...this.#pointModel.point];

    render(this.#pointListComponent, this.#pointContainer);

    for (let i = 0; i < this.#pointList.length; i++) {
      this.#renderPoint(this.#pointList[i]);
    }
  }

  clearOnChangeMode() {
    return this.#formDestroy;
  }

  #renderPoint(point){
    const pointPresenter = new PointPresenter(this.#pointListComponent.element, point, this.clearOnChangeMode());
    const formPresenter = new FormPresenter(this.#pointListComponent.element, point);

    const replacePointToEdit = () => {
      if(this.#mode === MODE.DEFAULT) {
        this.#pointListComponent.element.replaceChild(formPresenter.form.element, pointPresenter.pointComponent.element);
      } this.clearOnChangeMode();
    };
    const replaceEditToPoint = () =>{
      this.#pointListComponent.element.replaceChild(pointPresenter.pointComponent.element, formPresenter.form.element);
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
    this.#formPresenter.set(point.id, point);

    pointPresenter.pointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replacePointToEdit();
      document.addEventListener('keydown', documentKeyDownHandler);
      this.#mode = MODE.EDITING;
    });
    formPresenter.form.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceEditToPoint();
      document.removeEventListener('keydown', documentKeyDownHandler);
      this.#mode = MODE.DEFAULT;
    });
    formPresenter.form.element.querySelector('form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceEditToPoint();
      document.removeEventListener('keydown', documentKeyDownHandler);
      this.#mode = MODE.DEFAULT;
    });
  }
}
