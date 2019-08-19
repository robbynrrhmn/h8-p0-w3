function mengelompokkanAngka(arr) {
    var arrayBaru = [];
    var kelipatan2 = [];
    var kelipatan3 = [];

    for (var i = 0; i < arr.length; i++) {
        var angka = arr[i];
        if (arr[i] % 3 === 0) {
            arrayBaru[2].push(angka)
        } else if (arr[i] % 2 === 0) {
            arrayBaru[0].push(angka)
        } else {
            arrayBaru[1].push(angka);
        }
    }
    return arrayBaru;
}
// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]