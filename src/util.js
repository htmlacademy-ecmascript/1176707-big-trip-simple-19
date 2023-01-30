import dayjs from 'dayjs';

const DATE_FORMAT = 'MMM D';
const TIME_FORMAT = 'HH:mm';
const FULL_FORMAT = 'DD/MM/YY HH:mm';

function getRandomArrayElement(items) {
  return items[getRandomNumber(items.length - 1)];
}

function humanizePointDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

function humanizePointTime(dueDate) {
  return dueDate ? dayjs(dueDate).format(TIME_FORMAT) : '';
}

function humanizePointFull(dueDate) {
  return dueDate ? dayjs(dueDate).format(FULL_FORMAT) : '';
}

function getRandomNumber(min, max) {
  if (max === undefined) {
    return Math.floor(Math.random() * min);
  }
  return Math.max(min, Math.floor(Math.random() * max));
}

function generateRandomDate(start, end, startHour, endHour) {
  const date = new Date(+start + Math.random() * (end - start));
  const hour = startHour + Math.random() * (endHour - startHour) | 0;
  date.setHours(hour);
  return date;
}

function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}

export {getRandomArrayElement, humanizePointDate, humanizePointTime, getRandomNumber, generateRandomDate, humanizePointFull, updateItem};
