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

  #moodeChecker(){

  }

  #renderPoint(point){
    const pointPresenter = new PointPresenter(this.#pointListComponent.element, this.#pointListComponent);
    pointPresenter.init(point);
    this.#pointPresenter.set(point.id, pointPresenter);
  }
}
