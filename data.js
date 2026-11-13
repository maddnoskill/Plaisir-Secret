// ===== Profils des membres (démo) =====
// Chaque bloc { ... } est un profil. Pour ajouter un membre : copie un bloc,
// change l'id (sans espace ni accent), les textes et la photo (dossier assets/img).
// Paiement en ligne (facultatif) : ajoute lien: "https://buy.stripe.com/..." à un service
// pour afficher un bouton « Payer en ligne » sur le profil. Sinon, tu envoies le lien
// de paiement au visiteur après la confirmation du membre (mode concierge).
// ceSoir: true affiche « Dispo ce soir » et place le profil en premier (le membre l'active dans Mon espace).
// Les profils ci-dessous sont FICTIFS : photos libres de droits (Unsplash) pour la démo.

window.CATEGORIES = [
  "Massothérapie",
  "Soins et bien-être",
  "Coaching",
  "Accompagnement et sorties",
  "Ménage",
  "Espaces privés"
];

window.MEMBRES = [
  {
    id: "lea", nom: "Léa", age: 29, ville: "Montréal", quartier: "Plateau-Mont-Royal", ceSoir: true,
    categorie: "Massothérapie", titre: "Massothérapeute agréée, suédois et détente",
    photo: "assets/img/lea.jpg", prix: 95, verifie: true, vip: true,
    lieux: ["En salon", "À domicile"], note: 4.9, avis: 38, langues: ["Français", "Anglais"],
    bio: "Massothérapeute depuis 7 ans, membre d'une association reconnue. Je crée une bulle de calme : lumière tamisée, musique douce, huiles chaudes. Massage strictement thérapeutique, reçus d'assurance disponibles.",
    services: [
      { nom: "Massage suédois, 60 min", prix: 95 },
      { nom: "Massage détente, 90 min", prix: 130 },
      { nom: "Massage à domicile, 60 min (déplacement inclus)", prix: 120 }
    ],
    dispo: { lun: "10 h à 18 h", mar: "10 h à 18 h", mer: "", jeu: "12 h à 20 h", ven: "12 h à 20 h", sam: "9 h à 15 h", dim: "" },
    tel: "514 555-0142"
  },
  {
    id: "maelle", nom: "Maëlle", age: 31, ville: "Québec", quartier: "Vieux-Québec",
    categorie: "Accompagnement et sorties", titre: "Accompagnatrice pour soirées, galas et visites",
    photo: "assets/img/maelle.jpg", prix: 80, verifie: true, vip: true,
    lieux: ["Sorties en public"], note: 4.8, avis: 21, langues: ["Français", "Anglais", "Espagnol"],
    bio: "Vous ne voulez pas aller seul·e à un gala, un souper d'affaires ou découvrir Québec ? Je vous accompagne avec élégance et bonne humeur. Sorties en lieux publics seulement, aucun service intime.",
    services: [
      { nom: "Souper ou sortie culturelle, 3 h", prix: 220 },
      { nom: "Gala ou événement, 5 h", prix: 350 },
      { nom: "Visite guidée de Québec, 2 h", prix: 120 }
    ],
    dispo: { lun: "", mar: "", mer: "17 h à 23 h", jeu: "17 h à 23 h", ven: "17 h à minuit", sam: "14 h à minuit", dim: "12 h à 18 h" },
    tel: "418 555-0177"
  },
  {
    id: "chloe", nom: "Chloé", age: 28, ville: "Montréal", quartier: "Centre-ville", ceSoir: true,
    categorie: "Accompagnement et sorties", titre: "Compagnie pour soupers, spectacles et 5 à 7",
    photo: "assets/img/chloe.jpg", prix: 75, verifie: true, vip: true,
    lieux: ["Sorties en public"], note: 4.9, avis: 14, langues: ["Français", "Anglais"],
    bio: "Bonne conversation, sourire facile et sens du style. Je t'accompagne au restaurant, au théâtre, au Festival de jazz ou à un événement de bureau. Sorties en lieux publics seulement, aucun service intime.",
    services: [
      { nom: "Souper au restaurant, 3 h", prix: 210 },
      { nom: "Spectacle ou festival, 4 h", prix: 270 },
      { nom: "5 à 7 ou événement de bureau, 2 h", prix: 150 }
    ],
    dispo: { lun: "", mar: "18 h à 23 h", mer: "18 h à 23 h", jeu: "18 h à 23 h", ven: "17 h à minuit", sam: "15 h à minuit", dim: "" },
    tel: "514 555-0173"
  },
  {
    id: "ines", nom: "Inès", age: 30, ville: "Lévis", quartier: "Desjardins", ceSoir: true,
    categorie: "Accompagnement et sorties", titre: "Accompagnatrice de voyage et de mariage",
    photo: "assets/img/ines.jpg", prix: 85, verifie: true, vip: false,
    lieux: ["Sorties en public"], note: 4.8, avis: 9, langues: ["Français", "Anglais", "Italien"],
    bio: "Invité·e à un mariage ou à un party de famille et pas envie d'y aller seul·e ? Je suis une compagnie élégante et attentionnée pour tes événements. Activités publiques seulement, aucun service intime.",
    services: [
      { nom: "Mariage ou réception, 6 h", prix: 420 },
      { nom: "Party de famille ou de Noël, 4 h", prix: 300 },
      { nom: "Brunch ou activité de jour, 2 h", prix: 140 }
    ],
    dispo: { lun: "", mar: "", mer: "", jeu: "16 h à 22 h", ven: "16 h à minuit", sam: "11 h à minuit", dim: "11 h à 20 h" },
    tel: "418 555-0124"
  },
  {
    id: "rosalie", nom: "Rosalie", age: 34, ville: "Québec", quartier: "Sainte-Foy",
    categorie: "Accompagnement et sorties", titre: "Accompagnement culturel et visites guidées",
    photo: "assets/img/rosalie.jpg", prix: 70, verifie: true, vip: false,
    lieux: ["Sorties en public"], note: 5.0, avis: 11, langues: ["Français", "Anglais"],
    bio: "Guide touristique de formation, je fais découvrir Québec autrement : musées, cafés cachés, Vieux-Port, Carnaval. Idéal pour les gens de passage ou nouvellement arrivés. Sorties en lieux publics seulement.",
    services: [
      { nom: "Visite guidée privée, 2 h", prix: 120 },
      { nom: "Journée découverte, 5 h", prix: 290 }
    ],
    dispo: { lun: "10 h à 17 h", mar: "10 h à 17 h", mer: "", jeu: "", ven: "10 h à 20 h", sam: "9 h à 20 h", dim: "9 h à 17 h" },
    tel: "418 555-0149"
  },
  {
    id: "amara", nom: "Amara", age: 27, ville: "Laval", quartier: "Chomedey",
    categorie: "Soins et bien-être", titre: "Pierres chaudes et aromathérapie",
    photo: "assets/img/amara.jpg", prix: 110, verifie: true, vip: false,
    lieux: ["En salon"], note: 5.0, avis: 17, langues: ["Français", "Anglais"],
    bio: "Mon salon est un cocon : pierres de basalte, huiles essentielles, thé offert. Je travaille la détente profonde et la gestion du stress.",
    services: [
      { nom: "Pierres chaudes, 75 min", prix: 110 },
      { nom: "Aromathérapie, 60 min", prix: 90 }
    ],
    dispo: { lun: "", mar: "11 h à 19 h", mer: "11 h à 19 h", jeu: "11 h à 19 h", ven: "", sam: "10 h à 16 h", dim: "10 h à 16 h" },
    tel: "450 555-0118"
  },
  {
    id: "sofia", nom: "Sofia", age: 33, ville: "Gatineau", quartier: "Hull",
    categorie: "Coaching", titre: "Coach en confiance en soi et séduction",
    photo: "assets/img/sofia.jpg", prix: 75, verifie: true, vip: true,
    lieux: ["En personne", "En visio"], note: 4.9, avis: 44, langues: ["Français", "Anglais"],
    bio: "J'aide les femmes et les hommes à oser : premier rendez-vous, langage corporel, conversation, confiance. Des séances concrètes, bienveillantes et confidentielles.",
    services: [
      { nom: "Séance découverte, 45 min", prix: 50 },
      { nom: "Coaching séduction et communication, 60 min", prix: 75 },
      { nom: "Forfait 4 séances", prix: 260 }
    ],
    dispo: { lun: "9 h à 17 h", mar: "9 h à 17 h", mer: "9 h à 17 h", jeu: "", ven: "9 h à 13 h", sam: "", dim: "" },
    tel: "819 555-0190"
  },
  {
    id: "yasmine", nom: "Yasmine", age: 30, ville: "Lévis", quartier: "Saint-Romuald", ceSoir: true,
    categorie: "Massothérapie", titre: "Massage sportif et thérapeutique",
    photo: "assets/img/yasmine.jpg", prix: 90, verifie: true, vip: false,
    lieux: ["En salon", "À domicile"], note: 4.7, avis: 29, langues: ["Français"],
    bio: "Kinésiologue et massothérapeute. Je soulage tensions, douleurs de dos et récupération sportive. Approche professionnelle, reçus d'assurance.",
    services: [
      { nom: "Massage sportif, 60 min", prix: 90 },
      { nom: "Massage thérapeutique à domicile, 60 min", prix: 115 }
    ],
    dispo: { lun: "8 h à 16 h", mar: "8 h à 16 h", mer: "8 h à 16 h", jeu: "8 h à 16 h", ven: "", sam: "", dim: "" },
    tel: "418 555-0163"
  },
  {
    id: "nadia", nom: "Nadia", age: 26, ville: "Montréal", quartier: "Mile End",
    categorie: "Coaching", titre: "Stylisme et image personnelle",
    photo: "assets/img/nadia.jpg", prix: 70, verifie: true, vip: false,
    lieux: ["En personne", "En visio"], note: 4.8, avis: 12, langues: ["Français", "Anglais", "Arabe"],
    bio: "Je révèle votre style : tri de garde-robe, magasinage accompagné, look pour un rendez-vous ou une entrevue.",
    services: [
      { nom: "Analyse de style, 60 min", prix: 70 },
      { nom: "Magasinage accompagné, 3 h", prix: 190 }
    ],
    dispo: { lun: "", mar: "", mer: "12 h à 20 h", jeu: "12 h à 20 h", ven: "12 h à 20 h", sam: "10 h à 18 h", dim: "" },
    tel: "514 555-0127"
  },
  {
    id: "julien", nom: "Julien", age: 34, ville: "Québec", quartier: "Saint-Roch",
    categorie: "Coaching", titre: "Coach en communication pour hommes",
    photo: "assets/img/julien.jpg", prix: 70, verifie: true, vip: false,
    lieux: ["En personne", "En visio"], note: 4.6, avis: 15, langues: ["Français"],
    bio: "Timidité, premier rendez-vous, prise de parole : on travaille votre aisance avec des mises en situation réelles.",
    services: [
      { nom: "Coaching individuel, 60 min", prix: 70 },
      { nom: "Atelier de groupe, 2 h", prix: 45 }
    ],
    dispo: { lun: "18 h à 21 h", mar: "18 h à 21 h", mer: "", jeu: "18 h à 21 h", ven: "", sam: "10 h à 14 h", dim: "" },
    tel: "418 555-0105"
  },
  {
    id: "camille", nom: "Camille", age: 28, ville: "Lévis", quartier: "Vieux-Lévis", ceSoir: true,
    categorie: "Soins et bien-être", titre: "Esthéticienne, soins du visage et du corps",
    photo: "assets/img/camille.jpg", prix: 85, verifie: true, vip: true,
    lieux: ["En salon"], note: 4.9, avis: 33, langues: ["Français"],
    bio: "Soins du visage, enveloppements et rituels de beauté dans un salon intime et lumineux. Produits québécois.",
    services: [
      { nom: "Soin visage éclat, 60 min", prix: 85 },
      { nom: "Rituel corps complet, 90 min", prix: 140 }
    ],
    dispo: { lun: "", mar: "9 h à 17 h", mer: "9 h à 17 h", jeu: "9 h à 17 h", ven: "9 h à 17 h", sam: "9 h à 13 h", dim: "" },
    tel: "418 555-0151"
  },
  {
    id: "aiko", nom: "Aiko", age: 32, ville: "Montréal", quartier: "Griffintown",
    categorie: "Soins et bien-être", titre: "Yoga privé et méditation",
    photo: "assets/img/aiko.jpg", prix: 65, verifie: true, vip: false,
    lieux: ["À domicile", "En visio"], note: 5.0, avis: 9, langues: ["Français", "Anglais", "Japonais"],
    bio: "Cours de yoga privés chez vous ou en ligne, pour retrouver souplesse, souffle et calme intérieur.",
    services: [
      { nom: "Yoga privé à domicile, 60 min", prix: 65 },
      { nom: "Méditation guidée en visio, 45 min", prix: 40 }
    ],
    dispo: { lun: "7 h à 11 h", mar: "7 h à 11 h", mer: "7 h à 11 h", jeu: "7 h à 11 h", ven: "7 h à 11 h", sam: "", dim: "8 h à 12 h" },
    tel: "514 555-0109"
  },
  {
    id: "julie", nom: "Julie", age: 35, ville: "Lévis", quartier: "Saint-Nicolas",
    categorie: "Ménage", titre: "Ménage soigné et discret",
    photo: "assets/img/julie.jpg", prix: 38, verifie: true, vip: false,
    lieux: ["À domicile"], note: 4.8, avis: 52, langues: ["Français", "Anglais"],
    bio: "Ménage régulier ou grand ménage, produits écologiques fournis. Références disponibles sur demande.",
    services: [
      { nom: "Ménage régulier, à l'heure", prix: 38 },
      { nom: "Grand ménage, 5 h", prix: 180 }
    ],
    dispo: { lun: "8 h à 16 h", mar: "8 h à 16 h", mer: "8 h à 16 h", jeu: "8 h à 16 h", ven: "8 h à 16 h", sam: "", dim: "" },
    tel: "418 555-0136"
  },
  {
    id: "salon-velours", nom: "Salon Velours", age: null, ville: "Montréal", quartier: "Vieux-Montréal",
    categorie: "Espaces privés", titre: "Salon privé rétro à louer à l'heure",
    photo: "assets/img/salon.jpg", prix: 120, verifie: true, vip: true,
    lieux: ["Sur place"], note: 4.9, avis: 26, langues: ["Français", "Anglais"],
    bio: "Un salon feutré façon années 20 : velours, projecteur, bar sans alcool. Idéal pour une soirée cinéma privée, une séance photo ou une célébration.",
    services: [
      { nom: "Location 2 h (jusqu'à 6 personnes)", prix: 240 },
      { nom: "Soirée complète, 5 h", prix: 500 }
    ],
    dispo: { lun: "", mar: "", mer: "", jeu: "17 h à 23 h", ven: "17 h à 1 h", sam: "13 h à 1 h", dim: "13 h à 21 h" },
    tel: "514 555-0188"
  }
];

