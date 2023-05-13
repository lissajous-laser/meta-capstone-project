import { timeSlots } from "../constants/constants";

export function initialiseDays() {
  const currentDate = new Date();
  const days = [];

  for (let i = 0; i < 7; i++) {
    const [dayOfWeek, month, dayOfMonth] = currentDate.toString().split(" ");
    const date = {dayOfWeek, month, dayOfMonth};

    days.push(date);

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return days;
}

export function initialiseTimes() {
  const times = {};

  for (let timeSlot of timeSlots) {
    if (Math.random() > 1 / 3) {
      times[timeSlot] = true;
    } else times[timeSlot] = false;
  }

  return times;
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

// REDUCERS AND ACTION CREATORS
export function availableTimesReducer(state, action) {
  switch (action.type) {
      case "update": {
      return state;
    } default: {
      return state;
    }
  }
}

export function updateTimes() {
  return {type: "update"}
}