import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ListCharacters from '../ListCharacters';
import { useSelector, useDispatch,Provider } from 'react-redux';
import { configureAppStore } from '../../../redux/store';
window.scrollTo = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

afterEach(cleanup);
const store = configureAppStore()
describe('<ListCharacters />', () => {
  it('should render <ListCharacters/>', () => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockImplementation(selector =>
        selector({
            rmCharactersSlice: {
            data: {},
   isFetching: false,
  isError: false,
  error: {},
          },
        })
      );
    render(
      <ListCharacters/>
    );
    expect(ListCharacters).toBeTruthy();
  });
});
