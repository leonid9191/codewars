//kata - https://www.codewars.com/kata/5727bb0fe81185ae62000ae3
function cleanString(s) {
  return Array.from(s).reduce((a, b) => b == '#'? a.slice(0,-1) : a.concat(b), '')
}