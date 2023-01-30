import PointView from '../view/point-view';
import PointEditView from '../view/point-edit-view';
import { render } from '../render';
import { MODE } from '../const';

export default class PointPresenter {
  #pointListContainer = null;
  #pointEditComponent = null;
  #pointComponent = null;
  #listComponent = null;
  #handleModeChange = null;

  #point = null;
  #mode = MODE.DEFAULT;

  constructor(pointListContainer, onModeChange) {
    this.#pointListContainer = pointListContainer;
    this.#handleModeChange = onModeChange;
  }

  init(point) {
    this.#point = point;

    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;

    this.#pointComponent = new PointView({
      point: this.#point,
      onEditClick: this.#handleEditClick,
    });
    this.#pointEditComponent = new PointEditView({
      point: this.#point,
      onFormSubmit: this.#handleFormSubmit,
    });

    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointComponent, this.#pointListContainer);
      return;
    }

    if (this.#mode === MODE.DEFAULT) {
      this.#listComponent.element.replaceChild(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === MODE.EDITING) {
      this.#listComponent.element.replaceChild(this.#pointEditComponent, prevPointEditComponent);
    }
  }

  #replacePointToEdit() {
    this.#listComponent.element.replaceChild(this.#pointEditComponent.element, this.#pointComponent.element);
    document.addEventListener('keydown', this.#documentKeyDownHandler);
    this.#handleModeChange();
    this.#mode = MODE.EDITING;
  }

  #replaceEditToPoint() {
    this.#listComponent.element.replaceChild(this.#pointComponent.element, this.#pointEditComponent.element);
    document.removeEventListener('keydown', this.#documentKeyDownHandler);
    this.#mode = MODE.DEFAULT;
  }

  #documentKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#replaceEditToPoint();
      document.removeEventListener('keydown', this.#documentKeyDownHandler);
    }
  };

  #handleEditClick = () => {
    this.#replacePointToEdit();
  };

  #handleFormSubmit = () => {
    this.#replaceEditToPoint();
  };

}
