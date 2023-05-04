import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import loginReducer from './reducers/loginReducer';
import prodReducer from './reducers/prodReducer';
import registerReducer from './reducers/registerReducer';
import insertCustomerBill from './reducers/customerBillReducer';

const logger = createLogger();

export default configureStore({
  reducer: {
    login: loginReducer,
    prod: prodReducer,
    regi: registerReducer,
    bill: insertCustomerBill
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production'
});
