// Fungsi untuk membuka modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Fungsi untuk menutup modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Menutup modal jika pengguna mengklik di luar gambar modal
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    closeModal();
  }
};
