import {humanizePointDate, humanizePointTime} from '../utils/point-utils.js';
import AbstractView from '../framework/view/abstract-view.js';


function addPoint(point) {
  const {type , destination , offers} = point;
  const dateStart = point['date_from'];
  const dateEnd = point['date_to'];
  const offersTemplate = offers.map((offer) => `
    <li class="event__offer">
    <span class="event__offer-title">${offer.title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${offer.price}</span>
    </li>
    `).join('');

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
            ${offersTemplate}
        </ul>
        <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
        </button>
    </div>
    </li>`
  );
}

export default class PointView extends AbstractView {
  #point = null;
  #handleEditClick = null;

  constructor({point, onEditClick}) {
    super();
    this.#point = point;
    this.#handleEditClick = onEditClick;

    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#editClickHandler);
  }

  get template() {
    return addPoint(this.#point);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };
}
