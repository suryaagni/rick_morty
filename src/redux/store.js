import promiseMiddleware from 'redux-promise';

import rootReducer from './reducers';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

export function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [promiseMiddleware, ...getDefaultMiddleware()],
  });

  return store;
}
