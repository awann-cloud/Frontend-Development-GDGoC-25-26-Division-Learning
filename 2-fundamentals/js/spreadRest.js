// Spread
const angka1 = [1, 2, 3];
const angka2 = [...angka1, 4, 5];

console.log(angka2);

// Rest
function jumlah(...angka) {
  return angka.reduce((total, n) => total + n, 0);
}

console.log(jumlah(1, 2, 3, 4));
