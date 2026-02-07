// Declaration Function
function sayHello() {
  console.log("Halo Semua!");
}
sayHello();



// Expression Function
const sayGoodbye = () => {
  console.log("Selamat Tinggal!");
};
sayGoodbye();



// Shorthand Arrow Function
const perkalian2 = (angka) => angka * 2;
console.log(perkalian2(5));



// Anonymous Function
setTimeout(function () {
  console.log("Ini adalah fungsi anonim yang dijalankan setelah 2 detik.");
}, 2000);

// Anonymous Arrow Function
setTimeout(() => {
  console.log(
    "Ini adalah fungsi panah anonim yang dijalankan setelah 3 detik.",
  );
}, 3000);



// Callback Function Biasa
function salam(nama, callback) {
  console.log("Halo, " + nama);

  callback(); 
}

function perpisahan() {
  console.log("Selamat tinggal!");
}

salam("Budi", perpisahan);

// Callback Function dengan Arrow Function
salam("Siti", () => {
  console.log("Sampai jumpa lagi!");
});
