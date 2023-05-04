import { BILL_ACTION } from '../constants';

const initialState = {
  bill: [],
  singlebill: null
};

const insertCustomerBill = (state = initialState, action) => {
  switch (action.type) {
    case BILL_ACTION:
      return { ...state, bill: [action.payload, ...state.bill] };
    default:
      return state;
  }
};

export default insertCustomerBill;
