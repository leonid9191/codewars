//kata - https://www.codewars.com/kata/6319dba6d6e2160015a842ed/train/javascript

const countPhotos = (road) => {
  let rightCount = 0;
  let cameraCount = 0;
  let totalPhotos = 0;
  [...road].forEach((char) => {
    if (char === '>') {
      rightCount++;
    } else if (char === '<') {
      totalPhotos += cameraCount;
    } else if (char === '.') {
      totalPhotos += rightCount;
      cameraCount++;
    }
  });
  return totalPhotos;
};

console.log(countPhotos('>.>..<')); //8