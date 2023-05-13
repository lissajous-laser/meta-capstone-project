import { availableTimesReducer, initialiseTimes, updateTimes } from "../functions/functions";

describe("initialiseTimes", () => {
  it("returns an object with times as keys", () => {
    const availableTimes = initialiseTimes();
    const listOfKeys = Object.keys(availableTimes);

    const isAllValidKeys = listOfKeys.every((time) =>
      /\d{1,2}:\d{2}[AP]M/.test(time)
    );

    expect(isAllValidKeys).toBe(true);
  });

  it("returns on object to booleans as values", () => {
    const availableTimes = initialiseTimes();
    const listOfValues = Object.values(availableTimes);

    const isAllBoolean = listOfValues.every((availability) =>
      typeof availability === "boolean"
    );

    expect(isAllBoolean).toBe(true);
  });
});

describe("updateTimes", () => {
  it("causes the reducer to return the same state", () => {
    let availableTimes = initialiseTimes();
    const newState = availableTimesReducer(availableTimes, updateTimes());

    expect(newState).toEqual(availableTimes);
  })
});