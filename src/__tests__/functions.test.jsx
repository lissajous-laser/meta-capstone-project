import { availableTimesReducer, initialiseTimes, updateTimes } from "../functions/functions";

describe("initialiseTimes", () => {
  it("returns an array with times", () => {
    const availableTimes = initialiseTimes();

    const isAllValidKeys = availableTimes.every((time) =>
      /\d{1,2}:\d{2}/.test(time)
    );

    expect(isAllValidKeys).toBe(true);
  });
});

describe("updateTimes", () => {
  it("causes the reducer to return a different state for a different day", () => {
    let todayAvailableTimes = initialiseTimes();
    let tomorrowAvailableTimes = new Date();
    tomorrowAvailableTimes.setDate(tomorrowAvailableTimes.getDate() + 1);

    const newState = availableTimesReducer(
      todayAvailableTimes,
      updateTimes(tomorrowAvailableTimes)
    );

    expect(newState).not.toEqual(todayAvailableTimes);
  });

  it("causes the reducer to return the same state for the same day", () => {
    let availableTimes = initialiseTimes();
    const newState = availableTimesReducer(availableTimes, updateTimes(new Date()));

    expect(newState).toEqual(availableTimes);
  })
});