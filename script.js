function hitungNilai() {
    var nilai1 = parseInt(document.getElementById("nilai1").value);
    var nilai2 = parseInt(document.getElementById("nilai2").value);
    var nilai3 = parseInt(document.getElementById("nilai3").value);
    var nilai4 = parseInt(document.getElementById("nilai4").value);
    var nilai5 = parseInt(document.getElementById("nilai5").value);

    let total = nilai1 + nilai2 + nilai3 + nilai4 + nilai5;

    let Ratarata = total / 5;

    let nilaitertinggi = Math.max(nilai1, nilai2, nilai3, nilai4, nilai5);

    let nilaiterendah = Math.min(nilai1, nilai2, nilai3, nilai4, nilai5);

    document.getElementById("ratarata").innerHTML = "Rata-rata Nilai: " + Ratarata;
    document.getElementById("nilaiTertinggi").innerHTML = "Nilai Tertinggi: " + nilaitertinggi;
    document.getElementById("nilaiTerendah").innerHTML = "Nilai Terendah: " + nilaiterendah;
}