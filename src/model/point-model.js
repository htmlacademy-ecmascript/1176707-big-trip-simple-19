import { mockPoints } from '../mock/point.js';
import { COUNTRIES, OFFERS } from '../const.js';

const POINT_COUNT = 9;

export default class PointModel {
  points = mockPoints;

  getPoints() {
    return this.points.map((point) => {
      const destination = COUNTRIES.find(
        ({ id: countryId }) => countryId === point.destination
      );
      const offers = point.offers.map((offerId) => OFFERS.find(({ id }) => offerId === id));

      return {
        ...point,
        destination,
        offers,
      };
    });
  }
}

export { POINT_COUNT };
