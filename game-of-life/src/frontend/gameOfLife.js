import React, { Component } from "react";
import Cell from "./Cell";

class GameOfLife extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numRows: 3,
      numCols: 3,
      grid: this.initializeGrid(3, 3), // Initialize the grid with random data or your logic
      isRunning: false,
      generation: 0,
    };
  }

  // Initialize the grid with random data (0 or 1)
  initializeGrid(numRows, numCols) {
    const grid = [];
    for (let row = 0; row < numRows; row++) {
      const rowArray = [];
      for (let col = 0; col < numCols; col++) {
        rowArray.push(Math.random() < 0.5 ? 0 : 1);
      }
      grid.push(rowArray);
    }
    return grid;
  }

  // Calculate the next generation of the grid
  calculateNextGeneration = (grid) => {
    const numRows = grid.length;
    const numCols = grid[0].length;
    const newGrid = [];

    for (let row = 0; row < numRows; row++) {
      const newRow = [];
      for (let col = 0; col < numCols; col++) {
        const cell = grid[row][col];
        const liveNeighbors = this.countLiveNeighbors(grid, row, col);

        if (cell === 1) {
          // Cell is alive
          if (liveNeighbors < 2 || liveNeighbors > 3) {
            // Rule 1: Cell dies
            newRow.push(0);
          } else {
            // Rule 2: Cell survives
            newRow.push(1);
          }
        } else {
          // Cell is dead
          if (liveNeighbors === 3) {
            // Rule 4: Cell becomes alive
            newRow.push(1);
          } else {
            newRow.push(0);
          }
        }
      }
      newGrid.push(newRow);
    }
    return newGrid;
  };

  // Count the number of live neighbors of a cell
  countLiveNeighbors = (grid, x, y) => {
    const neighbors = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    const numRows = grid.length;
    const numCols = grid[0].length;

    let liveNeighbors = 0;
    for (const [dx, dy] of neighbors) {
      const newX = x + dx;
      const newY = y + dy;

      if (newX >= 0 && newX < numRows && newY >= 0 && newY < numCols) {
        liveNeighbors += grid[newX][newY];
      }
    }
    return liveNeighbors;
  };

  // Start the game
  startGame = () => {
    this.setState({ isRunning: true });
    this.runGame();
  };

  // Stop the game
  stopGame = () => {
    this.setState({ isRunning: false });
    if (this.gameInterval) {
      clearInterval(this.gameInterval);
    }
  };

  // Run the game
  runGame = () => {
    this.gameInterval = setInterval(() => {
      this.setState((prevState) => ({
        grid: this.calculateNextGeneration(prevState.grid),
        generation: prevState.generation + 1,
      }));
    }, 100); // Adjust the interval as needed
  };

  // Handle cell click to toggle its state
  handleCellClick = (row, col) => {
    const updatedGrid = [...this.state.grid];
    updatedGrid[row][col] = updatedGrid[row][col] ? 0 : 1;
    this.setState({ grid: updatedGrid });
  };

  // Reset the game
  resetGame = () => {
    this.stopGame();
    this.setState({
      grid: this.initializeGrid(this.state.numRows, this.state.numCols),
      generation: 0,
    });
  };

  render() {
    return (
      <div className="game-board">
        <div className="controls">
          <button onClick={this.startGame} disabled={this.state.isRunning}>
            Start
          </button>
          <button onClick={this.stopGame} disabled={!this.state.isRunning}>
            Stop
          </button>
          <button onClick={this.resetGame}>Reset</button>
        </div>
        <div className="generation">Generation: {this.state.generation}</div>
        {this.state.grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <Cell
                key={colIndex}
                status={cell}
                onClick={() => this.handleCellClick(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

module.exports = GameOfLife;
