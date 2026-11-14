# Plan d'action · Désirs Secrets

Mis à jour le 13 novembre 2026, 19 h 30 (heure de l'Est). **Étapes 3 et 4 en ligne** sur https://plaisir-secret.vercel.app
Responsable : Mathieu Desbiens (maddnoskill@gmail.com) · Ville de lancement : **Lévis** · Domaine visé : **desirs-secrets.ca** (+ desirs-secrets.com en redirection)

Une **phase** = un grand objectif. Une **étape** = une branche Git et une pull request. Un compte rendu à la fin de chaque phase dans `comptes-rendus/`.

Légende : ✅ fait · 🟡 en cours · ⏳ à faire · 👤 action de Madd · 🤖 action de Claude

## Vue d'ensemble

| Phase | Objectif | Avancement |
|---|---|---|
| 1. Fondations | Offre, règles, site en ligne | ✅ 100 % |
| 2. Encaisser | Recevoir les demandes et les paiements | 🟡 85 % |
| 3. Lancer à Lévis | Domaine, vrais membres, Google | 🟡 60 % |
| 4. Automatiser | Vrais comptes, messagerie privée, paiement auto | ⏳ 0 % |
| 5. Grandir | Avis automatiques, plus de villes, parrainage | ⏳ 0 % |

---

## ✅ Phase 1 : Fondations (100 %)

- ✅ Étape 01 : offre, prix, règles légales, site vitrine
- ✅ Étape 02 : annuaire de membres, thème velours, site public (plaisir-secret.vercel.app)
- ✅ Compte rendu : `comptes-rendus/phase-1-fondations.md`

## 🟡 Phase 2 : Encaisser (85 %)

Étape 03 `etape-03-formulaires-et-paiements` · PR #2
- ✅ Appli web installable sur cellulaire (icône « DS », barre d'onglets, hors ligne)
- ✅ **Formulaires fonctionnels sans compte** : réservations, messages, avis, cartes-cadeaux et inscriptions arrivent dans ton Gmail grâce à FormSubmit
- ✅ Boutons de paiement Stripe prêts (forfaits, cartes-cadeaux, « Payer en ligne » par service)
- ✅ Ton nom et ton courriel dans les pages légales (Loi 25)
- ✅ **A.** PR #2 et #3 fusionnées, tout est en production (13 nov.)
- ✅ **B.** FormSubmit activé, alias secret en place (ton Gmail n'est plus dans le code), envoi test reçu
- 👤 **C.** Créer ton compte Stripe et 5 liens de paiement : Pro 19 $/mois, VIP 49 $/mois, cadeaux 50, 100 et 200 $ (30 min)
- 🤖 **D.** Coller les liens Stripe dans `config.js`, test de paiement de 1 $ → **compte rendu phase 2**

## 🟡 Phase 3 : Lancer à Lévis (60 %)

Étape 04 `etape-04-domaine-et-lancement` · PR #3
- ✅ Nouveau nom « Désirs Secrets » partout (site, appli, icônes, pages légales, guides)
- ✅ Accompagnatrices (compagnie en public seulement), avis vérifiés par numéro de réservation
- ✅ Offre de lancement (1er mois Pro gratuit, 10 places), « Dispo ce soir », cartes-cadeaux
- ✅ Pages Lévis, Québec, Montréal, plan du site pour Google, image de partage
- 👤 **E.** Acheter `desirs-secrets.ca` (et `desirs-secrets.com` si tu veux le protéger), environ 30 à 45 $/an pour les deux
- 🤖 **F.** Brancher le domaine dans Vercel, mettre à jour sitemap et liens
- 👤 **G.** Recruter 3 à 5 vrais membres à Lévis, vérifier leur pièce d'identité
- 🤖 **H.** Remplacer les profils de démo, retirer les avis d'exemple et le bandeau démo
- 🤖 **I.** Google Search Console + fiche Google Business « Désirs Secrets Lévis »
- 👤🤖 **J.** Annonce du lancement (Facebook, Instagram, groupes de Lévis) → **compte rendu phase 3**

## ⏳ Phase 4 : Automatiser (décembre)

- ⏳ Étape 05 : **vrais comptes** (connexion par courriel, base de données Supabase) : le membre gère son profil, ses photos, ses dispos et « Dispo ce soir » lui-même
- ⏳ Étape 06 : **messagerie privée** visiteur ↔ membre et membre ↔ membre, dans le site, avec avis par courriel ou texto, sans montrer les numéros
- ⏳ Étape 07 : tableau d'administration (approuver profils et avis, signalements, pièces d'identité)
- ⏳ Étape 08 : paiement par carte à la réservation, commission prélevée automatiquement (Stripe Connect)

## ⏳ Phase 5 : Grandir (janvier et après)

- ⏳ Étape 09 : avis demandés automatiquement après chaque réservation
- ⏳ Étape 10 : plus de villes (Rive-Sud, Beauce, Bellechasse, Saguenay…)
- ⏳ Étape 11 : parrainage, version anglaise, statistiques de revenus

---

## Ce qui fonctionne vraiment aujourd'hui vs démonstration

| Fonction | État réel |
|---|---|
| Consulter les profils, rechercher, filtrer | ✅ Réel |
| Réserver, écrire à un membre, signaler, laisser un avis, commander une carte-cadeau, s'inscrire | ✅ Réel : arrive dans ton Gmail, **tu fais le relais** (mode concierge) |
| Messagerie privée dans le site | ⏳ Pas encore : prévue à l'étape 06 (phase 4) |
| Mon espace (modifier son profil) | 🟡 Démonstration : enregistré dans le navigateur seulement, jusqu'à l'étape 05 |
| Profils et avis affichés | 🟡 Exemples fictifs, remplacés à l'étape H |
| Paiement en ligne | 🟡 Prêt, attend tes liens Stripe |

## ⚠️ Risque à connaître : Stripe

Stripe refuse certaines activités (rencontres, escortes, contenu adulte). Décris l'entreprise comme « annuaire de services de bien-être, massothérapie, coaching et location d'espaces ». Plan B : **Square**, **Helcim** (canadien) ou virement Interac en mode concierge.
