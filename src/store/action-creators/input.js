import { InputsActionTypes } from "../../constants/store/actionTypes";
import { price, leasingTerm, initialPayment } from "../../constants/calc";

export const setPrice = (procentValue) => (dispatch) => {
  const minPriceProcent =(price.min / price.max) * 100;
  procentValue =
    procentValue < minPriceProcent ? minPriceProcent : procentValue;
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
    (procentValue < initialPayment.min && initialPayment.min) || procentValue;
  let value = priceAuto * (procentValue / 100) * 0.6;
  value = Math.round(value);

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
  let value = leasingTerm.max * (procentValue / 100) || leasingTerm.min;
  value = Math.round(value);
  procentValue = parseInt(procentValue) < 1.6 ?  1.6 : procentValue;
  console.log(procentValue)
  const leasingState = {
    procentValue,
    value,
  };

  dispatch({
    type: InputsActionTypes.SET_LEASING_TERM,
    payload: leasingState,
  });
};
