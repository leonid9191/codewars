// kata - https://www.codewars.com/kata/5b180e9fedaa564a7000009a

function solve(s){
  const countUpperCase = [...s].reduce((count, char) => {
    count += char.toUpperCase() === char ? 1 : 0;
    return count
  }, 0);
  return(s.length/2 >= countUpperCase ? s.toLowerCase() : s.toUpperCase());
}

solve("coDe") // = "code" Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") // = "CODE" Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") // = "code"