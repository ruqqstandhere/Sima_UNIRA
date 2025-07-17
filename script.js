// Data mahasiswa demo - DITAMBAH INFORMASI BARU (Proyek dan Biodata Tambahan)
const mahasiswaData = {
    '22552021043': { // Pastikan NIM di sini sesuai
        nama: 'Faruq Adrean',
        nim: '22552021043',
        prodi: 'Teknik Informatika',
        angkatan: '2022',
        fakultas: 'Fakultas Teknik',
        status: 'Aktif',
        password: '22552021043',
        // --- INFORMASI BIODATA TAMBAHAN ---
        tanggal_lahir: '2003-02-07',
        tempat_lahir: 'Surabaya',
        jenis_kelamin: 'Laki-laki',
        alamat: 'Jl.Punden GG 3 , Jatikerto',
        email: 'ruqqnofearss7@gmail.com',
        telepon: '0895399350643',
        // --- INFORMASI AKADEMIK & KEMAHASISWAAN ---
        nilai: [
            // Semester 1
            { mata_kuliah: 'Pengantar Teknologi Informasi', semester: 'Semester 1', sks: 2, nilai: 'A' },
            { mata_kuliah: 'Matematika Diskrit', semester: 'Semester 1', sks: 3, nilai: 'A' },
            { mata_kuliah: 'Algoritma & Struktur Data', semester: 'Semester 1', sks: 3, nilai: 'A' },
            { mata_kuliah: 'Dasar Pemrograman', semester: 'Semester 1', sks: 3, nilai: 'A' },
            { mata_kuliah: 'Pendidikan Agama', semester: 'Semester 1', sks: 2, nilai: 'A' },
            { mata_kuliah: 'Bahasa Inggris I', semester: 'Semester 1', sks: 2, nilai: 'A' },
        
            // Semester 2
            { mata_kuliah: 'Pemrograman Berorientasi Objek', semester: 'Semester 2', sks: 3, nilai: 'A' },
            { mata_kuliah: 'Statistika Komputasi', semester: 'Semester 2', sks: 3, nilai: 'A' },
            { mata_kuliah: 'Sistem Operasi', semester: 'Semester 2', sks: 3, nilai: 'A' },
            { mata_kuliah: 'Pemrograman Web', semester: 'Semester 2', sks: 3, nilai: 'A' },
            { mata_kuliah: 'Jaringan Komputer', semester: 'Semester 2', sks: 3, nilai: 'A' },
            { mata_kuliah: 'Pancasila & Kewarganegaraan', semester: 'Semester 2', sks: 2, nilai: 'A' },
        
            // Semester 3
            { mata_kuliah: 'Basis Data', semester: 'Semester 3', sks: 3, nilai: 'A' },
            { mata_kuliah: 'Struktur Data Lanjut', semester: 'Semester 3', sks: 3, nilai: 'A' },
            { mata_kuliah: 'Arsitektur & Organisasi Komputer', semester: 'Semester 3', sks: 3, nilai: 'A' },
            { mata_kuliah: 'Rekayasa Perangkat Lunak', semester: 'Semester 3', sks: 3, nilai: 'A' },
            { mata_kuliah: 'Matematika Teknik', semester: 'Semester 3', sks: 3, nilai: 'A' },
            { mata_kuliah: 'Kecerdasan Buatan', semester: 'Semester 3', sks: 3, nilai: 'A' },
        
            // Semester 4
            { mata_kuliah: 'Data Mining', semester: 'Semester 4', sks: 3, nilai: 'A' },
            { mata_kuliah: 'Grafika Komputer', semester: 'Semester 4', sks: 3, nilai: 'A' },
            { mata_kuliah: 'Sistem Informasi Geografis', semester: 'Semester 4', sks: 3, nilai: 'A' },
            { mata_kuliah: 'Kriptografi', semester: 'Semester 4', sks: 3, nilai: 'A' },
            { mata_kuliah: 'Interaksi Manusia & Komputer', semester: 'Semester 4', sks: 3, nilai: 'A' },
            { mata_kuliah: 'Keamanan Jaringan', semester: 'Semester 4', sks: 3, nilai: 'A' },
        
            // Semester 5
            { mata_kuliah: 'Pemrograman Mobile', semester: 'Semester 5', sks: 3, nilai: 'A' },
            { mata_kuliah: 'Pembelajaran Mesin', semester: 'Semester 5', sks: 3, nilai: 'A' },
            { mata_kuliah: 'Cloud Computing', semester: 'Semester 5', sks: 3, nilai: 'A' },
            { mata_kuliah: 'Pengolahan Citra Digital', semester: 'Semester 5', sks: 3, nilai: 'A' },
            { mata_kuliah: 'Metodologi Penelitian TI', semester: 'Semester 5', sks: 2, nilai: 'A' },
            { mata_kuliah: 'Etika Profesi TI', semester: 'Semester 5', sks: 2, nilai: 'A' },
        
            // Semester 6
            { mata_kuliah: 'Kerja Praktik', semester: 'Semester 6', sks: 2, nilai: 'A' },
            { mata_kuliah: 'Sistem Terdistribusi', semester: 'Semester 6', sks: 3, nilai: 'A' },
            { mata_kuliah: 'Big Data Analytics', semester: 'Semester 6', sks: 3, nilai: 'A' },
            { mata_kuliah: 'E-commerce & Bisnis Digital', semester: 'Semester 6', sks: 3, nilai: 'A' },
            { mata_kuliah: 'Pilihan 1 (Pemrogaman Mobile)', semester: 'Semester 6', sks: 3, nilai: 'A' },
            { mata_kuliah: 'Pilihan 2 (Game Development)', semester: 'Semester 6', sks: 3, nilai: 'A' },
        ],
        ukm: [
            { nama: '-', jabatan: '-', periode: '-' },
        ],
        kkn_score: 85, // Skala 1-100
        pkl_score: 92, // Skala 1-100
        matkul_selesai: [
            // Semester 1
            'Pengantar Teknologi Informasi',
            'Matematika Diskrit',
            'Algoritma & Struktur Data',
            'Dasar Pemrograman',
            'Pendidikan Agama',
            'Bahasa Inggris I',

            // Semester 2
            'Pemrograman Berorientasi Objek',
            'Statistika Komputasi',
            'Sistem Operasi',
            'Pemrograman Web',
            'Jaringan Komputer',
            'Pancasila & Kewarganegaraan',

            // Semester 3
            'Basis Data',
            'Struktur Data Lanjut',
            'Arsitektur & Organisasi Komputer',
            'Rekayasa Perangkat Lunak',
            'Matematika Teknik',
            'Kecerdasan Buatan',

            // Semester 4
            'Data Mining',
            'Grafika Komputer',
            'Sistem Informasi Geografis',
            'Kriptografi',
            'Interaksi Manusia & Komputer',
            'Keamanan Jaringan',

            // Semester 5
            'Pemrograman Mobile',
            'Pembelajaran Mesin',
            'Cloud Computing',
            'Pengolahan Citra Digital',
            'Metodologi Penelitian TI',
            'Etika Profesi TI',

            // Semester 6
            'Kerja Praktik', // Atau PKL/Magang
            'Sistem Terdistribusi',
            'Big Data Analytics',
            'E-commerce & Bisnis Digital',
            'Pilihan 1 (Pemrogaman Mobile)', // Mengganti ke 'Misal: IoT' agar sesuai dengan data 'nilai' di atas
            'Pilihan 2 (Game Development)', // Mengganti ke 'Misal: Game Development' agar sesuai dengan data 'nilai' di atas
        ],
        // --- INFORMASI PROYEK ---
        proyek: [
            {
                nama_proyek: 'Sistem Informasi Akademik Berbasis Web',
                tahun: 2023,
                peran: 'Full-stack Developer',
                deskripsi: 'Pengembangan portal akademik mahasiswa dan dosen untuk pengelolaan nilai, jadwal, dan informasi perkuliahan.'
            },
            {
                nama_proyek: 'Aplikasi Mobile Resep Makanan',
                tahun: 2023,
                peran: 'Android Developer',
                deskripsi: 'Aplikasi mobile untuk mencari, menyimpan, dan berbagi resep makanan dengan fitur pencarian filter.'
            },
            {
                nama_proyek: 'Deteksi Penyakit Tanaman Menggunakan Machine Learning',
                tahun: 2024,
                peran: 'Data Scientist & Programmer',
                deskripsi: 'Membangun model klasifikasi citra untuk mendeteksi penyakit pada tanaman berdasarkan foto daun.'
            },
            {
                nama_proyek: 'Simulasi Jaringan Komputer dengan Cisco Packet Tracer',
                tahun: 2023,
                peran: 'Network Designer',
                deskripsi: 'Perancangan dan simulasi topologi jaringan kampus yang aman dan efisien.'
            },
            {
                nama_proyek: 'Sistem Manajemen Inventaris Gudang',
                tahun: 2024,
                peran: 'Backend Developer',
                deskripsi: 'Pembuatan sistem berbasis web untuk melacak dan mengelola stok barang di gudang secara real-time.'
            },
            {
                nama_proyek: 'Game Edukasi "Belajar Algoritma"',
                tahun: 2023,
                peran: 'Game Programmer',
                deskripsi: 'Pengembangan game interaktif untuk membantu pemula memahami konsep dasar algoritma pemrograman.'
            },
            {
                nama_proyek: 'Website E-commerce Produk UMKM Lokal',
                tahun: 2024,
                peran: 'Front-end Developer',
                deskripsi: 'Perancangan dan implementasi antarmuka pengguna website toko online untuk produk usaha mikro kecil menengah.'
            },
            {
                nama_proyek: 'Sistem Keamanan Pintu Otomatis Berbasis IoT',
                tahun: 2025,
                peran: 'IoT Engineer',
                deskripsi: 'Integrasi sensor dan mikrokontroler untuk sistem pintu otomatis yang dapat dikendalikan melalui aplikasi mobile.'
            },
            {
                nama_proyek: 'Analisis Sentimen Ulasan Film',
                tahun: 2024,
                peran: 'Natural Language Processing Engineer',
                deskripsi: 'Penggunaan teknik NLP untuk menganalisis sentimen positif/negatif dari ulasan film dari berbagai sumber.'
            },
            {
                nama_proyek: 'Pengembangan API untuk Sistem Pembayaran Digital',
                tahun: 2025,
                peran: 'API Developer',
                deskripsi: 'Membangun RESTful API yang aman dan efisien untuk integrasi sistem pembayaran digital dengan aplikasi lain.'
            }
        ]
    },
};

