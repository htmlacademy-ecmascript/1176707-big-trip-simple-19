import PointView from '../view/point-view';
import PointEditView from '../view/point-edit-view';
import { render } from '../render';
import { MODE } from '../const';

export default class PointPresenter {
  #pointListContainer = null;
  #pointEditComponent = null;
  #pointComponent = null;
  #onModeChange = null;

  #point = null;
  #mode = MODE.DEFAULT;

  constructor({pointListContainer, onModeChange}) {
    this.#pointListContainer = pointListContainer;
    this.#onModeChange = onModeChange;
  }

  init(point) {
    this.#point = point;
    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;

    this.#pointComponent = new PointView({
      point: this.#point,
      onClick: this.#handleEditClick,
    });
    this.#pointEditComponent = new PointEditView({
      point: this.#point,
      onClick: this.#handleEditClick,
      onFormSubmit: this.#handleFormSubmit,
    });

    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointComponent.point, this.#pointListContainer);
      return;
    }

    if (this.#mode === MODE.DEFAULT) {
      this.#point.element.replaceChild(this.#pointComponent.onClick, prevPointComponent);
    }

    if (this.#mode === MODE.EDITING) {
      this.#point.element.replaceChild(this.#pointEditComponent.onClick, prevPointEditComponent);
    }
    if (this.#mode === MODE.EDITING) {
      this.#point.element.replaceChild(this.#pointEditComponent.onFormSubmit, prevPointEditComponent);
    }

  }

  #replacePointToEdit() {
    this.#point.element.replaceChild(this.#pointEditComponent.element, this.#pointComponent.element);
    document.addEventListener('keydown', this.#documentKeyDownHandler);
    this.#onModeChange();
    this.#mode = MODE.EDITING;
  }

  #replaceEditToPoint() {
    this.#point.element.replaceChild(this.#pointComponent.element, this.#pointEditComponent.element);
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
    if(this.#mode === MODE.DEFAULT){
      this.#replacePointToEdit();
    }
    this.#replaceEditToPoint();
  };

  #handleFormSubmit = () => {
    this.#replaceEditToPoint();
  };

}
