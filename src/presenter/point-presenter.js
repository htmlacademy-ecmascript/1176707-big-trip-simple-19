import PointsListView from '../view/points-list-view.js';
import PointView from '../view/point-view.js';
import {render} from '../render.js';

export default class PointPresenter {
  pointComponent = new PointView();
  pointListComponent = new PointsListView();

  constructor({pointContainer}) {
    this.pointContainer = pointContainer;
  }

  init() {
    render(this.pointListComponent, this.pointComponent.getElement());
    render(this.pointComponent, this.pointContainer);

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.pointListComponent.getElement());
    }
  }
}
