export const calcMonthlyPayment = (initialPayment, leasing, price) =>
  Math.round(
    (price - initialPayment) *
      ((0.035 * Math.pow(1 + 0.035, leasing)) /
        (Math.pow(1 + 0.035, leasing) - 1))
  );

export const calcSumLeasingPayment = (
  initialPayment,
  monthlyPayment,
  leasing
) => Math.round(initialPayment + monthlyPayment * leasing);

export const roundIfFloat = (numb) => {
  if (String(numb).includes(".")) {
    numb = Math.round(numb);
  }
  return numb;
};
