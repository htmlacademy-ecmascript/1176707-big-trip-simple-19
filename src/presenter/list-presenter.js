import PointsListView from '../view/points-list-view.js';
import PointPresenter from './point-presenter.js';
import FormPresenter from './form-presenter.js';
import { MODE } from '../const.js';
import { replace } from '../utils/util.js';
import { render } from '../render.js';

export default class ListPresenter {
  #pointContainer = null;
  #pointListComponent = null;
  #pointModel = null;

  #pointList = [];
  #pointPresenter = new Map();
  #formPresenter = new Map();

  #mode = MODE.DEFAULT;

  constructor({pointContainer, pointModel}) {
    this.#pointContainer = pointContainer;
    this.#pointModel = pointModel;
    this.#pointListComponent = new PointsListView();
  }

  init() {
    this.#pointList = [...this.#pointModel.point];

    render(this.#pointListComponent, this.#pointContainer);

    for (let i = 0; i < this.#pointList.length; i++) {
      this.#renderPoint(this.#pointList[i]);
    }
  }

  #renderPoint(point){
    const pointPresenter = new PointPresenter(this.#pointListComponent.element, this.#pointListComponent, this.#replacePointToEdit);
    const formPresenter = new FormPresenter(this.#pointListComponent.element, this.#pointListComponent, this.#replaceEditToPoint);
    pointPresenter.init(point);
    this.#pointPresenter.set(point.id, point);
    this.#formPresenter.set(point.id, point);

    console.log(this.pointPresenter.pointComponent.element);
  }

  #replacePointToEdit() {
    replace(this.#pointListComponent.element , this.pointPresenter.pointComponent.element , this.formPresenter.pointEditComponent.element);
    document.addEventListener('keydown', this.#keyDownHandler);
    this.#mode = MODE.EDITING;
  }

  #replaceEditToPoint() {
    replace(this.#pointListComponent.element, this.formPresenter.pointEditComponent.element, this.pointPresenter.pointComponent.element);
    document.removeEventListener('keydown', this.#keyDownHandler);
    this.#mode = MODE.DEFAULT;
  }

  #keyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#replaceEditToPoint();
    }
  };
}
