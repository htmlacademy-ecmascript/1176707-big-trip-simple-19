import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';
import { MODE } from '../const.js';
import { render } from '../render.js';

export default class PointPresenter {
  #pointContainer = null;
  #pointComponent = null;
  #pointEditComponent = null;
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
    const prevPointEditComponent = this.#pointEditComponent;

    this.#pointComponent = new PointView(this.#point);
    this.#pointEditComponent = new PointEditView(this.#point);

    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointComponent, this.#pointContainer);
    }
    this.#pointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      this.#replacePointToEdit();
    });
    this.#pointEditComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      this.#replaceEditToPoint();
    });
    this.#pointEditComponent.element.querySelector('form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.#replaceEditToPoint();
    });
  }

  #replacePointToEdit() {
    this.#pointListComponent.element.replaceChild(this.#pointEditComponent.element, this.#pointComponent.element);
    document.addEventListener('keydown', this.#keyDownHandler);
    this.#mode = MODE.EDITING;
  }

  #replaceEditToPoint() {
    this.#pointListComponent.element.replaceChild(this.#pointComponent.element, this.#pointEditComponent.element);
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

