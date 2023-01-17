import { getRandomArrayElement } from '../util.js';
import { TYPE , COUNTRY , PRICE , OFFERS } from '../const.js';

const mockPoints = [
  {
    typePoint: `${getRandomArrayElement(TYPE)} ${getRandomArrayElement(COUNTRY)}`,
    dueDate: {
      start: new Date('2019-03-18T10:30'),
      end: new Date('2019-03-18T11:00'),
      number: new Date('2019-03-18')
    },
    price: `${getRandomArrayElement(PRICE)}`,
    offers: {
      offer1: {
        description: `${getRandomArrayElement(OFFERS)}`,
        price:`${getRandomArrayElement(PRICE)}`,
      },
      offer2: {
        description: `${getRandomArrayElement(OFFERS)}`,
        price:`${getRandomArrayElement(PRICE)}`,
      }
    },
  },
  {
    typePoint: `${getRandomArrayElement(TYPE)} ${getRandomArrayElement(COUNTRY)}`,
    dueDate: {
      start: new Date('2019-03-18T8:30'),
      end: new Date('2019-03-18T17:00'),
      number: new Date('2019-03-18')
    },
    price: `${getRandomArrayElement(PRICE)}`,
    offers: {
      offer1: {
        description: `${getRandomArrayElement(OFFERS)}`,
        price:`${getRandomArrayElement(PRICE)}`,
      },
      offer2: {
        description: `${getRandomArrayElement(OFFERS)}`,
        price:`${getRandomArrayElement(PRICE)}`,
      }
    },
  },
  {
    typePoint: `${getRandomArrayElement(TYPE)} ${getRandomArrayElement(COUNTRY)}`,
    dueDate: {
      start: new Date('2019-03-18T12:30'),
      end: new Date('2019-03-18T14:00'),
      number: new Date('2019-03-18')
    },
    price: `${getRandomArrayElement(PRICE)}`,
    offers: {
      offer1: {
        description: `${getRandomArrayElement(OFFERS)}`,
        price:`${getRandomArrayElement(PRICE)}`,
      },
      offer2: {
        description: `${getRandomArrayElement(OFFERS)}`,
        price:`${getRandomArrayElement(PRICE)}`,
      }
    },
  },
  {
    typePoint: `${getRandomArrayElement(TYPE)} ${getRandomArrayElement(COUNTRY)}`,
    dueDate: {
      start: new Date('2019-03-20T14:00'),
      end: new Date('2019-03-20T17:30'),
      number: new Date('2019-03-20')
    },
    price: `${getRandomArrayElement(PRICE)}`,
    offers: {
      offer1: {
        description: `${getRandomArrayElement(OFFERS)}`,
        price:`${getRandomArrayElement(PRICE)}`,
      },
      offer2: {
        description: `${getRandomArrayElement(OFFERS)}`,
        price:`${getRandomArrayElement(PRICE)}`,
      }
    },
  },
  {
    typePoint: `${getRandomArrayElement(TYPE)} ${getRandomArrayElement(COUNTRY)}`,
    dueDate: {
      start: new Date('2019-03-19T17:30'),
      end: new Date('2019-03-19T19:00'),
      number: new Date('2019-03-19')
    },
    price: `${getRandomArrayElement(PRICE)}`,
    offers: {
      offer1: {
        description: `${getRandomArrayElement(OFFERS)}`,
        price:`${getRandomArrayElement(PRICE)}`,
      },
      offer2: {
        description: `${getRandomArrayElement(OFFERS)}`,
        price:`${getRandomArrayElement(PRICE)}`,
      }
    },
  },
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

export {getRandomPoint};
