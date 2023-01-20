import { getRandomArrayElement, getRandomNumber } from '../util.js';
import { TYPE , COUNTRY , OFFERS, POINT_COUNTS } from '../const.js';

const mockPoints = [
];

function createMockPoints(count) {
  for (let i = 0; i <= count; i++) {
    const point = {};
    const offers = {};

    point.typePoint = `${getRandomArrayElement(TYPE)} ${getRandomArrayElement(COUNTRY)}`;
    point.dueDate = {start : new Date('2019-03-18T10:30'),
      end: new Date('2019-03-18T11:00'),
      number: new Date('2019-03-18')};
    point.price = getRandomNumber(100);
    for (let b = 0; b < 3; b++) {
      offers['offer'[b]] = getRandomArrayElement(OFFERS);
    }
    point.offers = offers;

    mockPoints.push(point);
  }
}
createMockPoints(POINT_COUNTS);

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

export {getRandomPoint};
