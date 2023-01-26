import PointsListView from '../view/points-list-view.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';
import PointModel from '../model/point-model.js';
import {render} from '../render.js';

export default class PointPresenter {
  #renderTask = null;

  constructor({pointContainer}) {
    this.pointContainer = pointContainer;
    this.pointListComponent = new PointsListView();
    this.pointModel = new PointModel();
  }

  init() {
    render(this.pointListComponent, this.pointContainer);

    const points = this.pointModel.getPoints();

    for (let i = 0; i < points.length; i++) {
      render(new PointView(points[i]), this.pointListComponent.getElement());
      render(new PointEditView(points[i]), this.pointListComponent.getElement());
      this.#renderPoint(points[i]);
    }
  }

  #renderPoint(points) {
    const pointComponent = new PointView({points});
    const pointEditComponent = new PointEditView({points});

    const openEditFormPoint = () => {
      this.pointListComponent.getElement.replaceChild(pointEditComponent.getElement);
    };

    const closeEditFormPoint = () => {
      this.pointListComponent.getElement.replaceChild(pointEditComponent.getElement);
    };

    pointComponent.getElement.querySelector('.event__rollup-btn').addEventListener('click', () => {
      openEditFormPoint();
    });

    pointEditComponent.getElement.querySelector('event__save-btn  btn  btn--blue').addEventListener('submit', (evt) => {
      evt.preventDefault();
      closeEditFormPoint();
    });

    render(pointComponent, this.pointListComponent.getElement);
    render(pointEditComponent, this.pointListComponent.getElement);
  }
}