// Data Dosen
const dosenData = [
    { nama: 'Bagus Seta Wahyu, M.Kom.', nip: '197001011995031001', prodi: 'Teknik Informatika', mata_kuliah_ampu: [
        'Pengantar Teknologi Informasi',
        'Algoritma & Struktur Data',
        'Sistem Operasi',
        'Jaringan Komputer',
        'Kecerdasan Buatan',
        'Pembelajaran Mesin',
        'Big Data Analytics',
        'Kerja Praktik'
    ]},
    { nama: 'Urnika Mudhifatul Jannah, S.Kom., M.TI.', nip: '197505052000082002', prodi: 'Teknik Informatika', mata_kuliah_ampu: [
        'Matematika Diskrit',
        'Dasar Pemrograman',
        'Pemrograman Berorientasi Objek',
        'Pemrograman Web',
        'Basis Data',
        'Rekayasa Perangkat Lunak',
        'Sistem Informasi Geografis',
        'Metodologi Penelitian TI'
    ]},
    { nama: 'Pangestuti Puji Prima Darajat, M.Eng.', nip: '198002102005011003', prodi: 'Teknik Informatika', mata_kuliah_ampu: [
        'Statistika Komputasi',
        'Arsitektur & Organisasi Komputer',
        'Matematika Teknik',
        'Data Mining',
        'Kriptografi',
        'Keamanan Jaringan',
        'Cloud Computing',
        'Sistem Terdistribusi'
    ]},
    { nama: 'Rahmat Nur Tarecha K, M.Si.', nip: '196807151992012004', prodi: 'Umum', mata_kuliah_ampu: [
        'Pendidikan Agama',
        'Bahasa Inggris I',
        'Pancasila & Kewarganegaraan',
        'Etika Profesi TI'
    ]},
    { nama: 'Puad Siswahyudi, S.T., M.T.', nip: '198509202010021005', prodi: 'Teknik Informatika', mata_kuliah_ampu: [
        'Struktur Data Lanjut',
        'Grafika Komputer',
        'Interaksi Manusia & Komputer',
        'Pemrograman Mobile',
        'Pengolahan Citra Digital',
        'E-commerce & Bisnis Digital',
        'Pilihan 1 (Misal: IoT)',
        'Pilihan 2 (Misal: Game Development)'
    ]}
];


