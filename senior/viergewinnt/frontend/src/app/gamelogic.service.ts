import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamelogicService {

  // Spielfeld
  // 0 = leeres Feld
  // 1 = Spieler 1
  // 2 = Spieler 2
  // Dies ist nur ein Beispiel und kann gerne anders gelöst werden bspw. mit Objekten
  private board: number[][] = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ];
  private won: boolean = false;
  private winningCombination: {row: number, col: number}[] = [];

  constructor() { }

  public getBoard(): number[][] {
    // Rückgabe des aktuellen Spielfelds
    // Auch dies kann gerne anders gelöst werden, bspw. über Rxjs und Observables
    return this.board;
  }

  public resetBoard(): number[][] {
    this.board = Array.from({ length: 6 }, () => Array(7).fill(0));
    this.winningCombination = [];
    this.won = false;
    return this.board;
  }

  public dropToken(column: number, player: number): {board: number[][], won: boolean, winningCombination: {row: number, col: number}[]} {
    this.placeToken(column, player);
    return {
      board: this.board,
      won: this.won,
      winningCombination: this.winningCombination
    };
  }

  public checkWin(column: number, row: number, player: number): boolean {
    return this.checkVertical(column, row, player) ||
      this.checkHorizontal(column, row, player) ||
      this.checkAscendingDiagonal(column, row, player) ||
      this.checkDescendingDiagonal(column, row, player);
  }

  public checkVertical(column: number, row: number, player: number): boolean {
    let count = 0;
    this.winningCombination = [];

    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i][column] === player) {
        count++;
        this.winningCombination.push({row: i, col: column});
        if (count === 4) return true;
      } else {
        count = 0;
        this.winningCombination = [];
      }
    }

    return false;
  }

  public checkHorizontal(column: number, row: number, player: number): boolean {
    let count = 0;
    this.winningCombination = [];

    for (let i = 0; i < this.board[row].length; i++) {
      if (this.board[row][i] === player) {
        count++;
        this.winningCombination.push({row, col: i});
        if (count === 4) return true;
      } else {
        count = 0;
        this.winningCombination = [];
      }
    }

    return false;
  }

  public checkAscendingDiagonal(column: number, row: number, player: number): boolean {
    // Überprüfung der diagonalen Reihen von links unten nach rechts oben
    let count = 0;
    this.winningCombination = [];
    let startRow = row;
    let startCol = column;

    // Startpunkt zur unteren linken Ecke bewegen
    while (startRow < this.board.length - 1 && startCol > 0) {
      startRow++;
      startCol--;
    }

    // Von der unteren linken Ecke nach rechts oben überprüfen
    while (startRow >= 0 && startCol < this.board[0].length) {
      if (this.board[startRow][startCol] === player) {
        count++;
        this.winningCombination.push({row: startRow, col: startCol});
        if (count === 4) return true;
      } else {
        count = 0;
        this.winningCombination = [];
      }
      startRow--;
      startCol++;
    }

    return false;
  }

  public checkDescendingDiagonal(column: number, row: number, player: number): boolean {
    // Überprüfung der diagonalen Reihen von rechts unten nach links oben
    let count = 0;
    this.winningCombination = [];
    let startRow = row;
    let startCol = column;

    // Startpunkt zur unteren rechten Ecke bewegen
    while (startRow < this.board.length - 1 && startCol < this.board[0].length - 1) {
      startRow++;
      startCol++;
    }

    // Von der unteren rechten Ecke nach links oben überprüfen
    while (startRow >= 0 && startCol >= 0) {
      if (this.board[startRow][startCol] === player) {
        count++;
        this.winningCombination.push({row: startRow, col: startCol});
        if (count === 4) return true;
      } else {
        count = 0;
        this.winningCombination = [];
      }
      startRow--;
      startCol--;
    }
    return false;
  }

  public isColumnFull(column: number): boolean {
    return this.board[0][column] !== 0;
  }

  public placeToken(column: number, player: number): void {
    // Iterieren über die Spalte von unten nach oben, um die Position des Spielsteins zu finden
    for (let row = this.board.length - 1; row >= 0; row--) {
      if (this.board[row][column] === 0) {
        this.board[row][column] = player;
        this.won = this.checkWin(column, row, player);
        break;
      }
    }
  }

}
