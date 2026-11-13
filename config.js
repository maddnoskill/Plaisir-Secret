// ===== Réglages du site : c'est le seul fichier à modifier =====
window.PLAISIR_SECRET = {
  // Thème de couleurs : "velours", "bordeaux", "nuit" ou "creme".
  theme: "velours",

  // Mode démonstration : affiche un bandeau « profils et avis de démonstration ».
  // Mets false au lancement, quand les vrais membres et les vrais avis sont en ligne.
  demo: true,

  // Adresse publique du site (pour Google et les aperçus de partage).
  urlSite: "https://plaisir-secret.vercel.app",

  // Adresse qui reçoit les formulaires, fournie par Formspree (gratuit) :
  // 1. Crée un compte sur https://formspree.io
  // 2. Crée un formulaire, puis copie son adresse (ex. https://formspree.io/f/abcdwxyz)
  // 3. Colle-la entre les guillemets ci-dessous.
  // Tant que c'est vide, le formulaire ouvre plutôt l'application courriel du visiteur.
  formEndpoint: "",

  // Ton courriel de contact (utilisé si formEndpoint est vide).
  contactEmail: "contact@exemple.ca",

  // Liens de paiement Stripe pour les forfaits des membres (abonnement mensuel).
  // Dans Stripe : Catalogue de produits > créer « Forfait Pro 19 $/mois » > Créer un lien de paiement.
  // Colle le lien (ex. https://buy.stripe.com/abc123) entre les guillemets.
  // Tant que c'est vide, le bouton mène au formulaire d'inscription.
  stripeForfaitPro: "",
  stripeForfaitVip: ""
};

// Aperçu d'un autre thème sans rien modifier : ajoute ?theme=nuit à l'adresse.
(function () {
  var t = new URLSearchParams(location.search).get("theme");
  if (t) window.PLAISIR_SECRET.theme = t;
  document.documentElement.setAttribute("data-theme", window.PLAISIR_SECRET.theme);
})();
