import { TestBed } from '@angular/core/testing';
import { GamelogicService } from './gamelogic.service';

describe('GamelogicService', () => {

  const winVertical: number[][] = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0]
  ];

  const winHorizontal: number[][] = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0]
  ];

  const winAscendingDiagonal: number[][] = [
    [0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ];

  const winDescendingDiagonal: number[][] = [
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ];

  const newBoard: number[][] = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ];

  let service: GamelogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamelogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('resetBoard', () => {
    it('should reset the board to its initial state', () => {
      service['board'] = winVertical;

      const result = service.resetBoard();

      expect(result).toEqual([
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ]);
      expect(service['board']).toEqual([
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ]);
    });
  });

  describe('dropToken', () => {
    it('should drop a token in a valid column and return updated board and won status', () => {
      service['board'] = newBoard;

      const result = service.dropToken(3, 1);

      expect(service['board'][5][3]).toBe(1);
      expect(result.board).toEqual(service['board']);
      expect(result.won).toBeFalse();
    });

    it('should not drop a token in an invalid column and return the unchanged board and won status', () => {
      service['board'] = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ];

      const result = service.dropToken(7, 1); // Invalid column

      expect(result.board).toEqual([
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ]);
      expect(result.won).toBeFalse();
    });

  });

  describe('checkWin', () => {
    it('should check vertical win', () => {
      service['board'] = winVertical;
      expect(service.checkWin(0, 5, 1)).toBeTrue();
    });
    it('should check horizontal win', () => {
      service['board'] = winHorizontal;
      expect(service.checkWin(0, 5, 1)).toBeTrue();
    });
    it('should check ascending diagonal win', () => {
      service['board'] = winAscendingDiagonal;
      expect(service.checkWin(6, 0, 1)).toBeTrue();
    });
    it('should check descending diagonal win', () => {
      service['board'] = winDescendingDiagonal;
      expect(service.checkWin(3, 0, 1)).toBeTrue();
    });
  });

  describe('checkVertical', () => {
    it('should check vertical win', () => {
      service['board'] = winVertical;
      expect(service.checkVertical(0, 5, 1)).toBeTrue();
    });
  });

  describe('checkHorizontal', () => {
    it('should check horizontal win', () => {
      service['board'] = winHorizontal;
      expect(service.checkHorizontal(0, 5, 1)).toBeTrue();
    });
  });

  describe('checkAscendingDiagonal', () => {
    it('should check ascending diagonal win', () => {
      service['board'] = winAscendingDiagonal;
      expect(service.checkAscendingDiagonal(3, 3, 1)).toBeTrue();
    });
  });

  describe('checkDescendingDiagonal', () => {
    it('should check descending diagonal win', () => {
      service['board'] = winDescendingDiagonal;
      expect(service.checkDescendingDiagonal(3, 0, 1)).toBeTrue();
    });
  });

  describe('isColumnFull', () => {
    it('should return true for a full column', () => {
      service['board'] = [
        [1, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0]
      ];
      expect(service.isColumnFull(0)).toBeTrue();
    });

    it('should return false for a non-full column', () => {
      service['board'] = newBoard;
      expect(service.isColumnFull(0)).toBeFalse();
    });
  });

  describe('placeToken', () => {
    it('should place a token in an empty column', () => {
      service['board'] = newBoard;
      service.placeToken(3, 1);
      expect(service['board'][5][3]).toBe(1);
    });

    it('should place a token on top of another token', () => {
      service['board'] = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0]
      ];
      service.placeToken(3, 1);
      expect(service['board'][4][3]).toBe(1);
    });
  });

});
