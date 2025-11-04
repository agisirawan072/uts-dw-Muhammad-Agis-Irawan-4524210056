// Mengambil elemen control
const namaInput = document.querySelector("#nama");
const posisiInput = document.querySelector("#posisi");
const timInput = document.querySelector("#tim");
const fotoInput = document.querySelector("#foto");
const deskripsiInput = document.querySelector("#deskripsi");

// Mengambil target area
const previewNama = document.querySelector("#preview-nama");
const previewPosisi = document.querySelector("#preview-posisi");
const previewTim = document.querySelector("#preview-tim");
const previewFoto = document.querySelector("#preview-foto");
const previewDeskripsi = document.querySelector("#preview-deskripsi");

// untuk memperbarui teks
function updatePreview(
  inputElement,
  previewElement,
  prefix = "",
  defaultText = "-"
) {
  inputElement.addEventListener("input", () => {
    const value = inputElement.value.trim();
    previewElement.textContent = value
      ? `${prefix}${value}`
      : `${prefix}${defaultText}`;
  });
}

// menginput
updatePreview(namaInput, previewNama, "", "Nama Pemain");
updatePreview(posisiInput, previewPosisi, "Posisi: ", "-");
updatePreview(timInput, previewTim, "Tim: ", "-");
updatePreview(
  deskripsiInput,
  previewDeskripsi,
  "",
  "Deskripsi pemain akan muncul di sini..."
);

// Menambahkan foto
fotoInput.addEventListener("input", () => {
  if (fotoInput.value.trim() === "") {
    previewFoto.src = "";
  } else {
    previewFoto.src = fotoInput.value;
  }
});
