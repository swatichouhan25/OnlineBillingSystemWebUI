import { REGISTER_ACTION } from '../constants';

const initialState = {
  regi: [],
  singleRegi: null
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_ACTION:
      return { ...state, regi: [action.payload, ...state.regi] };
    default:
      return state;
  }
};

export default registerReducer;
