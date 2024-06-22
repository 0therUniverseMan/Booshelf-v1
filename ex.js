console.log(
  `<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<title>Bookshelf</title>
	<link rel="stylesheet" href="test.css">
</head>

<ul id="data-dataList">
	<!-- Data JSON akan ditampilkan di sini -->
</ul>




<div class="container">
	<form action="" id="baru">
		<h2>Buku baru</h2>
		<input type="text" name="judul" id="judul" placeholder="Nama Buku" autocomplete="off" autofocus>

		<input type="text" name="penulis" id="penulis" placeholder="Nama Penulis" autocomplete="off">

		<input type="number" name="tahun" id="tahun" placeholder="2002" autocomplete="off" maxlength="4"
			minlength="4">

		<input id="selesai" type="checkbox" name="remember" value="belumSelesai">
		<label for="selesai">Selesai dibaca</label>

		<button id="btn-tambah-baru" class="btn-info">Tambah</button>
	</form>
</div>
<form action="">
	<input type="text" name="cari" id="cari" placeholder="Atomic habbits" autocomplete="off">

	<div id="pilih">
		<button type="submit" class="btn-success">Cari</button>
		<button class="btn btn-info active" disabled>Sudah</button>
		<button class="btn btn-info">Belum</button>
	</div>
</form>
<h1 class="rata-tengah">Buku Tersimpan</h1>
<div class="cards">
	<div class="card-data">
		<span>
			<strong style="color: blue;"></strong>
		</span>
		<h1 class="card-head"> </h1>
		<h2 class="card-sub-head"> </h2>
		<p class="card-text"></p>
		<div class="group-btn">
			<button id="simpan" class="btn-info">Simpan</button>
			<button id="hapus" class="btn-info">Hapus</button>
		</div>
	</div>

</div>
<!-- menu lain -->

<div id="terbaca">


	<div class="cards d-none">
		<div class="card-data">
			<span>
				<strong style="color: green;">sudah terbaca</strong>
			</span>
			<h1 class="card-head">Lor tis ducim amet consectetur, adipisicing elit. Qua</h1>
			<h2 class="card-sub-head">Penulisnya adalah saya</h2>
			<p class="card-text">2000</p>
			<div class="group-btn">
				<button id="simpan" class="btn-info">Simpan</button>
				<button id="hapus" class="btn-info">Hapus</button>
			</div>
		</div>
	</div>

</div>
<script src="app.js"></script>
</body>

</html>`
);

// const inputJudul = document.getElementById("judul").value;

// // const inputPenulis = document.getElementById("penulis").value;
// // const inputTahun = document.getElementById("tahun").value;
// // const checkBoxSelesai = document.getElementById("selesai").value;

// // Untuk menambahkan data baru

// document.addEventListener("DOMContentLoaded", function () {
//   const dataList = document.getElementById("data-dataList");
//   const baruForm = document.getElementById("baru");

//   baruForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const inputJudul = document.getElementById("judul").value;
//     const inputPenulis = document.getElementById("penulis").value;
//     const inputTahun = document.getElementById("tahun").value;
//     const checkBoxSelesai = document.getElementById("selesai").checked;

//     // Simpan data ke local storage
//     const newData = {
//       judul: inputJudul,
//       penulis: inputPenulis,
//       tahun: inputTahun,
//       selesai: checkBoxSelesai,
//     };

//     let storedData = localStorage.getItem("storedData");
//     if (!storedData) {
//       storedData = [];
//     } else {
//       storedData = JSON.parse(storedData);
//     }

//     storedData.push(newData);
//     localStorage.setItem("storedData", JSON.stringify(storedData));

//     // Tambahkan data ke daftar
//     const listItem = document.createElement("li");
//     listItem.innerHTML = `
//       <h2>Data Pengguna</h2>
//       <p><strong>Judul:</strong> ${inputJudul}</p>
//       <p><strong>Penulis:</strong> ${inputPenulis}</p>
//       <p><strong>Tahun:</strong> ${inputTahun}</p>
//       <p><strong>Selesai:</strong> ${checkBoxSelesai ? "Ya" : "Tidak"}</p>
//     `;
//     dataList.appendChild(listItem);

//     // Reset form setelah ditambahkan
//     baruForm.reset();
//   });

//   // Load data dari JSON dan tampilkan di card
//   fetch("dummyDataBooks.json")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const cardsContainer = document.querySelector(".cards");

