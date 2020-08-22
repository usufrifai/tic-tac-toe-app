import React from 'react';
import Heading from './index';
import renderer from 'react-test-renderer';


describe('Header', () => {
    it('should render  Heading Component', () => {
        const component = renderer.create(
            <Heading title="tic tac toe"/>
          );
          let tree = component.toJSON();
          expect(tree).toMatchSnapshot();
    });
  });