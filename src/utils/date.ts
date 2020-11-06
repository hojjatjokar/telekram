function isToday(date: { setHours: Function }) {
  const todaysDate = new Date();

  if (date.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0)) {
    return true;
  }

  return false;
}

function fromNow(date: string) {
  const inputDate = new Date(date);

  if (isToday(inputDate)) {
    return `${inputDate.getHours()}:${inputDate.getMinutes()}`;
  }

  return `${inputDate.getFullYear()}/${
    inputDate.getMonth() + 1
  }/${inputDate.getDate()}`;
}

export { fromNow };
