import React from 'react';
import Square from './index';
import renderer from 'react-test-renderer';

describe('Square', () => {
    it('should render  Square Component', () => {
        const component = renderer.create(
            <Square 
               onClick={jest.fn()}
            />
          );
          let tree = component.toJSON();
          expect(tree).toMatchSnapshot();
    });

    it('should render  Square Component with O', () => {
        const component = renderer.create(
            <Square 
               value="O"
               onClick={jest.fn()}
            />
          );
          let tree = component.toJSON();
          expect(tree).toMatchSnapshot();
    });
  });