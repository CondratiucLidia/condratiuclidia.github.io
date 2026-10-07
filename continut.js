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
    en: "cv/Lidia_Condratiuc_CV_EN.pdf",
  },

  // Poza mare de pe prima pagină: "folderul-proiectului/numele-pozei"
  copertaSite: "dubai/01.jpg",

  texte: {
    motto: { ro: "Frumos de privit. Ușor de trăit.", ru: "Красиво смотреть. Легко жить.", en: "Beautiful to look at. Easy to live in." },
    intro: {
      ro: "Proiectez interioare și mobilier la comandă — de la discuția cu clientul și măsurătorile la fața locului până la randări 3D și desene cu cote pentru producție.",
      ru: "Проектирую интерьеры и мебель на заказ — от выяснения пожеланий клиента и замеров на объекте до 3D-визуализаций и чертежей с размерами для производства.",
      en: "I design interiors and custom furniture — from the first conversation and on-site measurements to 3D renderings and dimensioned drawings for production.",
    },

    // Pașii din secțiunea „Cum lucrez”. Poți șterge sau adăuga pași.
    pasi: [
      { titlu: { ro: "Discuție și măsurători", ru: "Знакомство и замеры", en: "Conversation and measurements" },
        text:  { ro: "Aflu cum trăiești și ce îți trebuie, apoi măsor spațiul la fața locului.",
                 ru: "Узнаю, как вы живете и что вам нужно, и делаю замеры на объекте.",
                 en: "I learn how you live and what you need, then measure the space on site." } },
      { titlu: { ro: "Concept", ru: "Концепция", en: "Concept" },
        text:  { ro: "Propun planificarea, stilul, materialele și lumina.",
                 ru: "Предлагаю планировку, стиль, материалы и освещение.",
                 en: "I propose the layout, the style, the materials and the lighting." } },
      { titlu: { ro: "Proiectarea mobilierului", ru: "Проектирование мебели", en: "Furniture design" },
        text:  { ro: "Fiecare corp e gândit la centimetru: dimensiuni, umplutură interioară, fațade, iluminare.",
                 ru: "Каждый модуль продуман до сантиметра: размеры, внутреннее наполнение, фасады, подсветка.",
                 en: "Every cabinet is thought through to the centimetre: dimensions, interior fittings, fronts, lighting." } },
      { titlu: { ro: "Randări 3D", ru: "3D-визуализация", en: "3D renderings" },
        text:  { ro: "Vezi încăperea înainte de începerea lucrărilor.",
                 ru: "Вы видите помещение до начала работ.",
                 en: "You see the room before any work begins." } },
      { titlu: { ro: "Desene tehnice", ru: "Чертежи", en: "Technical drawings" },
        text:  { ro: "Desene cu cote pentru producție și montaj.",
                 ru: "Чертежи с размерами для производства и монтажа.",
                 en: "Dimensioned drawings for production and installation." } },
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
        "I was part of the development team of an interior and furniture design software: I created over 200 parametric modules for its library in SketchUp Dynamic Components. I was responsible for testing and gave presentations of the software to clients in Moldova, Uzbekistan, Kazakhstan and Georgia.",
        "I don't work from templates and I don't chase trends. I try to understand the person I am designing for: how they live, what they truly like, even if it isn't fashionable or to everyone's taste. When they don't yet know what they want, we find out together, with patience and a little psychology. For me, a home is not four walls. It is the place where you truly feel at home, where you want to return in the evening, and that makes your life easier.",
      ],
    },

    // Cifrele din „Despre mine” (toate din CV).
    cifre: [
      { numar: "~3", text: { ro: "ani de experiență", ru: "года опыта", en: "years of experience" } },
      { numar: "200+", text: { ro: "module parametrice de mobilier", ru: "параметрических модулей мебели", en: "parametric furniture modules" } },
      { numar: "4", text: { ro: "țări — prezentări pentru clienți", ru: "страны — презентации для клиентов", en: "countries — client presentations" } },
      { numar: "22", text: { ro: "lecții video — structură și scenarii", ru: "видеоурока — структура и сценарии", en: "video lessons — structure and scripts" } },
    ],

    programe: {
      ro: "SketchUp (Dynamic Components), Enscape, LayOut. Nivel de bază: AutoCAD, 3ds Max, Photoshop.",
      ru: "SketchUp (Dynamic Components), Enscape, LayOut. Базовый уровень: AutoCAD, 3ds Max, Photoshop.",
      en: "SketchUp (Dynamic Components), Enscape, LayOut. Basic level: AutoCAD, 3ds Max, Photoshop.",
    },
    limbi: { ro: "Română (maternă), rusă (fluent)", ru: "Румынский (родной), русский (свободно)", en: "Romanian (native), Russian (fluent)" },

    contactText: {
      ro: "Sunt deschisă pentru un loc de muncă în design de interior și mobilier și pentru proiecte la comandă. Scrie-mi sau sună-mă.",
      ru: "Открыта к работе в сфере дизайна интерьеров и мебели и к проектам на заказ. Пишите или звоните.",
      en: "I am open to a position in interior and furniture design and to custom projects. Write to me or call.",
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
   • stadiu    – "concept" (doar randări) sau "realizat" (mobila e făcută);
                 gol = nu apare
   • coperta   – poza de pe cartonaș
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
    titlu: { ro: "Concept de apartament pentru o expoziție în Dubai", ru: "Концепция квартиры для выставки в Дубае", en: "Apartment concept for an exhibition in Dubai" },
    scurt: { ro: "Bucătărie, living și dormitor în două direcții stilistice", ru: "Кухня, гостиная и спальня в двух стилистических направлениях", en: "Kitchen, living room and bedroom in two stylistic directions" },
    descriere: {
      ro: "Un apartament de expoziție gândit de la zero: bucătărie, living și dormitor, în două direcții stilistice pentru două feluri de a trăi. Prima e caldă și densă: cărămidă, lemn masiv cu margini vii, metal negru și lumină punctuală. A doua e aerată: tonuri deschise, lamele de lemn și lumină difuză. Aceleași încăperi, două caractere, ca vizitatorul să se recunoască într-una din ele. Panoramele 360° și turul VR le-am realizat împreună cu echipa.",
      ru: "Выставочная квартира, продуманная с нуля: кухня, гостиная и спальня в двух стилистических направлениях — для двух разных образов жизни. Первое — теплое и насыщенное: кирпич, массив дерева с живым краем, черный металл и точечный свет. Второе — воздушное: светлые тона, деревянные рейки и мягкий рассеянный свет. Одни и те же комнаты, два характера, чтобы посетитель узнал себя в одном из них. Панорамы 360° и VR-тур создавала вместе с командой.",
      en: "An exhibition apartment designed from scratch: kitchen, living room and bedroom in two stylistic directions, for two ways of living. The first is warm and dense: brick, solid wood with live edges, black metal and focused light. The second is airy: light tones, wooden slats and diffused light. The same rooms, two characters, so that visitors recognise themselves in one of them. The 360° panoramas and the VR tour were made together with the team.",
    },
    an: "2025",
    suprafata: "",
    stadiu: "concept",
    locatie: { ro: "Dubai, EAU", ru: "Дубай, ОАЭ", en: "Dubai, UAE" },
    rol: { ro: "Concept interior, randări", ru: "Концепция интерьера, рендеры", en: "Interior concept, renderings" },
    coperta: "03.jpg",
    poze: [
      "02.png",
      "# Direcția I — piatră, lemn și metal | Направление I — камень, дерево и металл | Direction I — stone, wood and metal",
      "03.jpg", "04.jpg", "05.jpg", "06.jpg",
      "01.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg",
      "11.jpg", "12.jpg", "13.jpg", "14.jpg",
      "# Direcția II — tonuri deschise și lemn | Направление II — светлые тона и дерево | Direction II — light tones and wood",
      "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg",
    ],
  },

  {
    id: "bucatarie-perete-verde",
    categorie: "bucatarie",
    titlu: { ro: "Piatră, lemn și un cerc de mușchi", ru: "Камень, дерево и круг из мха", en: "Stone, wood and a circle of moss" },
    scurt: { ro: "Negru mat, stejar și mușchi stabilizat", ru: "Матовый черный, дуб и стабилизированный мох", en: "Matte black, oak and preserved moss" },
    descriere: {
      ro: "Clienții voiau o bucătărie care să dispară în perete și o sufragerie în care să stea mult. Bucătăria e o linie neagră, mată, pe toată înălțimea; doar șorțul de stejar și lumina de sub corpuri o încălzesc. Centrul încăperii e peretele de piatră brută cu un cerc de mușchi stabilizat, luminat din spate, în fața mesei masive cu margini vii. În spatele fațadelor, fiecare corp are rostul lui: coloană pentru frigider, sertare pentru vase, sortarea gunoiului sub chiuvetă, iar centrala termică e ascunsă într-o coloană. Proiectul include desenele cu cote pentru producție.",
      ru: "Заказчики хотели кухню, которая растворяется в стене, и столовую, в которой приятно засиживаться. Кухня — матовая черная линия во всю высоту; ее согревают только дубовый фартук и подсветка под шкафами. Центр комнаты — стена из необработанного камня с кругом стабилизированного мха и подсветкой сзади, напротив массивного стола с живым краем. За фасадами у каждого модуля своя задача: колонна под холодильник, ящики для посуды, сортировка мусора под мойкой, а котел спрятан в колонне. В проекте — чертежи с размерами для производства.",
      en: "The clients wanted a kitchen that disappears into the wall and a dining room where they could linger. The kitchen is a matte black line from floor to ceiling; only the oak splashback and the light beneath the wall units warm it up. The heart of the room is the rough stone wall with a backlit circle of preserved moss, facing the solid live-edge table. Behind the fronts, every cabinet has its purpose: a column for the fridge, drawers for dishes, waste sorting under the sink, and the boiler hidden in a column. The project includes dimensioned drawings for production.",
    },
    an: "",
    suprafata: "",
    stadiu: "",
    locatie: { ro: "", ru: "", en: "" },
    rol: { ro: "Proiectarea mobilierului, randări, desene tehnice", ru: "Проектирование мебели, рендеры, чертежи", en: "Furniture design, renderings, technical drawings" },
    coperta: "01.jpg",
    poze: [
      "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg",
      "# Mobilierul cu fațadele deschise | Мебель с открытыми фасадами | The furniture with open fronts",
      "09.jpg", "10.jpg",
      "# Desene tehnice | Чертежи | Technical drawings",
      "11.jpg", "12.jpg", "13.jpg", "14.jpg",
    ],
  },

  {
    id: "bucatarie-rafturi-metalice",
    categorie: "bucatarie",
    titlu: { ro: "Bucătărie cu vitrine metalice și zonă de zi", ru: "Кухня с металлическими витринами и зоной отдыха", en: "Kitchen with metal-framed display cabinets and living area" },
    scurt: { ro: "Lemn întunecat, marmură și sticlă cu profil negru", ru: "Темное дерево, мрамор и стекло в черном профиле", en: "Dark wood, marble and glass in a black frame" },
    descriere: {
      ro: "O bucătărie în culori adânci pentru oameni cărora le place să primească oaspeți seara. Corpurile de jos sunt grafit cald, cele de sus au o textură de lemn întunecat, iar șorțul e marmură cu vene aurii. Coloanele înalte țin frigiderul side-by-side, cuptorul și microundele, iar vitrina de sticlă cu profil metalic negru și lumină interioară pune pe scenă paharele și vinul. Am gândit și o a doua variantă, cu nuc și marmură albă, pentru cine vrea aceeași bucătărie, dar mai luminoasă. Zona de zi continuă cu masa de sufragerie și canapelele, între stâlpii care îi dau ritm.",
      ru: "Кухня в глубоких тонах для тех, кто любит принимать гостей по вечерам. Нижние модули — теплый графит, верхние — с текстурой темного дерева, фартук — мрамор с золотыми прожилками. Высокие колонны вмещают холодильник side-by-side, духовку и микроволновку, а стеклянная витрина в черном металлическом профиле с внутренней подсветкой выставляет напоказ бокалы и вино. Продумала и второй вариант — орех и белый мрамор — для тех, кто хочет ту же кухню, но светлее. Зона отдыха продолжается обеденным столом и диванами между колоннами, задающими ритм.",
      en: "A kitchen in deep colours for people who love hosting in the evening. The base units are warm graphite, the wall units have a dark wood texture, and the splashback is marble with golden veins. The tall columns house the side-by-side fridge, the oven and the microwave, while the glass cabinet with a black metal frame and interior lighting puts the glasses and wine on show. I also designed a second version, in walnut and white marble, for those who want the same kitchen but brighter. The living area continues with the dining table and the sofas, between the pillars that give it rhythm.",
    },
    an: "",
    suprafata: "",
    stadiu: "",
    locatie: { ro: "", ru: "", en: "" },
    rol: { ro: "Proiectarea mobilierului, randări", ru: "Проектирование мебели, рендеры", en: "Furniture design, renderings" },
    coperta: "01.jpg",
    poze: [
      "01.jpg", "02.jpg", "03.jpg", "04.jpg",
      "# Mobilierul cu fațadele deschise | Мебель с открытыми фасадами | The furniture with open fronts",
      "05.jpg", "06.jpg", "07.jpg", "08.jpg",
      "# Zona de zi | Гостиная | Living area",
      "09.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg",
    ],
  },

  {
    id: "living-bucatarie-insula",
    categorie: "interior",
    titlu: { ro: "Living cu bucătărie și insulă", ru: "Гостиная с кухней и островом", en: "Living room with kitchen and island" },
    scurt: { ro: "Gri, bej și piatră într-un singur spațiu", ru: "Серый, бежевый и камень в одном пространстве", en: "Grey, beige and stone in one space" },
    descriere: {
      ro: "Un spațiu deschis în care bucătăria, masa și canapeaua trăiesc împreună fără să se deranjeze. Insula cu aspect de piatră desparte gătitul de restul și devine bar pentru micul dejun. Fațadele în gri cald și vitrinele cu profil negru de sus țin bucătăria liniștită, iar lumina vine din corpuri suspendate cu globuri de sticlă. Peretele TV e placat cu marmură gri cu vene, lângă un raft metalic deschis pentru plante și obiecte dragi. Tonurile de gri și bej, lemnul închis al podelei și panourile riflate fac spațiul calm și unitar.",
      ru: "Открытое пространство, где кухня, стол и диван живут вместе, не мешая друг другу. Остров с фактурой камня отделяет готовку от остального и становится барной стойкой для завтрака. Фасады теплого серого и верхние витрины в черном профиле держат кухню спокойной, а свет дают подвесы со стеклянными шарами. ТВ-стена облицована серым мрамором с прожилками, рядом — открытый металлический стеллаж для растений и любимых вещей. Оттенки серого и бежевого, темное дерево пола и реечные панели делают пространство спокойным и цельным.",
      en: "An open space where the kitchen, the table and the sofa live together without getting in each other's way. The stone-look island separates cooking from the rest and becomes a breakfast bar. Warm grey fronts and black-framed glass wall units keep the kitchen calm, while the light comes from pendants with glass globes. The TV wall is clad in veined grey marble, next to an open metal shelf for plants and favourite objects. Shades of grey and beige, the dark wooden floor and the fluted panels make the space calm and unified.",
    },
    an: "",
    suprafata: "",
    stadiu: "",
    locatie: { ro: "", ru: "", en: "" },
    rol: { ro: "Concept interior, randări", ru: "Концепция интерьера, рендеры", en: "Interior concept, renderings" },
    coperta: "01.jpg",
  },

  {
    id: "bucatarie-crem",
    categorie: "bucatarie",
    titlu: { ro: "Bucătărie liniară în tonuri crem", ru: "Линейная кухня в кремовых тонах", en: "Linear kitchen in cream tones" },
    scurt: { ro: "Crem, lemn și lumină de dimineață", ru: "Кремовый, дерево и утренний свет", en: "Cream, wood and morning light" },
    descriere: {
      ro: "O bucătărie pe un singur perete, de 3,94 m, pentru o familie care voia liniște și căldură. Fațade crem fără mânere, blat din lemn și șorț de marmură albă; linia neagră a profilurilor dă ordine. În stânga, coloana cu cuptor și microunde la înălțimea ochilor; în dreapta, frigiderul. În interior: suport pentru farfurii, mașină de spălat vase, sertare adânci pentru oale. Am pregătit și o variantă în alb, iar desenul cu cote arată exact cum se execută.",
      ru: "Кухня вдоль одной стены длиной 3,94 м для семьи, которой хотелось тишины и тепла. Кремовые фасады без ручек, деревянная столешница и фартук из белого мрамора; черная линия профилей задает порядок. Слева — колонна с духовкой и микроволновкой на уровне глаз, справа — холодильник. Внутри: сушка для тарелок, посудомоечная машина, глубокие ящики для кастрюль. Подготовила и вариант в белом, а чертеж с размерами показывает, как именно это изготовить.",
      en: "A single-wall kitchen, 3.94 m long, for a family who wanted calm and warmth. Handleless cream fronts, a wooden worktop and a white marble splashback; the black line of the profiles brings order. On the left, the column with the oven and the microwave at eye level; on the right, the fridge. Inside: a plate rack, a dishwasher, deep drawers for pots. I also prepared a version in white, and the dimensioned drawing shows exactly how it is built.",
    },
    an: "",
    suprafata: "",
    stadiu: "",
    locatie: { ro: "", ru: "", en: "" },
    rol: { ro: "Proiectarea mobilierului, randări, desen tehnic", ru: "Проектирование мебели, рендеры, чертеж", en: "Furniture design, renderings, technical drawing" },
    coperta: "01.jpg",
  },

  {
    id: "bucatarie-alb-negru",
    categorie: "bucatarie",
    titlu: { ro: "Bucătărie în L, alb și negru", ru: "Угловая кухня в белом и черном", en: "L-shaped kitchen in black and white" },
    scurt: { ro: "Contrast calm, marmură neagră cu vene aurii", ru: "Спокойный контраст, черный мрамор с золотыми прожилками", en: "Calm contrast, black marble with golden veins" },
    descriere: {
      ro: "Pentru cine iubește contrastul, dar nu zgomotul. Corpurile de sus sunt albe și se topesc în perete; cele de jos sunt maro-închis, aproape negre. Coloana îmbrăcată în marmură neagră cu vene aurii adăpostește vitrina pentru pahare și vin, iar șorțul de marmură albă aduce lumina înapoi. Coloana tehnică ține frigiderul, cuptorul și microundele la îndemână. Vederea cu fațadele deschise arată cum e organizat fiecare corp.",
      ru: "Для тех, кто любит контраст, но не шум. Верхние модули белые и сливаются со стеной; нижние — темно-коричневые, почти черные. Колонна, облицованная черным мрамором с золотыми прожилками, вмещает витрину для бокалов и вина, а фартук из белого мрамора возвращает свет. Техническая колонна держит холодильник, духовку и микроволновку под рукой. Вид с открытыми фасадами показывает, как организован каждый модуль.",
      en: "For those who love contrast but not noise. The wall units are white and melt into the wall; the base units are dark brown, almost black. The column clad in black marble with golden veins houses the display cabinet for glasses and wine, while the white marble splashback brings the light back. The appliance column keeps the fridge, the oven and the microwave within reach. The view with open fronts shows how each cabinet is organised.",
    },
    an: "",
    suprafata: "",
    stadiu: "",
    locatie: { ro: "", ru: "", en: "" },
    rol: { ro: "Proiectarea mobilierului, randări", ru: "Проектирование мебели, рендеры", en: "Furniture design, renderings" },
    coperta: "01.jpg",
  },

  {
    id: "bucatarie-alba-l",
    categorie: "bucatarie",
    titlu: { ro: "Bucătărie albă în colț", ru: "Белая угловая кухня", en: "White corner kitchen" },
    scurt: { ro: "Alb, blat negru subțire, lumină naturală", ru: "Белый, тонкая черная столешница, естественный свет", en: "White, a slim black worktop, natural light" },
    descriere: {
      ro: "O bucătărie în L, albă de sus până jos, cu un singur accent: blatul negru, subțire, și tehnica neagră. Șorțul de marmură albă cu vene fine și vitrina de sticlă de la fereastră țin albul viu, nu steril. Fațadele fără mânere, cu profil negru, fac corpurile să pară un singur volum. Planul și elevația cu cote (4,08 × 3,43 m) fac parte din proiect, pentru ca producția să nu lase loc de interpretări.",
      ru: "Угловая кухня, белая сверху донизу, с одним акцентом: тонкой черной столешницей и черной техникой. Фартук из белого мрамора с тонкими прожилками и стеклянная витрина у окна делают белый живым, а не стерильным. Фасады без ручек, с черным профилем, собирают модули в единый объем. План и развертка с размерами (4,08 × 3,43 м) входят в проект, чтобы производство не оставляло места для догадок.",
      en: "An L-shaped kitchen, white from top to bottom, with a single accent: the slim black worktop and the black appliances. The white marble splashback with fine veins and the glass cabinet by the window keep the white alive, not sterile. Handleless fronts with a black profile make the cabinets read as one volume. The dimensioned plan and elevation (4.08 × 3.43 m) are part of the project, so that production leaves no room for interpretation.",
    },
    an: "",
    suprafata: "",
    stadiu: "",
    locatie: { ro: "", ru: "", en: "" },
    rol: { ro: "Proiectarea mobilierului, randări, desene tehnice", ru: "Проектирование мебели, рендеры, чертежи", en: "Furniture design, renderings, technical drawings" },
    coperta: "01.jpg",
    poze: [
      "01.jpg", "02.jpg", "03.jpg", "04.jpg",
      "# Desene tehnice | Чертежи | Technical drawings",
      "05.jpg", "06.jpg",
    ],
  },

  {
    id: "bucatarie-grafit",
    categorie: "bucatarie",
    titlu: { ro: "Bucătărie liniară grafit", ru: "Линейная кухня цвета графит", en: "Linear graphite kitchen" },
    scurt: { ro: "Grafit între doi pereți, marmură gri", ru: "Графит между двумя стенами, серый мрамор", en: "Graphite between two walls, grey marble" },
    descriere: {
      ro: "O nișă între doi pereți transformată în bucătărie completă. Fațadele grafit mat, frigiderul inox și cuptorul negru stau pe o singură linie, iar șorțul de marmură gri și lumina de sub corpuri o deschid. Masa mică albă cu scaune pudrate aduce un ton blând într-un spațiu sobru. În interior totul e alb și ordonat: sertare, mașină de spălat vase, locuri gândite pentru fiecare lucru.",
      ru: "Ниша между двумя стенами, превращенная в полноценную кухню. Матовые графитовые фасады, холодильник из нержавейки и черная духовка стоят в одну линию, а фартук из серого мрамора и подсветка под шкафами раскрывают пространство. Небольшой белый стол с пудровыми стульями добавляет мягкости строгому интерьеру. Внутри все белое и упорядоченное: ящики, посудомоечная машина, продуманное место для каждой вещи.",
      en: "A niche between two walls turned into a complete kitchen. The matte graphite fronts, the stainless-steel fridge and the black oven sit on a single line, while the grey marble splashback and the light beneath the wall units open it up. The small white table with powder-pink chairs adds a soft note to a sober space. Inside, everything is white and orderly: drawers, a dishwasher, a thought-out place for everything.",
    },
    an: "",
    suprafata: "",
    stadiu: "",
    locatie: { ro: "", ru: "", en: "" },
    rol: { ro: "Proiectarea mobilierului, randări", ru: "Проектирование мебели, рендеры", en: "Furniture design, renderings" },
    coperta: "01.jpg",
  },
];
