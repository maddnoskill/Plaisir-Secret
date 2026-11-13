// ===== Réglages du site : c'est le seul fichier à modifier =====
window.PLAISIR_SECRET = {
  // Thème de couleurs : "velours", "bordeaux", "nuit" ou "creme".
  theme: "velours",

  // Adresse qui reçoit les formulaires, fournie par Formspree (gratuit) :
  // 1. Crée un compte sur https://formspree.io
  // 2. Crée un formulaire, puis copie son adresse (ex. https://formspree.io/f/abcdwxyz)
  // 3. Colle-la entre les guillemets ci-dessous.
  // Tant que c'est vide, le formulaire ouvre plutôt l'application courriel du visiteur.
  formEndpoint: "",

  // Ton courriel de contact (utilisé si formEndpoint est vide).
  contactEmail: "contact@exemple.ca"
};

// Aperçu d'un autre thème sans rien modifier : ajoute ?theme=nuit à l'adresse.
(function () {
  var t = new URLSearchParams(location.search).get("theme");
  if (t) window.PLAISIR_SECRET.theme = t;
  document.documentElement.setAttribute("data-theme", window.PLAISIR_SECRET.theme);
})();
