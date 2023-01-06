import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Components/Navbar';

describe('Navbar tests', () => {
  test('navbar render', () => {
    const navbar = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(navbar).toMatchSnapshot();
  });
});
