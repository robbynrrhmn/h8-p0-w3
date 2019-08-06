// var nama = ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!']; Ini dilakukan karena untuk mengecek dengan mudah
var nama = 'Hello World!'
var namaKebalik = [''];

function balikNama(nama) {
    var namaLength = nama.length;
    var i = 0;
    for (namaLength; namaLength > i; namaLength--) {
        namaKebalik = namaKebalik + nama[namaLength - 1];
    }

    return namaKebalik;
}

console.log(balikNama(nama));