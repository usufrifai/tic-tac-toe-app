import React from 'react';
import Heading from './index';
import renderer from 'react-test-renderer';


describe('Header', () => {
    it('Heading should be rendered', () => {
        const component = renderer.create(
            <Heading title="tic tac toe"/>
          );
          let tree = component.toJSON();
          expect(tree).toMatchSnapshot();
    });
  });