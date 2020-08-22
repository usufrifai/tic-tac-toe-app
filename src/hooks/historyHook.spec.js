import useHisotry  from './historyHook';
import useFetch from 'use-http';
import { renderHook, act } from '@testing-library/react-hooks'

jest.mock('use-http');

describe("useHistory", () => {
    test("should call postHistory", () => {

        useFetch.mockReturnValue({
            loading: false,
            get: () => { Promise.resolve({ data: [] })}, 
            post: () => { Promise.resolve({ data: [
                {
                    'playerOne': 'Rifay',
                    'playerTwo': 'Ayash',
                    'date' : '05-19-2022',
                    'winner': 'Ayash'
                }
            ] })}, 
            response : {status: 200}, 
            error: false,
            
        });

        const { result } = renderHook(() => useHisotry());
        act( async () =>   {
        await  result.current.postHistory( {
            'playerOne': 'Rifay',
            'playerTwo': 'Ayash',
            'date' : '05-19-2022',
            'winner': 'Ayash'
        });
        });
        expect(useFetch).toBeCalledWith('http://localhost:9000/api');
    });

    test("should hanndle postHistory failure", () => {
        
        useFetch.mockReturnValue({
        loading: false,
        get: () => { Promise.resolve({ data: [] })}, 
        post: () => { Promise.resolve({ data: [{
            'playerOne': 'Rifay',
            'playerTwo': 'Ayash',
            'date' : '05-19-2022',
            'winner': 'Ayash'
            }] 
        })}, 
        response : {status: 404}, 
        error: true,
        
      });

      const { result } = renderHook(() => useHisotry());

      act( async () =>   {
         await  result.current.postHistory([{
            'playerOne': 'Rifay',
            'playerTwo': 'Ayash',
            'date' : '05-19-2022',
            'winner': 'Ayash'
        }]);
      });
      expect(useFetch).toBeCalledWith('http://localhost:9000/api');
    });
  });