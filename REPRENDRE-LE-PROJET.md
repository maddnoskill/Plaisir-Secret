# Reprendre le projet Désirs Secrets

Le projet s'appelle **Désirs Secrets** depuis le 13 novembre 2026 (anciennement Plaisir Secret). Dépôt GitHub : `maddnoskill/desirs-secrets`. Le projet Vercel s'appelle encore `plaisir-secret`.
Adresse publique : https://desirs-secrets.vercel.app (l'ancienne adresse plaisir-secret.vercel.app redirige vers elle grâce à `vercel.json`).

Ce guide permet à **n'importe qui** (toi, un ami, un développeur, une IA) de reprendre le projet à n'importe quelle étape.

## 1. Le principe : une branche Git par étape

Chaque étape terminée est gardée dans sa propre branche. On ne la modifie plus ensuite : c'est une « photo » du projet à ce moment-là. Pour repartir d'une étape, on crée une nouvelle branche à partir d'elle.

| Branche | Étape | État |
|---|---|---|
| `etape-01-site-vitrine` | Site vitrine v1 : une page, 4 services, formulaire de réservation | ✅ terminée |
| `etape-02-annuaire-membres` | Annuaire de membres : accueil avec photos, profils, VIP, soutien, abonnement, espace membre, 4 thèmes | ✅ terminée (thème A « velours » choisi) |
| `etape-03-formulaires-et-paiements` | Appli mobile installable + formulaires Formspree + paiements Stripe | 🟡 code prêt, comptes à créer |
| `etape-04-domaine-et-lancement` | Accompagnatrices, avis vérifiés, référencement Google, guide LANCEMENT.md | 🟡 code prêt, domaine et vrais membres à faire |
| `etape-05-comptes-membres` | Vrais comptes membres (connexion, base de données Supabase, modération) | ⏳ à faire |

## 2. Reprendre une étape (pas à pas)

Sur Windows, installe d'abord [GitHub Desktop](https://desktop.github.com) (le plus simple) ou Git.

**Avec GitHub Desktop :**
1. File > Clone repository > choisis `desirs-secrets`.
2. En haut, menu **Current branch** : choisis la branche de l'étape (ex. `etape-02-annuaire-membres`).
3. **New branch** : nomme-la pour l'étape suivante (ex. `etape-03-formulaires-et-paiements`).
4. Fais tes changements, puis **Commit** et **Push origin**.

**En ligne de commande :**
```bash
git clone https://github.com/maddnoskill/desirs-secrets.git
cd desirs-secrets
git checkout etape-02-annuaire-membres
git checkout -b etape-03-formulaires-et-paiements
# … changements …
git add .
git commit -m "Étape 3 : formulaires et paiements"
git push -u origin etape-03-formulaires-et-paiements
```

Quand l'étape est finie, ouvre une *pull request* sur GitHub vers la branche principale, puis mets à jour le tableau ci-dessus.

## 3. Ce qu'il faut savoir avant de toucher au code

- **Vocabulaire** : on dit **membres** (ceux qui offrent un service) et **visiteurs** (ceux qui réservent). Jamais « prestataire ». Français québécois partout (cellulaire, courriel, texto, magasinage, dispos).
- **Légal** : aucune annonce de services sexuels (Code criminel, art. 286.4). Massage thérapeutique seulement; « à domicile » permis pour massothérapie, soins, coaching, yoga et ménage; sorties accompagnées dans des lieux publics seulement. 18 ans et plus. Loi 25 pour la vie privée. Site en français (Charte de la langue française).
- **Sécurité mise en avant** : badge vérifié (pièce d'identité + égoportrait), paiement par lien sécurisé seulement, signalement en 1 clic, conseils antifraude sur chaque profil.
- **Modèle d'affaires** : commission 12 à 20 % selon le forfait du membre (Découverte gratuit, Pro 19 $/mois, VIP 49 $/mois).
- **Profils de démo** : fictifs, photos libres de droits (Unsplash). À remplacer dans `data.js` et `assets/img/` par de vrais membres vérifiés.
- **Espace membre** : pour l'instant, une démo qui enregistre dans le navigateur. Les vrais comptes viennent à l'étape 5.

## 4. Ce qui reste à fournir (par Madd)

- Nom et courriel du responsable de la protection des renseignements personnels (pages légales).
- Ville de lancement.
- ~~Choix du thème~~ : A « velours » choisi le 2026-11-13 (modifiable dans `config.js`).
- Comptes : Formspree, Stripe, Vercel.

## 5. Le plan complet

Voir [PLAN.md](PLAN.md) pour toutes les phases et étapes, et `comptes-rendus/` pour le bilan de chaque phase.

## 6. Où sont les documents du projet

- Plan étape 1 (offre, prix, règles) : dans les fichiers du projet Claude, `plaisir-secret/etape-1-offre-et-regles.md`.
- Prototypes visuels des 4 thèmes : `plaisir-secret/prototypes/`.
