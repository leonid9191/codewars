//kata https://www.codewars.com/kata/517abf86da9663f1d2000003
function toCamelCase(str){
  if (str === '') return '';
  let result = str.split(/-|_/gi);
  return result.map((word, i) => {
    if (i === 0) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('').toString();
}