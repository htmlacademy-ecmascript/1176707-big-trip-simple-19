import PointEditView from '../view/point-edit-view.js';
import { MODE } from '../const.js';
import { render } from '../render.js';

export default class FormPresenter {
  #pointContainer = null;
  #pointEditComponent = null;
  #pointListComponent = null;
  #replaceEditToPoint = null;

  #point = null;
  #mode = MODE.EDITING;

  constructor(pointContainer, pointList, replaceEditToPoint){
    this.#pointContainer = pointContainer;
    this.#pointListComponent = pointList;
    this.#replaceEditToPoint = replaceEditToPoint;
  }

  init(point) {
    this.#point = point;

    const pointEditComponent = new PointEditView(this.#point);

    render(pointEditComponent, this.#pointContainer);
  }

  destroy() {
    this.pointEditComponent.element.remove();
  }

  #handleEditClick = () => {
    this.#replaceEditToPoint();
  };

  #handleFormSubmit = () => {
    this.#replaceEditToPoint();
  };
}
