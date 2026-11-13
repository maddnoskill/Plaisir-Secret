# Plan complet de Plaisir Secret

Mis à jour le 13 novembre 2026. Ville de lancement : **Lévis** (Rive-Sud de Québec). Responsable : Mathieu Desbiens.

Une **phase** = un grand objectif. Une **étape** = une branche Git (`etape-XX-…`) et une pull request. À la fin de chaque phase : un compte rendu dans `comptes-rendus/`.

Légende : ✅ fait · 🟡 code prêt, en attente · ⏳ à faire · 👤 action de Madd

---

## ✅ Phase 1 : Fondations (terminée)

- ✅ Étape 01 : offre, prix, règles légales, site vitrine
- ✅ Étape 02 : annuaire de membres, thème velours, site public sur plaisir-secret.vercel.app

## 🟡 Phase 2 : Encaisser (code prêt, il manque tes comptes)

Étape 03 `etape-03-formulaires-et-paiements` (PR #2)
- ✅ Appli web installable sur cellulaire
- ✅ Formulaires prêts, ✅ boutons de paiement Stripe prêts
- 👤 **1.** Créer le compte Formspree et m'envoyer l'adresse `formspree.io/f/…`
- 👤 **2.** Créer le compte Stripe (le décrire comme « annuaire de services de bien-être, massothérapie, coaching et location d'espaces »)
- 👤 **3.** Créer dans Stripe les liens : Forfait Pro 19 $/mois, Forfait VIP 49 $/mois, cartes-cadeaux 50 $, 100 $, 200 $
- 👤 **4.** Confirmer ton courriel de contact (pour les pages légales)
- ⏳ **5.** Je branche tout et on fait un test complet : réservation → courriel → paiement test de 1 $

## 🟡 Phase 3 : Lancer à Lévis (code prêt)

Étape 04 `etape-04-domaine-et-lancement` (PR #3)
- ✅ Accompagnatrices (public seulement), avis vérifiés, référencement Google, guide `LANCEMENT.md`
- ✅ Offre de lancement (1er mois Pro gratuit, 10 places), bouton « Dispo ce soir », cartes-cadeaux, pages Lévis, Québec, Montréal
- ✅ Ton nom dans les pages légales
- 👤 **6.** Fusionner la PR #2, puis la PR #3 sur GitHub
- 👤 **7.** Acheter le domaine (`plaisir-secret.com` est déjà pris : je recommande `plaisirsecret.ca`) puis me le dire : je le branche
- 👤 **8.** Recruter 3 à 5 vrais membres à Lévis (message prêt dans le plan de l'étape 1), vérifier leur pièce d'identité
- ⏳ **9.** Je remplace les profils de démonstration par les vrais, je retire les avis d'exemple et le bandeau démo
- ⏳ **10.** Google Search Console, fiche Google Business « Plaisir Secret Lévis »
- ⏳ **11.** Annonce du lancement (Facebook, Instagram, groupes de Lévis) → **compte rendu de la phase 3**

## ⏳ Phase 4 : Automatiser (décembre)

- ⏳ Étape 05 : vrais comptes membres (connexion, base de données Supabase, le membre gère son profil et son bouton « Dispo ce soir » lui-même)
- ⏳ Étape 06 : tableau d'administration (approuver profils et avis, signalements, pièces d'identité)
- ⏳ Étape 07 : messagerie interne et avis par courriel et texto
- ⏳ Étape 08 : paiement par carte à la réservation, commission prélevée automatiquement

## ⏳ Phase 5 : Grandir (janvier et après)

- ⏳ Étape 09 : avis automatiques après chaque réservation, badges de réputation
- ⏳ Étape 10 : plus de pages par ville et par service (Rive-Sud, Beauce, Bellechasse…)
- ⏳ Étape 11 : parrainage membre-à-membre, version anglaise, statistiques de revenus

---

## ⚠️ Risque à connaître : Stripe

Stripe refuse certaines activités (rencontres, escortes, contenu adulte). Notre catégorie « Accompagnement et sorties » peut être mal interprétée. Décris l'entreprise comme indiqué plus haut; plan B : **Square**, **Helcim** (canadien) ou virement Interac en mode concierge.
