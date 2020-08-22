import React from 'react';
import Board from './index';
import {create, act} from 'react-test-renderer';
import Square from "../../atoms/square";

describe('Board', () => {
    it('Board should be rendered', () => {
        const component = create(
            <Board
            squares={['X', 'O', 'O', 'X', 'X', 'O', 'X', 'O', 'O']}
            onClick={jest.fn()}
            player= 'Rifay'
            />
          );
          let tree = component.toJSON();
          expect(tree).toMatchSnapshot();
    });

    it('Board should be rendered with Game Over message', () => {
        const component = create(
            <Board 
            winnerMessage="Game Draw"
            squares={['X', 'O', 'O', 'X', 'X', 'O', 'X', 'O', 'O']}
            onClick={jest.fn()}
            player= 'Rifay'
            />
          );
          const instance = component.root;
          const square = instance.findAllByType(Square);
          act(() => {
             square[0].props.onClick();

          });
          let tree = component.toJSON();
          expect(tree).toMatchSnapshot();
    });
  });