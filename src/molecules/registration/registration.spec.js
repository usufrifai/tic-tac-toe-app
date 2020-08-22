import React from 'react';
import Registration from './index';
import {act, create} from 'react-test-renderer';
import {  Button, Form  } from 'react-bootstrap'


describe('Registration', () => {
    it('should render  Registration Component', () => {
        const component = create(
            <Registration 
            registationError={jest.fn()}
            onRegistationSubmit={jest.fn()}
            setFirstPlayer={jest.fn()}
            setSecondPlayer={jest.fn()}
            firstPlayer="Yousuf"
            secondPlayer="Rismi"
            />
          );
          const instance = component.root;
          const button = instance.findByType(Button);
          const field = instance.findAllByType(Form.Control); 
          act(() =>{
              field[0].props.onChange({ target: { value: "a" } });
              field[1].props.onChange({ target: { value: "c" } });
          });
          act(() => button.props.onClick());
          let tree = component.toJSON();
          expect(tree).toMatchSnapshot();
    });
  });