/* Logica site-ului. Textele și proiectele se schimbă în continut.js, nu aici. */
(function () {
  "use strict";

  var app = document.getElementById("app");
  var S = window.SITE;
  var P = window.PROIECTE;

  if (!S || !Array.isArray(P)) {
    app.innerHTML =
      '<div class="eroare-continut"><h1>Site-ul nu poate citi fișierul continut.js</h1>' +
      "<p>De obicei e o virgulă sau o ghilimea lipsă în ultima modificare. Deschide continut.js, " +
      "verifică rândurile schimbate ultima dată (fiecare text între ghilimele, virgulă după fiecare rând) " +
      "și salvează din nou.</p></div>";
    return;
  }

  // Folderele de poze decid ce proiecte există (imagini/lista.js, generat de „Verifica” / „Publica”):
  //  • un proiect din continut.js al cărui folder a dispărut sau e gol → nu se mai arată;
  //  • un folder nou, fără bloc în continut.js → apare automat, cu numele folderului drept titlu.
  if (window.POZE && typeof window.POZE === "object") {
    var cunoscute = {};
    P = P.filter(function (p) {
      cunoscute[p.id] = true;
      var lista = window.POZE[p.id];
      return Array.isArray(p.poze) || (lista && lista.length > 0);
    });
    Object.keys(window.POZE).forEach(function (id) {
      if (cunoscute[id] || !window.POZE[id].length) return;
      var nume = id.replace(/[-_]+/g, " ").trim();
      nume = nume.charAt(0).toUpperCase() + nume.slice(1);
      P.push({ id: id, categorie: "", titlu: { ro: nume, ru: "" }, scurt: "", descriere: "", rol: "", coperta: window.POZE[id][0] });
    });
  }

  var UI = {
    ro: {
      proiecte: "Proiecte", despre: "Despre mine", contact: "Contact", meniu: "Meniu",
      lucrari: "Interioare și mobilier", toate: "Toate", vezi: "Vezi proiectele", descarcaCv: "Deschide CV", scrieMi: "Scrie-mi", cvTitlu: "CV",
      cumLucrez: "Cum lucrez", procesSupra: "De la idee la proiect",
      despreSupra: "Designer de interior și mobilier", programe: "Programe", limbi: "Limbi",
      cvRo: "CV în română (PDF)", cvRu: "CV în rusă (PDF)",
      contactSupra: "Hai să vorbim", inapoi: "Toate proiectele", urmatorul: "Proiectul următor",
      rol: "Rolul meu", concept: "Concept", realizat: "Realizat", vizualizare: "Vizualizare 3D",
      inchide: "Închide", mareste: "Mărește", micsoreaza: "Micșorează", anterioara: "Poza anterioară", urmatoarea: "Poza următoare",
      poza: "imaginea", lipsa: "Lipsește poza: ", sari: "Sari la conținut",
      categorii: { interior: "Interioare", bucatarie: "Bucătării", mobilier: "Mobilier" },
    },
    ru: {
      proiecte: "Проекты", despre: "Обо мне", contact: "Контакты", meniu: "Меню",
      lucrari: "Интерьеры и мебель", toate: "Все", vezi: "Смотреть проекты", descarcaCv: "Открыть резюме", scrieMi: "Напишите мне", cvTitlu: "Резюме",
      cumLucrez: "Как я работаю", procesSupra: "От идеи до проекта",
      despreSupra: "Дизайнер интерьеров и мебели", programe: "Программы", limbi: "Языки",
      cvRo: "Резюме на румынском (PDF)", cvRu: "Резюме на русском (PDF)", cvEn: "Резюме на английском (PDF)",
      contactSupra: "Давайте обсудим", inapoi: "Все проекты", urmatorul: "Следующий проект",
      rol: "Моя роль", concept: "Концепция", realizat: "Реализовано", vizualizare: "3D-визуализация",
      inchide: "Закрыть", mareste: "Увеличить", micsoreaza: "Уменьшить", anterioara: "Предыдущее фото", urmatoarea: "Следующее фото",
      poza: "изображение", lipsa: "Нет фото: ", sari: "Перейти к содержанию",
      categorii: { interior: "Интерьеры", bucatarie: "Кухни", mobilier: "Мебель" },
    },
    en: {
      proiecte: "Projects", despre: "About me", contact: "Contact", meniu: "Menu",
      lucrari: "Interiors and furniture", toate: "All", vezi: "View projects", descarcaCv: "Open CV", scrieMi: "Message me", cvTitlu: "CV",
      cumLucrez: "How I work", procesSupra: "From idea to project",
      despreSupra: "Interior and furniture designer", programe: "Software", limbi: "Languages",
      cvRo: "CV in Romanian (PDF)", cvRu: "CV in Russian (PDF)", cvEn: "CV in English (PDF)",
      contactSupra: "Let's talk", inapoi: "All projects", urmatorul: "Next project",
      rol: "My role", concept: "Concept", realizat: "Built", vizualizare: "3D visualisation",
      inchide: "Close", mareste: "Zoom in", micsoreaza: "Zoom out", anterioara: "Previous image", urmatoarea: "Next image",
      poza: "image", lipsa: "Missing image: ", sari: "Skip to content",
      categorii: { interior: "Interiors", bucatarie: "Kitchens", mobilier: "Furniture" },
    },
  };
  UI.ro.cvEn = "CV în engleză (PDF)";
  var LIMBI = ["ro", "ru", "en"];
  var NUME_LIMBA = { ro: "Română", ru: "Русский", en: "English" };
  // Logourile rețelelor (Simple Icons, licență CC0 — liber de folosit)
  var ICONITE = {
    whatsapp: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
    viber: "M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.326 6.812-.416 7.15-.525.776-.252 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.34-11.546-.596-.55-3.006-2.3-8.375-2.323 0 0-.395-.025-1.037-.017zm.058 1.693c.545-.004.88.017.88.017 4.542.02 6.717 1.388 7.222 1.846 1.675 1.435 2.53 4.868 1.906 9.897v.002c-.604 4.878-4.174 5.184-4.832 5.395-.28.09-2.882.737-6.153.524 0 0-2.436 2.94-3.197 3.704-.12.12-.26.167-.352.144-.13-.033-.166-.188-.165-.414l.02-4.018c-4.762-1.32-4.485-6.292-4.43-8.895.054-2.604.543-4.738 1.996-6.173 1.96-1.773 5.474-2.018 7.11-2.03zm.38 2.602c-.167 0-.303.135-.304.302 0 .167.133.303.3.305 1.624.01 2.946.537 4.028 1.592 1.073 1.046 1.62 2.468 1.633 4.334.002.167.14.3.307.3.166-.002.3-.138.3-.304-.014-1.984-.618-3.596-1.816-4.764-1.19-1.16-2.692-1.753-4.447-1.765zm-3.96.695c-.19-.032-.4.005-.616.117l-.01.002c-.43.247-.816.562-1.146.932-.002.004-.006.004-.008.008-.267.323-.42.638-.46.948-.008.046-.01.093-.007.14 0 .136.022.27.065.4l.013.01c.135.48.473 1.276 1.205 2.604.42.768.903 1.5 1.446 2.186.27.344.56.673.87.984l.132.132c.31.308.64.6.984.87.686.543 1.418 1.027 2.186 1.447 1.328.733 2.126 1.07 2.604 1.206l.01.014c.13.042.265.064.402.063.046.002.092 0 .138-.008.31-.036.627-.19.948-.46.004 0 .003-.002.008-.005.37-.33.683-.72.93-1.148l.003-.01c.225-.432.15-.842-.18-1.12-.004 0-.698-.58-1.037-.83-.36-.255-.73-.492-1.113-.71-.51-.285-1.032-.106-1.248.174l-.447.564c-.23.283-.657.246-.657.246-3.12-.796-3.955-3.955-3.955-3.955s-.037-.426.248-.656l.563-.448c.277-.215.456-.737.17-1.248-.217-.383-.454-.756-.71-1.115-.25-.34-.826-1.033-.83-1.035-.137-.165-.31-.265-.502-.297zm4.49.88c-.158.002-.29.124-.3.282-.01.167.115.312.282.324 1.16.085 2.017.466 2.645 1.15.63.688.93 1.524.906 2.57-.002.168.13.306.3.31.166.003.305-.13.31-.297.025-1.175-.334-2.193-1.067-2.994-.74-.81-1.777-1.253-3.05-1.346h-.024zm.463 1.63c-.16.002-.29.127-.3.287-.008.167.12.31.288.32.523.028.875.175 1.113.422.24.245.388.62.416 1.164.01.167.15.295.318.287.167-.008.295-.15.287-.317-.03-.644-.215-1.178-.58-1.557-.367-.378-.893-.574-1.52-.607h-.018z",
    telegram: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
    instagram: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
    behance: "M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z",
  };

  var local = location.protocol === "file:";
  var lang = alegeLimba();
  var filtru = "toate";
  var lumina = { poze: [], i: 0, titlu: "", id: "", inapoiLa: null };

  // ---------- utilitare ----------
  function alegeLimba() {
    var m = /[?&]lang=(ro|ru|en)\b/.exec(location.search);
    if (m) return m[1];
    try { var s = localStorage.getItem("limba"); if (s === "ro" || s === "ru" || s === "en") return s; } catch (e) {}
    return "ro";
  }
  function salveazaLimba() { try { localStorage.setItem("limba", lang); } catch (e) {} }
  function t(v) {
    if (v == null) return "";
    if (typeof v === "string" || typeof v === "number") return String(v);
    return v[lang] || v.ro || "";
  }
  function u(k) { return UI[lang][k]; }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function cale(id, fisier) { return "imagini/proiecte/" + encodeURI(id) + "/" + encodeURI(fisier); }
  function nr2(n) { return n < 10 ? "0" + n : String(n); }
  function listaPoze(p) {
    if (p.poze == null || p.poze === "") {
      // fără „poze:” în continut.js → toate pozele din folder (imagini/lista.js, generat la publicare)
      return (window.POZE && window.POZE[p.id]) ? window.POZE[p.id].slice() : [];
    }
    if (typeof p.poze === "number") {
      var a = [];
      for (var i = 1; i <= p.poze; i++) a.push(nr2(i) + ".jpg");
      return a;
    }
    return Array.isArray(p.poze) ? p.poze : [];
  }
  function doarPoze(p) {
    return listaPoze(p).filter(function (x) { return String(x).trim().charAt(0) !== "#"; });
  }
  function subtitlu(rand) {
    // "# Română | Русский | English"
    var parti = String(rand).replace(/^\s*#\s*/, "").split("|");
    var i = { ro: 0, ru: 1, en: 2 }[lang] || 0;
    return (parti[i] || parti[0]).trim();
  }
  function categoriiDe(p) {
    return [].concat(p.categorie || []).filter(Boolean);
  }
  function metaProiect(p) {
    var bucati = [];
    if (p.stadiu === "concept" || p.stadiu === "realizat" || p.stadiu === "vizualizare") {
      bucati.push('<span class="eticheta' + (p.stadiu === "realizat" ? " realizat" : "") + '">' + esc(u(p.stadiu)) + "</span>");
    }
    [t(p.suprafata), t(p.locatie), t(p.an)].forEach(function (x) { if (x) bucati.push("<span>" + esc(x) + "</span>"); });
    return bucati.length ? '<div class="meta">' + bucati.join("") + "</div>" : "";
  }
  function imgEroare(img, text) {
    if (local) {
      var d = document.createElement("div");
      d.className = "lipsa";
      d.textContent = u("lipsa") + text;
      var gazda = img.closest("button, .carte-img, .erou-imagine") || img.parentNode;
      gazda.replaceWith(d);
    } else {
      var ascunde = img.closest("button.poza, .carte, .erou-imagine");
      if (ascunde) ascunde.style.display = "none";
    }
  }
  function imgIncarcata(img) {
    var r = img.naturalWidth / img.naturalHeight;
    if (img.closest(".lata")) {
      // poză aproape pătrată sau înaltă pe toată lățimea → nu mai înaltă de 60% din ecran
      if (r < 1.3) img.classList.add("inalta");
      return;
    }
    if (r < 1.55 || r > 2.1) img.classList.add("intreaga");
  }

  // ---------- bucăți comune ----------
  // Butoanele de descărcare a CV-ului: limba curentă prima, apoi celelalte.
  function butoaneCv(clasaPrima, clasaRest) {
    if (!S.cv) return "";
    var ordine = [lang].concat(LIMBI.filter(function (l) { return l !== lang; }));
    var eticheta = { ro: "cvRo", ru: "cvRu", en: "cvEn" };
    var html = "", prima = true;
    ordine.forEach(function (l) {
      if (!S.cv[l]) return;
      html += '<a class="buton ' + (prima ? clasaPrima : clasaRest) + '" href="' + esc(S.cv[l]) + '" target="_blank" rel="noopener">' + esc(u(eticheta[l])) + "</a>";
      prima = false;
    });
    return html;
  }

  function antet() {
    var nav =
      '<a href="#proiecte">' + esc(u("proiecte")) + "</a>" +
      '<a href="#despre">' + esc(u("despre")) + "</a>" +
      '<a href="#contact">' + esc(u("contact")) + "</a>";
    // Limba: se vede doar cea aleasă; celelalte apar când duci mouse-ul pe ea (pe telefon — la atingere).
    var limba =
      '<div class="limba" id="limba">' +
      '<button type="button" class="limba-buton" aria-haspopup="true" aria-expanded="false" aria-controls="limba-lista" ' +
      'aria-label="Limba / Язык / Language: ' + esc(NUME_LIMBA[lang]) + '">' + lang.toUpperCase() +
      '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M3 4.5l3 3 3-3"/></svg></button>' +
      '<div class="limba-lista" id="limba-lista"><div>' +
      LIMBI.filter(function (l) { return l !== lang; }).map(function (l) {
        return '<button type="button" data-limba="' + l + '" lang="' + l + '" title="' + esc(NUME_LIMBA[l]) + '">' + l.toUpperCase() + "</button>";
      }).join("") + "</div></div></div>";
    return (
      '<a class="ascuns-vizual" href="#continut">' + esc(u("sari")) + "</a>" +
      '<header class="antet" id="antet"><div class="container">' +
      '<a class="sigla" href="#"><img src="imagini/logo/semn-verde.png" alt="" width="22" height="32"><span>' + esc(t(S.nume)) + "</span></a>" +
      '<div class="antet-dreapta">' +
      '<nav class="meniu" id="meniu" aria-label="' + esc(u("meniu")) + '">' + nav + "</nav>" +
      limba +
      '<button type="button" class="buton-meniu" aria-expanded="false" aria-controls="meniu" aria-label="' + esc(u("meniu")) + '">' +
      '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M3 6h14M3 10h14M3 14h14"/></svg></button>' +
      "</div></div></header>"
    );
  }

  function sectiuneContact(peBrief) {
    var c = S.contact || {};
    var invitatie = B && B.arata && !peBrief ?
      '<div class="grup-contact"><div class="eticheta-mica">' + esc(tr(B.texte.etichetaContact)) + '</div>' +
      '<div class="retele butoane-col"><a class="buton contur" href="#/brief">' + esc(tr(B.texte.butonInvitatie)) + "</a></div></div>" : "";
    var linii = "";
    if (c.email) linii += '<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a>";
    if (c.telefon) linii += '<a href="tel:' + esc(c.telefon.replace(/[^\d+]/g, "")) + '">' + esc(c.telefon) + "</a>";
    var retele = "";
    // Doar logoul; numele apare deasupra când duci mouse-ul pe el.
    [["whatsapp", "WhatsApp"], ["viber", "Viber"], ["telegram", "Telegram"], ["instagram", "Instagram"], ["behance", "Behance"]]
      .forEach(function (r) {
        if (!c[r[0]]) return;
        retele += '<a class="iconita" href="' + esc(c[r[0]]) + '" target="_blank" rel="noopener" aria-label="' + r[1] + '" data-nume="' + r[1] + '">' +
          '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="' + ICONITE[r[0]] + '"/></svg></a>';
      });
    var cv = butoaneCv("contur", "contur");
    var clover = S.arataClover === false ? "" :
      '<div class="clover"><img src="imagini/logo/semn-auriu.png" alt="" width="18" height="26"><span>CLOVER</span></div>';
    // Pe calculator: 3 coloane (contactul | proiect nou + mesagerii | CV); pe telefon una sub alta.
    return (
      '<section class="contact" id="contact"><div class="container"><div class="contact-grila">' +
      '<div class="contact-principal">' +
      '<div class="supratitlu">' + esc(u("contactSupra")) + "</div>" +
      '<h2 class="titlu-sectiune">' + esc(u("contact")) + "</h2>" +
      (t(S.texte.contactText) ? '<p class="text">' + esc(t(S.texte.contactText)) + "</p>" : "") +
      '<div class="contact-linii">' + linii + "</div></div>" +
      '<div class="contact-col">' + invitatie +
      (retele ? '<div class="grup-contact"><div class="eticheta-mica">' + esc(u("scrieMi")) + '</div><div class="retele cu-iconite">' + retele + "</div></div>" : "") +
      "</div>" +
      (cv ? '<div class="contact-col"><div class="grup-contact"><div class="eticheta-mica">' + esc(u("cvTitlu")) + '</div><div class="retele butoane-col">' + cv + "</div></div></div>" : "") +
      "</div>" +
      '<div class="subsol"><div>© ' + new Date().getFullYear() + " " + esc(t(S.nume)) + " · " + esc(t(S.oras)) + "</div>" + clover + "</div>" +
      "</div></section>"
    );
  }

  function luminaHtml() {
    return (
      '<div class="lumina" id="lumina" role="dialog" aria-modal="true" aria-label="">' +
      '<div class="bara"><span id="lumina-numar"></span><div class="bara-butoane">' +
      '<button type="button" id="lumina-minus" aria-label="' + esc(u("micsoreaza")) + '" title="' + esc(u("micsoreaza")) + '">' +
      '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 11h12"/></svg></button>' +
      '<button type="button" id="lumina-plus" aria-label="' + esc(u("mareste")) + '" title="' + esc(u("mareste")) + '">' +
      '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 11h12M11 5v12"/></svg></button>' +
      '<button type="button" id="lumina-inchide" aria-label="' + esc(u("inchide")) + '">' +
      '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 5l12 12M17 5L5 17"/></svg></button></div></div>' +
      '<figure><img id="lumina-img" alt="" draggable="false"></figure>' +
      '<button type="button" class="prev" id="lumina-prev" aria-label="' + esc(u("anterioara")) + '">' +
      '<svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M16 5l-8 8 8 8"/></svg></button>' +
      '<button type="button" class="next" id="lumina-next" aria-label="' + esc(u("urmatoarea")) + '">' +
      '<svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M10 5l8 8-8 8"/></svg></button>' +
      "</div>"
    );
  }

  // ---------- prima pagină ----------
  function paginaPrincipala() {
    var cop = String(S.copertaSite || "");
    var proiectCop = P.filter(function (p) { return cop.indexOf(p.id + "/") === 0; })[0];
    var cvLink = S.cv ? (S.cv[lang] || S.cv.ro) : "";

    var erou =
      '<section class="erou"><div class="container">' +
      "<div>" +
      '<div class="supratitlu">' + esc(t(S.rol)) + " · " + esc(t(S.oras)) + "</div>" +
      "<h1>" + esc(t(S.nume)) + "</h1>" +
      '<p class="motto">' + esc(t(S.texte.motto)) + "</p>" +
      '<p class="intro">' + esc(t(S.texte.intro)) + "</p>" +
      '<div class="butoane"><a class="buton" href="#proiecte">' + esc(u("vezi")) + "</a>" +
      (cvLink ? '<a class="buton contur" href="' + esc(cvLink) + '" target="_blank" rel="noopener">' + esc(u("descarcaCv")) + "</a>" : "") +
      "</div></div>" +
      (cop ?
        '<div class="erou-imagine">' +
        (proiectCop ? '<a href="#/proiect/' + esc(proiectCop.id) + '">' : "") +
        '<img src="imagini/proiecte/' + esc(cop) + '" alt="' + esc(proiectCop ? t(proiectCop.titlu) : "") + '" fetchpriority="high" data-fisier="' + esc(cop) + '">' +
        (proiectCop ? "</a>" : "") +
        (proiectCop ? '<div class="cota" aria-hidden="true"><i class="cota-cap"></i><b></b><span>' + esc(t(proiectCop.scurt) || t(proiectCop.titlu)) + '</span><b></b><i class="cota-cap"></i></div>' : "") +
        "</div>" : "") +
      "</div></section>";

    var cats = [];
    P.forEach(function (p) { categoriiDe(p).forEach(function (c) { if (cats.indexOf(c) < 0) cats.push(c); }); });
    if (filtru !== "toate" && cats.indexOf(filtru) < 0) filtru = "toate";
    var filtre = cats.length > 1 ?
      '<div class="filtre" role="group" aria-label="' + esc(u("proiecte")) + '">' +
      ["toate"].concat(cats).map(function (c) {
        var eticheta = c === "toate" ? u("toate") : (UI[lang].categorii[c] || c);
        return '<button type="button" data-filtru="' + esc(c) + '" aria-pressed="' + (filtru === c) + '">' + esc(eticheta) + "</button>";
      }).join("") + "</div>" : "";

    var carti = P.filter(function (p) { return filtru === "toate" || categoriiDe(p).indexOf(filtru) >= 0; })
      .map(function (p) {
        var cp = p.coperta || doarPoze(p)[0] || "";
        return (
          '<a class="carte" href="#/proiect/' + esc(p.id) + '">' +
          '<div class="carte-img"><img src="' + esc(cale(p.id, cp)) + '" alt="" loading="lazy" decoding="async" data-fisier="' + esc(p.id + "/" + cp) + '"></div>' +
          "<h3>" + esc(t(p.titlu)) + "</h3>" +
          (t(p.scurt) ? "<p>" + esc(t(p.scurt)) + "</p>" : "") +
          metaProiect(p) + "</a>"
        );
      }).join("");

    var proiecte =
      '<section class="proiecte" id="proiecte"><div class="container">' +
      '<div class="cap-sectiune"><div><div class="supratitlu">' + esc(u("lucrari")) + "</div>" +
      '<h2 class="titlu-sectiune">' + esc(u("proiecte")) + "</h2></div>" + filtre + "</div>" +
      '<div class="grila">' + carti + "</div></div></section>";

    var pasi = (S.texte.pasi || []).map(function (p, i) {
      var cifre = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
      // primul pas are și linkul spre briefing (dacă briefingul e pornit în brief.js)
      var link = i === 0 && B && B.arata ?
        '<a class="link-brief" href="#/brief">' + esc(tr(B.texte.butonInvitatie)) + ' <span aria-hidden="true">→</span></a>' : "";
      return '<li><div class="nr">' + (cifre[i] || i + 1) + "</div><h3>" + esc(t(p.titlu)) + "</h3><p>" + esc(t(p.text)) + "</p>" + link + "</li>";
    }).join("");
    var proces = pasi ?
      '<section class="proces"><div class="container">' +
      '<div class="supratitlu">' + esc(u("procesSupra")) + "</div>" +
      '<h2 class="titlu-sectiune">' + esc(u("cumLucrez")) + "</h2>" +
      '<ol class="pasi">' + pasi + "</ol>" +
      "</div></section>" : "";

    var paragrafe = [].concat(S.texte.despre && (S.texte.despre[lang] || S.texte.despre.ro) || [])
      .map(function (x) { return "<p>" + esc(x) + "</p>"; }).join("");
    var fise = "";
    // Un text poate fi și o listă ["rândul 1", "rândul 2"] — fiecare element pe rând nou.
    function randuri(v) {
      var x = v && typeof v === "object" && !Array.isArray(v) ? (v[lang] || v.ro) : v;
      return [].concat(x || []).filter(Boolean).map(esc).join("<br>");
    }
    if (randuri(S.texte.programe)) fise += "<div><dt>" + esc(u("programe")) + "</dt><dd>" + randuri(S.texte.programe) + "</dd></div>";
    if (randuri(S.texte.limbi)) fise += "<div><dt>" + esc(u("limbi")) + "</dt><dd>" + randuri(S.texte.limbi) + "</dd></div>";
    var cvBtn = butoaneCv("", "contur");
    var cifre = (S.texte.cifre || []).map(function (c) {
      return "<div><dt>" + esc(c.numar) + "</dt><dd>" + esc(t(c.text)) + "</dd></div>";
    }).join("");
    var despre =
      '<section class="despre" id="despre"><div class="container">' +
      "<div>" +
      '<div class="supratitlu">' + esc(u("despreSupra")) + "</div>" +
      '<h2 class="titlu-sectiune">' + esc(u("despre")) + "</h2>" +
      paragrafe +
      (fise ? '<dl class="fise">' + fise + "</dl>" : "") +
      (cvBtn ? '<div class="butoane" style="display:flex;flex-wrap:wrap;gap:12px">' + cvBtn + "</div>" : "") +
      "</div>" +
      (cifre ?
        '<div class="panou-verde"><div class="panou-cap"><img class="trifoi" src="imagini/logo/semn-auriu.png" alt="" width="64" height="95">' +
        '<div><div class="clover-cuvant">CLOVER</div>' + (randuri(S.texte.semnatura) ? '<p class="panou-semnatura">' + randuri(S.texte.semnatura) + '</p>' : '') + '</div></div>' +
        '<dl class="cifre">' + cifre + "</dl></div>" : "") +
      "</div></section>";

    return erou + proiecte + proces + despre;
  }

  // ---------- pagina proiectului ----------
  function paginaProiect(p) {
    var lista = listaPoze(p);
    var poze = doarPoze(p);
    var html = "";
    var grup = [];
    var index = 0;

    function golesteGrup() {
      grup.forEach(function (fis, k) {
        var lata = k === 0 || (k === grup.length - 1 && (grup.length - 1) % 2 === 1);
        html +=
          '<button type="button" class="poza' + (lata ? " lata" : "") + '" data-index="' + fis.i + '" aria-label="' +
          esc(t(p.titlu) + " — " + u("poza") + " " + (fis.i + 1)) + '">' +
          '<img src="' + esc(cale(p.id, fis.f)) + '" alt="" loading="' + (fis.i < 2 ? "eager" : "lazy") + '" decoding="async" data-fisier="' + esc(p.id + "/" + fis.f) + '">' +
          "</button>";
      });
      grup = [];
    }
    lista.forEach(function (rand) {
      if (String(rand).trim().charAt(0) === "#") {
        golesteGrup();
        html += '<h2 class="subtitlu">' + esc(subtitlu(rand)) + "</h2>";
      } else {
        grup.push({ f: rand, i: index++ });
      }
    });
    golesteGrup();

    var poz = P.indexOf(p);
    var urm = P[(poz + 1) % P.length];
    var urmCop = urm.coperta || doarPoze(urm)[0] || "";
    var urmator = P.length > 1 ?
      '<div class="urmatorul"><a href="#/proiect/' + esc(urm.id) + '">' +
      "<div><div class=\"supratitlu\">" + esc(u("urmatorul")) + " →</div><h2>" + esc(t(urm.titlu)) + "</h2>" + metaProiect(urm) + "</div>" +
      '<img src="' + esc(cale(urm.id, urmCop)) + '" alt="" loading="lazy" data-fisier="' + esc(urm.id + "/" + urmCop) + '">' +
      "</a></div>" : "";

    lumina.poze = poze;
    lumina.titlu = t(p.titlu);
    lumina.id = p.id;

    return (
      '<article class="proiect"><div class="container">' +
      '<a class="inapoi" href="#proiecte"><span aria-hidden="true">←</span> ' + esc(u("inapoi")) + "</a>" +
      '<div class="proiect-cap"><div><h1>' + esc(t(p.titlu)) + "</h1>" + metaProiect(p) + "</div>" +
      '<div class="proiect-text">' +
      (t(p.descriere) ? "<p>" + esc(t(p.descriere)) + "</p>" : "") +
      (t(p.rol) ? '<p class="rol"><b>' + esc(u("rol")) + "</b>" + esc(t(p.rol)) + "</p>" : "") +
      "</div></div>" +
      '<div class="galerie">' + html + "</div>" +
      urmator +
      "</div></article>"
    );
  }

  // ---------- briefingul (întrebările sunt în brief.js) ----------
  var B = window.BRIEF;
  var CIORNA = "brief-ciorna";

  // "Română | Русский | English" → textul în limba curentă
  function tr(v) {
    if (v == null) return "";
    if (typeof v !== "string") return t(v);
    var p = v.split("|");
    return (p[{ ro: 0, ru: 1, en: 2 }[lang] || 0] || p[0]).trim();
  }
  function trRo(v) { return String(v).split("|")[0].trim(); }
  function citesteCiorna() {
    try { return JSON.parse(localStorage.getItem(CIORNA)) || {}; } catch (e) { return {}; }
  }
  function intrebariBrief() {
    var toate = [];
    B.sectiuni.forEach(function (s) { s.intrebari.forEach(function (q) { toate.push(q); }); });
    return toate;
  }
  function sectiuneVizibila(s, r) {
    if (!s.doarDaca) return true;
    var q = intrebariBrief().filter(function (x) { return x.id === s.doarDaca[0]; })[0];
    var ales = [].concat(r[s.doarDaca[0]] == null ? [] : r[s.doarDaca[0]]);
    return !!q && ales.some(function (k) { return q.optiuni[k] && s.doarDaca.indexOf(trRo(q.optiuni[k])) > 0; });
  }

  function campBrief(q, val) {
    var id = "b-" + q.id;
    var et = esc(tr(q.eticheta)) + (q.obligatoriu ? ' <span class="oblig">*</span>' : "");
    var aj = q.ajutor ? '<div class="ajutor">' + esc(tr(q.ajutor)) + "</div>" : "";
    var atr = ' data-id="' + esc(q.id) + '"' + (q.obligatoriu ? ' data-oblig="1"' : "");
    if (q.tip === "unul" || q.tip === "multe") {
      return '<fieldset class="intrebare"' + atr + "><legend>" + et + "</legend>" + aj + '<div class="optiuni">' +
        (q.optiuni || []).map(function (o, k) {
          var bif = q.tip === "unul" ? val === k : (Array.isArray(val) && val.indexOf(k) >= 0);
          return '<label class="optiune"><input type="checkbox" name="' + id + '" value="' + k + '"' +
            (q.tip === "unul" ? ' data-unul="1"' : "") + (bif ? " checked" : "") + "><span>" + esc(tr(o)) + "</span></label>";
        }).join("") + "</div></fieldset>";
    }
    var tip = q.tip === "telefon" ? 'type="tel" autocomplete="tel" inputmode="tel"' :
      q.tip === "email" ? 'type="email" autocomplete="email"' :
      q.id === "nume" ? 'type="text" autocomplete="name"' : 'type="text"';
    var camp = q.tip === "lung" ?
      '<textarea id="' + id + '" rows="3">' + esc(val || "") + "</textarea>" :
      '<input id="' + id + '" ' + tip + ' value="' + esc(val || "") + '">';
    return '<div class="intrebare"' + atr + '><label for="' + id + '">' + et + "</label>" + aj + camp + "</div>";
  }

  function paginaBrief() {
    var r = citesteCiorna();
    var T = B.texte;
    var sectiuni = B.sectiuni.map(function (s, i) {
      return '<section class="brief-sectiune" data-sectiune="' + i + '"' + (sectiuneVizibila(s, r) ? "" : " hidden") + ">" +
        '<div class="nr" aria-hidden="true"></div><h2>' + esc(tr(s.titlu)) + "</h2>" +
        (s.text ? '<ul class="brief-conditii">' + s.text.map(function (x) { return "<li>" + esc(tr(x)) + "</li>"; }).join("") + "</ul>" : "") +
        s.intrebari.map(function (q) { return campBrief(q, r[q.id]); }).join("") + "</section>";
    }).join("");
    return (
      '<article class="brief"><div class="container">' +
      '<a class="inapoi" href="#"><span aria-hidden="true">←</span> ' + esc(t(S.nume)) + "</a>" +
      '<div class="supratitlu">' + esc(tr(T.supratitlu)) + "</div>" +
      "<h1>" + esc(tr(T.titlu)) + "</h1>" +
      '<p class="brief-intro">' + esc(tr(T.intro)) + "</p>" +
      '<p class="brief-nota">' + esc(tr(T.durata)) + "</p>" +
      '<form id="brief-form" novalidate>' + sectiuni +
      '<section class="brief-poze"><h2>' + esc(tr(T.pozeTitlu)) + "</h2><p>" + esc(tr(T.pozeText)) + "</p><ul>" +
      (T.pozeLista || []).map(function (x) { return "<li>" + esc(tr(x)) + "</li>"; }).join("") + "</ul>" +
      '<p class="brief-cum">' + esc(tr(T.pozeCum)) + "</p></section>" +
      '<p class="brief-eroare" id="brief-eroare" role="alert" hidden>' + esc(tr(T.lipsa)) + "</p>" +
      '<div class="brief-trimite">' +
      '<button type="button" class="buton" data-trimite="whatsapp">' + esc(tr(T.trimiteWhatsapp)) + "</button>" +
      (S.contact && S.contact.email ? '<button type="button" class="buton contur" data-trimite="email">' + esc(tr(T.trimiteEmail)) + "</button>" : "") +
      '<button type="button" class="buton contur" data-trimite="copiaza">' + esc(tr(T.copiaza)) + "</button>" +
      "</div>" +
      '<p class="brief-nota">' + esc(tr(T.viber)) + "</p>" +
      '<div class="brief-dupa" id="brief-dupa" hidden><h2>' + esc(tr(T.dupaTitlu)) + "</h2><p>" + esc(tr(T.dupaText)) + "</p>" +
      "<p>" + esc(tr(T.pozeCum)) + "</p></div>" +
      '<p class="brief-nota brief-conf">' + esc(tr(T.confidential)) + ' <button type="button" class="link-sterge" id="brief-sterge">' + esc(tr(T.sterge)) + "</button></p>" +
      "</form></div></article>"
    );
  }

  function raspunsuriBrief(form) {
    var r = {};
    intrebariBrief().forEach(function (q) {
      if (q.tip === "unul" || q.tip === "multe") {
        var bif = [].slice.call(form.querySelectorAll('input[name="b-' + q.id + '"]:checked')).map(function (i) { return +i.value; });
        if (bif.length) r[q.id] = q.tip === "unul" ? bif[0] : bif;
      } else {
        var el = document.getElementById("b-" + q.id);
        if (el && el.value.trim()) r[q.id] = el.value.trim();
      }
    });
    return r;
  }

  function textBrief(r, simplu) {
    var b = simplu ? "" : "*";
    var linii = [b + tr(B.texte.antetMesaj) + " — " + t(S.nume) + b];
    B.sectiuni.forEach(function (s, i) {
      if (!sectiuneVizibila(s, r)) return;
      var bucata = [];
      s.intrebari.forEach(function (q) {
        var v = r[q.id];
        if (v == null) return;
        var txt = q.tip === "unul" ? tr(q.optiuni[v]) :
          q.tip === "multe" ? v.map(function (k) { return tr(q.optiuni[k]); }).join(", ") : v;
        var et = tr(q.eticheta);
        bucata.push(et + (/[?:]$/.test(et) ? " " : ": ") + txt);
      });
      if (bucata.length) linii.push("", b + tr(s.titlu).toUpperCase() + b, bucata.join("\n"));
    });
    return linii.join("\n");
  }

  function leagaBrief() {
    var form = document.getElementById("brief-form");
    if (!form) return;
    function salveaza() {
      var r = raspunsuriBrief(form);
      try { localStorage.setItem(CIORNA, JSON.stringify(r)); } catch (e) {}
      B.sectiuni.forEach(function (s, i) {
        form.querySelector('[data-sectiune="' + i + '"]').hidden = !sectiuneVizibila(s, r);
      });
      return r;
    }
    form.addEventListener("change", function (e) {
      var x = e.target;
      // la întrebările cu un singur răspuns, bifarea unei variante le debifează pe celelalte
      if (x.getAttribute("data-unul") && x.checked) {
        form.querySelectorAll('input[name="' + x.name + '"]').forEach(function (o) { if (o !== x) o.checked = false; });
      }
      var q = x.closest(".intrebare");
      if (q) q.classList.remove("lipsa");
      salveaza();
    });
    form.addEventListener("input", salveaza);
    form.addEventListener("submit", function (e) { e.preventDefault(); });

    form.querySelectorAll("[data-trimite]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var r = salveaza();
        var lipsa = [].slice.call(form.querySelectorAll("[data-oblig]")).filter(function (el) {
          var v = r[el.getAttribute("data-id")];
          return v == null || (Array.isArray(v) && !v.length);
        });
        form.querySelectorAll(".intrebare.lipsa").forEach(function (el) { el.classList.remove("lipsa"); });
        lipsa.forEach(function (el) { el.classList.add("lipsa"); });
        document.getElementById("brief-eroare").hidden = !lipsa.length;
        if (lipsa.length) { lipsa[0].scrollIntoView({ block: "center" }); return; }

        var cum = btn.getAttribute("data-trimite");
        var c = S.contact || {};
        if (cum === "whatsapp") {
          var nr = (/wa\.me\/(\d+)/.exec(c.whatsapp || "") || [])[1] || String(c.telefon || "").replace(/\D/g, "");
          var url = "https://wa.me/" + nr + "?text=" + encodeURIComponent(textBrief(r, false));
          var w = window.open(url, "_blank");
          if (!w) location.href = url;
          document.getElementById("brief-dupa").hidden = false;
        } else if (cum === "email") {
          location.href = "mailto:" + c.email + "?subject=" + encodeURIComponent(tr(B.texte.antetMesaj) + " — " + (r.nume || "")) +
            "&body=" + encodeURIComponent(textBrief(r, true).replace(/\n/g, "\r\n"));
          document.getElementById("brief-dupa").hidden = false;
        } else {
          copiaza(textBrief(r, false), btn);
        }
      });
    });

    var sterge = document.getElementById("brief-sterge");
    var sigur = false;
    sterge.addEventListener("click", function () {
      if (!sigur) {
        sigur = true;
        sterge.textContent = tr(B.texte.stergeSigur);
        setTimeout(function () { sigur = false; sterge.textContent = tr(B.texte.sterge); }, 4000);
        return;
      }
      try { localStorage.removeItem(CIORNA); } catch (e) {}
      deseneaza();
    });
  }

  function copiaza(text, btn) {
    var vechi = btn.textContent;
    function gata() { btn.textContent = tr(B.texte.copiat); setTimeout(function () { btn.textContent = vechi; }, 2500); }
    function rezerva() {
      var ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); gata(); } catch (e) {}
      document.body.removeChild(ta);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(gata, rezerva);
    else rezerva();
  }

  // ---------- desenare și navigare ----------
  function deseneaza() {
    document.documentElement.lang = lang;
    var m = /^#\/proiect\/([^/?#]+)/.exec(location.hash);
    var p = m ? P.filter(function (x) { return x.id === decodeURIComponent(m[1]); })[0] : null;
    var brief = !p && B && /^#\/brief\b/.test(location.hash);
    var baza = t(S.nume) + " — " + t(S.rol);
    document.title = p ? t(p.titlu) + " — " + t(S.nume) : brief ? tr(B.texte.titlu) + " — " + t(S.nume) : baza;

    app.innerHTML = antet() + '<main id="continut">' + (p ? paginaProiect(p) : brief ? paginaBrief() : paginaPrincipala()) + "</main>" +
      sectiuneContact(brief) + luminaHtml();
    leaga();
    if (brief) leagaBrief();

    if (p || brief) {
      window.scrollTo(0, 0);
    } else if (location.hash && location.hash.length > 1 && location.hash.charAt(1) !== "/") {
      var tinta = document.getElementById(location.hash.slice(1));
      if (tinta) setTimeout(function () { tinta.scrollIntoView(); }, 0);
    }
  }

  function leaga() {
    app.querySelectorAll("img[data-fisier]").forEach(function (img) {
      img.addEventListener("error", function () { imgEroare(img, "imagini/proiecte/" + img.getAttribute("data-fisier")); });
      if (img.closest("button.poza")) {
        if (img.complete && img.naturalWidth) imgIncarcata(img);
        else img.addEventListener("load", function () { imgIncarcata(img); });
      }
    });

    app.querySelectorAll("[data-limba]").forEach(function (b) {
      b.addEventListener("click", function () {
        lang = b.getAttribute("data-limba");
        salveazaLimba();
        var y = window.scrollY;
        deseneaza();
        window.scrollTo(0, y);
      });
    });

    app.querySelectorAll("[data-filtru]").forEach(function (b) {
      b.addEventListener("click", function () {
        filtru = b.getAttribute("data-filtru");
        var y = window.scrollY;
        deseneaza();
        window.scrollTo(0, y);
      });
    });

    var lb = app.querySelector(".limba-buton");
    lb.addEventListener("click", function () {
      var d = document.getElementById("limba").classList.toggle("deschis");
      lb.setAttribute("aria-expanded", d);
    });

    var bm = app.querySelector(".buton-meniu");
    var meniu = document.getElementById("meniu");
    bm.addEventListener("click", function () {
      var d = meniu.classList.toggle("deschis");
      bm.setAttribute("aria-expanded", d);
      inchideLimba();
    });
    meniu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { meniu.classList.remove("deschis"); bm.setAttribute("aria-expanded", "false"); });
    });

    app.querySelectorAll("button.poza").forEach(function (b) {
      b.addEventListener("click", function () { deschideLumina(+b.getAttribute("data-index"), b); });
    });

    document.getElementById("lumina-inchide").addEventListener("click", inchideLumina);
    document.getElementById("lumina-prev").addEventListener("click", function () { mutaLumina(-1); });
    document.getElementById("lumina-next").addEventListener("click", function () { mutaLumina(1); });
    var L = document.getElementById("lumina");
    L.addEventListener("click", function (e) { if (e.target === L) inchideLumina(); });
    leagaZoom(L);
  }

  // ---------- mărirea pozei în vizualizarea mare ----------
  // Rotița mouse-ului (cu sau fără Ctrl), clic pe poză, butoanele + / −, tastele + − 0;
  // pe telefon: două degete (ciupire) și atingere. Când poza e mărită, se trage cu mouse-ul/degetul.
  var ZOOM_MAX = 4;
  var zoom = { s: 1, x: 0, y: 0 };
  function figura() { return document.querySelector("#lumina figure"); }
  function aplicaZoom(anim) {
    var img = m("lumina-img");
    if (!img) return;
    img.style.transition = anim ? "transform .2s ease" : "none";
    img.style.transform = zoom.s === 1 ? "" : "translate(" + zoom.x + "px," + zoom.y + "px) scale(" + zoom.s + ")";
    m("lumina").classList.toggle("marit", zoom.s > 1);
  }
  function limiteazaZoom() {
    var img = m("lumina-img"), f = figura();
    var lx = Math.max(0, (img.offsetWidth * zoom.s - f.clientWidth) / 2);
    var ly = Math.max(0, (img.offsetHeight * zoom.s - f.clientHeight) / 2);
    zoom.x = Math.min(lx, Math.max(-lx, zoom.x));
    zoom.y = Math.min(ly, Math.max(-ly, zoom.y));
  }
  function zoomLa(s2, px, py, anim) {
    var r = figura().getBoundingClientRect();
    var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    s2 = Math.min(ZOOM_MAX, Math.max(1, s2));
    if (px == null) { px = cx; py = cy; }
    var k = s2 / zoom.s;
    // punctul de sub cursor/degete rămâne pe loc
    zoom.x = px - cx - k * (px - cx - zoom.x);
    zoom.y = py - cy - k * (py - cy - zoom.y);
    zoom.s = s2;
    if (s2 === 1) { zoom.x = 0; zoom.y = 0; }
    limiteazaZoom();
    aplicaZoom(anim);
  }
  function resetZoom() { zoom.s = 1; zoom.x = 0; zoom.y = 0; aplicaZoom(false); }

  function leagaZoom(L) {
    var f = figura();
    var pts = {}, gest = null;
    function dist(a, b) { return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y)) || 1; }

    m("lumina-plus").addEventListener("click", function () { zoomLa(zoom.s * 1.5, null, null, true); });
    m("lumina-minus").addEventListener("click", function () { zoomLa(zoom.s / 1.5, null, null, true); });

    L.addEventListener("wheel", function (e) {
      e.preventDefault();
      var d = e.deltaY * (e.deltaMode === 1 ? 33 : 1);
      d = Math.max(-50, Math.min(50, d));
      zoomLa(zoom.s * Math.exp(-d * 0.006), e.clientX, e.clientY, false);
    }, { passive: false });

    f.addEventListener("pointerdown", function (e) {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      if (e.pointerType === "mouse") e.preventDefault();
      try { f.setPointerCapture(e.pointerId); } catch (er) {}
      pts[e.pointerId] = { x: e.clientX, y: e.clientY };
      var ids = Object.keys(pts);
      if (ids.length === 1) {
        gest = { tip: "unul", x0: e.clientX, y0: e.clientY, px: e.clientX, py: e.clientY, mutat: false, tinta: e.target };
      } else if (ids.length === 2) {
        gest = { tip: "doi", d0: dist(pts[ids[0]], pts[ids[1]]), s0: zoom.s };
      }
    });
    f.addEventListener("pointermove", function (e) {
      if (!pts[e.pointerId] || !gest) return;
      pts[e.pointerId] = { x: e.clientX, y: e.clientY };
      var ids = Object.keys(pts);
      if (gest.tip === "doi" && ids.length >= 2) {
        var a = pts[ids[0]], b = pts[ids[1]];
        zoomLa(gest.s0 * dist(a, b) / gest.d0, (a.x + b.x) / 2, (a.y + b.y) / 2, false);
      } else if (gest.tip === "unul") {
        if (Math.abs(e.clientX - gest.x0) + Math.abs(e.clientY - gest.y0) > 6) gest.mutat = true;
        if (zoom.s > 1) {
          zoom.x += e.clientX - gest.px; zoom.y += e.clientY - gest.py;
          limiteazaZoom(); aplicaZoom(false);
        }
        gest.px = e.clientX; gest.py = e.clientY;
      }
    });
    function sfarsit(e) {
      if (!pts[e.pointerId]) return;
      delete pts[e.pointerId];
      if (!gest) return;
      if (gest.tip === "doi") { if (!Object.keys(pts).length) gest = null; return; }
      var dx = e.clientX - gest.x0, dy = e.clientY - gest.y0;
      if (e.type === "pointerup") {
        if (!gest.mutat) {
          // atingere/clic: pe poză = mărește sau revine; pe fundal = închide
          if (gest.tinta.tagName === "IMG") zoomLa(zoom.s > 1 ? 1 : 2.5, e.clientX, e.clientY, true);
          else if (zoom.s === 1) inchideLumina();
        } else if (zoom.s === 1 && Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
          mutaLumina(dx < 0 ? 1 : -1);
        }
      }
      gest = null;
    }
    f.addEventListener("pointerup", sfarsit);
    f.addEventListener("pointercancel", sfarsit);
  }
  window.addEventListener("resize", function () {
    var L = document.getElementById("lumina");
    if (L && L.classList.contains("deschis") && zoom.s > 1) { limiteazaZoom(); aplicaZoom(false); }
  });

  // ---------- vizualizare mare ----------
  function m(id) { return document.getElementById(id); }
  function arataPoza() {
    var id = lumina.id;
    if (!id) return;
    var f = lumina.poze[lumina.i];
    resetZoom();
    m("lumina-img").src = cale(id, f);
    m("lumina-img").alt = lumina.titlu + " — " + u("poza") + " " + (lumina.i + 1);
    m("lumina-numar").textContent = (lumina.i + 1) + " / " + lumina.poze.length;
    var urm = lumina.poze[(lumina.i + 1) % lumina.poze.length];
    if (urm) { var pre = new Image(); pre.src = cale(id, urm); }
  }
  function deschideLumina(i, dela) {
    lumina.i = i;
    lumina.inapoiLa = dela || null;
    arataPoza();
    m("lumina").classList.add("deschis");
    m("lumina").setAttribute("aria-label", lumina.titlu);
    document.body.style.overflow = "hidden";
    m("lumina-inchide").focus();
  }
  function inchideLumina() {
    m("lumina").classList.remove("deschis");
    resetZoom();
    document.body.style.overflow = "";
    if (lumina.inapoiLa) lumina.inapoiLa.focus();
  }
  function mutaLumina(d) {
    var n = lumina.poze.length;
    lumina.i = (lumina.i + d + n) % n;
    arataPoza();
  }
  function inchideLimba() {
    var l = document.getElementById("limba");
    if (!l || !l.classList.contains("deschis")) return;
    l.classList.remove("deschis");
    l.querySelector(".limba-buton").setAttribute("aria-expanded", "false");
  }
  document.addEventListener("click", function (e) {
    if (!e.target.closest || !e.target.closest("#limba")) inchideLimba();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") inchideLimba();
    var L = document.getElementById("lumina");
    if (!L || !L.classList.contains("deschis")) return;
    if (e.key === "Escape") inchideLumina();
    else if (e.key === "ArrowRight") mutaLumina(1);
    else if (e.key === "ArrowLeft") mutaLumina(-1);
    else if (e.key === "+" || e.key === "=") zoomLa(zoom.s * 1.5, null, null, true);
    else if (e.key === "-") zoomLa(zoom.s / 1.5, null, null, true);
    else if (e.key === "0") zoomLa(1, null, null, true);
  });

  window.addEventListener("scroll", function () {
    var a = document.getElementById("antet");
    if (a) a.classList.toggle("cu-linie", window.scrollY > 8);
  }, { passive: true });

  var ultimaRuta = "";
  window.addEventListener("hashchange", function () {
    var ruta = /^#\//.test(location.hash) ? location.hash : "acasa";
    if (ruta === ultimaRuta && ruta === "acasa") {
      var tinta = location.hash.length > 1 ? document.getElementById(location.hash.slice(1)) : null;
      if (tinta) tinta.scrollIntoView();
      else window.scrollTo(0, 0);
      return;
    }
    ultimaRuta = ruta;
    deseneaza();
  });
  ultimaRuta = /^#\//.test(location.hash) ? location.hash : "acasa";
  deseneaza();
})();
