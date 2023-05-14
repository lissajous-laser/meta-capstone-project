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

// #region REDUCERS AND ACTION CREATORS
export function availableTimesReducer(state, action) {
  switch (action.type) {
      case "update": {
      return fetchAPI(action.payload);
    } default: {
      return state;
    }
  }
}

export function updateTimes(day) {
  return {type: "update", payload: day}
}
// #endregion
