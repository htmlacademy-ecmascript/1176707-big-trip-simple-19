import { createElement } from '../render';
import { getRandomPoint } from '../mock/point.js';
import {humanizePointDueDate} from '../util.js';

function createRandomPoint (point) {
  const { typePoint, dueDate, price, offers} = point;

  return (
    `<li class="trip-events__item">
        <div class="event">
        <time class="event__date" datetime="${dueDate.number}">${humanizePointDueDate(dueDate.number)}</time>
        <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/flight.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${typePoint}</h3>
        <div class="event__schedule">
        <p class="event__time">
            <time class="event__start-time" datetime="${dueDate.start}">${humanizePointDueDate(dueDate.start)}</time>
            &mdash;
            <time class="event__end-time" datetime="${dueDate.end}">${humanizePointDueDate(dueDate.start)}</time>
        </p>
        </div>
            <p class="event__price">
            &euro;&nbsp;
            <span class="event__price-value">${price}</span>
            </p>
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

export default class NewPoint {
  getTemplate() {
    return createRandomPoint(getRandomPoint);
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

