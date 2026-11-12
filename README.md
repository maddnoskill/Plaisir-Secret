# Plaisir Secret

Place de marché québécoise : espaces thématiques, coaching, massage thérapeutique et ménage à domicile.

Site statique (HTML, CSS, JavaScript), sans installation ni compilation. Il se publie tel quel sur Vercel.

## Les fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Page d'accueil, services, formulaires de réservation et d'inscription |
| `config.js` | **Seul fichier à modifier** : adresse Formspree et courriel de contact |
| `styles.css` | Couleurs et mise en page |
| `script.js` | Envoi des formulaires |
| `confidentialite.html`, `conditions.html` | Pages légales (à compléter là où c'est écrit « À COMPLÉTER ») |

## Mettre en ligne sur Vercel

1. Va sur https://vercel.com et connecte-toi avec GitHub.
2. Clique **Add New… > Project**, choisis le dépôt `plaisir-secret`, puis **Deploy**.
3. Ton site est en ligne en moins d'une minute. Chaque modification poussée sur GitHub le met à jour automatiquement.

## Recevoir les formulaires

1. Crée un compte gratuit sur https://formspree.io et un nouveau formulaire.
2. Copie son adresse (ex. `https://formspree.io/f/abcdwxyz`) dans `formEndpoint` de `config.js`.
3. Les demandes arrivent dans ta boîte courriel.
