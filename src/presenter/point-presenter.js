import PointsListView from '../view/points-list-view.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';
import SortView from '../view/sort-view.js';
import {render} from '../render.js';

export default class PointPresenter {
  #pointContainer = null;
  #pointListComponent = null;
  #pointModel = null;
  #sortComponent = null;

  #pointList = [];

  constructor({pointContainer, pointModel}) {
    this.#pointContainer = pointContainer;
    this.#pointModel = pointModel;
    this.#pointListComponent = new PointsListView();
    this.#sortComponent = new SortView();
  }

  init() {
    this.#pointList = [...this.#pointModel.point];

    for (let i = 0; i < this.#pointList.length; i++) {
      console.log(this.#pointList);
      this.#renderPoint(this.#pointList[i]);
    }
  }

  #renderPoint(points) {
    const pointComponent = new PointView({points});
    const pointEditComponent = new PointEditView({points});

    const openEditFormPoint = () => {
      this.#pointListComponent.getElement.replaceChild(pointEditComponent.getElement);
    };

    const closeEditFormPoint = () => {
      this.#pointListComponent.getElement.replaceChild(pointEditComponent.getElement);
    };

    pointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      openEditFormPoint();
    });

    pointEditComponent.element.querySelector('event__save-btn  btn  btn--blue').addEventListener('submit', (evt) => {
      evt.preventDefault();
      closeEditFormPoint();
    });

    render(pointComponent, this.#pointListComponent.element);
    render(pointEditComponent, this.#pointListComponent.element);
  }
}
