//kata - https://www.codewars.com/kata/5513795bd3fafb56c200049e
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

console.log(countBy(1, 10)) // === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
countBy(2, 5) // === [2, 4, 6, 8, 10];
