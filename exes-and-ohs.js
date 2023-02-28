// kata - https://www.codewars.com/kata/55908aad6620c066bc00002a
function XO(str) {
  //code here
let arr = {['o']: 0, ['x']: 0};
const copy = str.toLowerCase().split('');
copy.forEach(latter =>{  
  //console.log(latter)
  if (latter === "o"){
    arr['o']++;
  }
  if (latter === "x"){
    arr['x']++;
  }
})
if (arr['x'] === arr['o']){
  console.log('true ', arr);
  return true;
}else{
  console.log('false ', arr);
  return false;
}
}

XO("ooxx") // => true
XO("xooxx") //=> false
XO("ooxXm") //=> true
XO("zpzpzpp") //=> true // when no 'x' and 'o' is present should return true
XO("zzoo") //=> false