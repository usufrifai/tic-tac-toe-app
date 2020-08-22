import React from 'react';
import Square from './index';
import renderer from 'react-test-renderer';

describe('Square', () => {
    it('Square  should be rendered', () => {
        const component = renderer.create(
            <Square 
               onClick={jest.fn()}
            />
          );
          let tree = component.toJSON();
          expect(tree).toMatchSnapshot();
    });

    it('Square  should be rendered with O', () => {
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