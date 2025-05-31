function isSameType(value1, value2) {
  // Try to convert to numbers
  const num1 = Number(value1);
  const num2 = Number(value2);

  const isVal1NaN = value1.trim() !== '' && isNaN(num1);
  const isVal2NaN = value2.trim() !== '' && isNaN(num2);

  // Case 1: Both are NaN
  if (isVal1NaN && isVal2NaN) {
    return true;
  }

  // Case 2: One is NaN, one is not
  if (isVal1NaN || isVal2NaN) {
    return false;
  }

  // Case 3: Both are numbers
  if (!isNaN(num1) && !isNaN(num2)) {
    return true;
  }

  // Case 4: Fallback to typeof (if both are strings that failed to convert)
  return typeof value1 === typeof value2;
} 

// do not change the code below.
// let value2 = prompt("Enter End Of the Range.");
// let value1 = prompt("Enter Start of the Range.");
// alert(isSameType(value1, value2));
