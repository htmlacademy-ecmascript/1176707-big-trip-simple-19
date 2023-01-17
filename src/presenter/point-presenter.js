import PointsListView from '../view/points-list-view.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';
import NewPoint from '../view/create-new-point.js';
import {render, RenderPosition} from '../render.js';

export default class PointPresenter {
  formComponent = new PointEditView();
  pointListComponent = new PointsListView();

  constructor({pointContainer}) {
    this.pointContainer = pointContainer;
  }

  init() {
    render(this.pointListComponent, this.pointContainer);
    render(this.formComponent, this.pointListComponent.getElement(), RenderPosition.AFTERBEGIN);

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.pointListComponent.getElement());
    }
  }
}
