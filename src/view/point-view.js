import {createElement} from '../render.js';
import { humanizePointDate, humanizePointTime } from '../util.js';


function addPoint(point) {
  const { destination , offers , type } = point;
  const dateStart = point['date_from'];
  const dateEnd = point['date_to'];

  return (
    `<li class="trip-events__item">
        <div class="event">
        <time class="event__date" datetime="${dateStart}">${humanizePointDate(dateStart)}</time>
        <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="${destination.pictures.src}" alt="Event type icon">
        </div>
        <h3 class="event__title">${type} ${destination.name}</h3>
        <div class="event__schedule">
        <p class="event__time">
            <time class="event__start-time" datetime="${dateStart}">${humanizePointTime(dateStart)}</time>
            &mdash;
            <time class="event__end-time" datetime="${dateEnd}">${humanizePointTime(dateEnd)}</time>
        </p>
        </div>
            <p class="event__price">
            &euro;&nbsp;
            <span class="event__price-value">${point['base_price']}</span>
          <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
            <li class="event__offer">
            <span class="event__offer-title">${offers.f.title}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${offers.f.price}</span>
            </li>
            <li class="event__offer">
            <span class="event__offer-title">${offers.o.title}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${offers.o.price}</span>
            </li>
        </ul>
        <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
        </button>
    </div>
    </li>`
  );
}

export default class PointView {

  constructor(point) {
    this.point = point;
  }

  getTemplate() {
    return addPoint(this.point);
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
