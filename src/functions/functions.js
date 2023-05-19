// #region APIs
const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

export const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};

export const submitAPI = function(formData) {
  return true;
};
// #endregion

export function initialiseDays() {
  const currentDate = new Date();
  const days = [];

  for (let i = 0; i < 14; i++) {
    const date = new Date(currentDate.getTime());
    days.push(date);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return days;
}

export function initialiseTimes() {
  return fetchAPI(new Date());
}

export function isDatesEqual(day1, day2) {
  const [dayOfWeek_1, month_1, dayOfMonth_1] = day1.toString().split(" ");
  const [dayOfWeek_2, month_2, dayOfMonth_2] = day2.toString().split(" ");

  return dayOfWeek_1 === dayOfWeek_2
    && month_1 === month_2
    && dayOfMonth_1 === dayOfMonth_2;
}

export function getTimesFromLocalStorage(day) {
  const stringifiedTimesObj = localStorage.getItem(day.getDate());
  let timesObj;
  let isTimesStale = true;
  const maxTimeInterval = 20_000; // 20 seconds

  if (stringifiedTimesObj) {
    timesObj = JSON.parse(stringifiedTimesObj);
  }
  if (timesObj) {
    isTimesStale = Date.now() - parseInt(timesObj.fetchTimestamp) > maxTimeInterval;
  }
  if (isTimesStale) {
    console.log("Need to fetch times.");
    return undefined;
  } else {
    console.log("Can use times in localStorage");
    return timesObj.times;
  }
}

export function setTimesToLocalStorage(day, availableTimes) {
  const timeObj = {
    fetchTimestamp: Date.now(),
    times: availableTimes
  };
  const stringifiedTimesObj = JSON.stringify(timeObj);
  localStorage.setItem(day.getDate(), stringifiedTimesObj);
}

// #region useReducer reducers and action creators
export function availableTimesReducer(state, action) {
  switch (action.type) {
    case "update": {
      const times = getTimesFromLocalStorage(action.payload)
      return times ? times : fetchAPI(action.payload);
    } default: {
      return state;
    }
  }
}

export function updateTimes(day) {
  return {type: "update", payload: day}
}
// #endregion
