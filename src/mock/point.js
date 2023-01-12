import {getRandomArrayElement, humanizePointDueDate} from '../util.js';

const mockPoints = [
  {
    typePoint: 'Taxi Amsterdam',
    destination: 'Amsterdam',
    dateStart: humanizePointDueDate('2019-03-18T10:30'),
    dateEnd: humanizePointDueDate('2019-03-18T11:00'),
    price: '€ 20',
    offers: {
      offer1: {
        description: 'Order Uber',
        price:'+€ 20',
      }
    },
  },
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

export {getRandomPoint};
