import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MinesweeperModule } from './minesweeper/minesweeper.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule,MinesweeperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
