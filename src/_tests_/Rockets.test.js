import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../Redux/configureStore';
import Rockets from '../Pages/Rockets';

describe('Rocket tests', () => {
  test('should render', () => {
    const rockets = render(
      <Provider store={store}>
        <BrowserRouter>
          <Rockets />
        </BrowserRouter>
        ,
      </Provider>,
    );
    expect(rockets).toMatchSnapshot();
  });
});
