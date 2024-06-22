document.addEventListener("DOMContentLoaded", function () {
  const dataList = document.getElementById("baru");
  const formBaru = document.getElementById("baru");
  const formCari = document.querySelector("form[action='']");

  // Menangani penambahan buku baru
  formBaru.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputJudul = document.getElementById("judul").value;
    const inputPenulis = document.getElementById("penulis").value;
    const inputTahun = document.getElementById("tahun").value;
    const checkBoxSelesai = document.getElementById("selesai").checked;

    const newData = {
      id: +new Date(), // Menggunakan timestamp sebagai id
      title: inputJudul,
      author: inputPenulis,
      year: inputTahun,
      isComplete: checkBoxSelesai,
    };

    let storedData = localStorage.getItem("storedData");
    if (!storedData) {
      storedData = [];
    } else {
      storedData = JSON.parse(storedData);
    }

    storedData.push(newData);
    localStorage.setItem("storedData", JSON.stringify(storedData));

    // Reset form setelah ditambahkan
    formBaru.reset();

    // Tampilkan buku baru di daftar
    renderBook(newData);
  });

  // Mengambil data dari localStorage saat halaman dimuat
  renderBooksFromLocalStorage();

  // Menangani pencarian buku
  formCari.addEventListener("submit", function (event) {
    event.preventDefault();
    const query = document.getElementById("cari").value.toLowerCase();

    // Lakukan sesuatu dengan hasil pencarian
    // Misalnya, tampilkan buku yang sesuai dengan query
  });

  // Fungsi untuk merender buku ke dalam daftar
  function renderBook(book) {
    const listItem = document.createElement("div"); // Buat elemen div baru
    listItem.classList.add("cards"); // Tambahkan kelas ke elemen div
    listItem.innerHTML = ` 
		<div class="card-data"> 
        <span><strong style="color: ${book.isComplete ? "blue" : "green"};"> ${
      book.isComplete ? "Selesai dibaca" : "Belum dibaca"
    }</strong></span>
        <h1 class="card-head">${book.title}</h1>
        <h2 class="card-sub-head">${book.author}</h2>
        <p class="card-text">${book.year}</p>
        <div class="group-btn">
          <button class="btn-info simpan">Simpan</button>
          <button class="btn-info hapus" data-id="${book.id}">Hapus</button>
        </div>
				    </div>
      `;
    dataList.appendChild(listItem);
  }

  // Fungsi untuk merender buku dari localStorage saat halaman dimuat
  function renderBooksFromLocalStorage() {
    const storedData = JSON.parse(localStorage.getItem("storedData")) || [];
    storedData.forEach(renderBook);
  }

  // Menangani penghapusan buku
  dataList.addEventListener("click", function (event) {
    if (event.target.classList.contains("hapus")) {
      const id = event.target.dataset.id;
      let storedData = JSON.parse(localStorage.getItem("storedData")) || [];
      storedData = storedData.filter((book) => book.id !== parseInt(id));
      localStorage.setItem("storedData", JSON.stringify(storedData));
      event.target.closest(".card-data").remove();
    }
  });
});
