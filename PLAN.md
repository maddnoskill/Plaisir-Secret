# Plan complet de Plaisir Secret

Mis à jour le 13 novembre 2026. Une **phase** = un grand objectif. Une **étape** = une branche Git (`etape-XX-…`) et une pull request. À la fin de chaque phase : un compte rendu dans `comptes-rendus/`.

Légende : ✅ fait · 🟡 en cours · ⏳ à faire · 👤 action de Madd

---

## Phase 1 : Fondations ✅

| Étape | Contenu | État |
|---|---|---|
| 01 `etape-01-site-vitrine` | Offre, prix, règles légales, site vitrine v1 | ✅ |
| 02 `etape-02-annuaire-membres` | Annuaire de membres, profils, VIP, Soutien, Abonnez-vous, espace membre, thème velours, mise en ligne publique | ✅ |

Compte rendu : `comptes-rendus/phase-1-fondations.md`

## Phase 2 : Encaisser tes premiers dollars 🟡 (objectif : 16 au 19 novembre)

| Étape | Contenu | État |
|---|---|---|
| 03 `etape-03-formulaires-et-paiements` | Appli web installable sur cellulaire (icône, barre d'onglets, hors ligne) | ✅ |
| | Formulaires prêts pour Formspree (anti-robots, messages de confirmation) | ✅ code prêt · 👤 créer le compte Formspree et me donner l'adresse |
| | Paiements Stripe : boutons Forfait Pro et VIP, bouton « Payer en ligne » par service | ✅ code prêt · 👤 créer le compte Stripe et les liens de paiement |
| | Pages légales complétées (Loi 25) | 👤 ton nom (ou nom d'entreprise) et ton courriel |
| | Test complet : réservation → courriel reçu → lien de paiement → argent reçu | ⏳ |

## Phase 3 : Lancer pour vrai ⏳ (semaine du 16 novembre)

| Étape | Contenu |
|---|---|
| 04 `etape-04-domaine-et-lancement` | Nom de domaine `.ca` (environ 15 $/an) relié à Vercel, courriel pro (ex. bonjour@plaisirsecret.ca) |
| | 👤 Recruter 3 à 5 vrais membres, vérifier leur pièce d'identité, remplacer les profils de démo |
| | Fiche Google Business, partage Facebook/Instagram, premières publicités locales |
| | Choix de la ville de lancement 👤 |

## Phase 4 : Automatiser ⏳ (décembre)

| Étape | Contenu |
|---|---|
| 05 `etape-05-comptes-membres` | Vrais comptes (connexion par courriel), base de données Supabase, le membre modifie son profil lui-même |
| 06 `etape-06-moderation` | Tableau d'administration : approuver les profils, traiter les signalements, vérifier les pièces d'identité |
| 07 `etape-07-messagerie` | Messagerie interne visiteur ↔ membre, avis par courriel et texto |
| 08 `etape-08-paiements-auto` | Paiement par carte au moment de réserver, commission prélevée automatiquement, versement automatique au membre |

## Phase 5 : Grandir ⏳ (janvier et après)

| Étape | Contenu |
|---|---|
| 09 `etape-09-avis-et-reputation` | Avis vérifiés (seulement après une vraie réservation), badges |
| 10 `etape-10-referencement` | Pages par ville et catégorie pour Google (ex. « massothérapie Laval ») |
| 11 `etape-11-croissance` | Parrainage membre-à-membre, version anglaise, statistiques de revenus |

---

## ⚠️ Risque à connaître : Stripe

Stripe refuse certaines activités (services de rencontre, escortes, contenu adulte). Notre catégorie « Accompagnement et sorties » peut être mal interprétée. Pour éviter un blocage :
- décris l'entreprise à Stripe comme « annuaire de services de bien-être, massothérapie, coaching et location d'espaces »;
- garde les sorties accompagnées strictement en public, comme le prévoient nos conditions;
- plan B déjà identifié : **Square** ou **Helcim** (entreprise canadienne), ou virement Interac en mode concierge.
