var nama = 'Hello World!';

function balikNama(nama) {
    var namaKebalik = '';
    var namaLength = nama.length
    for (var i = namaLength - 1; 0 <= i; i--) {
        namaKebalik = namaKebalik + nama[i];
    }
    return namaKebalik
}

console.log(balikNama(nama));