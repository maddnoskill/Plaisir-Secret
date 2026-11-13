// En-tête et pied de page communs à toutes les pages.
(function () {
  var page = document.body.dataset.page || "";
  var theme = new URLSearchParams(location.search).get("theme");
  var q = theme ? "?theme=" + theme : "";
  function lien(href, texte, cle, cls) {
    var full = href.indexOf("?") > -1 && q ? href.replace("?", q + "&") : href.replace(/(#|$)/, q + "$1");
    return '<a href="' + full + '" class="' + (cls || "") + (page === cle ? " actif" : "") + '">' + texte + "</a>";
  }

  var header = document.getElementById("site-header");
  if (header) {
    header.innerHTML =
      '<div class="trustbar"><div class="wrap">' +
      "<span><b>✓</b> Profils vérifiés avec pièce d'identité</span>" +
      "<span><b>18+</b> Membres et clients majeurs seulement</span>" +
      "<span><b>🔒</b> Paiements sécurisés</span>" +
      "<span><b>⚑</b> Signalement en 1 clic, modération 7 jours sur 7</span>" +
      "</div></div>" +
      '<header class="topbar"><div class="wrap">' +
      '<a class="logo" href="index.html' + q + '">Plaisir <span>Secret</span></a>' +
      '<form class="search" action="membres.html" role="search">' +
      (theme ? '<input type="hidden" name="theme" value="' + theme + '">' : "") +
      '<input name="q" placeholder="Massage, coach, ville…" aria-label="Rechercher">' +
      '<button aria-label="Rechercher">⌕</button></form>' +
      '<button class="burger" aria-label="Menu">☰</button>' +
      '<a class="btn btn-small abo-mobile" href="abonnement.html' + q + '">Abonnez-vous</a>' +
      '<nav class="mainnav">' +
      lien("index.html", "Accueil", "accueil") +
      lien("membres.html", "Membres", "membres") +
      lien("vip.html", "★ VIP", "vip", "vip") +
      lien("soutien.html", "Soutien", "soutien") +
      lien("espace-membre.html", "Mon espace", "espace") +
      lien("abonnement.html", "Abonnez-vous", "abonnement", "btn btn-small") +
      "</nav></div></header>";

    var burger = header.querySelector(".burger");
    var nav = header.querySelector(".mainnav");
    burger.addEventListener("click", function () { nav.classList.toggle("open"); });
  }

  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML =
      '<footer class="footer"><div class="wrap"><div class="cols">' +
      '<div><a class="logo" href="index.html' + q + '">Plaisir <span>Secret</span></a>' +
      '<p>L\'annuaire québécois des soins, du bien-être et des expériences privées. Des membres vérifiés, du respect, de la discrétion.</p></div>' +
      "<div><h4>Explorer</h4>" + lien("membres.html", "Tous les membres") + lien("vip.html", "Membres VIP") + lien("cadeau.html", "🎁 Cartes-cadeaux") + lien("levis.html", "Lévis") + lien("quebec.html", "Québec") + lien("montreal.html", "Montréal") + "</div>" +
      "<div><h4>Membres</h4>" + lien("abonnement.html", "Abonnez-vous") + lien("espace-membre.html", "Mon espace") + lien("soutien.html#securite", "Sécurité") + "</div>" +
      "<div><h4>Aide</h4>" + lien("soutien.html", "Soutien et FAQ") + lien("soutien.html#signaler", "Signaler un profil") + lien("conditions.html", "Conditions d'utilisation") + lien("confidentialite.html", "Confidentialité") + "</div>" +
      "</div>" +
      '<p class="law">© ' + new Date().getFullYear() + " Plaisir Secret, Québec. Aucune annonce de services sexuels n'est acceptée (Code criminel, art. 286.4) : chaque profil est vérifié et modéré, et tout profil qui enfreint cette règle est retiré. 18 ans et plus seulement.</p>" +
      "</div></footer>";
  }
})();

// ----- Appli mobile : barre d'onglets, installation, mode hors ligne -----
(function () {
  var page = document.body.dataset.page || "";
  var onglets = [
    ["index.html", "⌂", "Accueil", "accueil"],
    ["membres.html", "☷", "Membres", "membres"],
    ["vip.html", "★", "VIP", "vip"],
    ["espace-membre.html", "◉", "Mon espace", "espace"],
    ["soutien.html", "?", "Soutien", "soutien"]
  ];
  var barre = document.createElement("nav");
  barre.className = "tabbar";
  barre.setAttribute("aria-label", "Navigation principale");
  barre.innerHTML = onglets.map(function (o) {
    return '<a href="' + o[0] + '" class="' + (page === o[3] ? "actif" : "") + '"><span>' + o[1] + "</span>" + o[2] + "</a>";
  }).join("");
  document.body.appendChild(barre);

  // Bouton « Installer l'appli » (Android/Chrome). Sur iPhone : Partager > Sur l'écran d'accueil.
  var invite = null;
  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    invite = e;
    document.querySelectorAll(".installer").forEach(function (b) { b.classList.remove("hidden"); });
  });
  document.addEventListener("click", function (e) {
    var b = e.target.closest(".installer");
    if (!b || !invite) return;
    invite.prompt();
    invite.userChoice.finally(function () { invite = null; b.classList.add("hidden"); });
  });

  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("/sw.js").catch(function () { /* sans gravité */ });
  }
})();
