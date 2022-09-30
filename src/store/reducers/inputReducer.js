import { InputsActionTypes } from "../../constants/store/actionTypes";
import { initialInputState } from "../../constants/store/reducer";

export const inputReducer = (state = initialInputState, action) => {
  switch (action.type) {
    case InputsActionTypes.SET_PRICE:
      return { ...state, price: action.payload };
    case InputsActionTypes.SET_INITIAL_PAYMENT:
      return { ...state, payment: action.payload };
    case InputsActionTypes.SET_LEASING_TERM:
      return { ...state, leasing: action.payload };
    case InputsActionTypes.SET_TYPING_INPUT:
      return { ...state, typingInput: action.payload };
    default:
      return state;
  }
};
