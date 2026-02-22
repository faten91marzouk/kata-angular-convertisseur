# TODO – Améliorations techniques

Ce document liste les améliorations possibles 

## Tests unitaires
- Ajouter davantage de tests sur :
  - La désactivation automatique du taux fixe (>2%)
  - Le switch EUR/USD et la continuité des valeurs
  - La limitation de l'historique à 5 éléments

## UX / UI
- Ajouter un indicateur visuel clair lorsque le taux fixe est actif
- Afficher une notification lorsque le taux fixe est désactivé automatiquement
- Améliorer le design (layout responsive, meilleure hiérarchie visuelle)

## Architecture
- Séparer HistoryComponent si l’application évolue

## Robustesse
- Ajouter gestion des erreurs
- Ajouter validation plus stricte des inputs utilisateur