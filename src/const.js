import { getRandomNumber } from './util';

const TYPE = [ 'Taxi' , 'Drive' , 'Check-in' , 'Flight' , 'Sightseeing' , 'Bus' , 'Restaurant' , 'Ship' , 'Train' , 'Transport'];
const COUNTRY = [
  {
    id: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'Amsterdam',
    pictures:
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(100)}`,
        description: 'Chamonix parliament building'
      }
  },
  {
    id: 2,
    description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Chamonix',
    pictures:
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(100)}`,
        description: 'Chamonix parliament building'
      }
  },
  {
    id: 3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'Geneva',
    pictures:
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(100)}`,
        description: 'Chamonix parliament building'
      }
  },
  {
    id: 4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'Brasilia',
    pictures:
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(100)}`,
        description: 'Chamonix parliament building'
      }
  },
  {
    id: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'Valencia',
    pictures:
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(100)}`,
        description: 'Chamonix parliament building'
      }
  },
  {
    id: 6,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'Gomel',
    pictures:
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(100)}`,
        description: 'Chamonix parliament building'
      }
  }
];
const OFFERS = [
  {
    id: 1,
    title: 'Book tickets',
    price: getRandomNumber(100)
  },

  {
    id: 2,
    title:'Lunch in city',
    price: getRandomNumber(100)
  },

  {
    id: 3,
    title:'Add luggage',
    price: getRandomNumber(100)
  },

  {
    id: 4,
    title: 'Switch to comfort',
    price: getRandomNumber(100)
  },

  {
    id: 5,
    title: 'Add breakfast',
    price: getRandomNumber(100)
  },

  {
    id: 6,
    title:'Order Uber',
    price: getRandomNumber(100)
  },

  {
    id: 7,
    title:'Rent a car',
    price: getRandomNumber(100)
  }
];
const POINT_COUNTS = 10;

export {TYPE , COUNTRY , OFFERS , POINT_COUNTS };
