function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

module.exports = isWeekend;
