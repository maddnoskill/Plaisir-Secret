# Guide de lancement (phase 3)

## 1. Ton nom de domaine `.ca` (15 min, environ 15 à 25 $ par année)

Pourquoi un `.ca` ? Les Québécois lui font plus confiance qu'à une adresse `vercel.app`, et Google le montre en priorité aux gens du Canada.

1. Vérifie qu'il est libre sur un registraire canadien, par exemple **Webnames.ca** ou **Namecheap** (le `.ca` exige d'habiter au Canada, c'est ton cas).
   Idées : `plaisirsecret.ca`, `plaisir-secret.ca`, `plaisirsecretqc.ca`.
2. Achète-le (1 an suffit pour commencer).
3. Dans Vercel : projet **plaisir-secret** > **Settings** > **Domains** > ajoute `plaisirsecret.ca` et `www.plaisirsecret.ca`.
4. Vercel t'affiche 2 lignes DNS (un « A » et un « CNAME »). Copie-les dans la zone DNS de ton registraire.
5. Attends de 10 minutes à quelques heures. Le cadenas HTTPS est automatique et gratuit.
6. Dans `config.js`, remplace `urlSite`, et dans `robots.txt` et `sitemap.xml`, remplace `plaisir-secret.vercel.app` par ton domaine.

## 2. Courriel professionnel (10 min)

Un courriel comme `bonjour@plaisirsecret.ca` inspire confiance. Option gratuite : la redirection de courriel de ton registraire (vers ton Gmail). Option pro : Google Workspace ou Zoho Mail.

## 3. Tes 3 à 5 premiers vrais membres

1. Publie le message de recrutement (voir `plaisir-secret/etape-1-offre-et-regles.md`) dans 2 ou 3 groupes Facebook de ta ville.
2. Pour chaque membre : appel vidéo de 5 minutes, photo de la pièce d'identité + égoportrait (18 ans et plus), cellulaire confirmé.
3. Accompagnement : fais-lui lire et accepter la règle « compagnie en public seulement, aucun service intime ».
4. Remplace les profils de démonstration dans `data.js` et les photos dans `assets/img/`.
5. Vide la liste `window.AVIS` et mets `demo: false` dans `config.js`. Les vrais avis viendront des vraies réservations.

## 4. Être trouvé sur Google (30 min)

1. **Google Search Console** (gratuit) : ajoute ton domaine, puis soumets `sitemap.xml`. Google indexe tes pages en quelques jours.
2. **Fiche Google Business** : crée la fiche « Plaisir Secret », catégorie « Service de bien-être » ou « Annuaire d'entreprises ».
3. Le site a déjà ses aperçus de partage : quand tu colles le lien sur Facebook ou Messenger, une belle image apparaît (`assets/img/partage.jpg`).

## 5. Annoncer le lancement

- Publication Facebook et Instagram avec l'image de partage.
- Offre de lancement : « Premier mois du forfait Pro gratuit pour les 10 premiers membres ».
- Demande à chaque membre de partager son profil : chacun amène ses propres clients.

## Liste de contrôle avant de dire « c'est lancé »

- [ ] Domaine `.ca` actif avec le cadenas
- [ ] Formspree branché, réservation de test reçue
- [ ] Stripe actif, paiement test de 1 $ réussi et remboursé
- [ ] Nom et courriel du responsable dans `confidentialite.html` et `conditions.html`
- [ ] Au moins 3 vrais membres vérifiés en ligne
- [ ] `demo: false` et avis d'exemple retirés
