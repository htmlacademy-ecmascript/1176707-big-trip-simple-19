import PointEditView from '../view/point-edit-view.js';
import { MODE } from '../const.js';

export default class FormPresenter {
  #pointContainer = null;
  #pointEditComponent = null;
  #point = null;
  #mode = MODE.EDITING;

  constructor(pointContainer, point){
    this.#pointContainer = pointContainer;
    this.#point = point;
    this.#pointEditComponent = new PointEditView(this.#point);
  }

  get form() {
    return this.#pointEditComponent;
  }

  destroy() {
    this.#pointEditComponent = undefined;
  }
}
