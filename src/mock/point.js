import { getRandomArrayElement, getRandomNumber , generateRandomDate} from '../util.js';
import { TYPE , COUNTRY , OFFERS, POINT_COUNTS } from '../const.js';

const mockPoints = [
];

createMockPoints(POINT_COUNTS);

function createMockPoints(count) {
  createObjects(count);
}

function createObjects(count) {
  for (let i = 0; i <= count; i++) {
    const point = {};
    const offers = {};

    point[i] = createPoint(i);
    createOffers(offers, point , i);
    point[i].offers = offers;

    mockPoints.push(point[i]);
  }
}

function createPoint(i) {
  return {
    type: `${getRandomArrayElement(TYPE)}`,
    'date_from': `${(generateRandomDate(new Date(2022, 0, 12), new Date(), 0, 12))}`,
    'date_to': `${(generateRandomDate(new Date(2020, 12, 24), new Date(), 12, 24))}`,
    'base_price': getRandomNumber(2000),
    destination: getRandomArrayElement(COUNTRY),
    id: i
  };
}

function createOffers(offers,) {
  for (let b = 0; b < 3; b++) {
    offers['offer'[b]] = getRandomArrayElement(OFFERS);
  }
}

export { mockPoints };
