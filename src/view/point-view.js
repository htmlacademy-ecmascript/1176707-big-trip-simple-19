import {createElement} from '../render.js';
import { humanizePointDate, humanizePointTime , getRandomNumber} from '../util.js';


function addPoint(point) {
  const { typePoint, dueDate, price, offers , image} = point;

  return (
    `<li class="trip-events__item">
        <div class="event">
        <time class="event__date" datetime="${dueDate.number}">${humanizePointDate(dueDate.number)}</time>
        <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="https://loremflickr.com/248/152?random=${getRandomNumber(8)}" alt="Event type icon">
        </div>
        <h3 class="event__title">${typePoint}</h3>
        <div class="event__schedule">
        <p class="event__time">
            <time class="event__start-time" datetime="${dueDate.start}">${humanizePointTime(dueDate.start)}</time>
            &mdash;
            <time class="event__end-time" datetime="${dueDate.end}">${humanizePointTime(dueDate.end)}</time>
        </p>
        </div>
            <p class="event__price">
            &euro;&nbsp;
            <span class="event__price-value">${price}</span>
          <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
            <li class="event__offer">
            <span class="event__offer-title">${offers.offer1.description}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${offers.offer1.price}</span>
            </li>
            <li class="event__offer">
            <span class="event__offer-title">${offers.offer2.description}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${offers.offer2.price}</span>
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
