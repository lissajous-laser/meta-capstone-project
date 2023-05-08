import { timeSlots } from "../constants/constants";

export function generateBookingCalendar() {
  const currentDate = new Date();
  const bookingCalendar = [];

  for (let i = 0; i < 7; i++) {
    const [dayOfWeek, month, dayOfMonth] = currentDate.toString().split(" ");
    const date = {dayOfWeek, month, dayOfMonth};
    const times = {};

    for (let time of timeSlots) {
      if (Math.random() > 1 / (i + 2)) {
        times[time] = true;
      } else {
        times[time] = false;
      }
    }

    bookingCalendar.push({ date, times });

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return bookingCalendar;
}

export function isDatesEqual(date1, date2) {
  return date1.dayOfWeek === date2.dayOfWeek
    && date1.dayOfMonth === date2.dayOfMonth
    && date1.month === date2.month
}

export function getCurrentDay() {
  const currentDate = new Date();
  const [dayOfWeek, month, dayOfMonth] = currentDate.toString().split(" ");
  return {dayOfWeek, month, dayOfMonth};
}