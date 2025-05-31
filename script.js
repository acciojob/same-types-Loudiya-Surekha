function isSameType(value1, value2) {
  const isVal1NaN = isNaN(value1) && value1 !== '';
  const isVal2NaN = isNaN(value2) && value2 !== '';

  if (isVal1NaN && isVal2NaN) {
    return true;
  }

  return typeof value1 === typeof value2;
}

// do not change the code below.
let value2 = prompt("Enter End Of the Range.");
let value1 = prompt("Enter Start of the Range.");
alert(isSameType(value1, value2));