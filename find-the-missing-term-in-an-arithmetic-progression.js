//kata https://www.codewars.com/kata/52de553ebb55d1fca3000371
const findMissing = function (list) { 
  let diff1 = list[1]-list[0];
  let diff2 = list[list.length-1] - list[list.length-2];
  if (diff1 !== diff2) {
      if (diff1 == 2 * diff2){
         return list[0] + diff2;
      }else{
         return list[list.length-1] - diff1;
      };
   };
  for (let i = 1; i<list.length-2; i++){
    if ((list[i+1] - list [i])!== diff1){
      return list[i]+diff1; 
    }
  }
  return list [0] ;
}