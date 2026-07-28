const fs = require('fs');
const path = require('path');

const bgsSites = [
  {
    id: 1,
    name: 'Kaldera Batur I',
    category: 'Kaldera (Calderas)',
    subtitle: 'Cekungan Runtuhan Gunung Api Purba',
    description: 'Terbentuk akibat runtuhnya tubuh Gunung Batur Purba sekitar 30.000 tahun yang lalu. Kaldera ini merupakan salah satu struktur kaldera terbesar dan termegah di Bali yang menandai letusan dahsyat pada masa lampau.',
    image: '../img/p1.jpg',
    map: 'https://maps.app.goo.gl/Hk2qasbRag9yxdSx7'
  },
  {
    id: 2,
    name: 'Kaldera Batur II',
    category: 'Kaldera (Calderas)',
    subtitle: 'Kaldera di Dalam Kaldera',
    description: 'Terbentuk sekitar 20.000 tahun yang lalu akibat penurunan dasar Kaldera Batur I setelah letusan besar. Kaldera kedua ini membentuk bentang alam bertingkat yang khas di kawasan Batur UNESCO Global Geopark.',
    image: '../img/p2.jpg',
    map: 'https://maps.app.goo.gl/g6TwFHaWVjv977Qf7'
  },
  {
    id: 3,
    name: 'Kerucut I G. Batur',
    category: 'Kerucut Gunung Api & Pegunungan',
    subtitle: 'Puncak Tertinggi Gunung Batur',
    description: 'Merupakan puncak tertinggi (sekitar 1.717 mdpl) dengan kawah berdiameter 250 meter. Dari puncak ini, pengunjung dapat melihat panorama seluruh kaldera Batur dan aktivitas vulkanik yang masih berlangsung.',
    image: '../img/p3.jpg',
    map: 'https://maps.app.goo.gl/B4VSZHC7yzawZkWB8'
  },
  {
    id: 4,
    name: 'Kerucut II G. Batur',
    category: 'Kerucut Gunung Api & Pegunungan',
    subtitle: 'Empat Lubang Kawah Bergeser',
    description: 'Memiliki empat lubang kawah yang bergeser dari barat ke timur. Struktur kawah bertingkat dan bergeser ini menunjukkan evolusi letusan Gunung Batur dari waktu ke waktu.',
    image: '../img/p4.jpg',
    map: 'https://maps.app.goo.gl/GjF2JyLNTjpfTyyo9'
  },
  {
    id: 5,
    name: 'Kerucut III G. Batur',
    category: 'Kerucut Gunung Api & Pegunungan',
    subtitle: 'Kawah Lereng Selatan',
    description: 'Terbentuk di lereng selatan Kerucut II dengan kedalaman kawah 10-30 meter. Kerucut ini menunjukkan migrasi pusat aktivitas vulkanik Gunung Batur ke arah selatan.',
    image: '../img/p5.jpg',
    map: 'https://maps.app.goo.gl/xoZzrHhQMKaWmiap8'
  },
  {
    id: 6,
    name: 'Gunung Abang',
    category: 'Kerucut Gunung Api & Pegunungan',
    subtitle: 'Puncak Tertinggi di Tepian Kaldera',
    description: 'Sebuah kerucut parasit dengan ketinggian 2.152 mdpl yang sebagian tubuhnya terpotong saat Kaldera Batur I terbentuk. Gunung Abang merupakan titik tertinggi di kawasan Batur UNESCO Global Geopark.',
    image: '../img/p6.jpg',
    map: 'https://maps.app.goo.gl/HNbmxx4HdQKj91JC7'
  },
  {
    id: 7,
    name: 'Gunung Payang',
    category: 'Kerucut Gunung Api & Pegunungan',
    subtitle: 'Kerucut Soliter Batuapung',
    description: 'Kerucut soliter berbatuapung dasitik dengan tinggi sekitar 150 meter. Gunung Payang merupakan bukti aktivitas vulkanik eksplosif yang menghasilkan endapan batu apung yang kaya silika.',
    image: '../img/p7.jpg',
    map: 'https://maps.app.goo.gl/cAGXoDDToCAuBfXd6'
  },
  {
    id: 8,
    name: 'Sinder Sampeanwani',
    category: 'Kerucut Gunung Api & Pegunungan',
    subtitle: 'Endapan Skoria Erupsi Strombolian',
    description: 'Kerucut bermaterial skoria hasil erupsi Strombolian yang hampir mengelilingi Gunung Batur. Material kemerahan dan hitam di kawasan ini mencerminkan aktivitas lontaran lava pijar.',
    image: '../img/p8.jpg',
    map: 'https://maps.app.goo.gl/4DUA1tHtpykZ88Lf7'
  },
  {
    id: 9,
    name: 'Gunung Bunbulan',
    category: 'Kerucut Gunung Api & Pegunungan',
    subtitle: 'Saksi Pembentukan Kaldera II',
    description: 'Terbentuk bersamaan dengan Gunung Payang dari proses runtuhan pembentuk Kaldera Batur II. Struktur gunung ini memberikan petunjuk penting tentang evolusi geologi Kaldera Batur.',
    image: '../img/p9.jpg',
    map: 'https://maps.app.goo.gl/gCpVrnnkT63s1Unz7'
  },
  {
    id: 10,
    name: 'Sinder Yehmampeh',
    category: 'Kerucut Gunung Api & Pegunungan',
    subtitle: 'Erupsi Rekahan Basaltik',
    description: 'Terbentuk melalui rekahan dari erupsi magma basaltik dalam volume kecil. Situs ini memperlihatkan contoh struktur kerucut sinder berukuran kompak namun sangat khas.',
    image: '../img/p10.jpg',
    map: 'https://maps.app.goo.gl/o74ajsC1BXSRqNU56'
  },
  {
    id: 11,
    name: 'Bukit Puraknya',
    category: 'Bentang Alam Lainnya',
    subtitle: 'Bentang Alam Berbentuk Tanduk',
    description: 'Bentang alam berbentuk tanduk di area Toya Bungkah yang terbentuk dari longsoran dinding Kawah I bagian tenggara. Struktur ini menunjukkan proses geomorfologi longsoran raksasa (sector collapse) di masa lampau.',
    image: '../img/p11.jpg',
    map: 'https://maps.app.goo.gl/szpECEg3ZoBzp9Ho8'
  },
  {
    id: 12,
    name: 'Lava 1849',
    category: 'Formasi Aliran Lava (Lava Flows)',
    subtitle: 'Aliran Lava Aa Bersejarah',
    description: 'Aliran lava aa dengan permukaan kasar, retakan, dan bongkahan batuan hasil dari letusan Gunung Batur tahun 1849. Merupakan salah satu jejak aliran lava tertua yang tercatat secara bersejarah di Batur.',
    image: '../img/p12.jpg',
    map: 'https://maps.app.goo.gl/giPgkSCwGskoyJD29'
  },
  {
    id: 13,
    name: 'Lava 1888',
    category: 'Formasi Aliran Lava (Lava Flows)',
    subtitle: 'Fragmen Bertekstur Kerak Lava (Clinker)',
    description: 'Didominasi oleh fragmen bertekstur kerak lava (clinker) dari percikan lava saat letusan tahun 1888. Permukaannya yang tajam dan berongga mencerminkan pendinginan cepat aliran lava di permukaan.',
    image: '../img/p1.jpg',
    map: 'https://maps.app.goo.gl/tosTbwafzGTMfcZP6'
  },
  {
    id: 14,
    name: 'Lava 1904',
    category: 'Formasi Aliran Lava (Lava Flows)',
    subtitle: 'Jejak Lava Awal Abad ke-20',
    description: 'Aliran lava dari letusan tahun 1904 yang saat ini sebagian besar tertutup vegetasi dan lava yang lebih muda. Situs ini memperlihatkan suksesi ekologis di mana tumbuhan mulai menutupi batuan vulkanik baru.',
    image: '../img/p2.jpg',
    map: 'https://maps.app.goo.gl/AuDue9T9NZWgM8Np6'
  },
  {
    id: 15,
    name: 'Lava 1905',
    category: 'Formasi Aliran Lava (Lava Flows)',
    subtitle: 'Aliran Basal Lereng Selatan & Barat',
    description: 'Lava berkomposisi basal bertekstur clinker hasil letusan tahun 1905 yang menyebar luas di lereng selatan dan barat Gunung Batur. Aliran ini memperlihatkan tekstur permukaan yang sangat kasar.',
    image: '../img/p3.jpg',
    map: 'https://maps.app.goo.gl/G9EGohBXAeK2oMnA7'
  },
  {
    id: 16,
    name: 'Lava 1921',
    category: 'Formasi Aliran Lava (Lava Flows)',
    subtitle: 'Andesit Basaltik Lereng Selatan',
    description: 'Tersingkap di area sempit pada lereng selatan dan tersusun dari batuan andesit basaltik hasil erupsi tahun 1921. Komposisi mineralnya memberikan gambaran perubahan sifat magma Gunung Batur.',
    image: '../img/p4.jpg',
    map: 'https://maps.app.goo.gl/m4fu9f5sCLxsfEUL7'
  },
  {
    id: 17,
    name: 'Lava 1926',
    category: 'Formasi Aliran Lava (Lava Flows)',
    subtitle: 'Aliran Lava Terhalang Dinding Kaldera',
    description: 'Aliran lava yang menyebar ke barat daya hingga selatan sebelum terhalang dan berbelok oleh dinding Kaldera Batur II pada letusan tahun 1926. Letusan ini menimbun desa lama Batur dan Pura Ulun Danu Batur.',
    image: '../img/p5.jpg',
    map: 'https://maps.app.goo.gl/rsAKiLs1HZ8ScRNPA'
  },
  {
    id: 18,
    name: 'Lava 1963',
    category: 'Formasi Aliran Lava (Lava Flows)',
    subtitle: 'Cakupan Aliran Lava Terluas',
    description: 'Memiliki cakupan paling luas di kawasan Batur dengan warna abu-abu gelap hingga abu-abu hasil letusan besar tahun 1963. Hamparan batu hitam (Black Lava) ini menjadi salah satu daya tarik geoturisme utama di Bali.',
    image: '../img/p6.jpg',
    map: 'https://maps.app.goo.gl/pSpNmFSoASVTzGYv5'
  },
  {
    id: 19,
    name: 'Lava 1968',
    category: 'Formasi Aliran Lava (Lava Flows)',
    subtitle: 'Aliran Lava Selatan 2,2 km',
    description: 'Mengalir ke arah selatan sejauh 2,2 km dan menutupi area seluas sekitar 670.000 m² pada letusan tahun 1968. Aliran ini memperlihatkan batas yang jelas dengan vegetasi di sekitarnya.',
    image: '../img/p7.jpg',
    map: 'https://maps.app.goo.gl/2AnzbKQafRnJSpRy8'
  },
  {
    id: 20,
    name: 'Lava 1974',
    category: 'Formasi Aliran Lava (Lava Flows)',
    subtitle: 'Lava Bantal Hitam Keabu-abuan',
    description: 'Memiliki warna hitam keabu-abuan dan tekstur khas berupa struktur menyerupai "lava bantal" serta bongkahan aa hasil letusan terakhir Gunung Batur tahun 1974.',
    image: '../img/p8.jpg',
    map: 'https://maps.app.goo.gl/ionDzqs3w2fPL63z9'
  },
  {
    id: 21,
    name: 'Danau Batur',
    category: 'Bentang Alam Lainnya',
    subtitle: 'Danau Kaldera Sabit Raksasa',
    description: 'Danau kaldera berbentuk sabit dengan kedalaman maksimum sekitar 81 meter yang terletak di dasar Kaldera Batur I. Danau ini merupakan danau terbesar di Bali dan sumber air vital bagi ekosistem sekitarnya.',
    image: '../img/p9.jpg',
    map: 'https://maps.app.goo.gl/tghCLEyWeSeaqCRW8'
  }
];

