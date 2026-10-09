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
      lucrari: "Lucrări selectate", toate: "Toate", vezi: "Vezi proiectele", descarcaCv: "Deschide CV", scrieMi: "Scrie-mi pe", cvTitlu: "CV",
      cumLucrez: "Cum lucrez", procesSupra: "De la idee la producție",
      despreSupra: "Designer de interior și mobilier", programe: "Programe", limbi: "Limbi",
      cvRo: "CV în română (PDF)", cvRu: "CV în rusă (PDF)",
      contactSupra: "Hai să vorbim", inapoi: "Toate proiectele", urmatorul: "Proiectul următor",
      rol: "Rolul meu", concept: "Concept", realizat: "Realizat",
      inchide: "Închide", anterioara: "Poza anterioară", urmatoarea: "Poza următoare",
      poza: "imaginea", lipsa: "Lipsește poza: ", sari: "Sari la conținut",
      categorii: { interior: "Interioare", bucatarie: "Bucătării", mobilier: "Mobilier" },
    },
    ru: {
      proiecte: "Проекты", despre: "Обо мне", contact: "Контакты", meniu: "Меню",
      lucrari: "Избранные работы", toate: "Все", vezi: "Смотреть проекты", descarcaCv: "Открыть резюме", scrieMi: "Напишите мне в", cvTitlu: "Резюме",
      cumLucrez: "Как я работаю", procesSupra: "От идеи до производства",
      despreSupra: "Дизайнер интерьеров и мебели", programe: "Программы", limbi: "Языки",
      cvRo: "Резюме на румынском (PDF)", cvRu: "Резюме на русском (PDF)", cvEn: "Резюме на английском (PDF)",
      contactSupra: "Давайте обсудим", inapoi: "Все проекты", urmatorul: "Следующий проект",
      rol: "Моя роль", concept: "Концепция", realizat: "Реализовано",
      inchide: "Закрыть", anterioara: "Предыдущее фото", urmatoarea: "Следующее фото",
      poza: "изображение", lipsa: "Нет фото: ", sari: "Перейти к содержанию",
      categorii: { interior: "Интерьеры", bucatarie: "Кухни", mobilier: "Мебель" },
    },
    en: {
      proiecte: "Projects", despre: "About me", contact: "Contact", meniu: "Menu",
      lucrari: "Selected work", toate: "All", vezi: "View projects", descarcaCv: "Open CV", scrieMi: "Message me on", cvTitlu: "CV",
      cumLucrez: "How I work", procesSupra: "From idea to production",
      despreSupra: "Interior and furniture designer", programe: "Software", limbi: "Languages",
      cvRo: "CV in Romanian (PDF)", cvRu: "CV in Russian (PDF)", cvEn: "CV in English (PDF)",
      contactSupra: "Let's talk", inapoi: "All projects", urmatorul: "Next project",
      rol: "My role", concept: "Concept", realizat: "Built",
      inchide: "Close", anterioara: "Previous image", urmatoarea: "Next image",
      poza: "image", lipsa: "Missing image: ", sari: "Skip to content",
      categorii: { interior: "Interiors", bucatarie: "Kitchens", mobilier: "Furniture" },
    },
  };
  UI.ro.cvEn = "CV în engleză (PDF)";
  var LIMBI = ["ro", "ru", "en"];

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
    if (p.stadiu === "concept" || p.stadiu === "realizat") {
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
      '<a href="#contact">' + esc(u("contact")) + "</a>" +
      '<div class="limba" role="group" aria-label="Limba / Язык / Language">' +
      LIMBI.map(function (l) {
        return '<button type="button" data-limba="' + l + '" aria-pressed="' + (lang === l) + '">' + l.toUpperCase() + "</button>";
      }).join("") + "</div>";
    return (
      '<a class="ascuns-vizual" href="#continut">' + esc(u("sari")) + "</a>" +
      '<header class="antet" id="antet"><div class="container">' +
      '<a class="sigla" href="#"><img src="imagini/logo/semn-verde.png" alt="" width="22" height="32"><span>' + esc(t(S.nume)) + "</span></a>" +
      '<button type="button" class="buton-meniu" aria-expanded="false" aria-controls="meniu" aria-label="' + esc(u("meniu")) + '">' +
      '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M3 6h14M3 10h14M3 14h14"/></svg></button>' +
      '<nav class="meniu" id="meniu" aria-label="' + esc(u("meniu")) + '">' + nav + "</nav>" +
      "</div></header>"
    );
  }

  function sectiuneContact() {
    var c = S.contact || {};
    var linii = "";
    if (c.email) linii += '<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a>";
    if (c.telefon) linii += '<a href="tel:' + esc(c.telefon.replace(/[^\d+]/g, "")) + '">' + esc(c.telefon) + "</a>";
    var retele = "";
    [["telegram", "Telegram"], ["whatsapp", "WhatsApp"], ["viber", "Viber"], ["instagram", "Instagram"], ["behance", "Behance"]]
      .forEach(function (r) {
        if (c[r[0]]) retele += '<a href="' + esc(c[r[0]]) + '" target="_blank" rel="noopener">' + r[1] + "</a>";
      });
    var cv = butoaneCv("contur", "contur");
    var clover = S.arataClover === false ? "" :
      '<div class="clover"><img src="imagini/logo/semn-auriu.png" alt="" width="18" height="26"><span>CLOVER</span></div>';
    return (
      '<section class="contact" id="contact"><div class="container">' +
      '<div class="supratitlu">' + esc(u("contactSupra")) + "</div>" +
      '<h2 class="titlu-sectiune">' + esc(u("contact")) + "</h2>" +
      (t(S.texte.contactText) ? '<p class="text">' + esc(t(S.texte.contactText)) + "</p>" : "") +
      '<div class="contact-linii">' + linii + "</div>" +
      (retele ? '<div class="grup-contact"><div class="eticheta-mica">' + esc(u("scrieMi")) + '</div><div class="retele">' + retele + "</div></div>" : "") +
      (cv ? '<div class="grup-contact"><div class="eticheta-mica">' + esc(u("cvTitlu")) + '</div><div class="retele">' + cv + "</div></div>" : "") +
      '<div class="subsol"><div>© ' + new Date().getFullYear() + " " + esc(t(S.nume)) + " · " + esc(t(S.oras)) + "</div>" + clover + "</div>" +
      "</div></section>"
    );
  }

  function luminaHtml() {
    return (
      '<div class="lumina" id="lumina" role="dialog" aria-modal="true" aria-label="">' +
      '<div class="bara"><span id="lumina-numar"></span>' +
      '<button type="button" id="lumina-inchide" aria-label="' + esc(u("inchide")) + '">' +
      '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 5l12 12M17 5L5 17"/></svg></button></div>' +
      '<figure><img id="lumina-img" alt=""></figure>' +
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
      return '<li><div class="nr">' + (cifre[i] || i + 1) + "</div><h3>" + esc(t(p.titlu)) + "</h3><p>" + esc(t(p.text)) + "</p></li>";
    }).join("");
    var proces = pasi ?
      '<section class="proces"><div class="container">' +
      '<div class="supratitlu">' + esc(u("procesSupra")) + "</div>" +
      '<h2 class="titlu-sectiune">' + esc(u("cumLucrez")) + "</h2>" +
      '<ol class="pasi">' + pasi + "</ol></div></section>" : "";

    var paragrafe = [].concat(S.texte.despre && (S.texte.despre[lang] || S.texte.despre.ro) || [])
      .map(function (x) { return "<p>" + esc(x) + "</p>"; }).join("");
    var fise = "";
    if (t(S.texte.programe)) fise += "<div><dt>" + esc(u("programe")) + "</dt><dd>" + esc(t(S.texte.programe)) + "</dd></div>";
    if (t(S.texte.limbi)) fise += "<div><dt>" + esc(u("limbi")) + "</dt><dd>" + esc(t(S.texte.limbi)) + "</dd></div>";
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
        '<div class="panou-verde"><img class="trifoi" src="imagini/logo/semn-auriu.png" alt="" width="64" height="95">' +
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

  // ---------- desenare și navigare ----------
  function deseneaza() {
    document.documentElement.lang = lang;
    var m = /^#\/proiect\/([^/?#]+)/.exec(location.hash);
    var p = m ? P.filter(function (x) { return x.id === decodeURIComponent(m[1]); })[0] : null;
    var baza = t(S.nume) + " — " + t(S.rol);
    document.title = p ? t(p.titlu) + " — " + t(S.nume) : baza;

    app.innerHTML = antet() + '<main id="continut">' + (p ? paginaProiect(p) : paginaPrincipala()) + "</main>" + sectiuneContact() + luminaHtml();
    leaga();

    if (p) {
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

    var bm = app.querySelector(".buton-meniu");
    var meniu = document.getElementById("meniu");
    bm.addEventListener("click", function () {
      var d = meniu.classList.toggle("deschis");
      bm.setAttribute("aria-expanded", d);
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
    L.addEventListener("click", function (e) { if (e.target === L || e.target.tagName === "FIGURE") inchideLumina(); });
    var x0 = null;
    L.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    L.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) mutaLumina(dx < 0 ? 1 : -1);
      x0 = null;
    });
  }

  // ---------- vizualizare mare ----------
  function m(id) { return document.getElementById(id); }
  function arataPoza() {
    var id = lumina.id;
    if (!id) return;
    var f = lumina.poze[lumina.i];
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
    document.body.style.overflow = "";
    if (lumina.inapoiLa) lumina.inapoiLa.focus();
  }
  function mutaLumina(d) {
    var n = lumina.poze.length;
    lumina.i = (lumina.i + d + n) % n;
    arataPoza();
  }
  document.addEventListener("keydown", function (e) {
    var L = document.getElementById("lumina");
    if (!L || !L.classList.contains("deschis")) return;
    if (e.key === "Escape") inchideLumina();
    else if (e.key === "ArrowRight") mutaLumina(1);
    else if (e.key === "ArrowLeft") mutaLumina(-1);
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
