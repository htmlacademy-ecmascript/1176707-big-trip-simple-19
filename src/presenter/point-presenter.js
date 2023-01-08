import PointsListView from '../view/points-list-view.js';
import PointView from '../view/point-view.js';
import FormEditorView from '../view/form-editor-view.js';
import {render, RenderPosition} from '../render.js';

export default class PointPresenter {
  formComponent = new FormEditorView();
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
