# NoSponsored 🚫📢

This is a Chrome extension that aims to reduce ad harassment on Google Search results by automatically removing sponsored ads.

> **Version française**: [README.md](README.md)

## 🌟 Features

- **Automatic removal** of sponsored results on Google Search
- **Multi-language support**: French, English, German, Spanish, Italian, Portuguese, Russian, Polish
- **Dynamic detection**: Works even with dynamically loaded results
- **Lightweight and fast**: Minimal performance impact
- **Zero configuration**: Works immediately after installation

## 🌍 Supported domains

The extension works on all Google Search domains:
- google.com
- google.fr  
- google.de
- google.es
- google.it
- google.pt
- google.ru
- google.pl

## 🚀 Installation

### Manual installation (development)

1. Clone this repository:
   ```bash
   git clone https://github.com/davidlefrancq/no-sponsored.git
   cd no-sponsored
   ```

2. Open Chrome and go to `chrome://extensions/`

3. Enable "Developer mode" in the top right

4. Click "Load unpacked extension"

5. Select the project folder

### Installation from Chrome Web Store

🔄 *Extension currently being published on the Chrome Web Store*

## 🛠️ How it works

The extension uses a content script that:

1. **Detects the language** of the browser automatically
2. **Scans the page** for elements containing sponsored keywords
3. **Removes sponsored elements** (banners and ads)
4. **Monitors DOM changes** to handle dynamically loaded results

### Keywords detected by language

| Language | Keywords |
|----------|----------|
| 🇺🇸 English | Sponsored |
| 🇫🇷 French | Sponsorisé |
| 🇩🇪 German | Gesponsert |
| 🇪🇸 Spanish | Patrocinado |
| 🇮🇹 Italian | Sponsorizzato, Sponsorizzata |
| 🇵🇹 Portuguese | Patrocinado, Patrocinada |
| 🇷🇺 Russian | Cпонсируемый |
| 🇵🇱 Polish | Sponsorowany, Sponsorowana, Sponsorowane |

## 📁 Project structure

```
no-sponsored/
├── manifest.json       # Chrome extension configuration
├── content.js         # Main ad removal script
├── icon48.png        # 48x48px icon
├── icon128.png       # 128x128px icon
├── icon1024.png      # 1024x1024px icon
├── LICENSE           # Project license
├── README.md         # French documentation
└── README_EN.md      # This file (English documentation)
```

## 🔧 Development

### Prerequisites
- Google Chrome or Chromium
- Basic JavaScript knowledge

### Adding supported languages

To add a new language, modify the `keywords` object in `content.js`:

```javascript
static keywords = {
  // ...existing languages...
  "new_language_code": ["Keyword1", "Keyword2"],
};
```

### Testing

1. Modify the code
2. Reload the extension in `chrome://extensions/`
3. Test on a Google search page

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork** the project
2. Create a **branch** for your feature (`git checkout -b feature/new-feature`)
3. **Commit** your changes (`git commit -am 'Add new feature'`)
4. **Push** to the branch (`git push origin feature/new-feature`)
5. Open a **Pull Request**

### Reporting a bug

If you find a bug, please [open an issue](https://github.com/davidlefrancq/no-sponsored/issues) with:
- Problem description
- Steps to reproduce
- Browser and version
- Screenshots if applicable

### Important note on contributions

By contributing to this project, you agree that your contributions will be licensed under **GNU GPL v3**, in accordance with the project license.

## 📄 License

This project is licensed under **GNU GPL v3**. See the [LICENSE](LICENSE) file for more details.

### GPL v3 License Summary

- ✅ **Free to use** - You can use this software for free
- ✅ **Free to modify** - You can modify the source code
- ✅ **Free to distribute** - You can share the software
- ⚖️ **Copyleft** - Modifications must also be under GPL v3
- 📖 **Source code required** - Source code must be provided with any distribution

## ⚠️ Disclaimer

This extension modifies the display of Google Search pages. Google may change its structure at any time, which could affect the extension's functionality.

## 📞 Support

- **GitHub Issues**: [Report a problem](https://github.com/davidlefrancq/no-sponsored/issues)

---

⭐ **Don't forget to star the project if you find it useful!**
