function targetTerdekat(arr) {
    var mencariO = arr.indexOf('o');
    var selisihOX = 0; //mencariO-i
    var realJarak = arr.length; //return hasil
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            selisihOX = Math.abs(mencariO - i);
            if (selisihOX < realJarak) {
                realJarak = selisihOX;
            }
        }
    }
    if (arr.indexOf('x') === -1) {
        return 0;
    }
    return realJarak;
}
// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2