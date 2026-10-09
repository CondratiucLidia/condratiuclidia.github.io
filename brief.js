/* =====================================================================
   BRIEFINGUL PENTRU CLIENȚI — pagina cu întrebări (adresa: site/#/brief).

   Cum funcționează: clientul răspunde, apasă „Trimite pe WhatsApp” și i se
   deschide conversația cu tine, cu tot textul gata scris. El apasă „Trimite”,
   apoi în aceeași conversație îți trimite pozele. Nimic nu se salvează pe site.

   Reguli simple (ca în continut.js):
   • Fiecare text are 3 limbi, despărțite de bara | :
     "Română | Русский | English"
   • Ca să ștergi o întrebare: ștergi rândul ei întreg, de la { până la },
   • Variante de răspuns: lista  optiuni: [ "...", "...", ]
   • tip: "text" = un rând · "lung" = mai multe rânduri · "telefon" · "email"
          "unul" = se alege o singură variantă · "multe" = se pot alege mai multe
   • obligatoriu: true = fără el nu se poate trimite (steluța *)
   • doarDaca: ["ce", "Bucătărie"] = secțiunea apare doar dacă la întrebarea
     „ce” s-a ales „Bucătărie” (se scrie varianta în română, exact ca mai jos)
   ===================================================================== */