//       data.forEach((item) => {
//         const cardData = document.createElement("div");
//         cardData.classList.add("card-data");
//         cardData.innerHTML = `
//           <h1 class="card-head">${item.title}</h1>
//           <h2 class="card-sub-head">${item.author}</h2>
//           <p class="card-text">${item.year}</p>
//           <div class="group-btn">
//             <button id="simpan" class="btn-info">Simpan</button>
//             <button id="hapus" class="btn-info">Hapus</button>
//           </div>
//         `;
//         cardsContainer.appendChild(cardData);
//       });
//     })
//     .catch((error) => {
//       console.error("There was a problem with the fetch operation:", error);
//     });
// });

// document.getElementById("baru").addEventListener("submit", tambahBuku);

// function tambahBuku(event) {
//   event.preventDefault();

//   const inputJudul = document.getElementById("judul").value;
//   const inputPenulis = document.getElementById("penulis").value;
//   const inputTahun = document.getElementById("tahun").value;
//   const checkBoxSelesai = document.getElementById("selesai").checked;

//   const data = {
//     judul: inputJudul,
//     penulis: inputPenulis,
//     tahun: inputTahun,
//     selesai: checkBoxSelesai,
//   };

//   // Simpan data menggunakan localStorage
//   simpanBuku(data);

//   // Tampilkan data pada kartu
//   tampilkanData(data);
// }

// function simpanBuku(data) {
//   let bukuTersimpan = JSON.parse(localStorage.getItem("bukuTersimpan")) || [];
//   bukuTersimpan.push(data);
//   localStorage.setItem("bukuTersimpan", JSON.stringify(bukuTersimpan));
// }

// function tampilkanData(data) {
//   const cardContainer = document.querySelector(".cards");

//   const cardData = document.createElement("div");
//   cardData.classList.add("card-data");

//   cardData.innerHTML = `
//     <h1 class="card-head">${data.judul}</h1>
//     <h2 class="card-sub-head">${data.penulis}</h2>
//     <p class="card-text">${data.tahun}</p>
//     <div class="group-btn">
//         <button class="btn-info simpan">Simpan</button>
//         <button class="btn-info hapus">Hapus</button>
//     </div>
//   `;

//   cardContainer.appendChild(cardData);
// }

// // Membaca data dari Web Storage saat DOM dimuat
// document.addEventListener("DOMContentLoaded", function () {
//   const bukuTersimpan = JSON.parse(localStorage.getItem("bukuTersimpan")) || [];

//   bukuTersimpan.forEach(tampilkanData);
// });

document.addEventListener("DOMContentLoaded", function () {
  const dataList = document.getElementById("data-dataList");
  const baruForm = document.getElementById("baru");

  // Menangani submit form untuk menambahkan data baru
  baruForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Mengambil nilai dari input form
    const inputJudul = document.getElementById("judul").value;
    const inputPenulis = document.getElementById("penulis").value;
    const inputTahun = document.getElementById("tahun").value;
    const checkBoxSelesai = document.getElementById("selesai").checked;

    // Menyimpan data ke local storage
    const newData = {
      judul: inputJudul,
      penulis: inputPenulis,
      tahun: inputTahun,
      selesai: checkBoxSelesai,
    };

    let storedData = localStorage.getItem("storedData");
    if (!storedData) {
      storedData = [];
    } else {
      storedData = JSON.parse(storedData);
    }

    storedData.push(newData);
    localStorage.setItem("storedData", JSON.stringify(storedData));

    // Menampilkan data ke dalam list
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            <h2>Data Pengguna</h2>
            <p><strong>Judul:</strong> ${inputJudul}</p>
            <p><strong>Penulis:</strong> ${inputPenulis}</p>
            <p><strong>Tahun:</strong> ${inputTahun}</p>
            <p><strong>Selesai:</strong> ${checkBoxSelesai ? "Ya" : "Tidak"}</p>
        `;
    dataList.appendChild(listItem);

    // Mengosongkan form setelah ditambahkan
    baruForm.reset();
  });

  // Fetch data dari file JSON dan tampilkan di dalam card
  fetch("dummyDataBooks.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const cardsContainer = document.querySelector(".cards");

      data.forEach((item) => {
        const cardData = document.createElement("div");
        cardData.classList.add("card-data");
        cardData.innerHTML = `
                    <span>
                        <strong style="color: blue;"></strong>
                    </span>
                    <h1 class="card-head">${item.title}</h1>
                    <h2 class="card-sub-head">${item.author}</h2>
                    <p class="card-text">${item.year}</p>
                    <div class="group-btn">
                        <button class="btn-info">Simpan</button>
                        <button class="btn-info">Hapus</button>
                    </div>
                `;
        cardsContainer.appendChild(cardData);
      });
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});
