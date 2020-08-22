import React from 'react';
import InformationlBock from './index';
import { Button } from 'react-bootstrap';
import { create, act } from 'react-test-renderer';

describe('InformationlBock', () => {
    it('InformationlBock should be rendered', () => {
        const component = create(
            <InformationlBock 
            winnerMessage="Game Draw"
            users={{firstPlayer: 'Yousuf', secondPlayer:'Rifay'}} 
            resetGame={jest.fn()}
            newGame={jest.fn()}
            />
          );
          
          const instance = component.root;
          const button = instance.findAllByType(Button);
          act(() => {
                button[0].props.onClick();
                button[1].props.onClick();
          });
        
          let tree = component.toJSON();
          expect(tree).toMatchSnapshot();
    });
  });