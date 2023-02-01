import PointsListView from '../view/points-list-view.js';
import PointPresenter from './point-presenter.js';
import {render} from '../render.js';

export default class ListPresenter {
  #pointContainer = null;
  #pointListComponent = null;
  #pointModel = null;

  #pointList = [];
  #pointPresenter = new Map();

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

  #replacePointToEdit() {
    replace(this.#pointListComponent.element, this.#pointEditComponent.element, this.#pointComponent.element);
    document.addEventListener('keydown', this.#keyDownHandler);
    this.#mode = MODE.EDITING;
  }

  #replaceEditToPoint() {
    replace(this.#pointListComponent.element, this.#pointComponent.element, this.#pointEditComponent.element);
    document.removeEventListener('keydown', this.#keyDownHandler);
    this.#mode = MODE.DEFAULT;
  }

  #keyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#replaceEditToPoint();
    }
  };

  #renderPoint(point){
    const pointPresenter = new PointPresenter(this.#pointListComponent.element, this.#pointListComponent);
    pointPresenter.init(point , this.#replacePointToEdit());
    this.#pointPresenter.set(point.id,);
  }
}
