// Javascript Sidebar
function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("btn_open").style.display = "none";
    document.getElementById("btn_close").style.display = "block";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("btn_open").style.display = "block";
    document.getElementById("btn_close").style.display = "none";
}

// Javascript Contact OnClick
function openContact() {
    document.getElementById("contact_onclick").style.top = "0";
}

function closeContact() {
    document.getElementById("contact_onclick").style.top = "-1000px";
}

// Fungsi untuk memeriksa dan memperbarui status tombol berdasarkan ukuran layar
function updateSidebarButtonStatus() {
    const isMobileView = window.innerWidth <= 991; // Atur sesuai dengan media query Anda

    if (isMobileView) {
        // Untuk mobile dan tablet, tombol hamburger dan tombol close tetap berfungsi
        if (document.getElementById("sidebar").style.width === "250px") {
            document.getElementById("btn_open").style.display = "none";
            document.getElementById("btn_close").style.display = "block";
            document.getElementById("contact_onclick").style.top = "0";
        } else {
            document.getElementById("btn_open").style.display = "block";
            document.getElementById("btn_close").style.display = "none";
        }
    } else {
        // Untuk desktop, sembunyikan sidebar dan tombol close
        document.getElementById("sidebar").style.width = "0";
        document.getElementById("btn_open").style.display = "none";
        document.getElementById("btn_close").style.display = "none";
        document.getElementById("contact_onclick").style.top = "-800px";
    }
}

// Event listener untuk memperbarui status tombol saat ukuran layar berubah
window.addEventListener("resize", updateSidebarButtonStatus);

// Memanggil fungsi untuk memastikan tombol tampil sesuai dengan ukuran layar saat halaman pertama kali dimuat
window.addEventListener("load", updateSidebarButtonStatus);


// Typing Text
const texts = ["Web Designer", "Programmer","Ultramen", "Supermen"];
let currentTextIndex = 0;
let currentCharIndex = 0;
const typingSpeed = 150;
const eraseSpeed = 100;
const delayBetweenTexts = 1000;
const typingElement = document.getElementById("typing-text");

function typeText() {
    if (currentCharIndex < texts[currentTextIndex].length) {
        typingElement.textContent += texts[currentTextIndex].charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, delayBetweenTexts);
    }
}

function eraseText() {
    if (currentCharIndex > 0) {
        typingElement.textContent = texts[currentTextIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(eraseText, eraseSpeed);
    } else {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        setTimeout(typeText, typingSpeed);
    }
}

// Mulai Animasi
typeText();

// Progress Skills
document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll('.skills');

    skills.forEach(skill => {
        const progress = skill.getAttribute('data-value'); // Mengambil nilai persentase
        const circle = skill.querySelector('.circle');
        const circumference = 2 * Math.PI * circle.r.baseVal.value; // Menghitung keliling lingkaran
        const offset = circumference - (progress / 100) * circumference; // Menghitung stroke-dashoffset berdasarkan persentase

        // Menampilkan nilai persentase di tengah lingkaran
        skill.querySelector('.skills_progres h5').textContent = `${progress}%`;

        // Mengubah stroke-dashoffset untuk menggambar progress
        circle.style.strokeDashoffset = offset;
    });
});


// Slider Progres
document.addEventListener("DOMContentLoaded", () => {
    // Ambil semua skill yang ada di dalam container
    const skills = document.querySelectorAll('.skills');
    const leftButton = document.getElementById('left_button');
    const rightButton = document.getElementById('right_button');
    const totalSkills = skills.length;
    let currentIndex = 0;

    // Fungsi untuk menyembunyikan semua skill
    function hideAllSkills() {
        skills.forEach(skill => {
            skill.style.display = 'none';
        });
    }

    // Fungsi untuk menampilkan skill sesuai dengan ukuran layar
    function showSkills() {
        hideAllSkills();
        
        const isSmallScreen = window.innerWidth <= 576; // max-width: 576px
        const isMediumScreen = window.innerWidth >= 577 && window.innerWidth <= 768; // 577px - 768px
        const itemsToShow = isSmallScreen ? 1 : isMediumScreen ? 2 : 3; // Menampilkan 1, 2 atau 3 skill

        // Menampilkan skill sesuai dengan currentIndex (akan menampilkan 1 skill untuk small screen, 2 untuk tablet, 3 untuk desktop)
        for (let i = currentIndex; i < currentIndex + itemsToShow; i++) {
            if (i < totalSkills) {
                skills[i].style.display = 'flex';
            }
        }

        // Update tombol berdasarkan kondisi
        updateButtonStatus(itemsToShow);
    }

    // Fungsi untuk memperbarui status tombol kiri dan kanan
    function updateButtonStatus(itemsToShow) {
        // Tombol kiri
        if (currentIndex === 0) {
            leftButton.style.color = 'rgba(255, 255, 255, 0.5)';
            leftButton.style.pointerEvents = 'none';
        } else {
            leftButton.style.color = '#fff';
            leftButton.style.pointerEvents = 'auto';
        }

        // Tombol kanan
        if (currentIndex + itemsToShow >= totalSkills) {
            rightButton.style.color = 'rgba(255, 255, 255, 0.5)';
            rightButton.style.pointerEvents = 'none';
        } else {
            rightButton.style.color = '#fff';
            rightButton.style.pointerEvents = 'auto';
        }
    }

    // Fungsi untuk mengupdate slider berdasarkan ukuran layar
    function updateSlider() {
        showSkills(); // Memanggil showSkills untuk update tampilan berdasarkan ukuran layar
    }

    // Tombol kiri untuk berpindah ke skill sebelumnya
    leftButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSkills - 1; // Jika di awal, kembali ke skill terakhir
        }
        showSkills();
    });

    // Tombol kanan untuk berpindah ke skill berikutnya
    rightButton.addEventListener('click', () => {
        if (currentIndex + 1 < totalSkills) {
            currentIndex++;
        } else {
            currentIndex = 0; // Jika di akhir, kembali ke skill pertama
        }
        showSkills();
    });

    // Memanggil updateSlider saat pertama kali load atau saat ukuran layar berubah
    window.addEventListener("load", updateSlider);
    window.addEventListener("resize", updateSlider);
});

// JS Copyright Year
document.getElementById('year').textContent = new Date().getFullYear();
