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
  private board: number[][]  = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ];

  constructor() { }

  public getBoard(): number[][] {
    // Rückgabe des aktuellen Spielfelds
    // Auch dies kann gerne anders gelöst werden, bspw. über Rxjs und Observables
    return this.board;
  }

  public resetBoard(): number[][] {
    //Implementierung des Reset-Buttons
    //Setzen des Spielfelds auf den Anfangszustand
    return this.board;
  }

  public dropToken(column: number, player: number): {board: number[][], won: boolean} {
    // Implementierung des Spielzugs wenn ein Token in eine Spalte geworfen wird
    // Rückgabe des aktuellen Spielfelds und ob ein Spieler gewonnen hat
    return {
      board: this.board,
      won: false
    };
  }

  public checkWin(column: number, row: number, player: number): boolean {
    // Implementierung der Überprüfung ob ein Spieler gewonnen hat
    // Überprüfung der vertikalen, horizontalen und diagonalen Reihen
    // Rückgabe true wenn ein Spieler gewonnen hat, sonst false
    // Dies ist nur ein Beispiel und kann gerne anders gelöst werden
    if (this.checkVertical(column, row, player)) {
      return true;
    }
    if (this.checkHorizontal(column, row, player)) {
      return true;
    }
    if (this.checkDiagonalRight(column, row, player)) {
      return true;
    }
    if (this.checkDiagonalLeft(column, row, player)) {
      return true;
    }
    return false;
  }

  public checkVertical(column: number, row: number, player: number): boolean {
    // Überprüfung der vertikalen Reihen
    return false
  }

  public checkHorizontal(column: number, row: number, player: number): boolean {
    // Überprüfung der horizontalen Reihen
    return false;
  }

  public checkDiagonalRight(column: number, row: number, player: number): boolean {
    // Überprüfung der diagonalen Reihen von links unten nach rechts oben
    return false;
  }

  public checkDiagonalLeft(column: number, row: number, player: number): boolean {
    // Überprüfung der diagonalen Reihen von links oben nach rechts unten
    return false;
  }

}
