# NoSponsored 🚫📢

Ceci est une extension Chrome qui a pour objectif de réduire le harcèlement publicitaire sur les résultats de Google Search en supprimant automatique les annonces sponsorisés.

> **English version**: [README_EN.md](README_EN.md)

## 🌟 Fonctionnalités

- **Suppression automatique** des résultats sponsorisés sur Google Search
- **Support multilingue** : Français, Anglais, Allemand, Espagnol, Italien, Portugais, Russe, Polonais
- **Détection dynamique** : Fonctionne même avec les résultats chargés dynamiquement
- **Léger et rapide** : Impact minimal sur les performances
- **Sans configuration** : Fonctionne immédiatement après installation

## 🌍 Domaines supportés

L'extension fonctionne sur tous les domaines Google Search :
- google.com
- google.fr  
- google.de
- google.es
- google.it
- google.pt
- google.ru
- google.pl

## 🚀 Installation

### Installation manuelle (développement)

1. Clonez ce repository :
   ```bash
   git clone https://github.com/davidlefrancq/no-sponsored.git
   cd no-sponsored
   ```

2. Ouvrez Chrome et allez dans `chrome://extensions/`

3. Activez le "Mode développeur" en haut à droite

4. Cliquez sur "Charger l'extension non empaquetée"

5. Sélectionnez le dossier du projet

### Installation depuis le Chrome Web Store

🔄 *Extension en cours de publication sur le Chrome Web Store*

## 🛠️ Comment ça marche

L'extension utilise un script de contenu qui :

1. **Détecte la langue** du navigateur automatiquement
2. **Scanne la page** à la recherche d'éléments contenant les mots-clés sponsorisés
3. **Supprime les éléments** sponsorisés (bannières et annonces)
4. **Surveille les changements** DOM pour traiter les résultats chargés dynamiquement

### Mots-clés détectés par langue

| Langue | Mots-clés |
|--------|-----------|
| 🇺🇸 Anglais | Sponsored |
| 🇫🇷 Français | Sponsorisé |
| 🇩🇪 Allemand | Gesponsert |
| 🇪🇸 Espagnol | Patrocinado |
| 🇮🇹 Italien | Sponsorizzato, Sponsorizzata |
| 🇵🇹 Portugais | Patrocinado, Patrocinada |
| 🇷🇺 Russe | Cпонсируемый |
| 🇵🇱 Polonais | Sponsorowany, Sponsorowana, Sponsorowane |

## 📁 Structure du projet

```
no-sponsored/
├── manifest.json       # Configuration de l'extension Chrome
├── content.js         # Script principal de suppression des publicités
├── icon48.png        # Icône 48x48px
├── icon128.png       # Icône 128x128px
├── icon1024.png      # Icône 1024x1024px
├── LICENSE           # Licence du projet
└── README.md         # Ce fichier
```

## 🔧 Développement

### Prérequis
- Google Chrome ou Chromium
- Connaissances de base en JavaScript

### Modification des langues supportées

Pour ajouter une nouvelle langue, modifiez l'objet `keywords` dans `content.js` :

```javascript
static keywords = {
  // ...langues existantes...
  "nouveau_code_langue": ["Mot-clé1", "Mot-clé2"],
};
```

### Test

1. Modifiez le code
2. Rechargez l'extension dans `chrome://extensions/`
3. Testez sur une page de recherche Google

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. **Fork** le projet
2. Créez une **branche** pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. **Committez** vos changements (`git commit -am 'Ajout de nouvelle fonctionnalité'`)
4. **Poussez** vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une **Pull Request**

### Signaler un bug

Si vous trouvez un bug, veuillez [ouvrir une issue](https://github.com/davidlefrancq/no-sponsored/issues) avec :
- Description du problème
- Étapes pour reproduire
- Navigateur et version
- Captures d'écran si applicable

### Note importante sur les contributions

En contribuant à ce projet, vous acceptez que vos contributions soient sous licence **GNU GPL v3**, conformément à la licence du projet.

## 📄 Licence

Ce projet est sous licence **GNU GPL v3**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

### Résumé de la licence GPL v3

- ✅ **Libre d'utiliser** - Vous pouvez utiliser ce logiciel gratuitement
- ✅ **Libre de modifier** - Vous pouvez modifier le code source
- ✅ **Libre de distribuer** - Vous pouvez partager le logiciel
- ⚖️ **Copyleft** - Les modifications doivent également être sous GPL v3
- 📖 **Code source obligatoire** - Le code source doit être fourni avec toute distribution

## ⚠️ Avertissement

Cette extension modifie l'affichage des pages Google Search. Google peut modifier sa structure à tout moment, ce qui pourrait affecter le fonctionnement de l'extension.

## 📞 Support

- **Issues GitHub** : [Signaler un problème](https://github.com/davidlefrancq/no-sponsored/issues)

---

⭐ **N'oubliez pas de mettre une étoile au projet si vous le trouvez utile !**