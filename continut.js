/* =====================================================================
   CONȚINUTUL SITE-ULUI — acesta e SINGURUL fișier pe care îl modifici.

   Reguli simple:
   • Textul stă între ghilimele: "așa". Dacă vrei ghilimele în text,
     folosește „acestea” (românești) sau «acestea» (rusești).
   • După fiecare rând de tipul  cheie: "valoare"  urmează o virgulă.
   • ro = română, ru = rusă. Dacă lași ru: "" gol, se arată textul în română.
   • Un câmp lăsat gol ("") nu apare deloc pe site.
   • Tot ce începe cu // e notiță pentru tine, site-ul n-o citește.
   ===================================================================== */

window.SITE = {
  nume: { ro: "Lidia Condratiuc", ru: "Лидия Кондратюк" },
  rol: { ro: "Designer de interior și mobilier", ru: "Дизайнер интерьеров и мебели" },
  oras: { ro: "Chișinău, Moldova", ru: "Кишинев, Молдова" },

  // Semnătura Clover din subsolul site-ului. Pune  arataClover: false  ca s-o ascunzi.
  arataClover: true,

  contact: {
    email: "condratiuclidia8@gmail.com",
    telefon: "+373 67 180 952",
    // Completează doar ce folosești (linkul întreg). Gol = nu apare.
    instagram: "",   // ex.: "https://www.instagram.com/numele_tau"
    telegram: "",    // ex.: "https://t.me/numele_tau"
    whatsapp: "",    // ex.: "https://wa.me/37367180952"
    viber: "",       // ex.: "viber://chat?number=%2B37367180952"
    behance: "",     // ex.: "https://www.behance.net/numele_tau"
  },

  // Fișierele CV din folderul cv/
  cv: {
    ro: "cv/Lidia_Condratiuc_CV_RO.pdf",
    ru: "cv/Lidia_Condratiuc_CV_RU.pdf",
  },

  // Poza mare de pe prima pagină: "folderul-proiectului/numele-pozei"
  copertaSite: "dubai/01.jpg",

  texte: {
    motto: { ro: "Frumos de privit. Ușor de trăit.", ru: "Красиво смотреть. Легко жить." },
    intro: {
      ro: "Proiectez interioare și mobilier la comandă — de la discuția cu clientul și măsurătorile la fața locului până la randări 3D și desene cu cote pentru producție.",
      ru: "Проектирую интерьеры и мебель на заказ — от выяснения пожеланий клиента и замеров на объекте до 3D-визуализаций и чертежей с размерами для производства.",
    },

    // Pașii din secțiunea „Cum lucrez”. Poți șterge sau adăuga pași.
    pasi: [
      { titlu: { ro: "Discuție și măsurători", ru: "Знакомство и замеры" },
        text:  { ro: "Aflu cum trăiești și ce îți trebuie, apoi măsor spațiul la fața locului.",
                 ru: "Узнаю, как вы живете и что вам нужно, и делаю замеры на объекте." } },
      { titlu: { ro: "Concept", ru: "Концепция" },
        text:  { ro: "Propun planificarea, stilul, materialele și lumina.",
                 ru: "Предлагаю планировку, стиль, материалы и освещение." } },
      { titlu: { ro: "Proiectarea mobilierului", ru: "Проектирование мебели" },
        text:  { ro: "Fiecare corp e gândit la centimetru: dimensiuni, umplutură interioară, fațade, iluminare.",
                 ru: "Каждый модуль продуман до сантиметра: размеры, внутреннее наполнение, фасады, подсветка." } },
      { titlu: { ro: "Randări 3D", ru: "3D-визуализация" },
        text:  { ro: "Vezi încăperea înainte de începerea lucrărilor.",
                 ru: "Вы видите помещение до начала работ." } },
      { titlu: { ro: "Desene tehnice", ru: "Чертежи" },
        text:  { ro: "Desene cu cote pentru producție și montaj.",
                 ru: "Чертежи с размерами для производства и монтажа." } },
    ],

    // Secțiunea „Despre mine”. Fiecare rând din listă = un paragraf.
    despre: {
      ro: [
        "Sunt designer de mobilier și interior cu circa 3 ani de experiență. Realizez proiecte de mobilier la comandă, de la măsurători la fața locului până la vizualizare.",
        "Am făcut parte din echipa de dezvoltare a unui program de proiectare a mobilierului și interiorului: am creat peste 200 de module parametrice pentru biblioteca acestuia în SketchUp Dynamic Components. Am răspuns de testare și am susținut prezentări ale programului pentru clienți din Moldova, Uzbekistan, Kazahstan și Georgia.",
      ],
      ru: [
        "Дизайнер мебели и интерьеров с опытом работы около 3 лет. Проектирую мебель на заказ: от замеров на объекте до визуализации.",
        "Входила в команду разработки программы для проектирования мебели и интерьеров: создала более 200 параметрических модулей для ее библиотеки в SketchUp Dynamic Components. Отвечала за тестирование и проводила презентации программы для клиентов из Молдовы, Узбекистана, Казахстана и Грузии.",
      ],
    },

    // Cifrele din „Despre mine” (toate din CV).
    cifre: [
      { numar: "~3", text: { ro: "ani de experiență", ru: "года опыта" } },
      { numar: "200+", text: { ro: "module parametrice de mobilier", ru: "параметрических модулей мебели" } },
      { numar: "4", text: { ro: "țări — prezentări pentru clienți", ru: "страны — презентации для клиентов" } },
      { numar: "22", text: { ro: "lecții video — structură și scenarii", ru: "видеоурока — структура и сценарии" } },
    ],

    programe: {
      ro: "SketchUp (Dynamic Components), Enscape, LayOut. Nivel de bază: AutoCAD, 3ds Max, Photoshop.",
      ru: "SketchUp (Dynamic Components), Enscape, LayOut. Базовый уровень: AutoCAD, 3ds Max, Photoshop.",
    },
    limbi: { ro: "Română (maternă), rusă (fluent)", ru: "Румынский (родной), русский (свободно)" },

    contactText: {
      ro: "Sunt deschisă pentru un loc de muncă în design de interior și mobilier și pentru proiecte la comandă. Scrie-mi sau sună-mă.",
      ru: "Открыта к работе в сфере дизайна интерьеров и мебели и к проектам на заказ. Пишите или звоните.",
    },
  },
};


