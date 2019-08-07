function palindrome(kata) {
    var kataBalik = '';
    var hasil;
    for (var i = kata.length - 1; i >= 0; i--) {
        kataBalik += kata[i];
    }
    if (kataBalik === kata) {
        hasil = true;
    } else {
        hasil = false;
    }
    return hasil;
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false