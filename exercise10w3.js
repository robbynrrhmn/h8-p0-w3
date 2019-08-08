function perkalianUnik(arr) {
    var arrayBaru = [];
    var hasil = 1;
    var tambahanArray = 0;
    var i = 0;
    for (i; i < arr.length; i++) {
        hasil *= arr[i];
    }
    var j = 0;
    for (j; j < arr.length; j++) {
        tambahanArray = hasil / arr[j];
        arrayBaru.push(tambahanArray);
    }
    return arrayBaru;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]