function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 == 0) {
        return "leap year 400";
      } else {
        return "Not Leap year";
      }
    } else {
      return "Leap Year";
    }
  } else {
    return "NotLeap year";
  }
}
console.log(isLeapYear(2021));