window.BRIEF = {
  // false = briefingul NU apare pe site (doar cine are linkul #/brief îl vede).
  // true  = apare butonul „Completează briefingul” la Contact și la „Cum lucrez”.
  arata: true,

  texte: {
    supratitlu: "Primul pas | Первый шаг | The first step",
    titlu: "Briefing pentru proiect | Бриф на проект | Project brief",
    intro: "Răspunsurile mă ajută să înțeleg cum trăiți și ce vă trebuie, încă înainte de prima întâlnire. Completați doar ce știți — întrebările cu * sunt obligatorii, restul le putem discuta împreună. | Ответы помогут мне понять, как вы живете и что вам нужно, еще до первой встречи. Заполните только то, что знаете — вопросы со * обязательны, остальное обсудим вместе. | Your answers help me understand how you live and what you need, even before we first meet. Fill in only what you know — questions marked * are required, the rest we can discuss together.",
    durata: "Durează 10–15 minute. | Займет 10–15 минут. | Takes 10–15 minutes.",
    invitatie: "Aveți un proiect? Răspundeți la câteva întrebări despre locuință și gusturi — durează 10–15 minute. | Есть проект? Ответьте на несколько вопросов о жилье и вкусах — это займет 10–15 минут. | Have a project? Answer a few questions about your home and taste — it takes 10–15 minutes.",
    butonInvitatie: "Completează briefingul | Заполнить бриф | Fill in the brief",
    linkProces: "Primul pas: briefingul | Первый шаг: бриф | The first step: the brief",

    pozeTitlu: "Poze și exemple | Фото и примеры | Photos and examples",
    pozeText: "Pozele mă ajută cel mai mult. După ce trimiteți răspunsurile, trimiteți-mi în aceeași conversație: | Фото помогают мне больше всего. После того как отправите ответы, пришлите в том же чате: | Photos help me most. After you send your answers, send me in the same chat:",
    pozeLista: [
      "3–10 poze cu interioare care vă plac (din Pinterest, Instagram, reviste); | 3–10 фото интерьеров, которые вам нравятся (из Pinterest, Instagram, журналов); | 3–10 photos of interiors you like (from Pinterest, Instagram, magazines);",
      "poze ale încăperii așa cum este acum; | фото помещения в нынешнем виде; | photos of the room as it is now;",
      "planul sau o schiță cu dimensiuni, dacă aveți. | план или эскиз с размерами, если есть. | the floor plan or a sketch with dimensions, if you have one.",
    ],
    pozeCum: "Pe WhatsApp: în conversația cu mine apăsați agrafa 📎 (pe iPhone — „+”), apoi Galerie, alegeți pozele și apăsați Trimite. Pe e-mail: atașați pozele la mesaj înainte să-l trimiteți. | В WhatsApp: в чате со мной нажмите скрепку 📎 (на iPhone — «+»), затем Галерея, выберите фото и нажмите Отправить. По e-mail: прикрепите фото к письму перед отправкой. | On WhatsApp: in our chat tap the paperclip 📎 (on iPhone — “+”), then Gallery, pick the photos and tap Send. By e-mail: attach the photos to the message before sending it.",

    trimiteWhatsapp: "Trimite pe WhatsApp | Отправить в WhatsApp | Send via WhatsApp",
    trimiteEmail: "Trimite pe e-mail | Отправить по e-mail | Send by e-mail",
    copiaza: "Copiază textul | Скопировать текст | Copy the text",
    copiat: "Copiat ✓ | Скопировано ✓ | Copied ✓",
    viber: "Pentru Viber: apăsați „Copiază textul”, deschideți Viber la +373 67 180 952 și lipiți textul în conversație. | Для Viber: нажмите «Скопировать текст», откройте Viber по номеру +373 67 180 952 и вставьте текст в чат. | For Viber: tap “Copy the text”, open Viber at +373 67 180 952 and paste the text into the chat.",
    lipsa: "Completați câmpurile marcate cu * | Заполните поля, отмеченные * | Please fill in the fields marked *",
    dupaTitlu: "Mai e un pas | Остался один шаг | One more step",
    dupaText: "S-a deschis conversația cu răspunsurile gata scrise. Apăsați acolo „Trimite”, apoi atașați pozele în aceeași conversație. Vă răspund cât de curând. | Открылся чат с готовым текстом ответов. Нажмите там «Отправить», затем прикрепите фото в том же чате. Я отвечу вам в ближайшее время. | The chat has opened with your answers ready. Press “Send” there, then attach the photos in the same chat. I will reply as soon as I can.",
    confidential: "Răspunsurile nu se salvează pe site și nu ajung la nimeni altcineva. Până le trimiteți, rămân doar în acest browser, ca să nu le pierdeți. | Ответы не сохраняются на сайте и никому больше не передаются. До отправки они хранятся только в этом браузере, чтобы не потерялись. | Your answers are not stored on the site and go to no one else. Until you send them, they stay only in this browser so you don't lose them.",
    sterge: "Șterge răspunsurile | Очистить ответы | Clear the answers",
    stergeSigur: "Sigur? Apăsați încă o dată | Точно? Нажмите еще раз | Sure? Press again",
    antetMesaj: "Briefing de pe site | Бриф с сайта | Brief from the website",
  },

  sectiuni: [
    {
      titlu: "Despre dumneavoastră | О вас | About you",
      intrebari: [
        { id: "nume", tip: "text", obligatoriu: true, eticheta: "Numele | Имя | Name" },
        { id: "telefon", tip: "telefon", obligatoriu: true, eticheta: "Telefon (WhatsApp / Viber) | Телефон (WhatsApp / Viber) | Phone (WhatsApp / Viber)" },
        { id: "email", tip: "email", eticheta: "E-mail (dacă preferați) | E-mail (по желанию) | E-mail (optional)" },
        { id: "legatura", tip: "unul", eticheta: "Cum vă e mai comod să comunicăm? | Как вам удобнее общаться? | How do you prefer to communicate?",
          optiuni: ["WhatsApp | WhatsApp | WhatsApp", "Viber | Viber | Viber", "Apel telefonic | Звонок | Phone call", "E-mail | E-mail | E-mail"] },
        { id: "localitate", tip: "text", eticheta: "Orașul sau localitatea obiectului | Город или населенный пункт объекта | City or town of the property" },
      ],
    },
    {
      titlu: "Obiectul | Объект | The space",
      intrebari: [
        { id: "ce", tip: "multe", obligatoriu: true, eticheta: "Ce proiectăm? | Что проектируем? | What are we designing?",
          optiuni: [
            "Bucătărie | Кухня | Kitchen", "Living | Гостиная | Living room", "Dormitor | Спальня | Bedroom",
            "Camera copilului | Детская | Children's room", "Baie | Ванная | Bathroom", "Hol | Прихожая | Hallway",
            "Dulap sau dressing | Шкаф или гардеробная | Wardrobe or walk-in closet", "Birou | Кабинет | Home office",
            "Apartament întreg | Вся квартира | Whole apartment", "Casă | Дом | House",
            "Spațiu comercial | Коммерческое помещение | Commercial space", "Altceva | Другое | Something else",
          ] },
        { id: "tip", tip: "unul", eticheta: "Tipul locuinței | Тип жилья | Type of property",
          optiuni: [
            "Apartament în bloc nou | Квартира в новостройке | Apartment in a new building",
            "Apartament în bloc vechi | Квартира в старом доме | Apartment in an older building",
            "Casă | Дом | House", "Spațiu comercial | Коммерческое помещение | Commercial space",
          ] },
        { id: "stare", tip: "unul", eticheta: "În ce stare este acum? | В каком состоянии сейчас? | What state is it in now?",
          optiuni: [
            "Fără reparație (variantă albă) | Без ремонта (белый вариант) | Not renovated yet (shell)",
            "Reparația e în curs | Идет ремонт | Renovation in progress",
            "Reparația e gata — am nevoie de mobilier | Ремонт готов — нужна мебель | Renovation done — I need furniture",
            "Locuim aici și vrem schimbări | Живем здесь и хотим перемен | We live here and want changes",
          ] },
        { id: "suprafata", tip: "text", eticheta: "Suprafața aproximativă, m² | Примерная площадь, м² | Approximate area, m²" },
        { id: "tavan", tip: "text", eticheta: "Înălțimea tavanului, dacă o știți | Высота потолка, если знаете | Ceiling height, if you know it" },
        { id: "plan", tip: "unul", obligatoriu: true, eticheta: "Măsurătorile | Замеры | Measurements",
          ajutor: "Pentru un proiect precis am nevoie de toate dimensiunile spațiului: fiecare perete, înălțimea, ferestrele și ușile, țevile, prizele și caloriferele. Dacă măsurătorile sunt făcute de dumneavoastră, proiectul se realizează pe baza lor, iar responsabilitatea ca acestea să fie exacte și complete vă revine. | Для точного проекта мне нужны все размеры помещения: каждая стена, высота, окна и двери, трубы, розетки и радиаторы. Если замеры выполняете вы, проект разрабатывается на их основе, и ответственность за точность и полноту данных лежит на вас. | For an accurate project I need every dimension of the space: each wall, the height, windows and doors, pipes, sockets and radiators. If you take the measurements yourself, the project is based on them, and you are responsible for making sure they are accurate and complete.",
          optiuni: [
            "Vreau măsurători la fața locului | Нужен замер на объекте | I want on-site measurements",
            "Le fac eu și îmi asum exactitatea lor | Сделаю сам(а) и беру ответственность за их точность | I will measure myself and take responsibility for their accuracy",
          ] },
      ],
    },
    {
      titlu: "Cine locuiește și cum | Кто живет и как | Who lives there and how",
      intrebari: [
        { id: "cine", tip: "text", eticheta: "Cine va locui aici (adulți, copii și vârsta lor) | Кто будет жить (взрослые, дети и их возраст) | Who will live here (adults, children and their ages)" },
        { id: "animale", tip: "text", eticheta: "Animale de companie | Домашние животные | Pets" },
        { id: "viata", tip: "multe", eticheta: "Ce vi se potrivește? | Что про вас? | What describes you?",
          optiuni: [
            "Gătim des | Часто готовим | We cook often", "Primim des oaspeți | Часто принимаем гостей | We often have guests",
            "Lucrez de acasă | Работаю из дома | I work from home", "Avem multe lucruri de depozitat | Много вещей для хранения | We have a lot to store",
            "Avem un hobby care cere loc | Есть хобби, которому нужно место | We have a hobby that needs space",
            "Avem nevoie de liniște și odihnă | Нужны тишина и отдых | We need calm and rest",
            "În familie sunt persoane în vârstă sau cu nevoi speciale | В семье есть пожилые люди или люди с особыми потребностями | Elderly family members or special needs",
          ] },
        { id: "deranjeaza", tip: "lung", eticheta: "Ce vă deranjează acum în locuință? | Что вас сейчас не устраивает в жилье? | What bothers you in your home now?" },
        { id: "ramane", tip: "lung", eticheta: "Ce trebuie să rămână (mobilier, electrocasnice, lucruri dragi)? | Что должно остаться (мебель, техника, любимые вещи)? | What must stay (furniture, appliances, favourite things)?" },
      ],
    },
    {
      titlu: "Gusturi | Вкусы | Taste",
      intrebari: [
        { id: "simt", tip: "text", eticheta: "Cum vreți să vă simțiți acasă? În 2–3 cuvinte | Какие ощущения должен дарить дом? 2–3 слова | How do you want to feel at home? In 2–3 words",
          ajutor: "de exemplu: liniștit, luminos, cald | например: спокойно, светло, тепло | for example: calm, bright, warm" },
        { id: "stil", tip: "multe", eticheta: "Ce stiluri vă plac? | Какие стили нравятся? | Which styles do you like?",
          optiuni: [
            "Modern | Современный | Modern", "Minimalism | Минимализм | Minimalist", "Scandinav | Скандинавский | Scandinavian",
            "Clasic sau neoclasic | Классика или неоклассика | Classic or neoclassical", "Loft | Лофт | Loft", "Japandi | Джапанди | Japandi",
            "Natural: lemn, piatră, in | Натуральный: дерево, камень, лен | Natural: wood, stone, linen",
            "Nu știu încă — vreau să mă ajutați | Пока не знаю — помогите определиться | Not sure yet — I'd like help",
          ] },
        { id: "culori", tip: "text", eticheta: "Culori care vă plac | Цвета, которые нравятся | Colours you like" },
        { id: "nu", tip: "text", eticheta: "Culori, materiale sau lucruri pe care NU le vreți | Цвета, материалы или вещи, которых НЕ хотите | Colours, materials or things you do NOT want" },
        { id: "materiale", tip: "multe", eticheta: "Materiale care vă plac | Материалы, которые нравятся | Materials you like",
          optiuni: [
            "Lemn | Дерево | Wood", "Piatră sau marmură | Камень или мрамор | Stone or marble", "Metal | Металл | Metal",
            "Sticlă | Стекло | Glass", "Textil | Текстиль | Textiles", "Beton sau microciment | Бетон или микроцемент | Concrete or microcement",
          ] },
        { id: "finisaj", tip: "unul", eticheta: "Suprafețele | Поверхности | Surfaces",
          optiuni: ["Mate | Матовые | Matte", "Lucioase | Глянцевые | Glossy", "Nu contează | Не важно | No preference"] },
        { id: "linkuri", tip: "lung", eticheta: "Linkuri cu exemple care vă plac (Pinterest, Instagram, site-uri) | Ссылки на примеры, которые нравятся (Pinterest, Instagram, сайты) | Links to examples you like (Pinterest, Instagram, websites)",
          ajutor: "Pozele le trimiteți la sfârșit — vedeți mai jos. | Фото отправите в конце — см. ниже. | You will send photos at the end — see below." },
      ],
    },
    {
      titlu: "Bucătăria | Кухня | The kitchen",
      doarDaca: ["ce", "Bucătărie"],
      intrebari: [
        { id: "gatit", tip: "unul", eticheta: "Cât de des gătiți? | Как часто готовите? | How often do you cook?",
          optiuni: ["În fiecare zi | Каждый день | Every day", "De câteva ori pe săptămână | Несколько раз в неделю | A few times a week", "Rar | Редко | Rarely"] },
        { id: "inaltime", tip: "text", eticheta: "Cine gătește de obicei și ce înălțime are? | Кто обычно готовит и какого роста? | Who usually cooks and how tall are they?",
          ajutor: "de înălțime depinde înălțimea blatului | от роста зависит высота столешницы | the worktop height depends on it" },
        { id: "mana", tip: "unul", eticheta: "Mâna cu care lucrează mai des | Ведущая рука | Main hand",
          optiuni: ["Dreapta | Правая | Right", "Stânga | Левая | Left"] },
        { id: "forma", tip: "unul", eticheta: "Forma bucătăriei | Форма кухни | Kitchen layout",
          optiuni: [
            "Pe un perete (liniară) | Вдоль одной стены (линейная) | Single wall", "În colț (în L) | Угловая (Г-образная) | L-shaped",
            "În U | П-образная | U-shaped", "Cu insulă | С островом | With an island", "Cu peninsulă | С полуостровом | With a peninsula",
            "Nu știu — propuneți dumneavoastră | Не знаю — предложите вы | Not sure — please suggest",
          ] },
        { id: "tehnica", tip: "multe", eticheta: "Electrocasnice | Бытовая техника | Appliances",
          optiuni: [
            "Plită pe inducție | Индукционная варочная панель | Induction hob", "Plită pe gaz | Газовая варочная панель | Gas hob",
            "Cuptor | Духовой шкаф | Oven", "Cuptor la înălțimea ochilor | Духовка на уровне глаз | Oven at eye level",
            "Cuptor cu microunde | Микроволновая печь | Microwave", "Mașină de spălat vase | Посудомоечная машина | Dishwasher",
            "Frigider încorporat | Встроенный холодильник | Built-in fridge", "Frigider separat sau side-by-side | Отдельностоящий холодильник или side-by-side | Freestanding or side-by-side fridge",
            "Hotă | Вытяжка | Extractor hood", "Mașină de spălat rufe în bucătărie | Стиральная машина на кухне | Washing machine in the kitchen",
            "Cafetieră încorporată | Встроенная кофемашина | Built-in coffee machine",
          ] },
        { id: "tehnicaAre", tip: "text", eticheta: "Ce electrocasnice aveți deja (modelul, dacă îl știți)? | Какая техника уже есть (модель, если знаете)? | Which appliances do you already have (model, if known)?" },
        { id: "manere", tip: "unul", eticheta: "Mânerele | Ручки | Handles",
          optiuni: [
            "Cu mânere | С ручками | With handles", "Fără mânere — profil | Без ручек — профиль | Handleless — profile",
            "Se deschid la apăsare (push-to-open) | Открываются нажатием (push-to-open) | Push-to-open", "Nu știu | Не знаю | Not sure",
          ] },
        { id: "depozitare", tip: "multe", eticheta: "Ce trebuie să încapă | Что нужно разместить | What needs to fit",
          optiuni: [
            "Coș de gunoi cu sortare | Мусорное ведро с сортировкой | Waste sorting bins", "Sertare adânci pentru oale | Глубокие ящики для кастрюль | Deep drawers for pots",
            "Dulap pentru provizii | Шкаф для продуктов | Pantry cabinet", "Vitrină | Витрина | Display cabinet",
            "Rafturi deschise | Открытые полки | Open shelves", "Loc pentru aparate mici | Место для мелкой техники | Space for small appliances",
          ] },
        { id: "masa", tip: "unul", eticheta: "Unde luați masa? | Где вы едите? | Where do you eat?",
          optiuni: ["În bucătărie, la masă | На кухне, за столом | At a table in the kitchen", "La insulă sau la bar | За островом или барной стойкой | At an island or bar", "În altă cameră | В другой комнате | In another room"] },
      ],
    },
    {
      titlu: "Dulapuri și depozitare | Шкафы и хранение | Wardrobes and storage",
      doarDaca: ["ce", "Dulap sau dressing", "Dormitor", "Hol", "Camera copilului"],
      intrebari: [
        { id: "pastrare", tip: "multe", eticheta: "Ce se va păstra | Что будет храниться | What will be stored",
          optiuni: [
            "Haine lungi (paltoane, rochii) | Длинная одежда (пальто, платья) | Long clothes (coats, dresses)", "Haine pe umeraș | Одежда на плечиках | Clothes on hangers",
            "Haine împăturite | Сложенная одежда | Folded clothes", "Încălțăminte | Обувь | Shoes",
            "Lenjerie de pat, pături | Постельное белье, одеяла | Bedding, blankets", "Valize | Чемоданы | Suitcases",
            "Aspirator, uscător de rufe | Пылесос, сушилка для белья | Vacuum cleaner, clothes airer", "Oglindă | Зеркало | Mirror",
          ] },
        { id: "usi", tip: "unul", eticheta: "Ușile dulapului | Двери шкафа | Wardrobe doors",
          optiuni: ["Batante | Распашные | Hinged", "Glisante (cupe) | Раздвижные (купе) | Sliding", "Fără uși | Без дверей | No doors", "Nu știu | Не знаю | Not sure"] },
      ],
    },
    {
      titlu: "Buget și termene | Бюджет и сроки | Budget and timing",
      intrebari: [
        { id: "buget", tip: "text", eticheta: "Buget orientativ, dacă vreți să-l spuneți | Ориентировочный бюджет, если хотите сказать | Approximate budget, if you wish to share it",
          ajutor: "pentru proiect și/sau pentru mobilier — în lei sau euro | на проект и/или мебель — в леях или евро | for the design and/or furniture — in lei or euro" },
        { id: "cand", tip: "unul", eticheta: "Când vreți să începem? | Когда хотите начать? | When would you like to start?",
          optiuni: ["Cât mai repede | Как можно скорее | As soon as possible", "În 1–3 luni | Через 1–3 месяца | In 1–3 months", "În 3–6 luni | Через 3–6 месяцев | In 3–6 months", "Deocamdată doar mă informez | Пока просто узнаю | Just exploring for now"] },
        { id: "termen", tip: "text", eticheta: "Există o dată-limită (mutare, eveniment)? | Есть ли крайний срок (переезд, событие)? | Is there a deadline (move-in, event)?" },
      ],
    },
    {
      titlu: "Colaborarea | Сотрудничество | Working together",
      intrebari: [
        { id: "servicii", tip: "multe", eticheta: "De ce aveți nevoie de la mine? | Что вам нужно от меня? | What do you need from me?",
          optiuni: [
            "Planificare și concept | Планировка и концепция | Layout and concept", "Proiectarea mobilierului | Проектирование мебели | Furniture design",
            "Randări 3D | 3D-визуализация | 3D renderings", "Desene tehnice pentru producție | Чертежи для производства | Technical drawings for production",
            "Ajutor la alegerea materialelor | Помощь с выбором материалов | Help choosing materials", "O consultație | Консультация | A consultation",
            "Nu știu — vreau să discutăm | Не знаю — давайте обсудим | Not sure — let's talk",
          ] },
        { id: "implicare", tip: "unul", eticheta: "Cât de implicat vreți să fiți? | Насколько вы хотите участвовать? | How involved do you want to be?",
          optiuni: [
            "Vreau să particip la fiecare decizie | Хочу участвовать в каждом решении | I want to take part in every decision",
            "Propuneți variante, aleg eu | Предложите варианты, выберу я | Suggest options, I'll choose",
            "Am încredere — decideți dumneavoastră | Доверяю — решайте вы | I trust you — you decide",
          ] },
        { id: "decid", tip: "unul", eticheta: "Cine ia deciziile? | Кто принимает решения? | Who makes the decisions?",
          optiuni: ["Eu | Я | Me", "Împreună cu partenerul sau familia | Вместе с партнером или семьей | Together with my partner or family"] },
        { id: "sursa", tip: "unul", eticheta: "De unde ați aflat de mine? | Откуда вы узнали обо мне? | How did you find me?",
          optiuni: ["Instagram | Instagram | Instagram", "Behance | Behance | Behance", "Recomandare | По рекомендации | Recommendation", "Google | Google | Google", "Altceva | Другое | Other"] },
        { id: "altceva", tip: "lung", eticheta: "Altceva important | Что-то еще важное | Anything else important" },
      ],
    },
  ],
};
