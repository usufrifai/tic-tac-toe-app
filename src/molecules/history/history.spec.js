import React from 'react';
import History from './index';
import renderer from 'react-test-renderer';

describe('History', () => {
    it('should render  History Component', () => {
        const history =  [
            {
                'playerOne': 'Yousuf',
                'playerTwo': 'Fahma',
                'date' : '5-19-2022',
                'winner': 'Yousuf'
            },
            {
                'playerOne': 'Rifay',
                'playerTwo': 'Ayash',
                'date' : '5-19-2022',
                'winner': 'Ayash'
            }
        ];
        const component = renderer.create(
            <History 
             history={history}
            />
          );
          let tree = component.toJSON();
          expect(tree).toMatchSnapshot();
    });
  });