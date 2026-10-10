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
   • stadiu    – eticheta mică de lângă titlu:
                 "vizualizare" = „Vizualizare 3D” (pozele sunt randări)
                 "concept"     = „Concept” (proiect-concept, de ex. pentru expoziție)
                 "realizat"    = „Realizat” (mobila e făcută și montată)
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
    titlu: { ro: "Două direcții pentru același apartament", ru: "Два характера одного интерьера", en: "Two directions for one apartment" },
    scurt: { ro: "Bucătărie, living și dormitor în două interpretări stilistice", ru: "Кухня, гостиная и спальня в двух стилевых решениях", en: "Kitchen, living room and bedroom in two stylistic interpretations" },
    descriere: {
      ro: "Un concept de apartament pentru o expoziție, dezvoltat de la zero în două direcții stilistice. Prima propune o atmosferă caldă și expresivă, cu cărămidă, lemn masiv cu margini vii, metal negru și lumină punctuală. A doua mizează pe tonuri deschise, lamele de lemn și lumină difuză, pentru o senzație de lejeritate. Aceleași încăperi capătă două caractere diferite, astfel încât fiecare vizitator să poată găsi o direcție apropiată de propriul stil de viață. Împreună cu echipa, am realizat panoramele 360° și turul VR pentru prezentarea conceptului.",
      ru: "Концепция квартиры для выставки, разработанная с нуля в двух стилевых направлениях. Первое создает теплую, выразительную атмосферу благодаря кирпичу, массиву дерева с живым краем, черному металлу и акцентному освещению. Второе строится на светлых оттенках, деревянных рейках и мягком рассеянном свете, создающем ощущение легкости. Одни и те же помещения раскрываются по-разному, чтобы каждый посетитель мог найти близкое себе решение. Вместе с командой я подготовила панорамы 360° и VR-тур для презентации концепции.",
      en: "An apartment concept for an exhibition, developed from scratch in two stylistic directions. The first creates a warm, expressive atmosphere with brick, solid live-edge wood, black metal and accent lighting. The second relies on pale tones, wooden slats and soft diffused light for a sense of airiness. The same rooms take on two different characters, so that every visitor can find a direction close to their own way of life. Together with the team, I produced the 360° panoramas and the VR tour presenting the concept.",
    },
    an: "",
    suprafata: "",
    stadiu: "concept",
    locatie: { ro: "Dubai, EAU", ru: "Дубай, ОАЭ", en: "Dubai, UAE" },
    rol: { ro: "Concept interior, randări", ru: "Концепция интерьера, рендеры", en: "Interior concept, renderings" },
    coperta: "03.jpg",
    poze: [
      "02.png",
      "# Direcția I — piatră, lemn și metal | Направление I — камень, дерево и металл | Direction I — stone, wood and metal",
      "03.jpg", "04.jpg", "05.jpg", "06.jpg", "21.jpg",
      "01.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg", "29.jpg", "30.jpg",
      "11.jpg", "12.jpg", "13.jpg", "14.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg",
      "# Direcția II — tonuri deschise și lemn | Направление II — светлые тона и дерево | Direction II — light tones and wood",
      "15.jpg", "16.jpg", "17.jpg", "22.jpg", "23.jpg", "18.jpg", "28.jpg", "19.jpg", "20.jpg",
    ],
  },

  {
    id: "bucatarie-perete-verde",
    categorie: "bucatarie",
    titlu: { ro: "Piatră, lemn și un accent verde", ru: "Камень, дерево и зеленый акцент", en: "Stone, wood and a touch of green" },
    scurt: { ro: "Bucătărie neagră, stejar și un cerc de mușchi stabilizat", ru: "Матовая черная кухня, дуб и стабилизированный мох", en: "A black kitchen, oak and a circle of preserved moss" },
    descriere: {
      ro: "Conceptul pornește de la o bucătărie discretă, integrată vizual în perete, și o zonă de luat masa care atrage privirea. Fațadele negre mate, pe toată înălțimea, sunt echilibrate de șorțul din stejar și de lumina de sub corpurile suspendate. Punctul central este peretele din piatră brută cu un cerc de mușchi stabilizat, iluminat din spate, în dreptul mesei masive cu margini vii. Mobilierul este organizat în funcție de utilizare: coloană pentru frigider, sertare pentru vase, spațiu pentru sortarea deșeurilor sub chiuvetă și coloană pentru centrala termică. Proiectul include desene cotate pentru producția mobilierului.",
      ru: "В основе концепции — кухня, визуально сливающаяся со стеной, и обеденная зона с выразительным акцентом. Матовые черные фасады во всю высоту уравновешены дубовым фартуком и подсветкой под навесными шкафами. Главный акцент — стена из фактурного камня с подсвеченным кругом из стабилизированного мха; перед ней — массивный стол с живым краем. Внутреннее устройство мебели продумано под конкретные задачи: отдельная колонна для холодильника, ящики для посуды, система сортировки отходов под мойкой и колонна, в которой спрятан котел. В проект входят чертежи с размерами для производства мебели.",
      en: "The concept starts from a discreet kitchen that visually blends into the wall and a dining area that draws the eye. The full-height matte black fronts are balanced by the oak splashback and the lighting beneath the wall units. The focal point is the rough stone wall with a backlit circle of preserved moss, facing the solid live-edge table. The furniture is organised around everyday use: a column for the fridge, drawers for dishes, waste sorting under the sink and a column for the boiler. The project includes dimensioned drawings for furniture production.",
    },
    an: "",
    suprafata: "",
    stadiu: "vizualizare",
    locatie: { ro: "", ru: "", en: "" },
    rol: { ro: "Proiectarea mobilierului, randări, desene tehnice", ru: "Проектирование мебели, рендеры, чертежи", en: "Furniture design, renderings, technical drawings" },
    coperta: "01.jpg",
    poze: [
      "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg",
      "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg",
      "# Mobilierul cu fațadele deschise | Мебель с открытыми фасадами | The furniture with open fronts",
      "09.jpg", "10.jpg",
      "# Desene tehnice | Чертежи | Technical drawings",
      "11.jpg", "12.jpg", "13.jpg", "14.jpg", "20.jpg",
    ],
  },

  {
    id: "bucatarie-rafturi-metalice",
    categorie: "bucatarie",
    titlu: { ro: "Bucătărie cu vitrine și zonă de zi", ru: "Кухня с витринами и гостиной", en: "Kitchen with display cabinets and living area" },
    scurt: { ro: "Lemn întunecat, marmură și sticlă cu profil negru", ru: "Темное дерево, мрамор и стекло в черном профиле", en: "Dark wood, marble and glass in a black frame" },
    descriere: {
      ro: "O bucătărie în tonuri profunde, concepută pentru o zonă de zi în care masa și conversațiile au locul lor. Corpurile de jos, în grafit cald, se combină cu cele de sus, cu textură de lemn întunecat, iar șorțul de marmură cu vene aurii adaugă contrast. Coloanele înalte integrează frigiderul side-by-side, cuptorul și cuptorul cu microunde, în timp ce vitrina cu profil metalic negru și iluminare interioară evidențiază paharele și sticlele de vin. Am dezvoltat și o variantă cromatică alternativă, cu nuc și marmură albă, pentru un rezultat mai luminos. Zona de zi continuă compoziția cu masa de sufragerie și canapelele, între stâlpii care dau ritm spațiului.",
      ru: "Кухня в глубоких оттенках, задуманная как часть гостиной, где есть место ужинам и общению. Нижние модули теплого графитового цвета сочетаются с верхними в фактуре темного дерева, а мраморный фартук с золотистыми прожилками добавляет контраст. В высокие колонны встроены холодильник side-by-side, духовой шкаф и микроволновая печь, а витрина в черном металлическом профиле с внутренней подсветкой выделяет бокалы и винные бутылки. Я также разработала альтернативный вариант с ореховым оттенком дерева и белым мрамором для более светлого решения. Обеденный стол и диваны продолжают композицию гостиной, а колонны задают ритм пространству.",
      en: "A kitchen in deep tones, designed for a living area where meals and conversations have their place. Warm graphite base units are paired with wall units in a dark wood texture, while the marble splashback with golden veins adds contrast. The tall columns house the side-by-side fridge, the oven and the microwave, and the display cabinet with a black metal frame and interior lighting highlights the glasses and wine bottles. I also developed an alternative colour version in walnut and white marble for a brighter result. The living area continues the composition with the dining table and sofas, between pillars that give the space its rhythm.",
    },
    an: "",
    suprafata: "",
    stadiu: "vizualizare",
    locatie: { ro: "", ru: "", en: "" },
    rol: { ro: "Proiectarea mobilierului, randări", ru: "Проектирование мебели, рендеры", en: "Furniture design, renderings" },
    coperta: "01.jpg",
    poze: [
      "01.jpg", "02.jpg", "03.jpg", "04.jpg", "14.jpg",
      "# Mobilierul cu fațadele deschise | Мебель с открытыми фасадами | The furniture with open fronts",
      "05.jpg", "06.jpg", "07.jpg", "08.jpg",
      "# Zona de zi | Гостиная | Living area",
      "09.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "15.jpg", "16.jpg",
    ],
  },

  {
    id: "living-bucatarie-insula",
    categorie: "interior",
    titlu: { ro: "Living deschis cu bucătărie și insulă", ru: "Гостиная с кухней и островом", en: "Open living room with kitchen and island" },
    scurt: { ro: "Gri, bej, lemn închis și accente de piatră", ru: "Серый, бежевый, темное дерево и фактура камня", en: "Grey, beige, dark wood and touches of stone" },
    descriere: {
      ro: "Bucătăria, masa și zona de relaxare sunt reunite într-un spațiu deschis, cu funcții distincte și o compoziție unitară. Insula cu aspect de piatră delimitează zona de gătit și oferă un loc pentru micul dejun. Fațadele în gri cald și vitrinele superioare cu profil negru păstrează un aspect ordonat, completat de corpurile de iluminat suspendate cu globuri de sticlă. Peretele TV, placat cu marmură gri cu vene, are alături un raft metalic deschis pentru plante și obiecte personale. Tonurile de gri și bej, podeaua din lemn închis și panourile riflate leagă vizual toate zonele.",
      ru: "Кухня, обеденная зона и место для отдыха объединены в открытом пространстве, где у каждой зоны своя функция, но общая визуальная логика. Остров с фактурой камня отделяет рабочую часть кухни и служит местом для завтраков. Теплые серые фасады и верхние витрины в черном профиле поддерживают сдержанный облик кухни, а подвесные светильники со стеклянными плафонами добавляют легкости. Стена с телевизором отделана серым мрамором с прожилками; рядом предусмотрен открытый металлический стеллаж для растений и личных предметов. Серо-бежевые оттенки, темный деревянный пол и рифленые панели объединяют все зоны в единую композицию.",
      en: "The kitchen, the dining table and the lounge area come together in one open space, each with its own function and one unified composition. The stone-look island marks off the cooking zone and offers a place for breakfast. Warm grey fronts and black-framed glass wall units keep the look orderly, completed by pendant lights with glass globes. The TV wall, clad in veined grey marble, sits next to an open metal shelf for plants and personal objects. Shades of grey and beige, the dark wooden floor and the fluted panels tie all the areas together.",
    },
    an: "",
    suprafata: "",
    stadiu: "vizualizare",
    locatie: { ro: "", ru: "", en: "" },
    rol: { ro: "Concept interior, randări", ru: "Концепция интерьера, рендеры", en: "Interior concept, renderings" },
    coperta: "01.jpg",
  },

  {
    id: "bucatarie-crem",
    categorie: "bucatarie",
    titlu: { ro: "Bucătărie liniară în nuanțe de crem", ru: "Линейная кухня в кремовых оттенках", en: "Linear kitchen in cream shades" },
    scurt: { ro: "Fațade crem, blat din lemn și șorț alb", ru: "Кремовые фасады, деревянная столешница и белый фартук", en: "Cream fronts, a wooden worktop and a white splashback" },
    descriere: {
      ro: "O bucătărie liniară de 3,94 m, proiectată pentru a folosi eficient un singur perete. Fațadele crem fără mânere se combină cu blatul din lemn și șorțul din marmură albă, iar profilurile negre conturează discret mobilierul. În stânga, cuptorul și cuptorul cu microunde stau într-o coloană, la înălțimea ochilor; în dreapta este frigiderul. În interior sunt gândite suportul pentru farfurii, mașina de spălat vase și sertarele adânci pentru oale. Am pregătit și o variantă cu fațade albe, alături de desenul cotat care definește dimensiunile mobilierului pentru producție.",
      ru: "Линейная кухня длиной 3,94 м, спроектированная для рационального использования одной стены. Кремовые фасады без ручек сочетаются с деревянной столешницей и белым мраморным фартуком, а черные профили подчеркивают геометрию мебели. Слева расположена колонна с духовым шкафом и микроволновой печью на уровне глаз, справа — холодильник. Внутри предусмотрены сушка для посуды, посудомоечная машина и глубокие ящики для кастрюль. Я также подготовила вариант с белыми фасадами и размерный чертеж, необходимый для изготовления мебели.",
      en: "A 3.94 m linear kitchen, designed to make good use of a single wall. Handleless cream fronts are paired with a wooden worktop and a white marble splashback, while black profiles discreetly outline the furniture. On the left, the oven and the microwave sit in a column at eye level; on the right is the fridge. Inside, there is a plate rack, a dishwasher and deep drawers for pots. I also prepared a version with white fronts, along with the dimensioned drawing that defines the furniture sizes for production.",
    },
    an: "",
    suprafata: "",
    stadiu: "vizualizare",
    locatie: { ro: "", ru: "", en: "" },
    rol: { ro: "Proiectarea mobilierului, randări, desen tehnic", ru: "Проектирование мебели, рендеры, чертеж", en: "Furniture design, renderings, technical drawing" },
    coperta: "01.jpg",
  },

  {
    id: "bucatarie-alb-negru",
    categorie: "bucatarie",
    titlu: { ro: "Bucătărie în L, în alb și negru", ru: "Угловая кухня в белом и черном", en: "L-shaped kitchen in black and white" },
    scurt: { ro: "Contrast echilibrat și marmură neagră cu vene aurii", ru: "Сдержанный контраст и черный мрамор с золотистыми прожилками", en: "Balanced contrast and black marble with golden veins" },
    descriere: {
      ro: "Un concept de bucătărie în L, construit pe contrastul dintre suprafețele albe și tonurile închise. Corpurile superioare albe se integrează vizual în perete, în timp ce cele inferioare, maro-închis, aproape negre, dau profunzime compoziției. Coloana placată cu marmură neagră cu vene aurii adăpostește o vitrină pentru pahare și vin, iar șorțul din marmură albă echilibrează contrastul și luminează zona de lucru. Coloana pentru electrocasnice reunește frigiderul, cuptorul și cuptorul cu microunde. Randarea cu fațadele deschise completează prezentarea, arătând organizarea interioară a fiecărui corp.",
      ru: "Концепция угловой кухни, построенная на сочетании светлых поверхностей и глубоких темных оттенков. Белые верхние шкафы визуально сливаются со стеной, а нижние фасады темно-коричневого, почти черного цвета придают композиции глубину. В колонну с отделкой из черного мрамора с золотистыми прожилками встроена витрина для бокалов и вина, а белый мраморный фартук уравновешивает контраст и добавляет света рабочей зоне. В отдельной колонне предусмотрены холодильник, духовой шкаф и микроволновая печь. Визуализация с открытыми фасадами показывает внутреннее устройство каждого шкафа.",
      en: "An L-shaped kitchen concept built on the contrast between light surfaces and dark tones. The white wall units blend visually into the wall, while the dark brown, almost black base units give the composition depth. The column clad in black marble with golden veins holds a display cabinet for glasses and wine, and the white marble splashback balances the contrast and brightens the work area. The appliance column brings together the fridge, the oven and the microwave. The rendering with open fronts completes the presentation, showing how each cabinet is organised inside.",
    },
    an: "",
    suprafata: "",
    stadiu: "vizualizare",
    locatie: { ro: "", ru: "", en: "" },
    rol: { ro: "Proiectarea mobilierului, randări", ru: "Проектирование мебели, рендеры", en: "Furniture design, renderings" },
    coperta: "01.jpg",
  },

  {
    id: "bucatarie-alba-l",
    categorie: "bucatarie",
    titlu: { ro: "Bucătărie albă în formă de L", ru: "Белая угловая кухня", en: "White L-shaped kitchen" },
    scurt: { ro: "Fațade albe, blat negru și lumină naturală", ru: "Белые фасады, тонкая черная столешница и естественный свет", en: "White fronts, a black worktop and natural light" },
    descriere: {
      ro: "O bucătărie în formă de L, dominată de alb și definită de contrastul discret al blatului și al electrocasnicelor, ambele negre. Șorțul din marmură albă cu vene fine și vitrina de sticlă de lângă fereastră adaugă textură, păstrând compoziția luminoasă. Fațadele fără mânere și profilurile negre adună mobilierul într-un singur volum vizual. Proiectul include planul și elevația cu cote, pentru un spațiu de 4,08 × 3,43 m. Aceste desene stabilesc dimensiunile și poziționarea mobilierului pentru producție.",
      ru: "Угловая кухня в белой гамме с деликатным черным акцентом — столешницей и бытовой техникой. Фартук из белого мрамора с тонкими прожилками и стеклянная витрина у окна добавляют фактуру, сохраняя ощущение света. Фасады без ручек и черные профили объединяют мебель в цельную визуальную композицию. В проект входят план и развертка с размерами для пространства 4,08 × 3,43 м. Чертежи фиксируют габариты и расположение мебели для производства.",
      en: "An L-shaped kitchen dominated by white and defined by the quiet contrast of the worktop and the appliances, both in black. The white marble splashback with fine veins and the glass cabinet by the window add texture while keeping the composition bright. Handleless fronts and black profiles bring the furniture together into one visual volume. The project includes the dimensioned plan and elevation for a 4.08 × 3.43 m space. These drawings set the dimensions and position of the furniture for production.",
    },
    an: "",
    suprafata: "",
    stadiu: "vizualizare",
    locatie: { ro: "", ru: "", en: "" },
    rol: { ro: "Proiectarea mobilierului, randări, desene tehnice", ru: "Проектирование мебели, рендеры, чертежи", en: "Furniture design, renderings, technical drawings" },
    coperta: "01.jpg",
    poze: [
      "01.jpg", "02.jpg", "03.jpg", "04.jpg", "07.jpg", "08.jpg",
      "# Desene tehnice | Чертежи | Technical drawings",
      "05.jpg", "06.jpg",
    ],
  },

];
