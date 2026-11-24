// 16 Data Kenangan & Diary
const diaryEntries = [
    {
        location: "Perpustakaan nasional indonesia",
        title: "study date",
        caption: "momen belajar bareng di lantai paling atas perpusnas",
        image: "images/perpusnas1.jpeg",
        story: "yeah kamu pasti inget moment foto foto lucu di lantai paling atas perpusnas ini"
    },
    {
        location: "TIM | Cikini",
        title: "Taman Ismail Marzuki",
        caption: "Keliling tim sambil mukbang",
        image: "images/tim1.jpeg",
        story: "moment di mana ekspresi kamu lucu banget karna efek kekenyangan di sini,belajar dikit sisah nya kita kuliner njir..."
    },
    {
        location: "gelora bung karno",
        title: "main raket",
        caption: "Momen main raket di gbk",
        image: "images/badminton.jpeg",
        fit: "contain",
        story: "di sini kamu udah mulai terbuka ke aku dan first aku ngeliat kamu ketawa lepas banget pas main raket, andai moment ini bisa di ulang ;)"
    },
    {
        location: "gelora bung karno",
        title: "first date",
        caption: "fisr date with gbk",
        image: "images/gbk1.jpeg",
        story: "gatau aku mau ngomong apa pokok nya kita di sini sama sama canggung dan first aku ngumpulin keberanian buat pegang tangan kamu"
    },
    {
        location: "gelora bung karno",
        title: "first date",
        caption: "first date with gbk",
        image: "images/gbk2.jpeg",
        story: "wkwkw kamu di sini lucu banget tiba tiba sandaran ke aku and kamu belum siap aku foto tapi udah keburu aku pencet"
    },
    {
        location: "gelora bung karno",
        title: "first date",
        caption: "first date with gbk",
        image: "images/gbk3.jpeg",
        story: "seneng banget pas kamu udah mulai notice ke kamera dan ngeluarin ekspresi gemmeshh "
    },
    {
        location: "perpustakaan nasional indonesia",
        title: "study date",
        caption: "bengong di atas rooftop emang seru banget",
        image: "images/perpusnas2.jpeg",
        story: "ini moment di mana tujuan kita belajar tapi keburu badmood karna kelamaan di tj wkwk dan malah foto foto di atas rooftop"
    },
    {
        location: "perpustakaan nasional indonesia",
        title: "study date",
        caption: "aku serius kamu misterius",
        image: "images/perpusnas4.jpeg",
        story: "ini paling gokil sih aku serius ngerjain projek karna udah lewat deadline dan kamu sibuk nontoh masha and the bear"
    },
    {
        location: "perpustakaan nasional indonesia",
        title: "foto foto di artefak",
        caption: "Momen foto di artefak perpusnas",
        image: "images/perpusnas5.jpeg",
        story: "disini lucu plss kamu malu malu buat fotoin aku diem diem dari belakang haha  "
    },
    {
        location: "perpustakaan nasional indonesia",
        title: "foto webcam",
        caption: "makasih kasih sudah hadir",
        image: "images/perpusnas3.jpeg",
        story: "jujur aja di sini aku mati gaya buat foto bareng tapi gapap selagi foto sama kamu aku seneng"
    },
    {
        location: "foto random aja",
        title: "transum",
        caption: "ini asal foto sih",
        image: "images/fotorandomtj.jpeg",
        story: "aku asal jepret ini tapi ekspresi kamu lucu banget karna lagi fokus sama hp wkwk"
    },
    {
        location: "Perpustakaan nasional indonesia",
        title: "study date",
        caption: "webcam",
        image: "images/perpusnas6.jpeg",
        story: "ini foto favorit aku pas kita mainn "
    },
    {
        location: "perpustakaan nasional indonesia",
        title: "study",
        caption: "webcam",
        image: "images/perpusnas7.jpeg",
        story: "ini juga sih karna banyakk slide gitu dan favorit aku juga"
    },
    {
        location: "bingxue-binus",
        title: "makan es krim",
        caption: "salah satu momen paling random karna ajak debby",
        image: "images/bingxue.jpeg",
        story: "momen di mana kamu di panggil bunda sama ibu ibu random karna ngajak debby"
    },
    {
        location: "perpustakaan nasional indonesia",
        title: "webcam lagi",
        caption: "foto lucu",
        image: "images/perpusnas8.jpeg",
        story: "sumpill ini lucu banget anjr efek nyaa dan kamu jugaa haha"
    },
    {
        location: "perpustakaan nasional indonesia",
        title: "webcam",
        caption: "Sampai jumpa di versi terbaik",
        image: "images/perpusnas9.jpeg",
        story: "ini konyol tapi gemmesh njir haha efek nya itu lohh bikin aku ke inget moment foto bareng sama kamuu "
    }
];

// Animasi Buka Amplop Landing Page
const envelope = document.getElementById('envelope');
const envelopeScreen = document.getElementById('envelope-screen');
const mainContent = document.getElementById('main-content');

if (envelope) {
    envelope.addEventListener('click', () => {
        envelope.classList.add('open');
        setTimeout(() => {
            envelopeScreen.classList.add('fade-out');
            mainContent.classList.add('visible');
        }, 1250);
    });
}

// Logic Tab Navigasi
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(btn.dataset.target).classList.add('active');
    });
});

// Render 16 Polaroid
const board = document.getElementById('polaroid-board');
const modal = document.getElementById('diary-modal');
const closeBtn = document.getElementById('close-modal');

diaryEntries.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'polaroid-item';
    const num = String(index + 1).padStart(2, '0');
    const imgStyle = item.fit === "contain" 
        ? 'style="object-fit: contain; background: #141312;"' 
        : '';
    
    card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" ${imgStyle} loading="lazy" onerror="this.src='https://placehold.co/600x600/2a2725/c8a97e?text=Foto+%23${num}'">
        <p class="polaroid-caption">${item.caption}</p>
        <span class="polaroid-meta">${item.location}</span>
    `;

    card.addEventListener('click', () => {
        const modalImg = document.getElementById('modal-img');
        modalImg.src = item.image;
        modalImg.style.objectFit = item.fit || 'cover';
        modalImg.style.background = item.fit === 'contain' ? '#141312' : 'transparent';

        document.getElementById('modal-loc').textContent = item.location;
        document.getElementById('modal-title').textContent = item.title;
        document.getElementById('modal-story').textContent = item.story;
        document.getElementById('modal-caption').textContent = `"${item.caption}"`;
        modal.classList.add('active');
    });

    board.appendChild(card);
});

closeBtn.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
});