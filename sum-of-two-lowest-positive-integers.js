//kata https://www.codewars.com/kata/558fc85d8fd1938afb000014
function sumTwoSmallestNumbers(numbers) {  
  //Code here
  let newArr = numbers;
  newArr.sort((a, b) => a - b);
  return newArr[0] + newArr[1];
}