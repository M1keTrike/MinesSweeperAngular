import { Component } from '@angular/core';
import { SquareDataI } from '../interfaces/square-data-i';

@Component({
  selector: 'app-square-dasboard',
  templateUrl: './square-dasboard.component.html',
  styleUrls: ['./square-dasboard.component.css'],
})
export class SquareDasboardComponent {
  dim: number = 5;
  matrix: SquareDataI[][] = [];

  constructor() {
    this.generateMatrix(this.dim);
  }

  generateMatrix(dim: number): void {
    this.matrix = Array.from({ length: dim }, () =>
      Array.from({ length: dim }, () => ({ haveMine: false, minesAround: 0 }))
    );

    const totalMines = Math.floor(Math.sqrt(dim * dim));
    let placedMines = 0;

    while (placedMines < totalMines) {
      const row = Math.floor(Math.random() * dim);
      const col = Math.floor(Math.random() * dim);

      if (!this.matrix[row][col].haveMine) {
        this.matrix[row][col].haveMine = true;
        placedMines++;
      }
    }

    for (let row = 0; row < dim; row++) {
      for (let col = 0; col < dim; col++) {
        if (!this.matrix[row][col].haveMine) {
          this.matrix[row][col].minesAround = this.countSurroundingMines(row, col, dim);
        }
      }
    }
  }

  countSurroundingMines(row: number, col: number, dim: number): number {
    let mineCount = 0;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const newRow = row + i;
        const newCol = col + j;
        if (
          newRow >= 0 && newRow < dim &&
          newCol >= 0 && newCol < dim &&
          !(i === 0 && j === 0) &&
          this.matrix[newRow][newCol].haveMine
        ) {
          mineCount++;
        }
      }
    }
    return mineCount;
  }

  handleGameOver(): void {
    alert("Game Over");
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
}