// Konstanta
const UKT_AMOUNT = 2750000;
const VALID_TOKENS = [
    'AX1Y5Z7B9C0D', // Contoh token campuran huruf dan angka 12 karakter
    'E2F3G4H5I6J7',
    'K8L9M0N1P2Q3',
    'R4S5T6U7V8W9',
    'X0Y1Z2A3B4C5',
    'D6E7F8G9H0I1',
    'J2K3L4M5N6P7',
    'Q8R9S0T1U2V3',
    'W4X5Y6Z7A8B9',
    'C0D1E2F3G4H5',
    'I6J7K8L9M0N1',
    'P2Q3R4S5T6U7',
    'V8W9X0Y1Z2A3',
    'B4C5D6E7F8G9',
    'H0I1J2K3L4M5'
];

let currentUser = null;

// --- FUNGSI UNTUK PERSISTENSI DATA DENGAN LOCALSTORAGE ---
function loadPaymentDataFromLocalStorage() {
    const storedData = localStorage.getItem('paymentDataUKT');
    if (storedData) {
        return JSON.parse(storedData);
    }
    // Jika tidak ada di localStorage, gunakan data dummy awal
    return {
        // PERHATIKAN: NIM di sini harus sama dengan NIM yang digunakan untuk login di `mahasiswaData`
        '22552021043': [ // GANTI DARI '220101001' MENJADI '22552021043'
            { semester: 'Semester 1 (Ganjil 2022/2023)', amount: 2750000, date: '-', status: 'Lunas', file: 'dummy_slip1.jpg', token: 'UKT2022GanjilA' },
            { semester: 'Semester 2 (Genap 2022/2023)', amount: 2750000, date: '-', status: 'Lunas', file: 'dummy_slip2.jpg', token: 'UKT2022GenapA' },
            { semester: 'Semester 3 (Ganjil 2023/2024)', amount: 2750000, date: '-', status: 'Lunas', file: 'dummy_slip3.jpg', token: 'UKT2023GanjilA' },
            { semester: 'Semester 4 (Genap 2023/2024)', amount: 2750000, date: '-', status: 'Lunas', file: 'dummy_slip4.jpg', token: 'UKT2024GenapA' },
            { semester: 'Semester 5 (Ganjil 2024/2025)', amount: 2750000, date: '-', status: 'Lunas', file: 'dummy_slip5.jpg', token: 'UKT2024GanjilB' },
            { semester: 'Semester 6 (Genap 2024/2025)', amount: 2750000, date: '-', status: 'Lunas', file: 'dummy_slip6.jpg', token: 'UKT2025GenapA' },
            
        ],
        // Pertahankan data mahasiswa lain jika ada, atau hapus jika tidak diperlukan
        // ... (data mahasiswa lain jika ada)
    };
}

