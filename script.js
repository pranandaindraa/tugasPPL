<script>
// Fungsi untuk memuat data mahasiswa
function loadMahasiswa(searchTerm = '') {
    fetch('get_mahasiswa.php?search=' + searchTerm)
        .then(response => response.json())
        .then(data => {
            let tableBody = document.getElementById('tableBody');
            tableBody.innerHTML = '';
            data.forEach(mahasiswa => {
                let row = `<tr>
                    <td>${mahasiswa.nama}</td>
                    <td>${mahasiswa.nomor_mahasiswa}</td>
                    <td>${mahasiswa.jurusan}</td>
                </tr>`;
                tableBody.innerHTML += row;
            });
        });
}

// Memuat semua data mahasiswa ketika halaman pertama kali dibuka
document.addEventListener('DOMContentLoaded', () => {
    loadMahasiswa();

    // Fungsi pencarian
    document.getElementById('search').addEventListener('input', function() {
        const searchTerm = this.value;
        loadMahasiswa(searchTerm);
    });
});
</script>
