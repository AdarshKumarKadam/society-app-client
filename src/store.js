// import { configureStore } from '@reduxjs/toolkit';
// import { apiSlice } from './slices/apiSlice';
// import authReducer from './slices/authSlice';

// const store = configureStore({
//     reducer: {
//         [apiSlice.reducerPath]: apiSlice.reducer,
//         auth: authReducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(apiSlice.middleware),
// });

// export default store;


import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux_slices/authSlice';
import { apiSlice } from './redux_slices/apiSlice'; // Assuming you have an API slice

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), 
});

export default store;
