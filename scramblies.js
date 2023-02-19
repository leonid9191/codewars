// kata - https://www.codewars.com/kata/55c04b4cc56a697bb0000048

function scramble(str1, str2) {
    let count = Object.create(null);

    Array.prototype.forEach.call(str1, function(a) {
        count[a] = (count[a] || 0) + 1;
    });

    return Array.prototype.every.call(str2, function(a) {
        return count[a]--;
    });
}


scramble('rkqodlw', 'world') // True
scramble('cedewaraaossoqqyt', 'codewars') // True
scramble('katas', 'steak') // False