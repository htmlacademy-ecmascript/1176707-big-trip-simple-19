import { getRandomArrayElement, getRandomNumber, generateRandomDate } from '../util.js';
import { TYPES, COUNTRIES, OFFERS, POINT_AMOUNT} from '../const.js';

const mockPoints = [
];

createMockPoints(POINT_AMOUNT);

function createMockPoints(count) {
  createObjects(count);
}

function createObjects(count) {
  for (let i = 0; i < count; i++) {
    const point = {};

    point[i] = createPoint(i);

    mockPoints.push(point[i]);
  }
}

function createPoint(i) {
  return {
    type: `${getRandomArrayElement(TYPES)}`,
    'date_from': `${(generateRandomDate(new Date(2022, 0, 12), new Date(), 0, 12))}`,
    'date_to': `${(generateRandomDate(new Date(2020, 12, 24), new Date(), 12, 24))}`,
    'base_price': getRandomNumber(2000),
    destination: generateDestinationId(),
    offers: generateOfferIds(),
    id: i
  };
}

function generateOfferIds() {
  const offers = new Set();
  const value = getRandomNumber(1 , 3);
  while (offers.size < value) {
    offers.add(OFFERS[getRandomNumber(OFFERS.length - 1)].id);
  }
  return Array.from(offers);
}

function generateDestinationId() {
  return COUNTRIES[getRandomNumber(COUNTRIES.length - 1)].id;
}

export { mockPoints };