let paymentData = loadPaymentDataFromLocalStorage();

function savePaymentDataToLocalStorage() {
    localStorage.setItem('paymentDataUKT', JSON.stringify(paymentData));
}

// --- FUNGSI UTILITY UMUM ---
function showElement(elementId) {
    document.getElementById(elementId).classList.remove('hidden');
}

function hideElement(elementId) {
    document.getElementById(elementId).classList.add('hidden');
}

function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

function formatDate(dateString) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('id-ID', options);
}

// --- FUNGSI NAVIGASI MENU ---
function showContent(contentId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden');
    });

    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    document.getElementById(contentId).classList.remove('hidden');

    if (contentId === 'profileContent') {
        document.getElementById('menuProfile').classList.add('active');
        loadProfile();
        calculateStatistics();
        displayBiodata(); // Panggil fungsi display biodata
    } else if (contentId === 'paymentHistoryContent') {
        document.getElementById('menuPayments').classList.add('active');
        loadPaymentHistory();
    } else if (contentId === 'uploadPaymentContent') {
        document.getElementById('menuUpload').classList.add('active');
    } else if (contentId === 'akademikContent') {
        document.getElementById('menuAkademik').classList.add('active');
        displayNilai();
        displayMatkulSelesai();
        displayUkm();
        displayKknPklScore();
        displayProjects(); // Panggil fungsi display proyek
    } else if (contentId === 'dosenContent') { // Menu baru untuk Dosen
        document.getElementById('menuDosen').classList.add('active');
        displayDosen(); // Panggil fungsi display dosen
    }
}

