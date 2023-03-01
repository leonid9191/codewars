//kata - https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
let countSheep = function (num){
  //your code here
  let str='';
  for (let i=0; i<num; i++){
    str+=`${i+1} `+'sheep...';
  }
  return str;
}