const generateHtml = (site) => `<!DOCTYPE html>
<html lang="id">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="Batur UNESCO Global Geopark - ${site.name}">
  <title>BGS ${site.id} - ${site.name} | Geopark</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet">
  <link href="../css/bootstrap.css" rel="stylesheet">
  <link href="../css/font-awesome.min.css" rel="stylesheet">
  <style>
    body {
      padding-top: 100px;
      font-family: 'Inter', sans-serif;
      background-color: #f8f9fa;
    }
    h1, h2, h3, h4, h5, h6, .navbar-brand, .badge-cat {
      font-family: 'Outfit', sans-serif;
    }
    /* Floating Pill Navbar */
    .floating-navbar {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      max-width: 1100px;
      background: transparent;
      backdrop-filter: blur(0px);
      -webkit-backdrop-filter: blur(0px);
      border-radius: 50px;
      padding: 12px 35px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: none;
      z-index: 9999;
      border: 1px solid transparent;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .floating-navbar.scrolled {
      background: rgba(226, 232, 240, 0.95);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      padding: 10px 35px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.65);
    }
    .floating-navbar .nav-brand {
      font-family: 'Outfit', sans-serif;
      font-size: 22px;
      font-weight: 800;
      color: #1e293b;
      text-decoration: none;
      display: flex;
      align-items: center;
      letter-spacing: 0.5px;
    }
    .floating-navbar .nav-links {
      display: flex;
      align-items: center;
      gap: 32px;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .floating-navbar .nav-links li a {
      font-family: 'Inter', sans-serif;
      font-size: 15px;
      font-weight: 600;
      color: #334155;
      text-decoration: none;
      padding: 6px 4px;
      position: relative;
      transition: color 0.2s ease;
      display: inline-block;
    }
    .floating-navbar .nav-links li a:hover,
    .floating-navbar .nav-links li a.active {
      color: #0284c7;
    }
    .floating-navbar .nav-links li a.active::after,
    .floating-navbar .nav-links li a:hover::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2.5px;
      background-color: #0284c7;
      border-radius: 2px;
    }
    .floating-navbar .nav-links li .lang-btn {
      background: #0284c7;
      color: #ffffff !important;
      padding: 6px 18px !important;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 600;
      transition: all 0.2s ease;
    }
    .floating-navbar .nav-links li .lang-btn:hover {
      background: #0369a1;
      transform: translateY(-1px);
    }
    .floating-navbar .nav-links li .lang-btn::after {
      display: none !important;
    }
    @media (max-width: 768px) {
      .floating-navbar {
        width: 94%;
        padding: 10px 20px;
      }
      .floating-navbar .nav-links {
        gap: 16px;
      }
      .floating-navbar .nav-links li a {
        font-size: 14px;
      }
    }
    .card-box {
      background: #fff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.05);
      margin-bottom: 30px;
    }
    .geosite-img {
      border-radius: 10px;
      width: 100%;
      max-height: 450px;
      object-fit: cover;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    .badge-cat {
      background: #0284c7;
      color: #fff;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 500;
      display: inline-block;
      margin-bottom: 15px;
    }
    .btn-maps {
      background: #0f172a;
      color: #fff !important;
      padding: 10px 22px;
      border-radius: 25px;
      font-weight: 600;
      text-decoration: none;
      display: inline-block;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.25);
    }
    .btn-maps:hover {
      background: #1e293b;
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(15, 23, 42, 0.35);
    }
    .btn-details {
      background: linear-gradient(135deg, #0284c7, #0369a1);
      color: #fff !important;
      padding: 10px 22px;
      border-radius: 25px;
      font-weight: 600;
      text-decoration: none;
      display: inline-block;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(2, 132, 199, 0.35);
    }
    .btn-details:hover {
      background: linear-gradient(135deg, #0369a1, #1e40af);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(2, 132, 199, 0.45);
    }
  </style>
</head>

<body>

  <!-- Floating Navigation -->
  <nav class="floating-navbar">
    <a class="nav-brand" href="../index.html">
      Geohub
    </a>
    <ul class="nav-links">
      <li><a href="../index.html">Home</a></li>
      <li><a href="../index.html#portfolio" class="active">Geosite</a></li>
      <li><a href="#" id="lang-toggle-btn" class="lang-btn">indonesia</a></li>
    </ul>
  </nav>

  <!-- Page Content -->
  <div class="container my-5">

    <div class="row">
      <div class="col-lg-7 mb-4">
        <img class="geosite-img" src="${site.image}" alt="${site.name}">
      </div>

      <div class="col-lg-5">
        <div class="card-box">
          <span class="badge-cat">${site.category}</span>
          <h1 class="h2 font-weight-bold">BGS ${site.id} - ${site.name}</h1>
          <h5 class="text-muted mb-4">${site.subtitle}</h5>
          
          <h4 class="h5 font-weight-bold mt-4">Deskripsi Geologi</h4>
          <p class="text-justify" style="line-height: 1.8; color: #444;">${site.description}</p>
          
          <hr class="my-4">
          
          <div class="d-flex justify-content-between align-items-center flex-wrap">
            <div class="mb-2">
              <small class="text-muted d-block">Lokasi &amp; Riset</small>
              <strong>Batur UNESCO Global Geopark</strong>
            </div>
            <div class="mt-2">
              <a href="${site.map}" target="_blank" class="btn-maps mr-2 mb-2">
                <i class="fa fa-map-marker mr-1"></i> Google Maps
              </a>
              <a href="https://baturunescoglobalgeopark.org/" target="_blank" rel="noopener noreferrer" class="btn-details mb-2">
                <i class="fa fa-external-link mr-1"></i> For More Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Related Pictures -->
    <div class="card-box mt-4">
      <h3 class="h4 font-weight-bold mb-4">Galeri Batur Geopark</h3>
      <div class="row">
        <div class="col-md-3 col-sm-6 mb-3">
          <img class="img-fluid rounded shadow-sm" src="../img/p1.jpg" alt="Batur 1">
        </div>
        <div class="col-md-3 col-sm-6 mb-3">
          <img class="img-fluid rounded shadow-sm" src="../img/p2.jpg" alt="Batur 2">
        </div>
        <div class="col-md-3 col-sm-6 mb-3">
          <img class="img-fluid rounded shadow-sm" src="../img/p3.jpg" alt="Batur 3">
        </div>
        <div class="col-md-3 col-sm-6 mb-3">
          <img class="img-fluid rounded shadow-sm" src="../img/p4.jpg" alt="Batur 4">
        </div>
      </div>
    </div>

  </div>

  <!-- Footer -->
  <footer class="py-4 bg-dark text-white-50 text-center">
    <div class="container">
      <small>Copyright &copy; Geohub - Batur UNESCO Global Geopark</small>
    </div>
  </footer>

  <script src="../js/vendor/jquery-2.2.4.min.js"></script>
  <script src="../js/vendor/bootstrap.min.js"></script>
  <script>
    (function() {
      var currentLang = localStorage.getItem('site_lang') || 'en';
      var btn = document.getElementById('lang-toggle-btn');
      if (btn) {
        btn.textContent = (currentLang === 'id') ? 'eng' : 'indonesia';
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          var nextLang = (currentLang === 'id') ? 'en' : 'id';
          localStorage.setItem('site_lang', nextLang);
          window.location.href = '../index.html';
        });
      }

      // Floating navbar scroll effect
      window.addEventListener('scroll', function() {
        var nav = document.querySelector('.floating-navbar');
        if (nav) {
          if (window.scrollY > 30) {
            nav.classList.add('scrolled');
          } else {
            nav.classList.remove('scrolled');
          }
        }
      });
    })();
  </script>
</body>

</html>`;

const outputDir = path.join(__dirname, 'Pages-inside');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

bgsSites.forEach((site) => {
  const fileName = `BGS${site.id}-Info.html`;
  const filePath = path.join(outputDir, fileName);
  fs.writeFileSync(filePath, generateHtml(site), 'utf8');
  console.log(`Generated: ${fileName} -> ${site.name}`);
});

console.log('Successfully generated all 21 BGS geosite profile pages!');