// --- FUNGSI LOGIN & LOGOUT ---
function login() {
    const nim = document.getElementById('nim').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorDiv = document.getElementById('loginError');

    hideElement('loginError');

    if (!nim || !password) {
        errorDiv.textContent = 'NIM dan password harus diisi!';
        errorDiv.className = 'error';
        showElement('loginError');
        return;
    }

    if (mahasiswaData[nim] && mahasiswaData[nim].password === password) {
        currentUser = nim;

        hideElement('loginSection');
        showElement('profileSection');

        loadProfile();
        loadPaymentHistory();
        calculateStatistics();
        populateSemesterList();

        displayBiodata();
        displayNilai();
        displayUkm();
        displayKknPklScore();
        displayMatkulSelesai();
        displayProjects(); // Panggil saat login
        displayDosen(); // Panggil saat login

        showContent('profileContent'); // Tampilkan profil setelah login

        document.getElementById('nim').value = '';
        document.getElementById('password').value = '';

    } else {
        errorDiv.textContent = 'NIM atau password salah!';
        errorDiv.className = 'error';
        showElement('loginError');
    }
}

function logout() {
    currentUser = null;
    hideElement('profileSection');
    showElement('loginSection');
}

// --- FUNGSI DASHBOARD MAHASISWA & DATA AKADEMIK ---

// Fungsi untuk menampilkan biodata lengkap
function displayBiodata() {
    if (!currentUser) return;
    const userData = mahasiswaData[currentUser];

    document.getElementById('profileTglLahir').textContent = userData.tanggal_lahir ? formatDate(userData.tanggal_lahir) : '-';
    document.getElementById('profileTempatLahir').textContent = userData.tempat_lahir || '-';
    document.getElementById('profileJenisKelamin').textContent = userData.jenis_kelamin || '-';
    document.getElementById('profileAlamat').textContent = userData.alamat || '-';
    document.getElementById('profileEmail').textContent = userData.email || '-';
    document.getElementById('profileTelepon').textContent = userData.telepon || '-';
}


// Fungsi untuk menghitung dan menampilkan Indeks Prestasi Kumulatif (IPK)
function calculateAndDisplayIPK() {
    if (!currentUser) return;

    const userData = mahasiswaData[currentUser];
    const nilaiData = userData.nilai || [];

    let totalSKS = 0;
    let totalBobotNilai = 0;

    const bobotNilai = {
        'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7,
        'C+': 2.3, 'C': 2.0, 'D': 1.0, 'E': 0.0
    };

    nilaiData.forEach(item => {
        const sks = item.sks || 0;
        const nilaiHuruf = item.nilai.toUpperCase();
        const bobot = bobotNilai[nilaiHuruf] || 0.0;

        totalSKS += sks;
        totalBobotNilai += (sks * bobot);
    });

    const ipk = totalSKS > 0 ? (totalBobotNilai / totalSKS).toFixed(2) : '0.00';
    document.getElementById('ipkValue').textContent = ipk;
}

// Fungsi load profil mahasiswa (Diperbarui untuk memanggil IPK dan Biodata)
function loadProfile() {
    if (!currentUser) return;

    const userData = mahasiswaData[currentUser];
    document.getElementById('profileNama').textContent = userData.nama;
    document.getElementById('profileNim').textContent = userData.nim;
    document.getElementById('profileProdi').textContent = userData.prodi;
    document.getElementById('profileAngkatan').textContent = userData.angkatan;
    document.getElementById('profileFakultas').textContent = userData.fakultas;
    document.getElementById('profileStatus').textContent = userData.status;

    calculateAndDisplayIPK();
    displayBiodata(); // Pastikan biodata juga ditampilkan di sini
}

function populateSemesterList() {
    const datalist = document.getElementById('semesterList');
    const semesters = [
        'Semester 1 (Ganjil 2022/2023)',
        'Semester 2 (Genap 2022/2023)',
        'Semester 3 (Ganjil 2023/2024)',
        'Semester 4 (Genap 2023/2024)',
        'Semester 5 (Ganjil 2024/2025)',
        'Semester 6 (Genap 2024/2025)',
        'Semester 7 (Ganjil 2025/2026)',
        'Semester 8 (Genap 2025/2026)'
    ];

    datalist.innerHTML = '';
    semesters.forEach(semester => {
        const option = document.createElement('option');
        option.value = semester;
        datalist.appendChild(option);
    });
}

