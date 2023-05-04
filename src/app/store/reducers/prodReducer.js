import { GET_PRODUCT, INSERT_PRODUCT } from '../constants';

const initialState = {
  prod: [],
  singleProd: null
};

const prodReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return { ...state, prod: action.payload };

    case INSERT_PRODUCT:
      return { ...state, prod: [action.payload, ...state.prod] };
    default:
      return state;
  }
};
export default prodReducer;
