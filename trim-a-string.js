//kata - https://www.codewars.com/kata/563fb342f47611dae800003c

function trim(str, size) {
  if (str.length <= size){
    return str
  }
  if (size <= 3){
    return str.slice(0, size).concat('...')
  }
  return (str.slice(0, size-3).concat('...'));
}

trim("Creating kata is fun", 14);