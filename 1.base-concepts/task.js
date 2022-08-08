"use strict";


function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь

    let discr = Math.pow(b, 2) - 4 * a * c;

    if (discr < 0) {
        break;
    } else if (discr === 0) {
        arr.push(-b / (2 * a));
    } else (discr > 0){
        arr.push(((-b + Math.sqrt(d)) / (2 * a)), ((-b - Math.sqrt(d)) / (2 * a)));
    };

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
