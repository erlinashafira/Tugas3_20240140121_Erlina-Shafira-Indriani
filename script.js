function kirimData() {
  var nama = document.getElementById("namaAnda").value;
  var nim = document.getElementById("nimAnda").value;
  var angkatan = document.getElementById("Angkatan").value;
  var bidang = document.querySelector("input[name=Bidang]:checked");
  var tanggal = document.getElementById("tanggalLahir").value;
  var alamat = document.getElementById("deskripsi").value;

  if (!nama || !nim || !angkatan || !tanggal || !alamat) {
    alert("Mohon lengkapi semua data.");
    return;
  }

  if (!bidang) {
    alert("Pilih peminatan terlebih dahulu.");
    return;
  }

  var nilaiBidang = bidang.value;

  alert(
    "Nama: " + nama +
    "\nNIM: " + nim +
    "\nAngkatan: " + angkatan +
    "\nPeminatan: " + nilaiBidang +
    "\nTanggal: " + tanggal +
    "\nAlamat: " + alamat
  );
}
