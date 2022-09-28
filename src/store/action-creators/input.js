import { InputsActionTypes } from "../../constants/store/actionTypes";
import { price, initialPayment, leasingTerm } from "../../constants/calc";

export const setPrice = (procentValue) => (dispatch) => {
  procentValue = procentValue < 16.6 ? 16.6 : procentValue;
  console.log(procentValue);
  let value = price.max * (procentValue / 100);
  value = Math.round(value);
  value = value < price.min ? price.min : value;

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
    type: InputsActionTypes.SET_INITIAL_PAYMENT,
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
    type: InputsActionTypes.SET_LEASING_TERM,
    payload: leasingState,
  });
};
