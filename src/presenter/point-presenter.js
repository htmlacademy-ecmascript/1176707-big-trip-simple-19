import PointsListView from '../view/points-list-view.js';
import PointView from '../view/point-view.js';
import FormEditorView from '../view/form-editor-view.js';
import {render} from '../render.js';

export default class PointPresenter {
  pointComponent = new PointsListView();
  pointListComponent = new FormEditorView();

  constructor({pointContainer}) {
    this.pointContainer = pointContainer;
  }

  init() {
    render(this.pointListComponent, this.pointContainer);
    render(this.pointComponent, this.pointListComponent.getElement());
    render(new PointView(), this.pointListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.pointListComponent.getElement());
    }
  }
}