function calculateStatistics() {
    if (!currentUser) return;

    const payments = paymentData[currentUser] || [];
    let lunas = 0;
    let parsialCount = 0;
    let totalPaid = 0;

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const angkatan = parseInt(mahasiswaData[currentUser].angkatan);

    let expectedSemestersPassed;
    if (currentYear === angkatan) {
        expectedSemestersPassed = (currentMonth >= 8) ? 1 : 0;
    } else {
        expectedSemestersPassed = (currentYear - angkatan) * 2;
        if (currentMonth >= 8) {
            expectedSemestersPassed += 1;
        } else if (currentMonth >= 2 && currentMonth < 8) {
            expectedSemestersPassed += 0;
        }
    }

    payments.forEach(payment => {
        totalPaid += payment.amount;
        if (payment.status === 'Lunas') {
            lunas++;
        } else if (payment.status === 'Parsial') {
            parsialCount++;
        }
    });

    let belum = Math.max(0, expectedSemestersPassed - lunas - parsialCount);
    const totalExpectedSemesters = 8;
    const progress = (lunas / totalExpectedSemesters) * 100;

    document.getElementById('statLunas').textContent = lunas;
    document.getElementById('statBelum').textContent = belum + parsialCount;
    document.getElementById('statTotal').textContent = formatRupiah(totalPaid);
    document.getElementById('statProgress').textContent = `${progress.toFixed(1)}%`;
}

function loadPaymentHistory() {
    if (!currentUser) return;

    const paymentList = document.getElementById('paymentList');
    const payments = paymentData[currentUser] || [];

    paymentList.innerHTML = '';

    if (payments.length === 0) {
        paymentList.innerHTML = '<div class="no-payments">Belum ada riwayat pembayaran</div>';
        return;
    }

    payments.sort((a, b) => new Date(b.date) - new Date(a.date));

    let html = '';
    payments.forEach(payment => {
        const statusClass = payment.status === 'Lunas' ? 'status-lunas' :
                            payment.status === 'Parsial' ? 'status-parsial' : 'status-belum';

        html += `
            <div class="payment-item">
                <div class="semester-info">
                    <div class="semester-name">${payment.semester}</div>
                    <div class="semester-amount">${formatRupiah(payment.amount)}</div>
                    <div class="semester-date">Tanggal Bayar: ${formatDate(payment.date)}</div>
                </div>
                <div class="payment-status-wrapper">
                    <span class="payment-status ${statusClass}">${payment.status}</span>
                    <button class="btn-small view-slip-btn" onclick="viewSlip('${payment.file}', '${payment.semester}')">📄 Lihat Slip</button>
                </div>
            </div>
        `;
    });

    paymentList.innerHTML = html;
}

function viewSlip(fileContent, semesterName) {
    if (fileContent.startsWith('data:')) {
        const newWindow = window.open();
        newWindow.document.write(`
            <!DOCTYPE html>
            <html lang="id">
            <head>
                <title>Slip Pembayaran ${semesterName}</title>
                <style>
                    body { margin: 0; padding: 0; overflow: hidden; background-color: #f0f0f0; }
                    img, iframe { width: 100%; height: 100vh; border: none; }
                    .header {
                        background-color: #667eea;
                        color: white;
                        padding: 15px;
                        text-align: center;
                        font-family: Arial, sans-serif;
                        position: sticky;
                        top: 0;
                        z-index: 10;
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <h2>Slip Pembayaran UKT - ${semesterName}</h2>
                </div>
        `);
        if (fileContent.startsWith('data:application/pdf')) {
            newWindow.document.write(`<iframe src="${fileContent}"></iframe>`);
        } else {
            newWindow.document.write(`<img src="${fileContent}" alt="Slip Pembayaran">`);
        }
        newWindow.document.write(`</body></html>`);
        newWindow.document.close();
    } else {
        alert(`Tidak ada slip digital yang tersimpan untuk pembayaran ini. (File: ${fileContent})\n\nDalam aplikasi nyata, ini akan mengambil file dari server.`);
    }
}

function displayNilai() {
    if (!currentUser) return;
    const userData = mahasiswaData[currentUser];
    const nilaiList = document.getElementById('nilaiList');
    nilaiList.innerHTML = '';

    const nilaiData = userData.nilai || [];
    if (nilaiData.length === 0) {
        nilaiList.innerHTML = '<div class="no-data">Belum ada data nilai yang tercatat.</div>';
        return;
    }

    let html = `
        <table>
            <thead>
                <tr>
                    <th>Mata Kuliah</th>
                    <th>Semester</th>
                    <th>SKS</th>
                    <th>Nilai</th>
                </tr>
            </thead>
            <tbody>
    `;
    nilaiData.forEach(item => {
        html += `
            <tr>
                <td>${item.mata_kuliah}</td>
                <td>${item.semester}</td>
                <td>${item.sks}</td>
                <td><span class="nilai-badge nilai-${item.nilai.toLowerCase().replace('+', 'plus').replace('-', 'minus')}">${item.nilai}</span></td>
            </tr>
        `;
    });
    html += `
            </tbody>
        </table>
    `;
    nilaiList.innerHTML = html;
}

