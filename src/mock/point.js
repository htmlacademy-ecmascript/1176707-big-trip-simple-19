import { getRandomArrayElement, getRandomNumber , generateRandomDate } from '../util.js';
import { TYPE , COUNTRY , OFFERS, POINT_COUNTS } from '../const.js';

const mockPoints = [
];

createMockPoints(POINT_COUNTS);
console.log(mockPoints);

function createMockPoints(count) {
  createObjects(count);
}

function createObjects(count) {
  for (let i = 0; i < count; i++) {
    const point = {};
    const offers = {};
    const offer = OFFERS.find((item) => item.id === getRandomNumber(7));
    const destination = COUNTRY.find((item) => item.id === getRandomNumber(6));

    point[i] = createPoint(i , destination);
    createOffers(offers, offer);
    point[i].offers = offers;

    mockPoints.push(point[i]);
  }
}

function createPoint(i, destination) {
  return {
    type: `${getRandomArrayElement(TYPE)}`,
    'date_from': `${(generateRandomDate(new Date(2022, 0, 12), new Date(), 0, 12))}`,
    'date_to': `${(generateRandomDate(new Date(2020, 12, 24), new Date(), 12, 24))}`,
    'base_price': getRandomNumber(2000),
    destination: destination,
    id: i
  };
}

function createOffers(offers, offer) {
  for (let b = 0; b < 3; b++) {
    offers['offer'[b]] = offer;
  }
}

export { mockPoints };
