import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DetailView from '../DetailView';
import { useSelector, useDispatch } from 'react-redux';
import { configureAppStore } from '../../../redux/store';
window.scrollTo = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

afterEach(cleanup);
const store = configureAppStore()
describe('<DetailView />', () => {
  it('should render <DetailView/>', () => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockImplementation(selector =>
        selector({
            rmCharactersSlice: {
            list: {},
   isFetching: false,
  isError: false,
  error: {},
          },
        })
      );
    render(
      <DetailView/>
    );
    expect(DetailView).toBeTruthy();
  });
});
