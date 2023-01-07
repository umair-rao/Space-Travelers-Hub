import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../Redux/configureStore';
import Dragons from '../Pages/Dragons';

describe('Dragon tests', () => {
  test('should render', () => {
    const dragon = render(
      <Provider store={store}>
        <BrowserRouter>
          <Dragons />
        </BrowserRouter>
        ,
      </Provider>,
    );
    expect(dragon).toMatchSnapshot();
  });
});
