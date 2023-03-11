//kata https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

function high(x) {
  const words = x.split(" ");
  let valueWords = Array(words.length).fill(0);
  for (let i = 0; i < words.length; i++) {
    const word = words[i].split("");
    for (let j = 0; j < word.length; j++) {
      valueWords[i] += word[j].codePointAt(0) - 96;
    }
  }
  const indexOfMaxValue = valueWords.reduce((iMax, x, i, valueWords) => x > valueWords[iMax] ? i : iMax, 0);
  return words[indexOfMaxValue];
}

high("man i need a taxi up to ubud");
high("what time are we climbing up the volcano");
// function high(s){
//   let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
//   return s.split(' ')[as.indexOf(Math.max(...as))];
// }