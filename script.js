let clickCount = 0;

document.getElementById('actionButton').addEventListener('click', function () {
    clickCount++;

    if (clickCount === 1) {
        // Pertama: Memutar lagu
        const audio = document.getElementById('birthdaySong');
        audio.play();
        this.textContent = "Tunggu beberapa detik baru pencet lagii";
    } else if (clickCount === 2) {
        // Kedua: Menampilkan foto dan pesan tersembunyi
        const hiddenMessage = document.getElementById('hiddenMessage');
        const photoGallery = document.getElementById('photoGallery');
        hiddenMessage.classList.remove('hidden');
        photoGallery.classList.remove('hidden');

        // Ganti teks tombol
        this.textContent = "Masih ada hadiah satu lagi buat kamu";

        // Tambahkan efek confetti (opsional)
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    } else if (clickCount === 3) {
        // Ketiga: Pergi ke website lain
        window.location.href = "https://www.contoh-website-romantis.com";
    }
});
