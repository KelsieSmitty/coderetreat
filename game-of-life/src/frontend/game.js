// src/game.js

function initializeGrid(rows, cols) {
  const grid = [];

  for (let row = 0; row < rows; row++) {
    const rowArray = [];
    for (let col = 0; col < cols; col++) {
      // Initialize cells with a random state (0 or 1)
      const cellState = Math.random() < 0.5 ? 0 : 1;
      rowArray.push(cellState);
    }
    grid.push(rowArray);
  }

  return grid;
}

// Usage: Initialise a 3x3 grid
const numRows = 3;
const numCols = 3;
const initialGrid = initializeGrid(numRows, numCols);

function calculateNeighbors(grid, x, y) {
  const neighbors = [];
  const numRows = grid.length;
  const numCols = grid[0].length;

  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (dx === 0 && dy === 0) continue; // Skip the current cell
      const newX = x + dx;
      const newY = y + dy;

      // Check if the neighbor is within the grid boundaries
      if (newX >= 0 && newX < numRows && newY >= 0 && newY < numCols) {
        neighbors.push(grid[newX][newY]);
      }
    }
  }

  return neighbors;
}

function calculateCellSurvival(cell, liveNeighbours) {
  if (cell === 1 && liveNeighbours < 2) {
    return 0; // cell dies
  }
  if (
    (cell === 1 && liveNeighbours === 2) ||
    (cell === 1 && liveNeighbours === 3)
  ) {
    return 1; // cell survives
  }
  if (cell === 1 && liveNeighbours > 3) {
    return 0; // cell dies
  }
  if (cell !== 1 && liveNeighbours === 3) {
    return 1; // cell survives
  }

  // Return a default value (e.g., for unchanged cells)
  return cell;
}

module.exports = { calculateCellSurvival, calculateNeighbors };
