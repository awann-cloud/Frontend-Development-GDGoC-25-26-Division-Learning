// for of, untuk mengiterasi nilai pada iterable object seperti array
const buah = ["apel", "jeruk", "mangga"];

for (const item of buah) {
  console.log(item);
}

// for in, untuk mengiterasi properti pada object
const mobil = {
  merk: "Toyota",
  model: "Avanza",
  tahun: 2020,
};
for (const key in mobil) {
  console.log(`${key}: ${mobil[key]}`);
}