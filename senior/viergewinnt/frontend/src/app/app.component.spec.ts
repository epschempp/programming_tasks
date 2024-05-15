import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GamelogicService } from './gamelogic.service';

describe('AppComponent', () => {
  let fixture: any;
  let app: AppComponent;
  let gameLogicService: jasmine.SpyObj<GamelogicService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('GamelogicService', ['getBoard', 'dropToken', 'isColumnFull', 'resetBoard']);

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [{ provide: GamelogicService, useValue: spy }],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance as AppComponent;
    gameLogicService = TestBed.inject(GamelogicService) as jasmine.SpyObj<GamelogicService>;

    gameLogicService.getBoard.and.returnValue([
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ]);
    gameLogicService.resetBoard.and.returnValue([
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have the 'frontend' title`, () => {
    expect(app.title).toEqual('frontend');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Vier Gewinnt!');
  });

  describe('onColumnClick', () => {
    it('should handle column click correctly', () => {
      const column = 0;
      const mockWinningCombination = [{ row: 0, col: 0 }];
      gameLogicService.dropToken.and.returnValue({ board: app.board, won: false, winningCombination: mockWinningCombination });
      gameLogicService.isColumnFull.and.returnValue(false);

      app.onColumnClick(column);

      expect(gameLogicService.dropToken).toHaveBeenCalledWith(column, 1);
      expect(app.currentPlayer).toBe(2);
      expect(app.winner).toBe(0);
      expect(app.winningCombination).toEqual(mockWinningCombination);
    });

    it('should switch player after a move if column is not full', () => {
      const column = 0;
      gameLogicService.dropToken.and.returnValue({ board: app.board, won: false, winningCombination: [] });
      gameLogicService.isColumnFull.and.returnValue(false);

      app.onColumnClick(column);

      expect(app.currentPlayer).toBe(2);
    });

    it('should not switch player if column is full', () => {
      const column = 0;
      gameLogicService.dropToken.and.returnValue({ board: app.board, won: false, winningCombination: [] });
      gameLogicService.isColumnFull.and.returnValue(true);

      app.onColumnClick(column);

      expect(app.currentPlayer).toBe(1);
    });

    it('should set winner if game is won', () => {
      const column = 0;
      gameLogicService.dropToken.and.returnValue({ board: app.board, won: true, winningCombination: [] });

      app.onColumnClick(column);

      expect(app.winner).toBe(app.currentPlayer);
    });

    it('should not change state if there is already a winner', () => {
      app.winner = 1;

      app.onColumnClick(0);

      expect(gameLogicService.dropToken).not.toHaveBeenCalled();
      expect(app.currentPlayer).toBe(1);
    });
  });

  describe('onNewGameClick', () => {
    it('should reset the game correctly', () => {

      app.onNewGameClick();

      expect(gameLogicService.resetBoard).toHaveBeenCalled();
      expect(app.board).toEqual(gameLogicService.resetBoard());
      expect(app.currentPlayer).toBe(1);
      expect(app.winner).toBe(0);
      expect(app.winningCombination).toEqual([]);
    });
  });

  describe('isWinningCell', () => {
    it('should return true for cells in the winning combination when there is a winner', () => {
      app.winner = 1;
      app.winningCombination = [{ row: 0, col: 0 }, { row: 1, col: 0 }, { row: 2, col: 0 }, { row: 3, col: 0 }];
      expect(app.isWinningCell(0, 0)).toBeTrue();
      expect(app.isWinningCell(1, 0)).toBeTrue();
      expect(app.isWinningCell(2, 0)).toBeTrue();
      expect(app.isWinningCell(3, 0)).toBeTrue();
    });

    it('should return false for any cell when there is no winner', () => {
      app.winner = 0;
      app.winningCombination = [{ row: 0, col: 0 }, { row: 1, col: 0 }, { row: 2, col: 0 }, { row: 3, col: 0 }];
      expect(app.isWinningCell(0, 0)).toBeFalse();
      expect(app.isWinningCell(1, 0)).toBeFalse();
      expect(app.isWinningCell(2, 0)).toBeFalse();
      expect(app.isWinningCell(3, 0)).toBeFalse();
    });
  });

});
