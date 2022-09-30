import { onlyNumbersRegEx } from "../constants/regex";

export function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function getOnlyNumbers(str) {
  return str.filter((el) => onlyNumbersRegEx.test(el));
}

export function deleteSymbolByIndex(str, index) {
  return str.slice(0, index - 1) + str.slice(index + 1, 99999990);
}

/** deleting last number bypassing other symbols */
export function deleteLastNumber(str) {
  for (let i = str.length; i > 0; i--) {
    if (onlyNumbersRegEx.test(str[i])) {
      return deleteSymbolByIndex(str, i);
    }
  }
  return str;
}