/* =====================================================================
   PROIECTELE — în ordinea în care apar pe site.

   Cum adaugi un proiect nou (detaliat în GHID):
   1. Fă un folder nou în  imagini/proiecte/  (ex.: dormitor-alb) și pune în el
      pozele: 01.jpg, 02.jpg, 03.jpg … (în ordinea în care vrei să apară).
      Apasă „Verifica site-ul”: proiectul apare deja, cu numele folderului
      drept titlu („Dormitor alb”).
   2. Ca să aibă titlu frumos, descriere și traducere în rusă: copiază un bloc
      { … } de mai jos, de la acolada de deschidere până la cea de închidere
      cu virgulă, lipește-l unde vrei să apară și schimbă textele.
   Un folder șters sau golit = proiectul dispare singur de pe site.

   Câmpuri:
   • id        – numele folderului cu poze (litere mici, fără spații și diacritice)
   • categorie – "interior" sau "bucatarie" (pentru filtrul de pe site)
   • an, suprafata ("18 m²"), locatie – apar sub titlu; gol = nu apar
   • stadiu    – "concept" (doar randări) sau "realizat" (mobila e făcută);
                 gol = nu apare
   • coperta   – poza de pe cartonaș
   • poze      – CEL MAI SIMPLU: nu scrii rândul deloc → se arată toate pozele
                 din folder, în ordinea numelor (01, 02, 03…).
                 SAU un număr (ex.: 12 = de la 01.jpg la 12.jpg)
                 SAU o listă: ["01.jpg", "02.jpg", …]. În listă, un rând care
                 începe cu  #  devine subtitlu: "# Română | Русский"
   ===================================================================== */

