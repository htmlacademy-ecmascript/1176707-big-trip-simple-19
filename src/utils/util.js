
function getRandomArrayElement(items) {
  return items[getRandomNumber(items.length - 1)];
}

function getRandomNumber(min, max) {
  if (max === undefined) {
    return Math.floor(Math.random() * min);
  }
  return Math.max(min, Math.floor(Math.random() * max));
}

function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}

function generateRandomDate(start, end, startHour, endHour) {
  const date = new Date(+start + Math.random() * (end - start));
  const hour = startHour + Math.random() * (endHour - startHour) | 0;
  date.setHours(hour);
  return date;
}

export {getRandomNumber, generateRandomDate, getRandomArrayElement, updateItem};
