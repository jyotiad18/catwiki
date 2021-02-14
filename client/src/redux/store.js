import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import monitor from './enhancers/monitor.js';
import loggerMiddleware from './middlewares/logger.js'
import breedReducers from './reducers/breedSlice';

export default function configureAppStore(preloadedState) {
  const store = configureStore({
      reducer: {   
		  breeds: breedReducers
      },
      middleware: [loggerMiddleware, ...getDefaultMiddleware()],
      preloadedState,
      enhancers: [monitor]
  }) 
	return store;
}