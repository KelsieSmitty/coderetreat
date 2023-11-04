const { initializeGrid } = require("../frontend/gameOfLife.js");
// import {initializeGrid} from "../frontend/gameOfLife.js"
describe("initializeGrid", () => {
  it("should return a grid with the specified number of rows and columns", () => {
    const numRows = 3;
    const numCols = 3;
    const grid = initializeGrid(numRows, numCols);

    // Ensure the grid has the correct number of rows
    expect(grid.length).toBe(numRows);

    // Ensure each row has the correct number of columns
    for (const row of grid) {
      expect(row.length).toBe(numCols);
    }

    // Ensure that the grid contains only 0s and 1s
    const isValidCellValue = (value) => value === 0 || value === 1;
    for (const row of grid) {
      for (const cell of row) {
        expect(isValidCellValue(cell)).toBe(true);
      }
    }
  });
});