function displayUkm() {
    if (!currentUser) return;
    const userData = mahasiswaData[currentUser];
    const ukmList = document.getElementById('ukmList');
    ukmList.innerHTML = '';

    const ukmData = userData.ukm || [];
    if (ukmData.length === 0) {
        ukmList.innerHTML = '<div class="no-data">Belum ada riwayat keanggotaan UKM.</div>';
        return;
    }

    let html = '';
    ukmData.forEach(item => {
        html += `
            <div class="ukm-item">
                <div class="ukm-name">${item.nama}</div>
                <div class="ukm-detail">Jabatan: <strong>${item.jabatan}</strong></div>
                <div class="ukm-detail">Periode: ${item.periode}</div>
            </div>
        `;
    });
    ukmList.innerHTML = html;
}

function displayKknPklScore() {
    if (!currentUser) return;
    const userData = mahasiswaData[currentUser];

    document.getElementById('kknScore').textContent = userData.kkn_score ? `${userData.kkn_score}/100` : '-';
    document.getElementById('pklScore').textContent = userData.pkl_score ? `${userData.pkl_score}/100` : '-';
}

function displayMatkulSelesai() {
    if (!currentUser) return;
    const userData = mahasiswaData[currentUser];
    const matkulSelesaiList = document.getElementById('matkulSelesaiList');
    matkulSelesaiList.innerHTML = '';

    const matkulData = userData.matkul_selesai || [];
    if (matkulData.length === 0) {
        matkulSelesaiList.innerHTML = '<div class="no-data">Belum ada mata kuliah yang tercatat selesai.</div>';
        return;
    }

    let html = '<ul class="matkul-list">';
    matkulData.forEach(matkul => {
        html += `<li>${matkul}</li>`;
    });
    html += '</ul>';
    matkulSelesaiList.innerHTML = html;
}

// --- FUNGSI BARU: MENAMPILKAN PROYEK MAHASISWA ---
function displayProjects() {
    if (!currentUser) return;
    const userData = mahasiswaData[currentUser];
    const projectList = document.getElementById('projectList');
    projectList.innerHTML = '';

    const projects = userData.proyek || [];
    if (projects.length === 0) {
        projectList.innerHTML = '<div class="no-data">Belum ada proyek yang tercatat.</div>';
        return;
    }

    let html = '';
    projects.forEach(project => {
        html += `
            <div class="project-item">
                <div class="project-title">${project.nama_proyek} <span class="project-year">(${project.tahun})</span></div>
                <div class="project-role">Peran: <strong>${project.peran}</strong></div>
                <div class="project-description">${project.deskripsi}</div>
            </div>
        `;
    });
    projectList.innerHTML = html;
}

// --- FUNGSI BARU: MENAMPILKAN DAFTAR DOSEN ---
function displayDosen() {
    const dosenList = document.getElementById('dosenList');
    dosenList.innerHTML = '';

    if (dosenData.length === 0) {
        dosenList.innerHTML = '<div class="no-data">Belum ada data dosen yang tersedia.</div>';
        return;
    }

    let html = `
        <table>
            <thead>
                <tr>
                    <th>Nama Dosen</th>
                    <th>NIP</th>
                    <th>Program Studi</th>
                    <th>Mata Kuliah Diampu</th>
                </tr>
            </thead>
            <tbody>
    `;
    dosenData.forEach(dosen => {
        html += `
            <tr>
                <td>${dosen.nama}</td>
                <td>${dosen.nip}</td>
                <td>${dosen.prodi}</td>
                <td>${dosen.mata_kuliah_ampu.join(', ')}</td>
            </tr>
        `;
    });
    html += `
            </tbody>
        </table>
    `;
    dosenList.innerHTML = html;
}


