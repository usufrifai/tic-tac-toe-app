import React from 'react';
import Game from './index';
import renderer from 'react-test-renderer';
import Registration from '../../molecules/registration';
import Board from '../../molecules/board'; 
import  useRegistrationHook from '../../hooks/registrationHook';

jest.mock('../../hooks/registrationHook');

describe('Game', () => {

    test('should render  Game Component with Registration form', () => {
        useRegistrationHook.mockReturnValue({users: {}});
        const component = renderer.create(
            
            <Game 
                winnerMessage="Game Draw"
                squares={['X', 'O', 'O', 'X', 'X', 'O', 'X', 'O', 'O']}
                onClick={jest.fn()}
                player= 'Rifay'
            />
        );
        
        const instance = component.root;
        const registraionComponent = instance.findByType(Registration);
        let tree = component.toJSON();

        expect(registraionComponent).toBeDefined();
        expect(tree).toMatchSnapshot();
    });

    test('should render  Game Component with Board form', () => {

        useRegistrationHook.mockReturnValue({
            users:{firstPlayer: 'Yousuf', secondPlayer:'Rifay'}       
        });
        const component = renderer.create(
            <Game 
                winnerMessage="Game Draw"
                squares={['X', 'O', 'O', 'X', 'X', 'O', 'X', 'O', 'O']}
                onClick={jest.fn()}
                player= 'Rifay'
            />
          );

          const instance = component.root;
          const board = instance.findByType(Board);
          let tree = component.toJSON();

          expect(board).toBeDefined();
          expect(tree).toMatchSnapshot();
    });
});