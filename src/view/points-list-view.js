import {createElement} from '../render.js';

function showRoutePoints() {
  return (
    `<ul class="trip-events__list">  
      
    </ul>`
  );
}

export default class PointsListView {
  getTemplate() {
    return showRoutePoints();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
