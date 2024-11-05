import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareComponent } from './square/square.component';
import { SquareDasboardComponent } from './square-dasboard/square-dasboard.component';
import { MineSweeperPageComponent } from './mine-sweeper-page/mine-sweeper-page.component';

@NgModule({
  declarations: [
    SquareComponent,
    SquareDasboardComponent,
    MineSweeperPageComponent,
  ],
  imports: [CommonModule],
  exports: [MineSweeperPageComponent],
})
export class MinesweeperModule {}
