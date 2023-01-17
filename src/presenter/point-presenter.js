import PointsListView from '../view/points-list-view.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';
import PointModel from '../model/point-model.js';
import {render, RenderPosition} from '../render.js';

export default class PointPresenter {

  constructor({pointContainer}) {
    this.pointContainer = pointContainer;
    this.formComponent = new PointEditView();
    this.pointListComponent = new PointsListView();
    this.pointModel = new PointModel();
  }

  init() {
    render(this.pointListComponent, this.pointContainer);
    render(this.formComponent, this.pointListComponent.getElement(), RenderPosition.AFTERBEGIN);

    const points = this.pointModel.getPoints();

    for (let i = 0; i < points.length; i++) {
      render(new PointView(points[i]), this.pointListComponent.getElement());
    }
  }
}
