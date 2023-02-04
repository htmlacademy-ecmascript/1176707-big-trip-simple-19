import PointView from '../view/point-view';
import PointEditView from '../view/point-edit-view';
import { render, replace, remove } from '../framework/render';
import { MODE } from '../const';

export default class PointPresenter {
  #pointListComponent = null;
  #handleModeChange = null;

  #pointComponent = null;
  #pointEditComponent = null;

  #point = null;
  #mode = MODE.DEFAULT;

  constructor({pointListComponent, onModeChange}) {
    this.#pointListComponent = pointListComponent;
    this.#handleModeChange = onModeChange;
  }

  init(point) {
    this.#point = point;

    this.#pointComponent = new PointView({
      point,
      onEditClick: this.#handlePointEditClick,
    });
    this.#pointEditComponent = new PointEditView({
      point,
      onEditClick: this.#handleEditClick,
      onFormSubmit: this.#handleFormSubmit,
    });

    render(this.#pointComponent, this.#pointListComponent.element);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  }

  resetView() {
    if (this.#mode !== MODE.DEFAULT) {
      this.#replaceEditToPoint();
    }
  }

  #replacePointToEdit() {
    replace(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#documentKeyDownHandler);
    this.#handleModeChange();
    this.#mode = MODE.EDITING;
  }

  #replaceEditToPoint() {
    replace(this.#pointComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#documentKeyDownHandler);
    this.#mode = MODE.DEFAULT;
  }

  #documentKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#replaceEditToPoint();
    }
  };

  #handlePointEditClick = () => {
    this.#replacePointToEdit();
  };

  #handleEditClick = () => {
    this.#replaceEditToPoint();
  };

  #handleFormSubmit = () => {
    this.#replaceEditToPoint();
  };
}