// --- FUNGSI UPLOAD FORM DAN EVENT LISTENER UTAMA ---
document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('uploadForm');

    if (uploadForm) {
        uploadForm.addEventListener('submit', function(e) {
            e.preventDefault();

            if (!currentUser) {
                alert('Silakan login terlebih dahulu');
                return;
            }

            const semester = document.getElementById('semesterInput').value.trim();
            const amount = parseInt(document.getElementById('paymentAmount').value);
            const token = document.getElementById('paymentToken').value.trim();
            const fileInput = document.getElementById('slipFile');
            const file = fileInput.files[0];
            const messageDiv = document.getElementById('uploadMessage');

            hideElement('uploadMessage');
            messageDiv.className = 'error hidden';

            if (!semester || isNaN(amount) || !token || !file) {
                messageDiv.textContent = 'Semua field (Semester, Nominal, Token, dan File) harus diisi!';
                messageDiv.className = 'error';
                showElement('uploadMessage');
                return;
            }

            if (!VALID_TOKENS.includes(token)) {
                messageDiv.textContent = 'Token pembayaran tidak valid! Mohon periksa kembali.';
                messageDiv.className = 'error';
                showElement('uploadMessage');
                return;
            }

            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
            if (!allowedTypes.includes(file.type)) {
                messageDiv.textContent = 'Format file tidak didukung. Gunakan JPG, PNG, atau PDF!';
                messageDiv.className = 'error';
                showElement('uploadMessage');
                return;
            }

            if (file.size > 5 * 1024 * 1024) { // 5MB
                messageDiv.textContent = 'Ukuran file maksimal 5MB!';
                messageDiv.className = 'error';
                showElement('uploadMessage');
                return;
            }

            const existingPayments = paymentData[currentUser] || [];
            const existingPayment = existingPayments.find(p => p.semester === semester);

            if (existingPayment) {
                messageDiv.textContent = 'Pembayaran untuk semester ini sudah ada!';
                messageDiv.className = 'error';
                showElement('uploadMessage');
                return;
            }

            const reader = new FileReader();
            reader.onload = function(event) {
                const fileDataURL = event.target.result;

                let status = 'Belum Lunas';
                if (amount >= UKT_AMOUNT) {
                    status = 'Lunas';
                } else if (amount > 0 && amount < UKT_AMOUNT) {
                    status = 'Parsial';
                }

                const newPayment = {
                    semester: semester,
                    amount: amount,
                    date: new Date().toISOString().split('T')[0],
                    status: status,
                    file: fileDataURL,
                    token: token
                };

                if (!paymentData[currentUser]) {
                    paymentData[currentUser] = [];
                }
                paymentData[currentUser].push(newPayment);

                savePaymentDataToLocalStorage();

                loadPaymentHistory();
                calculateStatistics();

                uploadForm.reset();

                messageDiv.textContent = `Slip pembayaran berhasil diupload untuk ${semester}. Status: ${status}`;
                messageDiv.className = 'success';
                showElement('uploadMessage');

                setTimeout(() => {
                    hideElement('uploadMessage');
                }, 5000);
            };
            reader.onerror = function() {
                messageDiv.textContent = 'Gagal membaca file. Silakan coba lagi.';
                messageDiv.className = 'error';
                showElement('uploadMessage');
            };
            reader.readAsDataURL(file);
        });

        document.getElementById('paymentAmount').addEventListener('input', function(e) {
            let value = e.target.value.replace(/[^0-9]/g, '');
            if (value) {
                const formatted = parseInt(value).toLocaleString('id-ID');
                e.target.value = value;

                let hint = e.target.parentNode.querySelector('.amount-hint');
                if (!hint) {
                    hint = document.createElement('small');
                    hint.className = 'amount-hint';
                    hint.style.color = '#666';
                    hint.style.fontSize = '12px';
                    e.target.parentNode.appendChild(hint);
                }
                hint.textContent = `Format: Rp ${formatted}`;
            } else {
                const existingHint = e.target.parentNode.querySelector('.amount-hint');
                if (existingHint) {
                    existingHint.remove();
                }
            }
        });
    }

    document.getElementById('nim').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            login();
        }
    });

    document.getElementById('password').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            login();
        }
    });
});

// Auto-focus pada field NIM saat halaman dimuat
window.addEventListener('load', function() {
    document.getElementById('nim').focus();
});

// Fungsi untuk debugging (hapus di production)
function debugShowAllData() {
    console.log('Mahasiswa Data:', mahasiswaData);
    console.log('Payment Data:', paymentData);
    console.log('Current User:', currentUser);
    console.log('LocalStorage Data:', localStorage.getItem('paymentDataUKT'));
    console.log('Dosen Data:', dosenData);
}
