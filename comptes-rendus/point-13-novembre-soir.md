# Point d'étape · 13 novembre 2026 (soir)

État : étapes 3 et 4 en ligne sur https://plaisir-secret.vercel.app · Phase 2 à 85 %, phase 3 à 60 %

## Ce qui est en ligne et fonctionne pour vrai
- Nom **Désirs Secrets** partout (site, appli installable, icônes, pages légales)
- Annuaire public : recherche, filtres, VIP, pages Lévis, Québec et Montréal, « Dispo ce soir »
- Accompagnatrices (sorties en public seulement), avis liés à un numéro de réservation
- Offre de lancement (1er mois Pro gratuit, 10 places), cartes-cadeaux
- **Formulaires actifs** : réservations, messages, avis, signalements, cartes-cadeaux et inscriptions arrivent dans le Gmail de Madd par FormSubmit, avec l'alias secret (le courriel n'est plus visible dans le code)

## Ce qui est prêt mais inactif
- **Paiements Stripe** : les boutons existent; tant que les liens ne sont pas collés dans `config.js`, ils mènent au formulaire de demande
- **Domaine desirs-secrets.ca** : le site reste sur plaisir-secret.vercel.app jusqu'à l'achat

## Encore en démonstration
- Profils et avis affichés (étiquetés « exemple »), bandeau démo
- « Mon espace » (enregistré dans le navigateur seulement, jusqu'à l'étape 05)
- Messagerie privée dans le site (étape 06) : pour l'instant les messages passent par courriel

## Prochaines actions
1. 👤 Madd : créer le compte Stripe et les 5 liens de paiement
2. 👤 Madd : acheter desirs-secrets.ca (+ .com)
3. 🤖 Claude : brancher Stripe et le domaine dès réception
4. 👤 Madd : recruter 3 à 5 vrais membres à Lévis → 🤖 retirer la démo
