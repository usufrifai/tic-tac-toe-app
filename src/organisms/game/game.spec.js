import React from 'react';
import Game from './index';
import renderer from 'react-test-renderer';
import Registration from '../../molecules/registration';
import Board from '../../molecules/board'; 
import  useRegistrationHook from '../../hooks/registrationHook';

jest.mock('../../hooks/registrationHook');

describe('Game', () => {

    test('Game Component with Registration form should be rendered', () => {
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

    test('Game Component with Board should be rendered', () => {

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