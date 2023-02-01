import PointView from '../view/point-view.js';
import { MODE } from '../const.js';
import { render, replace } from '../render.js';

export default class PointPresenter {
  #pointContainer = null;
  #pointComponent = null;
  #pointListComponent = null;
  #handleModeChange = null;

  #point = null;
  #mode = MODE.DEFAULT;

  constructor(pointContainer, pointList) {
    this.#pointContainer = pointContainer;
    this.#pointListComponent = pointList;
  }

  init(point){
    this.#point = point;

    const prevPointComponent = this.#pointComponent;

    this.#pointComponent = new PointView(this.#point);

    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointComponent, this.#pointContainer);
    }
    this.#pointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      this.#replacePointToEdit();
    });
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
}

