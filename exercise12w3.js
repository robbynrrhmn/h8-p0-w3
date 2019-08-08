function tentukanDeretGeometri(arr) {
    var selisihBagi = arr[1] / arr[0];
    var selisihAntarArray = 0;
    var i = 0;

    for (i; i < arr.length - 1; i++) {
        selisihAntarArray = arr[i + 1] / arr[i];
    }
    return selisihBagi === selisihAntarArray;
}
// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false