window.PROIECTE = [
  {
    id: "dubai",
    categorie: "interior",
    titlu: { ro: "Concept de apartament pentru o expoziție în Dubai", ru: "Концепция квартиры для выставки в Дубае" },
    scurt: { ro: "Bucătărie, living și dormitor în două direcții stilistice", ru: "Кухня, гостиная и спальня в двух стилистических направлениях" },
    descriere: {
      ro: "Conceptul de interior și randările pentru un proiect de expoziție din Dubai: bucătărie, living și dormitor, în două direcții stilistice. Prima — piatră, lemn și metal negru; a doua — tonuri calde și deschise, lamele de lemn și lumină difuză. Panoramele 360° și turul VR le-am realizat împreună cu echipa.",
      ru: "Концепция интерьера и рендеры для выставочного проекта в Дубае: кухня, гостиная и спальня в двух стилистических направлениях. Первое — камень, дерево и черный металл; второе — теплые светлые тона, деревянные рейки и мягкий свет. Панорамы 360° и VR-тур создавала вместе с командой.",
    },
    an: "2025",
    suprafata: "",
    stadiu: "concept",
    locatie: { ro: "Dubai, EAU", ru: "Дубай, ОАЭ" },
    rol: { ro: "Concept interior, randări", ru: "Концепция интерьера, рендеры" },
    coperta: "03.jpg",
    poze: [
      "02.jpg",
      "# Direcția I — piatră, lemn și metal | Направление I — камень, дерево и металл",
      "03.jpg", "04.jpg", "05.jpg", "06.jpg",
      "01.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg",
      "11.jpg", "12.jpg", "13.jpg", "14.jpg",
      "# Direcția II — tonuri deschise și lemn | Направление II — светлые тона и дерево",
      "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg",
    ],
  },

  {
    id: "bucatarie-perete-verde",
    categorie: "bucatarie",
    titlu: { ro: "Bucătărie-sufragerie cu perete verde", ru: "Кухня-столовая с зеленой стеной" },
    scurt: { ro: "Fațade negre, lemn și piatră", ru: "Черные фасады, дерево и камень" },
    descriere: {
      ro: "Bucătărie liniară pe tot peretele, cu fațade negre și zonă de lucru din lemn, deschisă spre sufragerie. Accentul încăperii este peretele din piatră cu un cerc verde iluminat. Proiectul include vederea mobilierului cu fațadele deschise și desenele tehnice cu cote.",
      ru: "Линейная кухня во всю стену с черными фасадами и рабочей зоной под дерево, открытая в столовую. Акцент помещения — каменная стена с зеленым кругом и подсветкой. В проекте — вид мебели с открытыми фасадами и чертежи с размерами.",
    },
    an: "",
    suprafata: "",
    stadiu: "",
    locatie: { ro: "", ru: "" },
    rol: { ro: "Proiectarea mobilierului, randări, desene tehnice", ru: "Проектирование мебели, рендеры, чертежи" },
    coperta: "01.jpg",
    poze: [
      "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg",
      "# Mobilierul cu fațadele deschise | Мебель с открытыми фасадами",
      "09.jpg", "10.jpg",
      "# Desene tehnice | Чертежи",
      "11.jpg", "12.jpg", "13.jpg", "14.jpg",
    ],
  },

  {
    id: "bucatarie-rafturi-metalice",
    categorie: "bucatarie",
    titlu: { ro: "Bucătărie cu vitrine metalice și zonă de zi", ru: "Кухня с металлическими витринами и зоной отдыха" },
    scurt: { ro: "Profil negru, sticlă și lemn închis", ru: "Черный профиль, стекло и темное дерево" },
    descriere: {
      ro: "Bucătărie cu coloane-vitrină din profil metalic negru, fațade cu textură de lemn și blat cu model de marmură, cu frigider side-by-side între coloane. Proiectul continuă cu zona de zi și sufrageria.",
      ru: "Кухня с колоннами-витринами из черного металлического профиля, фасадами с текстурой дерева и столешницей под мрамор, с холодильником side-by-side между колоннами. Проект продолжается гостиной и столовой.",
    },
    an: "",
    suprafata: "",
    stadiu: "",
    locatie: { ro: "", ru: "" },
    rol: { ro: "Proiectarea mobilierului, randări", ru: "Проектирование мебели, рендеры" },
    coperta: "01.jpg",
    poze: [
      "01.jpg", "02.jpg", "03.jpg", "04.jpg",
      "# Mobilierul cu fațadele deschise | Мебель с открытыми фасадами",
      "05.jpg", "06.jpg", "07.jpg", "08.jpg",
      "# Zona de zi | Гостиная",
      "09.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg",
    ],
  },

  {
    id: "living-bucatarie-insula",
    categorie: "interior",
    titlu: { ro: "Living cu bucătărie și insulă", ru: "Гостиная с кухней и островом" },
    scurt: { ro: "Spațiu deschis în gri și bej", ru: "Открытое пространство в сером и бежевом" },
    descriere: {
      ro: "Spațiu deschis în tonuri de gri și bej: bucătărie cu insulă din piatră și vitrine superioare iluminate, living cu perete TV placat cu marmură și raft metalic.",
      ru: "Открытое пространство в серых и бежевых тонах: кухня с каменным островом и верхними витринами с подсветкой, гостиная с ТВ-стеной в мраморе и металлическим стеллажом.",
    },
    an: "",
    suprafata: "",
    stadiu: "",
    locatie: { ro: "", ru: "" },
    rol: { ro: "Concept interior, randări", ru: "Концепция интерьера, рендеры" },
    coperta: "01.jpg",
  },

  {
    id: "bucatarie-crem",
    categorie: "bucatarie",
    titlu: { ro: "Bucătărie liniară în tonuri crem", ru: "Линейная кухня в кремовых тонах" },
    scurt: { ro: "Crem, lemn și mânere negre", ru: "Кремовый, дерево и черные ручки" },
    descriere: {
      ro: "Bucătărie pe un singur perete: coloană pentru cuptor și microunde, frigider, blat din lemn și mânere negre. Include vederea cu fațadele deschise, o variantă de culoare și desenul tehnic cu cote.",
      ru: "Кухня вдоль одной стены: колонна под духовку и микроволновку, холодильник, деревянная столешница и черные ручки. В проекте — вид с открытыми фасадами, вариант цвета и чертеж с размерами.",
    },
    an: "",
    suprafata: "",
    stadiu: "",
    locatie: { ro: "", ru: "" },
    rol: { ro: "Proiectarea mobilierului, randări, desen tehnic", ru: "Проектирование мебели, рендеры, чертеж" },
    coperta: "01.jpg",
  },

  {
    id: "bucatarie-alb-negru",
    categorie: "bucatarie",
    titlu: { ro: "Bucătărie în L, alb și negru", ru: "Угловая кухня в белом и черном" },
    scurt: { ro: "Contrast și textură de marmură", ru: "Контраст и текстура мрамора" },
    descriere: {
      ro: "Corpuri suspendate albe, corpuri inferioare negre, coloană cu textură de marmură neagră și șorț din piatră albă cu vene. Include vederea cu fațadele deschise.",
      ru: "Белые навесные шкафы, черные нижние модули, колонна с текстурой черного мрамора и белый фартук с прожилками. В проекте — вид с открытыми фасадами.",
    },
    an: "",
    suprafata: "",
    stadiu: "",
    locatie: { ro: "", ru: "" },
    rol: { ro: "Proiectarea mobilierului, randări", ru: "Проектирование мебели, рендеры" },
    coperta: "01.jpg",
  },

  {
    id: "bucatarie-alba-l",
    categorie: "bucatarie",
    titlu: { ro: "Bucătărie albă în colț", ru: "Белая угловая кухня" },
    scurt: { ro: "Alb, blat negru subțire", ru: "Белый цвет, тонкая черная столешница" },
    descriere: {
      ro: "Bucătărie în L cu fațade albe, blat negru subțire, șorț cu model de marmură și coloană pentru cuptor. Include vederea cu fațadele deschise și desenele tehnice: plan și elevație.",
      ru: "Угловая кухня с белыми фасадами, тонкой черной столешницей, фартуком под мрамор и колонной под духовку. В проекте — вид с открытыми фасадами и чертежи: план и развертка.",
    },
    an: "",
    suprafata: "",
    stadiu: "",
    locatie: { ro: "", ru: "" },
    rol: { ro: "Proiectarea mobilierului, randări, desene tehnice", ru: "Проектирование мебели, рендеры, чертежи" },
    coperta: "01.jpg",
    poze: [
      "01.jpg", "02.jpg", "03.jpg", "04.jpg",
      "# Desene tehnice | Чертежи",
      "05.jpg", "06.jpg",
    ],
  },

  {
    id: "bucatarie-grafit",
    categorie: "bucatarie",
    titlu: { ro: "Bucătărie liniară grafit", ru: "Линейная кухня цвета графит" },
    scurt: { ro: "Grafit și gri deschis", ru: "Графит и светло-серый" },
    descriere: {
      ro: "Fațade grafit între două coloane gri deschis, frigider în coloană și iluminare sub corpurile suspendate. Include vederea cu fațadele deschise.",
      ru: "Фасады цвета графит между двумя светло-серыми колоннами, холодильник в колонне и подсветка под навесными шкафами. В проекте — вид с открытыми фасадами.",
    },
    an: "",
    suprafata: "",
    stadiu: "",
    locatie: { ro: "", ru: "" },
    rol: { ro: "Proiectarea mobilierului, randări", ru: "Проектирование мебели, рендеры" },
    coperta: "01.jpg",
  },
];
