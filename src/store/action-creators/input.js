import { InputsActionTypes } from "../../constants/store/actionTypes";
import { price, leasingTerm, initialPayment } from "../../constants/calc";
import { roundIfFloat } from "../../common/calc";

export const setProcentPrice = (procentValue) => (dispatch) => {
  const minPriceProcent = (price.min / price.max) * 100;
  procentValue =
    procentValue < minPriceProcent ? minPriceProcent : procentValue;
  let value = price.max * (procentValue / 100);
  value = roundIfFloat(value);
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

export const setValuePrice = (value) => (dispatch) => {
  const minPriceProcent = (price.min / price.max) * 100;
  let procentValue = (value / price.max) * 100;

  if (procentValue < minPriceProcent) procentValue = minPriceProcent;
  if (procentValue > 100) procentValue = 100;
  value = (price.max * procentValue) / 100;

  value = roundIfFloat(value);
  const priceState = {
    procentValue,
    value,
  };

  dispatch({
    type: InputsActionTypes.SET_PRICE,
    payload: priceState,
  });
};

export const setProcentPaymant = (procentValue, priceAuto) => (dispatch) => {
  procentValue =
    (procentValue < initialPayment.min && initialPayment.min) ||
    (procentValue > initialPayment.max && initialPayment.max) ||
    procentValue;

  let value = (priceAuto * procentValue) / 100;
  value = roundIfFloat(value);

  const paymentState = {
    procentValue,
    value,
  };

  dispatch({
    type: InputsActionTypes.SET_INITIAL_PAYMENT,
    payload: paymentState,
  });
};

export const setValuePaymant = (value, priceAuto) => (dispatch) => {
  let procentValue = (value / priceAuto) * 100;

  procentValue =
    (procentValue < initialPayment.min && initialPayment.min) ||
    (procentValue > initialPayment.max && initialPayment.max) ||
    procentValue;

  value = (priceAuto * procentValue) / 100;

  value = roundIfFloat(value);

  const paymentState = {
    procentValue,
    value,
  };

  dispatch({
    type: InputsActionTypes.SET_INITIAL_PAYMENT,
    payload: paymentState,
  });
};

export const setProcentLeasing = (procentValue) => (dispatch) => {
  let value = leasingTerm.max * (procentValue / 100) || leasingTerm.min;
  value = roundIfFloat(value);
  procentValue = parseInt(procentValue) < 1.6 ? 1.6 : procentValue;
  const leasingState = {
    procentValue,
    value,
  };

  dispatch({
    type: InputsActionTypes.SET_LEASING_TERM,
    payload: leasingState,
  });
};

export const setValueLeasing = (value) => (dispatch) => {
  const minLeasingProcent = (leasingTerm.min / leasingTerm.max) * 100;
  let procentValue = (value / leasingTerm.max) * 100;

  if (procentValue < minLeasingProcent) procentValue = minLeasingProcent;
  if (procentValue > 100) procentValue = 100;
  value = (leasingTerm.max * procentValue) / 100;
  value = roundIfFloat(value);

  const leasingState = {
    procentValue,
    value,
  };

  dispatch({
    type: InputsActionTypes.SET_LEASING_TERM,
    payload: leasingState,
  });
};

export const setTypingInput = (typingInput) => (dispatch) => {
  dispatch({
    type: InputsActionTypes.SET_TYPING_INPUT,
    payload: typingInput,
  });
};
