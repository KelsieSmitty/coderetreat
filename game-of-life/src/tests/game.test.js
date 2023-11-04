const {
  calculateCellSurvival,
  calculateNeighbors,
} = require("../frontend/game"); // Adjust the path as needed

// describe("GoL Tests", () => {
//   it("should fail", () => {
//     const thingy = calc();
//     expect(thingy).toBe(true);
//   });
// });

// // Test for calculating the neighbours

// describe("calculateNeighbors", () => {
//   it("should return neighbors for a cell in the middle of the grid", () => {
//     const grid = [
//       [0, 1, 0],
//       [1, 1, 1],
//       [0, 1, 0],
//     ];
//     const neighbors = calculateNeighbors(grid, 1, 1);

//     // Expecting [0, 1, 0, 1, 0, 1, 1, 0] as the neighbors
//     expect(neighbors).toEqual([0, 1, 0, 1, 0, 1, 1, 0]);
//   });

//   it("should return neighbors for a cell on the corner of the grid", () => {
//     const grid = [
//       [1, 0, 0],
//       [0, 0, 1],
//       [1, 1, 0],
//     ];
//     const neighbors = calculateNeighbors(grid, 0, 0);

//     // Expecting [0, 0, 0] as the neighbors
//     expect(neighbors).toEqual([0, 0, 0]);
//   });

//   it("should return neighbors for a cell on the edge of the grid", () => {
//     const grid = [
//       [0, 1, 0],
//       [1, 0, 1],
//       [0, 1, 1],
//     ];
//     const neighbors = calculateNeighbors(grid, 2, 3);

//     // Expecting [1, 0, 0, 0, 1, 1, 1, 0] as the neighbors
//     expect(neighbors).toEqual([1, 0, 0, 0, 1, 1, 1, 0]);
//   });
// });

// Test for UnderPopulation
describe("Cell Survival", () => {
  it("if the number of live neighbours is under 2, the cell will die", () => {
    const underPopulation = calculateCellSurvival(1, 1);
    expect(underPopulation).toBe(0);
  });
});

describe("Cell Survival", () => {
  it("if the number of live neighbours is under 2, the cell will die", () => {
    const underPopulation = calculateCellSurvival(1, 1);
    expect(underPopulation).toBe(0);
  });
});
