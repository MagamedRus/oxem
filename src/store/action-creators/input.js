import { InputsActionTypes } from "../../constants/store/actionTypes";
import { price, initialPayment, leasingTerm } from "../../constants/calc";

export const setPrice = (procentValue) => (dispatch) => {
  const value = price.max * (procentValue / 100) || price.min;
  const priceState = {
    procentValue,
    value,
  };

  dispatch({
    type: InputsActionTypes.SET_PRICE,
    payload: priceState,
  });
};

export const setInitialPaymant = (procentValue, priceAuto) => (dispatch) => {
  procentValue =
    (procentValue > initialPayment.max && initialPayment.max) ||
    (procentValue < initialPayment.min && initialPayment.min) ||
    procentValue;

  let value = priceAuto * (procentValue / 100);

  const paymentState = {
    procentValue,
    value,
  };

  dispatch({
    type: InputsActionTypes.SET_PRICE,
    payload: paymentState,
  });
};

export const setLeasingTerm = (procentValue) => (dispatch) => {
  const value = leasingTerm.max * (procentValue / 100) || leasingTerm.min;
  const leasingState = {
    procentValue,
    value,
  };

  dispatch({
    type: InputsActionTypes.SET_PRICE,
    payload: leasingState,
  });
};
