import PointsListView from '../view/points-list-view.js';
import NoPointsView from '../view/no-points-view.js';
import PointPresenter from './point-presenter.js';
import SortView from '../view/sort-view';
import { sortPointUp } from '../utils/point-utils.js';
import { render, RenderPosition} from '../framework/render.js';
import { SortType } from '../const.js';

export default class ListPresenter {
  #pointContainer = null;
  #pointListComponent = null;
  #pointModel = null;
  #sortComponent = null;
  #currentSortType = SortType.DEFAULT;

  #sourcedListPoints = [];
  #pointList = [];
  #pointPresenter = new Map();

  constructor({pointContainer, pointModel}) {
    this.#pointContainer = pointContainer;
    this.#pointModel = pointModel;
    this.#pointListComponent = new PointsListView();
  }

  init() {
    this.#pointList = [...this.#pointModel.point];
    this.#sourcedListPoints = [...this.#pointModel.point];

    this.#renderSort();
    this.#renderPointList();
  }


  #handleModeChange = () => {
    this.#pointPresenter.forEach((presenter) => presenter.resetView());
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortPoints(sortType);
    this.#clearPointList();
    this.#renderPointList();
  };

  #sortPoints(sortType) {
    switch (sortType) {
      case SortType.DAY:
        this.#pointList.sort(sortPointUp);
        break;
      case SortType.PRICE:
        this.#pointList.sort((prev, next) => prev.price - next.price);
        break;
      default:
        this.#pointList = [...this.#sourcedListPoints];
    }

    this.#currentSortType = sortType;
  }

  #renderSort(){
    this.#sortComponent = new SortView({
      onSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#sortComponent, this.#pointListComponent.element, RenderPosition.AFTERBEGIN);
  }

  #renderPoint(point){
    const pointPresenter = new PointPresenter({
      pointListComponent: this.#pointListComponent,
      onModeChange: this.#handleModeChange
    });
    pointPresenter.init(point);
    this.#pointPresenter.set(point.id, pointPresenter);
  }

  #renderPointList() {
    render(this.#pointListComponent, this.#pointContainer);

    if (this.#pointList.every((point) => point.isArchive)) {
      render(new NoPointsView(), this.#pointListComponent.element);
    }

    for (let i = 0; i < this.#pointList.length; i++) {
      this.#renderPoint(this.#pointList[i]);
    }
  }

  #clearPointList() {
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();
  }

}

