import { renderHook, act } from '@testing-library/react-hooks'
import useRegistrationHook from './registrationHook'
 
describe('useRegistrationHook', ()=>{
  const { result } = renderHook(() => useRegistrationHook())
  const event = {
    preventDefault: jest.fn(),
  }
  test('should register users', () => {
     act(() => {
        result.current.setFirstPlayer('Yousuf')
        result.current.setSecondPlayer('Rifay')
        result.current.onRegistationSubmit(event);
      }, ()=> {
        expect(result.current.users.firstPlayer).toBe('Yousuf')
      });

  })

  test('should give error', () => {
    act(() => {
        result.current.setFirstPlayer('Yousuf')
        result.current.setSecondPlayer('Yousuf')
        result.current.onRegistationSubmit(event);
    });
     expect(result.current.registationError).toBe(true);
  });

  test('should clear users', () => {
    act(() => {
       result.current.clearUsersInfo();
    }, ()=>{
     expect(result.current.firstPlayer).toBe('');
    });
  
   });
});
