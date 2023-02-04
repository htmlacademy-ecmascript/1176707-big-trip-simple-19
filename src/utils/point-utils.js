import dayjs from 'dayjs';

const DATE_FORMAT = 'MMM D';
const TIME_FORMAT = 'HH:mm';
const FULL_FORMAT = 'DD/MM/YY HH:mm';

function humanizePointDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

function humanizePointTime(dueDate) {
  return dueDate ? dayjs(dueDate).format(TIME_FORMAT) : '';
}

function humanizePointFull(dueDate) {
  return dueDate ? dayjs(dueDate).format(FULL_FORMAT) : '';
}

function getWeightForNullDate(dateA, dateB) {
  if (dateA === null && dateB === null) {
    return 0;
  }

  if (dateA === null) {
    return 1;
  }

  if (dateB === null) {
    return -1;
  }

  return null;
}

function sortDay(pointA, pointB) {
  const weight = getWeightForNullDate(pointA.dateStart, pointB.dateStart);

  return weight ?? dayjs(pointB.dateStart).diff(dayjs(pointA.dateStart));
}

export { humanizePointDate, humanizePointTime, humanizePointFull, sortDay };
