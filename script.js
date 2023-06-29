const refs = {
  date: document.querySelector("#date"),
  day: document.querySelector("#day"),
  month: document.querySelector("#month"),
  year: document.querySelector("#year"),
};

const todayDate = new Date();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

refs.date.innerHTML =
  (todayDate.getDate() < 10 ? "0" : "") + todayDate.getDate();
refs.day.innerHTML = daysOfWeek[todayDate.getDay()];
refs.month.innerHTML = monthsOfYear[todayDate.getMonth()];
refs.year.innerHTML = todayDate.getFullYear();
