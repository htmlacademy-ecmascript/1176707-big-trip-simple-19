import { getRandomArrayElement, getRandomNumber , generateRandomDate} from '../util.js';
import { TYPE , COUNTRY , OFFERS, POINT_COUNTS } from '../const.js';

const mockPoints = [
];

function createMockPoints(count) {
  createObjects(count);
}

createMockPoints(POINT_COUNTS);

function createObjects(count) {
  for (let i = 0; i <= count; i++) {
    const point = {};
    const offers = {};

    createPoint(point, i);
    createOffers(offers, point);

    mockPoints.push(point);
  }
}

function createPoint(point, i) {
  point['type'] = `${getRandomArrayElement(TYPE)}`;
  point['date_from'] = new Date(generateRandomDate(new Date(2022, 0, 12), new Date(), 0, 12));
  point['date_to'] = new Date(generateRandomDate(new Date(2020, 12, 24), new Date(), 12, 24));
  point['base_price'] = getRandomNumber(2000);
  point['destination'] = getRandomArrayElement(COUNTRY);
  point['id'] = i;
}

function createOffers(offers, point) {
  for (let b = 0; b < 3; b++) {
    offers['offer'[b]] = getRandomArrayElement(OFFERS);
    point['offers'] = offers;
  }
}

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

export {getRandomPoint};
