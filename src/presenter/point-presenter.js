import PointView from '../view/point-view.js';
import { render } from '../render.js';
import { MODE } from '../const.js';

export default class PointPresenter {
  #pointContainer = null;
  #pointComponent = null;
  #clearOnChangeMode = null;
  #editComponent = null;

  #point = null;
  #mode = MODE.DEFAULT;

  constructor(pointContainer, point, clearOnChangeMode) {
    this.#pointContainer = pointContainer;
    this.#point = point;
    this.#clearOnChangeMode = clearOnChangeMode;
    this.#pointComponent = new PointView(this.#point);
  }

  get pointComponent() {
    return this.#pointComponent;
  }

  init(){
    if (this.#mode === MODE.DEFAULT) {
      render(this.pointComponent, this.#pointContainer);
    }
  }

}

