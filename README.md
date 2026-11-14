# Désirs Secrets

Annuaire québécois de **membres vérifiés** qui offrent des soins, du bien-être et des expériences privées (massothérapie thérapeutique, soins, coaching, sorties accompagnées, ménage, espaces privés). Les **visiteurs** consultent les profils sans compte et réservent en ligne.

Site statique (HTML, CSS, JavaScript) : aucune installation, aucune compilation. Il se publie tel quel sur Vercel.

> 👉 Tu reprends le projet ? Lis d'abord **[REPRENDRE-LE-PROJET.md](REPRENDRE-LE-PROJET.md)**.

## Les pages

| Page | Rôle |
|---|---|
| `index.html` | Accueil : recherche, membres en vedette, sécurité |
| `membres.html` | Annuaire complet avec filtres (catégorie, ville, mot-clé) |
| `vip.html` | Membres VIP |
| `profil.html?id=lea` | Profil d'un membre : bio, prix, dispos, réservation, appeler, écrire, signaler |
| `abonnement.html` | Forfaits pour les membres + formulaire d'inscription |
| `espace-membre.html` | Espace du membre : bio, photo, services, dispos (démo enregistrée dans le navigateur) |
| `soutien.html` | FAQ, sécurité, antifraude, formulaire de soutien |
| `conditions.html`, `confidentialite.html` | Pages légales (compléter les « À COMPLÉTER ») |

## Les fichiers à modifier

| Fichier | Ce qu'on y change |
|---|---|
| `config.js` | Thème de couleurs, adresse Formspree, courriel de contact |
| `data.js` | Les profils des membres (texte, prix, dispos, photo) |
| `assets/img/` | Les photos (démo : photos libres de droits Unsplash, à remplacer par les vraies) |
| `styles.css` | Couleurs des 4 thèmes et mise en page |
| `layout.js` | Menu du haut et pied de page communs |
| `script.js` | Grilles, profil, espace membre, envoi des formulaires |

## Voir le site sur ton ordinateur

Double-clique sur `index.html`. Pour essayer un autre thème : ajoute `?theme=bordeaux`, `?theme=nuit` ou `?theme=creme` à la fin de l'adresse.

## Mettre en ligne sur Vercel

1. Va sur https://vercel.com et connecte-toi avec GitHub.
2. **Add New… > Project**, choisis le dépôt, puis **Deploy**.
3. Chaque modification poussée sur GitHub met le site à jour automatiquement. Chaque branche obtient sa propre adresse d'aperçu.

## Recevoir les formulaires

Par défaut, les formulaires passent par FormSubmit vers maddnoskill@gmail.com (aucun compte requis : cliquer « Activate form » dans le premier courriel reçu). Pour passer à Formspree :

1. Crée un compte gratuit sur https://formspree.io et un nouveau formulaire.
2. Copie son adresse (ex. `https://formspree.io/f/abcdwxyz`) dans `formEndpoint` de `config.js`.

## Règle légale non négociable

Aucune annonce de services sexuels (Code criminel du Canada, art. 286.4). Massages thérapeutiques seulement, sorties en public seulement, chaque profil vérifié (18+) et modéré.

## Appli mobile (installable)

Le site est une appli web : sur Android, Chrome propose « Installer l'appli »; sur iPhone, Safari > Partager > « Sur l'écran d'accueil ». Fichiers : `manifest.webmanifest` (nom, icône, couleurs), `sw.js` (mode hors ligne), `assets/icons/`.

## Encaisser avec Stripe

- **Forfaits des membres** : crée deux liens de paiement récurrents dans Stripe (Pro 19 $/mois, VIP 49 $/mois) et colle-les dans `stripeForfaitPro` et `stripeForfaitVip` de `config.js`.
- **Réservations** : mode concierge. Le visiteur envoie sa demande, le membre confirme, puis tu envoies un lien de paiement Stripe. Pour un bouton « Payer en ligne » directement sur un profil, ajoute `lien: "https://buy.stripe.com/…"` au service dans `data.js`.

Plan complet : [PLAN.md](PLAN.md)
