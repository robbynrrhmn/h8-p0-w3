//contoh output
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
    input.splice(4, 1, 'Pria', 'SMA Internasional Metro');
    return input;
}
console.log(dataHandling2(input));

var hasilSplit = input[3].split('/');
var hasilSort = input[3].split('/');
// console.log(date); var dd = hasilSplit[0];

var mm = hasilSplit[1];
// var yyyy = hasilSplit[2];
switch (mm) {
    case '01':
        console.log('Januari');
        break;
    case '02':
        console.log('Februari');
        break;
    case '03':
        console.log('Maret');
        break;
    case '04':
        console.log('April');
        break;
    case '05':
        console.log('Mei');
        break;
    case '06':
        console.log('Juni');
        break;
    case '07':
        console.log('Juli');
        break;
    case '08':
        console.log('Agustus');
        break;
    case '09':
        console.log('September');
        break;
    case '10':
        console.log('Oktober');
        break;
    case '11':
        console.log('November');
        break;
    case '12':
        console.log('Desember');
        break;
}
hasilSort.sort(function(a, b) {
    return Number(b) > Number(a)
});
console.log(hasilSort);

console.log(hasilSplit.join('-'));
console.log(input[1].slice(0, 15));