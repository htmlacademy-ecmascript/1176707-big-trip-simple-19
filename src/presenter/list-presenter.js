import PointsListView from '../view/points-list-view.js';
import NoPointsView from '../view/no-points-view.js';
import PointPresenter from './point-presenter.js';
import { render} from '../framework/render.js';

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

    if (this.#pointList.every((point) => point.isArchive)) {
      render(new NoPointsView(), this.#pointListComponent.element);
    } else {
      for (let i = 0; i < this.#pointList.length; i++) {
        this.#renderPoint(this.#pointList[i]);
      }
    }
  }

  #handleModeChange = () => {
    this.#pointPresenter.forEach((presenter) => presenter.resetView());
  };

  #renderPoint(point){
    const pointPresenter = new PointPresenter({
      pointListComponent: this.#pointListComponent,
      onModeChange: this.#handleModeChange
    });
    pointPresenter.init(point);
    this.#pointPresenter.set(point.id, pointPresenter);
  }
}
