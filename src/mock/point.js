import { getRandomArrayElement, getRandomNumber } from '../util.js';
import { TYPE , COUNTRY , OFFERS, POINT_COUNTS } from '../const.js';

const mockPoints = [
];

function createMockPoints(count) {
  for (let i = 0; i <= count; i++) {
    const point = {};
    const offers = {};

    point['type'] = `${getRandomArrayElement(TYPE)}`;
    point['date_from'] = new Date('2019-07-10T10:30');
    point['date_to'] = new Date('2019-07-10T22:55');
    point['base_price'] = getRandomNumber(100);
    point['destination'] = getRandomArrayElement(COUNTRY);
    point['id'] = `${i}`;
    for (let b = 0; b < 3; b++) {
      offers['offer'[b]] = getRandomArrayElement(OFFERS);
    }
    point['offers'] = offers;

    mockPoints.push(point);
  }
}
createMockPoints(POINT_COUNTS);

console.log(mockPoints);

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

export {getRandomPoint};
