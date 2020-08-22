import { renderHook, act } from '@testing-library/react-hooks'
import useGameHook from './gameHook'
 
describe('useGameHook', ()=>{
  const { result } = renderHook(() => useGameHook({users:{firstPlayer: 'Yousuf', secondPlayer: 'Rifay'}, postHistory: jest.fn()}))

  test('should reset the game', () => {
     act(() => {
        result.current.resetGame();
      }, ()=> {
        expect(result.current.xIsNext).toBe(true);
      });

  })

  test('X to O', () => {
    act(() => {
       result.current.onClickHandler(0);
     }, ()=> {
       expect(result.current.xIsNext).toBe(false);
     });

 })

  test('should call calculate winner', () => {
    act(() => {
       result.current.onClickHandler(0);
       result.current.onClickHandler(1);
       result.current.onClickHandler(4);
       result.current.onClickHandler(5);
       result.current.onClickHandler(8);
     }, () => {
      expect(result.current.message).toBe("The Winner is: Yousuf");
     });
  });

  test('should return game draw', () => {
    act(() => {
       result.current.onClickHandler(0);
       result.current.onClickHandler(8);
       result.current.onClickHandler(4);
       result.current.onClickHandler(3);
       result.current.onClickHandler(2);
       result.current.onClickHandler(1);
       result.current.onClickHandler(5);
       result.current.onClickHandler(6);
       result.current.onClickHandler(7);
     }, ()=> {
       expect(result.current.message).toBe("Game Draw");
     });

  })
});
