(function () {
  var config = window.PLAISIR_SECRET || {};
  var membres = window.MEMBRES || [];
  var params = new URLSearchParams(location.search);
  var theme = params.get("theme");
  var jours = ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"];

  function $(sel, root) { return (root || document).querySelector(sel); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function lienProfil(m) { return "profil.html?id=" + encodeURIComponent(m.id) + (theme ? "&theme=" + theme : ""); }
  function sansAccent(s) { return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); }

  // ----- Carte d'un membre -----
  function carte(m) {
    return '<a class="pcard" href="' + lienProfil(m) + '">' +
      '<div class="ph"><img src="' + esc(m.photo) + '" alt="Photo de ' + esc(m.nom) + '" loading="lazy">' +
      '<div class="tags">' + (m.verifie ? '<span class="badge ok">✓ Vérifié</span>' : "<span></span>") +
      (m.vip ? '<span class="badge vip">★ VIP</span>' : "") + "</div>" +
      '<div class="over"><h3>' + esc(m.nom) + (m.age ? ", " + m.age : "") + "</h3><small>📍 " + esc(m.ville) + "</small></div></div>" +
      '<div class="body"><span class="cat">' + esc(m.categorie) + "</span>" +
      '<div class="row"><span>★ ' + m.note.toFixed(1) + " (" + m.avis + ")</span>" +
      '<span>dès <span class="price">' + m.prix + " $</span></span></div></div></a>";
  }

  function afficherGrille(el, liste) {
    el.innerHTML = liste.length ? liste.map(carte).join("") :
      '<p class="empty">Aucun membre ne correspond à votre recherche pour l\'instant. Essayez une autre ville ou catégorie.</p>';
  }

  // ----- Grilles (accueil, membres, VIP) -----
  var grille = $("#grille");
  if (grille) {
    var filtreCat = params.get("cat") || "";
    var recherche = params.get("q") || "";
    var vipSeulement = grille.dataset.vip === "1";
    var limite = parseInt(grille.dataset.limite || "0", 10);
    var champ = $("#filtre-texte");
    var ville = $("#filtre-ville");
    if (champ) champ.value = recherche;

    if (ville) {
      Array.from(new Set(membres.map(function (m) { return m.ville; }))).sort().forEach(function (v) {
        ville.insertAdjacentHTML("beforeend", "<option>" + esc(v) + "</option>");
      });
    }

    var chips = $("#chips");
    if (chips) {
      chips.innerHTML = ['<button class="chip" data-cat="">Tout</button>'].concat(window.CATEGORIES.map(function (c) {
        return '<button class="chip" data-cat="' + esc(c) + '">' + esc(c) + "</button>";
      })).join("");
      chips.addEventListener("click", function (e) {
        var b = e.target.closest(".chip"); if (!b) return;
        filtreCat = b.dataset.cat; rendre();
      });
    }

    function rendre() {
      var t = sansAccent(champ ? champ.value : recherche);
      var liste = membres.filter(function (m) {
        if (vipSeulement && !m.vip) return false;
        if (filtreCat && m.categorie !== filtreCat) return false;
        if (ville && ville.value && m.ville !== ville.value) return false;
        if (t) {
          var txt = sansAccent([m.nom, m.ville, m.quartier, m.categorie, m.titre, m.bio].join(" "));
          if (txt.indexOf(t) === -1) return false;
        }
        return true;
      });
      liste.sort(function (a, b) { return (b.vip - a.vip) || (b.note - a.note); });
      if (limite) liste = liste.slice(0, limite);
      afficherGrille(grille, liste);
      if (chips) chips.querySelectorAll(".chip").forEach(function (c) { c.classList.toggle("actif", c.dataset.cat === filtreCat); });
      var compte = $("#compte"); if (compte) compte.textContent = liste.length + " membre" + (liste.length > 1 ? "s" : "");
    }
    if (champ) champ.addEventListener("input", rendre);
    if (ville) ville.addEventListener("change", rendre);
    rendre();
  }

  // ----- Page profil -----
  var profil = $("#profil");
  if (profil) {
    var m = membres.find(function (x) { return x.id === params.get("id"); }) || membres[0];
    document.title = m.nom + " · " + m.categorie + " à " + m.ville + " · Plaisir Secret";
    var semaine = jours.map(function (j) {
      var h = m.dispo[j];
      return '<div class="' + (h ? "" : "off") + '"><strong>' + j + "</strong>" + (h ? esc(h).replace(" à ", "<br>à ") : "—") + "</div>";
    }).join("");
    profil.innerHTML =
      '<p class="crumbs"><a href="index.html' + (theme ? "?theme=" + theme : "") + '">Accueil</a> › <a href="membres.html?cat=' + encodeURIComponent(m.categorie) + (theme ? "&theme=" + theme : "") + '">' + esc(m.categorie) + "</a> › " + esc(m.nom) + "</p>" +
      '<div class="profile">' +
      '<div class="gallery"><img src="' + esc(m.photo) + '" alt="Photo de ' + esc(m.nom) + '"></div>' +
      "<div>" +
      "<h1>" + esc(m.nom) + (m.age ? ", " + m.age : "") + "</h1>" +
      '<p class="sub">' + esc(m.titre) + " · 📍 " + esc(m.quartier) + ", " + esc(m.ville) + "</p>" +
      '<div class="badges">' +
      (m.verifie ? '<span class="badge ok">✓ Identité vérifiée</span>' : "") +
      (m.vip ? '<span class="badge vip">★ Membre VIP</span>' : "") +
      '<span class="badge soft">★ ' + m.note.toFixed(1) + " · " + m.avis + " avis</span>" +
      '<span class="badge soft">18+</span></div>' +
      '<div class="block"><h2>À propos</h2><p>' + esc(m.bio) + "</p></div>" +
      '<div class="block"><h2>Services et prix</h2>' + m.services.map(function (s) {
        return '<div class="svc"><span>' + esc(s.nom) + "</span><b>" + s.prix + " $</b></div>";
      }).join("") + "</div>" +
      '<div class="block"><h2>Où</h2><p>' + m.lieux.map(esc).join(" · ") + " · Langues : " + m.langues.map(esc).join(", ") + "</p></div>" +
      '<div class="block"><h2>Disponibilités</h2><div class="week">' + semaine + "</div></div>" +
      "</div>" +
      '<aside class="booking">' +
      '<div class="from">À partir de <b>' + m.prix + " $</b></div>" +
      '<form class="form" data-form="reservation">' +
      '<input type="hidden" name="_sujet" value="Réservation pour ' + esc(m.nom) + '">' +
      '<input type="hidden" name="membre" value="' + esc(m.nom) + " (" + esc(m.id) + ')">' +
      '<label>Service<select name="service" required>' + m.services.map(function (s) { return "<option>" + esc(s.nom) + " · " + s.prix + " $</option>"; }).join("") + "</select></label>" +
      '<div class="two"><label>Date<input type="date" name="date" required></label><label>Heure<input type="time" name="heure" required></label></div>' +
      '<div class="two"><label>Prénom<input name="prenom" required autocomplete="given-name"></label><label>Cellulaire<input type="tel" name="telephone" required autocomplete="tel"></label></div>' +
      '<label>Courriel<input type="email" name="courriel" required autocomplete="email"></label>' +
      '<label class="check"><input type="checkbox" required> <span>J\'ai 18 ans ou plus et j\'accepte les <a href="conditions.html">conditions</a>.</span></label>' +
      '<button class="btn btn-block" type="submit">Réserver</button>' +
      '<p class="form-status" role="status"></p></form>' +
      '<div class="contact-row">' +
      '<button class="btn btn-ghost" id="voir-tel">📞 Appeler</button>' +
      '<button class="btn btn-ghost" data-ouvrir="modal-message">💬 Écrire</button></div>' +
      '<p class="secure-note">🔒 Paiement par carte via un lien sécurisé, seulement après la confirmation du membre. Annulation gratuite jusqu\'à 24 h avant.</p>' +
      '<div class="tips"><strong>Conseils antifraude</strong><ul>' +
      "<li>Ne paie jamais par carte-cadeau, cryptomonnaie ou virement à l'avance hors du site.</li>" +
      "<li>Plaisir Secret ne te demandera jamais ton mot de passe.</li>" +
      "<li>Un prix trop beau pour être vrai ? Signale-le.</li></ul></div>" +
      '<button class="report" data-ouvrir="modal-signaler">⚑ Signaler ce profil</button>' +
      "</aside></div>";

    $("#voir-tel").addEventListener("click", function () {
      this.outerHTML = '<a class="btn btn-ghost" href="tel:' + m.tel.replace(/\D/g, "") + '">📞 ' + esc(m.tel) + "</a>";
    });
    document.querySelectorAll("[data-nom-membre]").forEach(function (el) { el.textContent = m.nom; });
    document.querySelectorAll('input[name="membre"]').forEach(function (el) { el.value = m.nom + " (" + m.id + ")"; });
  }

  // ----- Fenêtres (écrire, signaler) -----
  document.addEventListener("click", function (e) {
    var ouvrir = e.target.closest("[data-ouvrir]");
    if (ouvrir) { e.preventDefault(); $("#" + ouvrir.dataset.ouvrir).classList.remove("hidden"); }
    if (e.target.classList.contains("modal") || e.target.closest(".modal-close")) {
      e.target.closest(".modal").classList.add("hidden");
    }
  });

  // ----- Espace membre (démo, enregistré dans ce navigateur) -----
  var espace = $("#espace");
  if (espace) {
    var cle = "plaisir-secret-mon-profil";
    var moi;
    try { moi = JSON.parse(localStorage.getItem(cle)); } catch (err) { moi = null; }
    if (!moi) moi = JSON.parse(JSON.stringify(membres[0]));

    var f = espace;
    f.nom.value = moi.nom; f.ville.value = moi.ville; f.titre.value = moi.titre; f.bio.value = moi.bio;
    f.categorie.value = moi.categorie;
    f.querySelectorAll('input[name="lieux"]').forEach(function (c) { c.checked = moi.lieux.indexOf(c.value) > -1; });
    $("#apercu-photo").src = moi.photo;
    $("#side-photo").src = moi.photo;
    $("#side-nom").textContent = moi.nom;
    var tbody = $("#dispo-lignes");
    tbody.innerHTML = jours.map(function (j) {
      var h = (moi.dispo[j] || "").match(/(\d+) h à (\d+|minuit)/);
      var debut = h ? ("0" + h[1]).slice(-2) + ":00" : "";
      var fin = h ? (h[2] === "minuit" ? "23:59" : ("0" + h[2]).slice(-2) + ":00") : "";
      return '<strong style="text-transform:capitalize">' + j + '</strong><input type="time" name="debut-' + j + '" value="' + debut + '"><input type="time" name="fin-' + j + '" value="' + fin + '">' +
        '<label class="check"><input type="checkbox" name="ferme-' + j + '"' + (h ? "" : " checked") + "> Fermé</label>";
    }).join("");
    $("#svc-lignes").innerHTML = moi.services.map(function (s) {
      return '<div class="two"><input name="svc-nom" value="' + esc(s.nom) + '"><input name="svc-prix" type="number" min="0" value="' + s.prix + '"></div>';
    }).join("");

    $("#photo-fichier").addEventListener("change", function () {
      var file = this.files[0]; if (!file) return;
      var r = new FileReader();
      r.onload = function () { $("#apercu-photo").src = r.result; $("#side-photo").src = r.result; moi.photo = r.result; };
      r.readAsDataURL(file);
    });
    $("#ajout-svc").addEventListener("click", function () {
      $("#svc-lignes").insertAdjacentHTML("beforeend", '<div class="two"><input name="svc-nom" placeholder="Nom du service"><input name="svc-prix" type="number" min="0" placeholder="Prix $"></div>');
    });

    f.addEventListener("submit", function (e) {
      e.preventDefault();
      moi.nom = f.nom.value; moi.ville = f.ville.value; moi.titre = f.titre.value; moi.bio = f.bio.value;
      moi.categorie = f.categorie.value;
      moi.lieux = Array.from(f.querySelectorAll('input[name="lieux"]:checked')).map(function (c) { return c.value; });
      var noms = f.querySelectorAll('input[name="svc-nom"]'), prix = f.querySelectorAll('input[name="svc-prix"]');
      moi.services = [];
      noms.forEach(function (n, i) { if (n.value) moi.services.push({ nom: n.value, prix: Number(prix[i].value) || 0 }); });
      jours.forEach(function (j) {
        var d = f["debut-" + j].value, fi = f["fin-" + j].value;
        moi.dispo[j] = f["ferme-" + j].checked || !d ? "" : parseInt(d, 10) + " h à " + parseInt(fi, 10) + " h";
      });
      try { localStorage.setItem(cle, JSON.stringify(moi)); } catch (err) { /* stockage indisponible */ }
      $("#side-nom").textContent = moi.nom;
      $("#espace-statut").textContent = "✓ Enregistré. Ton profil sera revu par la modération avant d'être mis en ligne.";
    });
  }

  // ----- Envoi des formulaires -----
  document.querySelectorAll("form[data-form]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var status = form.querySelector(".form-status");
      var button = form.querySelector("button[type=submit]");
      var data = new FormData(form);

      if (!config.formEndpoint) {
        var lines = [];
        data.forEach(function (value, key) { if (key.charAt(0) !== "_") lines.push(key + " : " + value); });
        window.location.href = "mailto:" + config.contactEmail +
          "?subject=" + encodeURIComponent(data.get("_sujet") || "Plaisir Secret") +
          "&body=" + encodeURIComponent(lines.join("\n"));
        status.textContent = "Ton application courriel s'ouvre. Envoie le message pour finaliser.";
        return;
      }

      button.disabled = true;
      status.textContent = "Envoi en cours…";
      fetch(config.formEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } })
        .then(function (r) {
          if (!r.ok) throw new Error("Envoi refusé");
          form.reset();
          status.textContent = "Merci ! On te répond en moins de 24 h.";
        })
        .catch(function () { status.textContent = "Oups, l'envoi a échoué. Réessaie ou écris-nous à " + config.contactEmail + "."; })
        .finally(function () { button.disabled = false; });
    });
  });
})();
