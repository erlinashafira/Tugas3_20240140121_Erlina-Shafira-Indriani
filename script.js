let tanggal = new Date();
document.getElementById("tanggal").innerHTML = tanggal;

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

  alert(
    "Nama: " + nama +
    "\nNIM: " + nim +
    "\nAngkatan: " + angkatan +
    "\nPeminatan: " + bidang.value +
    "\nTanggal: " + tanggal +
    "\nAlamat: " + alamat
  );

  clearForm();
}

function clearForm() {
  document.getElementById("namaAnda").value = "";
  document.getElementById("nimAnda").value = "";
  document.getElementById("Angkatan").value = "";
  document.getElementById("tanggalLahir").value = "";
  document.getElementById("deskripsi").value = "";

  var radioButtons = document.querySelectorAll('input[name="Bidang"]');
  for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }
}
