import dayjs from 'dayjs';

const DATE_FORMAT = 'DD-MM-YY HH:mm';
const TIME_FORMAT = 'HH:mm';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function humanizePointDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

function humanizePointTime(dueDate) {
  return dueDate ? dayjs(dueDate).format(TIME_FORMAT) : '';
}

function getRandomDate() {
  const date = new Date();

  date.setFullYear(Math.random(2000, 2500));
}

export {getRandomArrayElement, humanizePointDate, humanizePointTime};
