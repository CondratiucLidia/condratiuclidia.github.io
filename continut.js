/* =====================================================================
   CONȚINUTUL SITE-ULUI — acesta e SINGURUL fișier pe care îl modifici.

   Reguli simple:
   • Textul stă între ghilimele: "așa". Dacă vrei ghilimele în text,
     folosește „acestea” (românești) sau «acestea» (rusești).
   • După fiecare rând de tipul  cheie: "valoare"  urmează o virgulă.
   • ro = română, ru = rusă, en = engleză. Dacă lași ru: "" sau en: "" gol,
     se arată textul în română.
   • Un câmp lăsat gol ("") nu apare deloc pe site.
   • Tot ce începe cu // e notiță pentru tine, site-ul n-o citește.
   ===================================================================== */

window.SITE = {
  nume: { ro: "Lidia Condratiuc", ru: "Лидия Кондратюк", en: "Lidia Condratiuc" },
  rol: { ro: "Designer de interior și mobilier", ru: "Дизайнер интерьеров и мебели", en: "Interior and furniture designer" },
  oras: { ro: "Chișinău, Moldova", ru: "Кишинев, Молдова", en: "Chișinău, Moldova" },

  // Semnătura Clover din subsolul site-ului. Pune  arataClover: false  ca s-o ascunzi.
  arataClover: true,

  contact: {
    email: "condratiuclidia8@gmail.com",
    telefon: "+373 67 180 952",
    // Completează doar ce folosești (linkul întreg). Gol = nu apare.
    instagram: "https://www.instagram.com/clover.designinterior",
    telegram: "",    // ex.: "https://t.me/numele_tau"
    whatsapp: "https://wa.me/37367180952",
    viber: "viber://chat?number=%2B37367180952",
    behance: "",     // ex.: "https://www.behance.net/numele_tau"
  },

  // Fișierele CV din folderul cv/
  cv: {
    ro: "cv/Lidia_Condratiuc_CV_RO.pdf",
    ru: "cv/Lidia_Condratiuc_CV_RU.pdf",
    en: "cv/Lidia_Condratiuc_CV_EN.pdf",
  },

  // Poza mare de pe prima pagină: "folderul-proiectului/numele-pozei"
  copertaSite: "dubai/03.jpg",

  texte: {
    motto: { ro: "Frumos de privit. Ușor de trăit.", ru: "Красиво смотреть. Легко жить.", en: "Beautiful to look at. Easy to live in." },
    intro: {
      ro: "Casa nu înseamnă patru pereți, ci locul în care te simți acasă. De aici pornesc fiecare interior și fiecare corp de mobilier pe care îl proiectez.",
      ru: "Дом — это не четыре стены, а место, где чувствуешь себя дома. С этого начинается каждый интерьер и каждый предмет мебели, который я проектирую.",
      en: "A home is not four walls, but the place where you feel at home. That is where every interior and every piece of furniture I design begins.",
    },

    // Pașii din secțiunea „Cum lucrez”. Poți șterge sau adăuga pași.
    pasi: [
      { titlu: { ro: "Discuție și brief", ru: "Знакомство и бриф", en: "Conversation and brief" },
        text:  { ro: "Aflu cum trăiești, ce îți place și ce te încurcă acum acasă.",
                 ru: "Узнаю, как вы живете, что вам нравится и что мешает сейчас.",
                 en: "I learn how you live, what you like and what bothers you at home now." } },
      { titlu: { ro: "Măsurători", ru: "Замеры", en: "Measurements" },
        text:  { ro: "Măsor tot spațiul la fața locului: pereții, ferestrele, ușile, țevile și prizele.",
                 ru: "Измеряю все помещение на объекте: стены, окна, двери, трубы и розетки.",
                 en: "I measure the whole space on site: walls, windows, doors, pipes and sockets." } },
      { titlu: { ro: "Concept și mobilier", ru: "Концепция и мебель", en: "Concept and furniture" },
        text:  { ro: "Alegem împreună stilul, materialele și lumina. Apoi gândesc mobilierul corp cu corp, până la centimetru.",
                 ru: "Вместе выбираем стиль, материалы и свет. Затем продумываю мебель модуль за модулем, до сантиметра.",
                 en: "Together we choose the style, materials and lighting. Then I design the furniture cabinet by cabinet, to the centimetre." } },
      { titlu: { ro: "Planul", ru: "План", en: "The plan" },
        text:  { ro: "Desenul văzut de sus: unde stă fiecare corp și cât loc rămâne pentru mișcare. Nu e încă desenul pentru producție.",
                 ru: "Вид сверху: где стоит каждый модуль и сколько места остается для движения. Это еще не чертеж для производства.",
                 en: "A drawing seen from above: where each cabinet stands and how much room is left to move around. It is not yet the drawing for production." } },
      { titlu: { ro: "Randări 3D", ru: "3D-визуализация", en: "3D renderings" },
        text:  { ro: "Vezi încăperea cu culorile, materialele și lumina ei, înainte să înceapă lucrările.",
                 ru: "Вы видите помещение с его цветами, материалами и светом еще до начала работ.",
                 en: "You see the room with its colours, materials and light before any work begins." } },
      { titlu: { ro: "Desene tehnice", ru: "Чертежи для производства", en: "Technical drawings" },
        text:  { ro: "Fiecare corp cu toate dimensiunile. După aceste desene se taie plăcile, se asamblează și se montează mobilierul.",
                 ru: "Каждый модуль со всеми размерами. По этим чертежам раскраивают плиты, собирают и монтируют мебель.",
                 en: "Every cabinet with all its dimensions. These drawings are used to cut the boards, assemble and install the furniture." } },
    ],

    // Secțiunea „Despre mine”. Fiecare rând din listă = un paragraf.
    despre: {
      ro: [
        "Sunt designer de mobilier și interior cu circa 3 ani de experiență. Realizez proiecte de mobilier la comandă, de la măsurători la fața locului până la vizualizare.",
        "Am făcut parte din echipa de dezvoltare a unui program de proiectare a mobilierului și interiorului: am creat peste 200 de module parametrice pentru biblioteca acestuia în SketchUp Dynamic Components. Am răspuns de testare și am susținut prezentări ale programului pentru clienți din Moldova, Uzbekistan, Kazahstan și Georgia.",
        "Nu lucrez după șablon și nu alerg după trenduri. Încerc să înțeleg omul pentru care proiectez: cum trăiește, ce îi place cu adevărat, chiar dacă nu e la modă sau nu place tuturor. Când nici el nu știe încă ce vrea, aflăm împreună, cu răbdare și cu puțină psihologie. Pentru mine, casa nu înseamnă patru pereți. E locul în care te simți cu adevărat acasă, în care vrei să te întorci seara și care îți face viața mai ușoară.",
      ],
      ru: [
        "Дизайнер мебели и интерьеров с опытом работы около 3 лет. Проектирую мебель на заказ: от замеров на объекте до визуализации.",
        "Входила в команду разработки программы для проектирования мебели и интерьеров: создала более 200 параметрических модулей для ее библиотеки в SketchUp Dynamic Components. Отвечала за тестирование и проводила презентации программы для клиентов из Молдовы, Узбекистана, Казахстана и Грузии.",
        "Я не работаю по шаблону и не гонюсь за трендами. Стараюсь понять человека, для которого проектирую: как он живет, что ему по-настоящему нравится, даже если это не в моде и нравится не всем. Когда он и сам еще не знает, чего хочет, мы выясняем это вместе — с терпением и небольшой помощью психологии. Для меня дом — это не четыре стены. Это место, где по-настоящему чувствуешь себя дома, куда хочется возвращаться вечером и которое делает жизнь легче.",
      ],
      en: [
        "I am a furniture and interior designer with about 3 years of experience. I carry out custom furniture projects, from on-site measurements to visualisation.",
        "I was part of the team that developed interior and furniture design software: I created over 200 parametric modules for its library in SketchUp Dynamic Components. I was responsible for testing and gave presentations of the software to clients in Moldova, Uzbekistan, Kazakhstan and Georgia.",
        "I don't work from templates and I don't chase trends. I try to understand the person I am designing for: how they live, what they truly like, even if it isn't fashionable or to everyone's taste. When they don't yet know what they want, we find out together, with patience and a little psychology. For me, a home is not four walls. It is the place where you truly feel at home, where you want to return in the evening, and that makes your life easier.",
      ],
    },

    // Rândul mic de sub CLOVER, în panoul verde de la „Despre mine”. Gol = nu apare.
    semnatura: { ro: "", ru: "", en: "" },

    // Cifrele din „Despre mine” (toate din CV).
    cifre: [
      { numar: "~3", text: { ro: "ani de experiență", ru: "года опыта", en: "years of experience" } },
      { numar: "200+", text: { ro: "module parametrice de mobilier", ru: "параметрических модулей мебели", en: "parametric furniture modules" } },
      { numar: "4", text: { ro: "țări — prezentări pentru clienți", ru: "страны — презентации для клиентов", en: "countries — client presentations" } },
      { numar: "22", text: { ro: "lecții video — structură și scenarii", ru: "видеоурока — структура и сценарии", en: "video lessons — structure and scripts" } },
    ],

    // Fiecare text dintre ghilimele = un rând separat pe site.
    programe: {
      ro: ["SketchUp (Dynamic Components), Enscape, LayOut", "Nivel de bază: AutoCAD, 3ds Max, Photoshop"],
      ru: ["SketchUp (Dynamic Components), Enscape, LayOut", "Базовый уровень: AutoCAD, 3ds Max, Photoshop"],
      en: ["SketchUp (Dynamic Components), Enscape, LayOut", "Basic level: AutoCAD, 3ds Max, Photoshop"],
    },
    limbi: { ro: "Română (maternă), rusă (fluent)", ru: "Румынский (родной), русский (свободно)", en: "Romanian (native), Russian (fluent)" },

    contactText: {
      ro: "Ai un proiect sau vrei să colaborăm? Scrie-mi sau sună-mă.",
      ru: "Есть проект или хотите сотрудничать? Пишите или звоните.",
      en: "Have a project or want to work together? Write to me or call.",
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
   2. Ca să aibă titlu frumos, descriere și traduceri: copiază un bloc
      { … } de mai jos, de la acolada de deschidere până la cea de închidere
      cu virgulă, lipește-l unde vrei să apară și schimbă textele.
   Un folder șters sau golit = proiectul dispare singur de pe site.

   Câmpuri:
   • id        – numele folderului cu poze (litere mici, fără spații și diacritice)
   • categorie – "interior" sau "bucatarie" (pentru filtrul de pe site)
   • an, suprafata ("18 m²"), locatie – apar sub titlu; gol = nu apar
   • stadiu    – eticheta mică de lângă titlu:
                 "vizualizare" = „Vizualizare 3D” (pozele sunt randări)
                 "concept"     = „Concept” (proiect-concept, de ex. pentru expoziție)
                 "realizat"    = „Realizat” (mobila e făcută și montată)
                 gol = nu apare
   • coperta   – poza de pe cartonaș
   • video     – (opțional) clip în pagina proiectului, sub text: link YouTube,
                 Vimeo sau Google Drive, ori numele unui .mp4 din folderul
                 proiectului (ex.: "tur.mp4"; "auto-tur.mp4" pornește singur,
                 fără sunet). Mai multe: ["…", "…"]. Pașii: ghidul pas cu pas.
   • poze      – CEL MAI SIMPLU: nu scrii rândul deloc → se arată toate pozele
                 din folder, în ordinea numelor (01, 02, 03…).
                 SAU un număr (ex.: 12 = de la 01.jpg la 12.jpg)
                 SAU o listă: ["01.jpg", "02.jpg", …]. În listă, un rând care
                 începe cu  #  devine subtitlu: "# Română | Русский | English"
   ===================================================================== */

window.PROIECTE = [
  {
    id: "dubai",
    categorie: "interior",
    titlu: { ro: "Un apartament, două direcții", ru: "Одна квартира, два настроения", en: "One apartment, two directions" },
    scurt: { ro: "Contrast îndrăzneț și detalii gândite până la capăt", ru: "Смелый контраст и продуманные детали", en: "Bold contrast and carefully considered details" },
    descriere: {
      ro: "Pentru o expoziție în Dubai am vrut să arăt ceva diferit de ce se vede de obicei acolo: un apartament în tonuri închise, cu lemn masiv cu margini vii și metal negru. Suspensia de deasupra insulei e o mică vinotecă iluminată. Dormitorul are și o variantă luminoasă, cu lamele din lemn.",
      ru: "Для выставки в Дубае мне хотелось показать что-то непохожее на то, что там привыкли видеть: квартиру в темных тонах, с массивом дерева с живым краем и черным металлом. Подвес над островом — это маленькая винотека с подсветкой. Для спальни есть и светлый вариант с деревянными рейками.",
      en: "For an exhibition in Dubai, I wanted to show something different from what is usually seen there: an apartment in dark tones, with solid live-edge wood and black metal. The suspension above the island is a small lit wine rack. The bedroom also has a light version with wooden slats.",
    },
    an: "",
    suprafata: "",
    stadiu: "concept",
    locatie: { ro: "Dubai, EAU", ru: "Дубай, ОАЭ", en: "Dubai, UAE" },
    rol: { ro: "Concept interior, randări", ru: "Концепция интерьера, рендеры", en: "Interior concept, renderings" },
    coperta: "03.jpg",
    poze: [
      "02.png",
      "# Direcția I — lemn, metal și tonuri închise | Направление I — дерево, металл и темные тона | Direction I — wood, metal and dark tones",
      "03.jpg", "04.jpg", "05.jpg", "21.jpg",
      "30.jpg",
      "11.jpg", "26.jpg", "25.jpg", "13.jpg",
      "# Direcția II — tonuri deschise și lemn | Направление II — светлые тона и дерево | Direction II — light tones and wood",
      "22.jpg", "17.jpg", "16.jpg", "28.jpg",
    ],
  },

  {
    id: "bucatarie-perete-verde",
    categorie: "bucatarie",
    titlu: { ro: "Piatră, lemn și un accent verde", ru: "Камень, дерево и зеленый акцент", en: "Stone, wood and a touch of green" },
    scurt: { ro: "Caracter, negru mat și stejar", ru: "Характер, матовый черный и дуб", en: "Character, matte black and oak" },
    descriere: {
      ro: "Un apartament pentru o singură persoană, cu un stil asumat și contraste puternice. Bucătăria neagră mată și șorțul din stejar sunt completate de un perete din piatră artificială, cu un cerc de mușchi stabilizat, iluminat din spate. Proiectul include organizarea interioară a corpurilor și desene tehnice pentru producție.",
      ru: "Квартира для одного человека, с четким характером и выразительными контрастами. Матовая черная кухня и дубовый фартук дополнены стеной из искусственного камня с подсвеченным сзади кругом из стабилизированного мха. В проект входят внутреннее наполнение шкафов и чертежи для производства.",
      en: "An apartment for one person, with a confident style and strong contrasts. The matte black kitchen and oak splashback are joined by an artificial stone wall with a backlit circle of preserved moss. The project includes the interior layout of the cabinets and technical drawings for production.",
    },
    an: "",
    suprafata: "",
    stadiu: "vizualizare",
    locatie: { ro: "", ru: "", en: "" },
    rol: { ro: "Proiectarea mobilierului, randări, desene tehnice", ru: "Проектирование мебели, рендеры, чертежи", en: "Furniture design, renderings, technical drawings" },
    coperta: "08.jpg",
    poze: [
      "08.jpg", "05.jpg", "06.jpg", "07.jpg",
      "15.jpg",
      "# Cum e organizat interiorul | Как устроено внутри | How it is organised inside",
      "10.jpg",
      "# Desene tehnice | Чертежи | Technical drawings",
      "11.jpg", "12.jpg", "13.jpg", "14.jpg", "20.jpg",
    ],
  },

  {
    id: "bucatarie-rafturi-metalice",
    categorie: "bucatarie",
    titlu: { ro: "O bucătărie în stilul ei", ru: "Кухня в ее стиле", en: "A kitchen in her style" },
    scurt: { ro: "Tonuri închise, lemn și lumină caldă", ru: "Темные тона, дерево и теплый свет", en: "Dark tones, wood and warm light" },
    descriere: {
      ro: "Bucătărie pentru o familie, pornită de la stilul clientei și preferința ei pentru negru. Coloana iluminată pentru pahare și vin, frigiderul side-by-side și electrocasnicele încorporate se pierd în tonurile închise; am propus și o variantă cu nuc și marmură albă. Zona de zi continuă cu masa mare și canapeaua.",
      ru: "Кухня для семьи, созданная по личному стилю хозяйки и ее любви к черному. Подсвеченная колонна для бокалов и вина, холодильник side-by-side и встроенная техника растворяются в темных тонах; я предложила и вариант с орехом и белым мрамором. Гостиная продолжается большим столом и диваном.",
      en: "A kitchen for a family, shaped by the client's personal style and her love of black. The lit column for glasses and wine, the side-by-side fridge and the built-in appliances blend into the dark tones; I also proposed a version in walnut and white marble. The living area continues with the large table and the sofa.",
    },
    an: "",
    suprafata: "",
    stadiu: "vizualizare",
    locatie: { ro: "", ru: "", en: "" },
    rol: { ro: "Proiectarea mobilierului, randări", ru: "Проектирование мебели, рендеры", en: "Furniture design, renderings" },
    coperta: "03.jpg",
    poze: [
      "04.jpg", "03.jpg", "02.jpg", "01.jpg", "14.jpg",
      "# Cum e organizat interiorul | Как устроено внутри | How it is organised inside",
      "05.jpg", "08.jpg",
      "# Zona de zi | Гостиная | Living area",
      "09.jpg", "10.jpg", "11.jpg", "12.jpg", "16.jpg",
    ],
  },

  {
    id: "living-bucatarie-insula",
    categorie: "interior",
    titlu: { ro: "Bucătărie și living deschis", ru: "Кухня и открытая гостиная", en: "Kitchen and open living room" },
    scurt: { ro: "Un spațiu unitar, în tonuri calme", ru: "Цельное пространство в спокойных тонах", en: "One space in calm tones" },
    descriere: {
      ro: "Un singur spațiu pentru gătit, masă și odihnă: bucătăria cu insulă se deschide spre living.",
      ru: "Единое пространство для готовки, еды и отдыха: кухня с островом открывается в гостиную.",
      en: "One space for cooking, dining and resting: the kitchen with its island opens onto the living room.",
    },
    an: "",
    suprafata: "",
    stadiu: "vizualizare",
    locatie: { ro: "", ru: "", en: "" },
    rol: { ro: "Proiectarea interiorului, randări", ru: "Проектирование интерьера, рендеры", en: "Interior design, renderings" },
    coperta: "01.jpg",
  },

  {
    id: "bucatarie-crem",
    categorie: "bucatarie",
    titlu: { ro: "Bucătărie liniară, tonuri crem", ru: "Линейная кухня в кремовых тонах", en: "Linear kitchen in cream tones" },
    scurt: { ro: "Simplitate vizuală și organizare practică", ru: "Лаконичный вид и продуманное хранение", en: "Visual simplicity and practical organisation" },
    descriere: {
      ro: "O bucătărie pe un singur perete, în care fiecare centimetru lucrează — de la coloana cu cuptorul la înălțimea ochilor până la suportul pentru vase. Am pregătit și o variantă cu fațade albe.",
      ru: "Кухня вдоль одной стены, где работает каждый сантиметр — от колонны с духовкой на уровне глаз до сушки для посуды. Я подготовила и вариант с белыми фасадами.",
      en: "A single-wall kitchen where every centimetre works — from the oven column at eye level to the plate rack. I also prepared a version with white fronts.",
    },
    an: "",
    suprafata: "",
    stadiu: "vizualizare",
    locatie: { ro: "", ru: "", en: "" },
    rol: { ro: "Proiectarea mobilierului, randări", ru: "Проектирование мебели, рендеры", en: "Furniture design, renderings" },
    coperta: "02.jpg",
  },

  {
    id: "bucatarie-alb-negru",
    categorie: "bucatarie",
    titlu: { ro: "Bucătărie în L, alb și tonuri închise", ru: "Угловая кухня: белый и темные тона", en: "L-shaped kitchen in white and dark tones" },
    scurt: { ro: "Contrast echilibrat și detalii funcționale", ru: "Выверенный контраст и функциональные детали", en: "Balanced contrast and functional details" },
    descriere: {
      ro: "Albul și tonurile închise se echilibrează, iar o coloană cu aspect de marmură închisă adăpostește paharele și vinul. Proiectul include planul și elevațiile cotate pentru producție.",
      ru: "Белый и темные тона уравновешивают друг друга, а в колонне под темный мрамор — место для бокалов и вина. В проект входят план и развертки с размерами для производства.",
      en: "White and dark tones balance each other, while a dark marble-look column holds the glasses and wine. The project includes the dimensioned plan and elevations for production.",
    },
    an: "",
    suprafata: "",
    stadiu: "vizualizare",
    locatie: { ro: "", ru: "", en: "" },
    rol: { ro: "Proiectarea mobilierului, randări, desene tehnice", ru: "Проектирование мебели, рендеры, чертежи", en: "Furniture design, renderings, technical drawings" },
    coperta: "03.jpg",
    poze: [
      "03.jpg", "02.jpg", "04.jpg", "05.jpg",
      "# Desene tehnice | Чертежи | Technical drawings",
      "08.jpg", "07.jpg", "06.jpg",
    ],
  },

  {
    id: "bucatarie-alba-l",
    categorie: "bucatarie",
    titlu: { ro: "Bucătărie albă în formă de L", ru: "Белая угловая кухня", en: "White L-shaped kitchen" },
    scurt: { ro: "Alb luminos, marmură și accente negre", ru: "Белый цвет, мрамор и черные акценты", en: "Bright white, marble and black accents" },
    descriere: {
      ro: "O bucătărie albă în L, în care fiecare corp e gândit pe interior — de la suportul pentru vase la sertare și mașina de spălat vase.",
      ru: "Белая угловая кухня, где каждый модуль продуман изнутри — от сушки для посуды до ящиков и посудомоечной машины.",
      en: "A white L-shaped kitchen in which every cabinet is thought through on the inside — from the plate rack to the drawers and the dishwasher.",
    },
    an: "",
    suprafata: "",
    stadiu: "vizualizare",
    locatie: { ro: "", ru: "", en: "" },
    rol: { ro: "Proiectarea mobilierului, randări", ru: "Проектирование мебели, рендеры", en: "Furniture design, renderings" },
    coperta: "07.jpg",
    poze: [
      "02.jpg", "03.jpg", "04.jpg", "07.jpg", "08.jpg",
    ],
  },

];
