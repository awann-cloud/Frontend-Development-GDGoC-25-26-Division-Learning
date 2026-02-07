const angka = [1, 2, 3, 4, 5];

// Map: untuk membuat array baru dengan memodifikasi setiap elemen
const angkaDikali2 = angka.map((n) => n * 2);
console.log(angkaDikali2);

// Filter: untuk membuat array baru dengan memfilter elemen berdasarkan kondisi
const angkaGenap = angka.filter((n) => n % 2 === 0);
console.log(angkaGenap);

// Find: untuk menemukan elemen pertama yang memenuhi kondisi
const angkaLebihDari3 = angka.find((n) => n > 3);
console.log(angkaLebihDari3);

// Slice: untuk mengambil sebagian elemen dari array
const sebagianAngka = angka.slice(1, 4); // dari index 1 sampai index 3
console.log(sebagianAngka);

// Splice: untuk mengubah isi array dengan menambahkan/menghapus elemen
// Formula : array.splice(indexAwal, jumlahHapus, elemenBaru1, dst, ...)
const angkaUntukSplice = [...angka]; // membuat salinan array asli
angkaUntukSplice.splice(2, 2, 10, 11);
console.log(angkaUntukSplice);

// Reduce: untuk mengakumulasi nilai dari elemen-elemen dalam array
const total = angka.reduce((accumulator, current) => accumulator + current, 0);
console.log(total);