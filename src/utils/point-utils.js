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

export { humanizePointDate, humanizePointTime, humanizePointFull };
