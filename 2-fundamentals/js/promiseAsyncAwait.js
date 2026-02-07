const janji = new Promise((resolve, reject) => {
  const sukses = true;

  if (sukses) {
    resolve("Berhasil!");
  } else {
    reject("Gagal!");
  }
});

const jalankanJanji = async () => {
  try {
    const hasil = await janji;
    console.log(hasil);
  } catch (error) {
    console.log(error);
  }
};

jalankanJanji();
