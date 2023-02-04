import PointsListView from '../view/points-list-view.js';
import NoPointsView from '../view/no-points-view.js';
import PointPresenter from './point-presenter.js';
import SortView from '../view/sort-view';
import {sortPointUp, sortPointDown, updateItem} from '../utils/util.js';
import {SortType} from '../const.js';
import { render, RenderPosition} from '../framework/render.js';

export default class ListPresenter {
  #pointContainer = null;
  #pointListComponent = null;
  #pointModel = null;
  #sortComponent = null;
  #currentSortType = SortType.DAY;

  #sourcedListPoint = [];
  #pointList = [];
  #pointPresenter = new Map();

  constructor({pointContainer, pointModel}) {
    this.#pointContainer = pointContainer;
    this.#pointModel = pointModel;
    this.#pointListComponent = new PointsListView();
  }

  init() {
    this.#pointList = [...this.#pointModel.point];
    this.#sourcedListPoint = [...this.#pointModel.point];
    render(this.#pointListComponent, this.#pointContainer);
    this.#renderPointList();
  }

  #handlePointChange = (updatedPoint) => {
    this.#pointList = updateItem(this.#pointList, updatedPoint);
    this.#sourcedListPoint = updateItem(this.#sourcedListPoint, updatedPoint);
    this.#pointPresenter.get(updatedPoint.id).init(updatedPoint);
  };

  #handleModeChange = () => {
    this.#pointPresenter.forEach((presenter) => presenter.resetView());
  };

  #sortPoint(sortType) {
    switch (sortType) {
      case SortType.DATE_UP:
        this.#pointList.sort(sortPointUp);
        break;
      case SortType.DATE_DOWN:
        this.#pointList.sort(sortPointDown);
        break;
      default:
        this.#pointList = [...this.#sourcedListPoint];
    }

    this.#currentSortType = sortType;
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortPoint(sortType);
  };

  #renderPoint(point){
    const pointPresenter = new PointPresenter({
      pointListComponent: this.#pointListComponent,
      onModeChange: this.#handleModeChange
    });
    pointPresenter.init(point);
    this.#pointPresenter.set(point.id, pointPresenter);
  }

  #renderSort(){
    this.#sortComponent = new SortView({
      onSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#sortComponent, this.#pointListComponent.element, RenderPosition.AFTERBEGIN);
  }

  #clearPointList() {
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();
  }

  #renderPointList() {
    render(this.#pointListComponent, this.#pointContainer);

    if (this.#pointList.every((point) => point.isArchive)) {
      render(new NoPointsView(), this.#pointListComponent.element);
    }

    for (let i = 0; i < this.#pointList.length; i++) {
      this.#renderPoint(this.#pointList[i]);
    }
    this.#renderSort();
  }

}

