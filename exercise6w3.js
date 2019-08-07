function angkaPalindrome(num) {
    while (true) {
        var angkaBalik = '';
        num += 1;
        var angka = String(num);
        for (var i = angka.length - 1; i >= 0; i--) {
            angkaBalik += angka[i];
        }
        if (angkaBalik === angka) {
            return num;
        }
    }
}
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001