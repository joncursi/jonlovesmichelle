import moment from "moment";

export const timeDiff = (date1Raw: Date, date2Raw: Date) => {
  const date1 = moment(date1Raw);
  const date2 = moment(date2Raw);

  let years = date1.diff(date2, "year");
  date2.add(years, "years");

  let months = date1.diff(date2, "months");
  date2.add(months, "months");

  let days = date1.diff(date2, "days");
  date2.add(days, "days");

  let hours = date1.diff(date2, "hours");
  date2.add(hours, "hours");

  let minutes = date1.diff(date2, "minutes");
  date2.add(minutes, "minutes");

  let seconds = date1.diff(date2, "seconds");

  return { years, months, days, hours, minutes, seconds };
};
