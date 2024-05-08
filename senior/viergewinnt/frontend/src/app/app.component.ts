import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GamelogicService } from './gamelogic.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
  currentPlayer = 1;
  winner = 0;
  board: number[][] = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];

  constructor(private gameLogicService: GamelogicService) {
    this.board = this.gameLogicService.getBoard();
    console.log(this.board)
  }

  onColumnClick(column: number) {
    if (this.winner === 0) {
      const result = this.gameLogicService.dropToken(
        column,
        this.currentPlayer
      );
      this.board = result.board;
      this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
      if (result.won) {
        this.winner = this.currentPlayer;
      }
    }
  }

  onNewGameClick() {
    this.board = this.gameLogicService.resetBoard();
    this.currentPlayer = 1;
    this.winner = 0;
  }
}
