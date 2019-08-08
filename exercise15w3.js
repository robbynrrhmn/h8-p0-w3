function groupAnimals(animals) {
    var hasil = [];
    var indeks = 0;
    var i = 0;
    animals.sort();
    for (i; i < animals.length; i++) {
        if (hasil.length === 0) {
            hasil.push([animals[i]]);
        } else if (hasil[indeks][0][0] === animals[i][0]) {
            hasil[indeks].push(animals[i]);
        } else {
            hasil.push([animals[i]]);
            indeks++;
        }
    }
    return hasil;
}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]