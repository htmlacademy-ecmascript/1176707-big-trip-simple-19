import dayjs from 'dayjs';

const DATE_FORMAT = 'MMM D';
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

function getRandomNumber(max) {
  return Math.floor(Math.random() * max + 1);
}

function getRandomDate() {
  return `2022-03-${getRandomNumber(30)}T${getRandomNumber(23)}:${getRandomNumber(58)}`;
}

export {getRandomArrayElement, humanizePointDate, humanizePointTime, getRandomNumber , getRandomDate};