// ===== Avis =====
// Un vrai avis n'est publié qu'après une vraie réservation payée, et après modération.
// Les avis marqués exemple: true sont des EXEMPLES DE DÉMONSTRATION (fictifs).
// À SUPPRIMER AU LANCEMENT : mets demo: false dans config.js et vide cette liste.
window.AVIS = {
  lea: [
    { prenom: "Sophie", note: 5, date: "2026-10-28", service: "Massage suédois, 60 min", texte: "Une vraie bulle de calme. Léa est à l'écoute et très professionnelle. Je suis repartie détendue comme jamais.", exemple: true },
    { prenom: "Marc-André", note: 5, date: "2026-10-12", service: "Massage à domicile, 60 min", texte: "Ponctuelle, table installée en 5 minutes, et mon dos me remercie. Reçu d'assurance envoyé le soir même.", exemple: true }
  ],
  maelle: [
    { prenom: "Jean-François", note: 5, date: "2026-11-02", service: "Gala ou événement, 5 h", texte: "Compagnie charmante et cultivée pour le gala de ma compagnie. Elle a mis tout le monde à l'aise.", exemple: true }
  ],
  chloe: [
    { prenom: "Karim", note: 5, date: "2026-11-05", service: "Spectacle ou festival, 4 h", texte: "Super soirée au théâtre puis au resto. Conversation drôle et intéressante, tout s'est passé exactement comme convenu.", exemple: true },
    { prenom: "Mathieu", note: 4, date: "2026-10-19", service: "5 à 7 ou événement de bureau, 2 h", texte: "Très élégante et sympathique. Réservation simple et paiement sécurisé, je recommande.", exemple: true }
  ],
  ines: [
    { prenom: "Patrick", note: 5, date: "2026-10-24", service: "Mariage ou réception, 6 h", texte: "Je redoutais ce mariage seul. Inès a été parfaite : souriante, à l'aise avec ma famille, elle a même dansé avec ma tante !", exemple: true }
  ],
  rosalie: [
    { prenom: "Émilie", note: 5, date: "2026-11-01", service: "Journée découverte, 5 h", texte: "On a vu des coins de Québec que je ne connaissais pas après 3 ans ici. Passionnante !", exemple: true }
  ],
  sofia: [
    { prenom: "Julien", note: 5, date: "2026-10-30", service: "Coaching séduction et communication, 60 min", texte: "Des conseils concrets que j'ai appliqués dès mon premier rendez-vous. Bienveillante et directe.", exemple: true }
  ],
  amara: [
    { prenom: "Nathalie", note: 5, date: "2026-11-06", service: "Pierres chaudes, 75 min", texte: "Le meilleur massage aux pierres chaudes que j'ai eu. Le salon est magnifique et le thé délicieux.", exemple: true }
  ],
  camille: [
    { prenom: "Valérie", note: 5, date: "2026-10-21", service: "Soin visage éclat, 60 min", texte: "Ma peau n'a jamais été aussi belle. Camille explique tout ce qu'elle fait, on se sent en confiance.", exemple: true }
  ],
  "salon-velours": [
    { prenom: "Alexandra", note: 5, date: "2026-10-31", service: "Soirée complète, 5 h", texte: "Soirée cinéma pour la fête de mon chum : décor incroyable, propre, accueil impeccable.", exemple: true }
  ],
  julie: [
    { prenom: "Robert", note: 5, date: "2026-11-04", service: "Grand ménage, 5 h", texte: "Maison impeccable, travail minutieux et discret. Je l'ai déjà réservée pour le mois prochain.", exemple: true }
  ]
};
