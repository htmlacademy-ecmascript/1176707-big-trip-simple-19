import { getRandomNumber } from './util';

const TYPE = [ 'Taxi' , 'Drive' , 'Check-in' , 'Flight' , 'Sightseeing' , 'Bus' , 'Restaurant' , 'Ship' , 'Train' , 'Transport'];
const COUNTRY = [ 'Amsterdam' , 'Chamonix' , 'Geneva' , 'Brasilia' , 'Valencia' , 'Gomel' ];
const OFFERS = [
  {
    name: 'Book tickets',
    price: getRandomNumber(100)
  },

  {
    name:'Lunch in city',
    price: getRandomNumber(100)
  },

  {
    name:'Add luggage',
    price: getRandomNumber(100)
  },

  {
    name: 'Switch to comfort',
    price: getRandomNumber(100)
  },

  {
    name: 'Add breakfast',
    price: getRandomNumber(100)
  },

  {
    name:'Order Uber',
    price: getRandomNumber(100)
  },

  {
    name:'Rent a car',
    price: getRandomNumber(100)
  }
];
const POINT_COUNTS = 10;

export {TYPE , COUNTRY , OFFERS , POINT_COUNTS };
