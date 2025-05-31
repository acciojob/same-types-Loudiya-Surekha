function isSameType(value1, value2) {
  const val1 = Number(value1);
  const val2 = Number(value2);

  const isVal1NaN = isNaN(val1) && value1.trim() !== '';
  const isVal2NaN = isNaN(val2) && value2.trim() !== '';

  if (isVal1NaN && isVal2NaN) {
    return true;
  }

  if (!isVal1NaN && !isVal2NaN) {
    return true;
  }

  if (typeof value1 === typeof value2) {
    return true;
  }

  return false;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));


