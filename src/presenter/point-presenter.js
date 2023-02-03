import PointView from '../view/point-view.js';
import { render } from '../render.js';

export default class PointPresenter {
  #pointContainer = null;
  #replacePointToEdit = null;

  #point = null;

  constructor(pointContainer, replacePointToEdit) {
    this.#pointContainer = pointContainer;
    this.#replacePointToEdit = replacePointToEdit;
  }

  init(point){
    this.#point = point;

    const pointComponent = new PointView(this.#point, this.#handlePointEditClick);

    render(pointComponent, this.#pointContainer);
  }

  #handlePointEditClick = () => {
    this.#replacePointToEdit();
  };

}

