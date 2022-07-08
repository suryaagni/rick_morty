import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('render Header', () => {
  render(<Header />);
  const checkElement = screen.getByText('Rick and Morty Characters');
  expect(checkElement).toBeInTheDocument();
});