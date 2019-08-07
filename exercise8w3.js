function pasanganTerbesar(num) {
    var string = String(num);
    var angka;
    var pembandingAngka = 0;
    var i = 0;

    for (i; i < string.length; i++) {
        angka = Number(string[i] + string[i + 1]);
        if (angka > pembandingAngka) {
            pembandingAngka = angka;
        }
    }
    return pembandingAngka;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99