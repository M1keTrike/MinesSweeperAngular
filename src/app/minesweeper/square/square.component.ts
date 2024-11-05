import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SquareDataI } from '../interfaces/square-data-i';


@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent {
  @Input() squareData!: SquareDataI;
  @Output() gameOver = new EventEmitter<void>();
  isShowed: boolean = false;

  showSquare(): void {
    this.isShowed = true;
    if (this.squareData.haveMine) {
      setTimeout(() => {
        this.gameOver.emit();
      }, 1000);
    }
  }
}
