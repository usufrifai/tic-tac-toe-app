import React from 'react';
import Game from './index';
import renderer from 'react-test-renderer';
import Registration from '../../molecules/registration'

describe('Game', () => {
    it('should render  Game Component with Registration form', () => {
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

});