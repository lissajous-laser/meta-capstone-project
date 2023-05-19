import { availableTimesReducer, getTimesFromLocalStorage, initialiseTimes, setTimesToLocalStorage, updateTimes } from "../functions/functions";

class MockLocalStorage {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value
  }
}

describe("initialiseTimes", () => {
  it("should return an array with times", () => {
    const availableTimes = initialiseTimes();

    const isAllValidKeys = availableTimes.every((time) =>
      /\d{1,2}:\d{2}/.test(time)
    );

    expect(isAllValidKeys).toBe(true);
  });
});

describe("updateTimes", () => {
  it("should cause the reducer to return a different state for a different day", () => {
    let todayAvailableTimes = initialiseTimes();
    let tomorrowAvailableTimes = new Date();
    tomorrowAvailableTimes.setDate(tomorrowAvailableTimes.getDate() + 1);

    const newState = availableTimesReducer(
      todayAvailableTimes,
      updateTimes(tomorrowAvailableTimes)
    );

    expect(newState).not.toEqual(todayAvailableTimes);
  });

  it("should cause the reducer to return the same state for the same day", () => {
    let availableTimes = initialiseTimes();
    const newState = availableTimesReducer(availableTimes, updateTimes(new Date()));

    expect(newState).toEqual(availableTimes);
  });
});

describe("getTimesFromLocalStorag, setTimesToLocalStorage", () => {
  let actualLocalStorage;

  beforeEach(() => {
    actualLocalStorage = global.localStorage;
    global.localStorage = new MockLocalStorage();
  });

  afterEach(() => {
    global.localStorage = actualLocalStorage;
  });


  it("should return undefined when the date is not a key in localStorage", () => {
    const today = new Date();
    expect(getTimesFromLocalStorage(today)).toBeUndefined();
  });

  it("should return the avalable times when the date in localStorage is stale", () => {
    const availableTimes = ["17.00", "17.30", "18.00", "19.00", "20.30"];
    const today = new Date();
    setTimesToLocalStorage(today, availableTimes);

    expect(getTimesFromLocalStorage(today).toString()).toBe(availableTimes.toString());
  });
});