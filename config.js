// ===== Réglages du site : c'est le seul fichier à modifier =====
window.DESIRS_SECRETS = {
  // Thème de couleurs : "velours", "bordeaux", "nuit" ou "creme".
  theme: "velours",

  // Mode démonstration : affiche un bandeau « profils et avis de démonstration ».
  // Mets false au lancement, quand les vrais membres et les vrais avis sont en ligne.
  demo: true,

  // Offre de lancement : nombre de places « 1er mois Pro gratuit » qu'il reste (affiché sur le site).
  placesLancement: 10,

  // Cartes-cadeaux : liens de paiement Stripe pour chaque montant (vide = formulaire de commande).
  stripeCadeau50: "",
  stripeCadeau100: "",
  stripeCadeau200: "",

  // Adresse publique du site (pour Google et les aperçus de partage).
  urlSite: "https://plaisir-secret.vercel.app",

  // Adresse qui reçoit les formulaires, fournie par Formspree (gratuit) :
  // 1. Crée un compte sur https://formspree.io
  // 2. Crée un formulaire, puis copie son adresse (ex. https://formspree.io/f/abcdwxyz)
  // 3. Colle-la entre les guillemets ci-dessous.
  // Tant que c'est vide, le formulaire ouvre plutôt l'application courriel du visiteur.
  // En attendant Formspree, on utilise FormSubmit (gratuit, sans compte) : les demandes
  // arrivent directement dans ton Gmail. La 1re fois, FormSubmit t'envoie un courriel
  // « Activate form » : clique sur le bouton pour activer. Ce courriel contient aussi un code
  // secret (alias, ex. 7f3a9c…) : remplace ton adresse ci-dessous par ce code pour que ton
  // courriel n'apparaisse plus dans le code du formulaire (moins de pourriels).
  formEndpoint: "https://formsubmit.co/ajax/maddnoskill@gmail.com",

  // Ton courriel de contact (utilisé si formEndpoint est vide).
  contactEmail: "maddnoskill@gmail.com",

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
  if (t) window.DESIRS_SECRETS.theme = t;
  document.documentElement.setAttribute("data-theme", window.DESIRS_SECRETS.theme);
})();
