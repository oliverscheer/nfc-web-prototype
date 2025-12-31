# NFC Web Prototype 📱

Eine moderne Web-Anwendung zum Scannen von NFC-Tags, gebaut mit React, TypeScript und Tailwind CSS.

[![Deploy to GitHub Pages](https://github.com/oliverscheer/nfc-web-prototype/actions/workflows/deploy.yml/badge.svg)](https://github.com/oliverscheer/nfc-web-prototype/actions/workflows/deploy.yml)

## 🌐 Live Demo

**[https://oliverscheer.github.io/nfc-web-prototype/](https://oliverscheer.github.io/nfc-web-prototype/)**

## 📋 Über das Projekt

Diese Anwendung demonstriert die Verwendung der Web NFC API zum Lesen von NFC-Tags direkt im Browser. Sie bietet eine intuitive Benutzeroberfläche mit:

- 🎯 **NFC-Scanner** - Scannen Sie NFC-Tags mit Ihrem Smartphone
- 📱 **Responsive Design** - Optimiert für Mobile und Desktop
- 🎨 **Modern UI** - Gebaut mit Tailwind CSS
- 🌙 **Dark Mode Support** - Vorbereitet für Dark Mode
- ♿ **Accessibility** - ARIA-Labels und Keyboard-Navigation

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Deployment**: GitHub Pages via GitHub Actions

## 🚀 Lokale Entwicklung

### Voraussetzungen

- Node.js 20.x oder höher
- npm

### Installation

1. Repository klonen:

```bash
git clone https://github.com/oliverscheer/nfc-web-prototype.git
cd nfc-web-prototype
```

2. Dependencies installieren:

```bash
npm install
```

3. Entwicklungsserver starten:

```bash
npm run dev
```

Die App läuft dann auf `http://localhost:3000`

### Build für Production

```bash
npm run build
```

Die produktionsfertigen Dateien werden im `dist/` Ordner erstellt.

### Preview Production Build

```bash
npm run preview
```

## 📱 Browser-Kompatibilität & NFC-Unterstützung

### ⚠️ Wichtige Einschränkungen der Web NFC API

#### Desktop-Browser

❌ **Die Web NFC API funktioniert NICHT auf Desktop-Browsern**, unabhängig vom Betriebssystem:

- ❌ Chrome/Edge auf Windows
- ❌ Chrome/Edge auf macOS
- ❌ Chrome/Edge auf Linux
- ❌ Firefox (alle Plattformen)
- ❌ Safari (alle Plattformen)

**Grund**: Die Web NFC API ist ausschließlich für mobile Geräte konzipiert und wird von Desktop-Browsern nicht unterstützt, selbst wenn das Gerät NFC-Hardware besitzt.

#### Mobile Browser

##### ✅ Android

Die Web NFC API wird **nur auf Android** unterstützt:

- ✅ **Chrome für Android** (Version 89+)
- ✅ **Edge für Android** (Version 89+)
- ✅ **Samsung Internet** (Version 15+)
- ❌ Firefox für Android (noch nicht unterstützt)
- ❌ Opera für Android (noch nicht unterstützt)

**Voraussetzungen**:

- Android 7.0 (Nougat) oder höher
- NFC muss in den Systemeinstellungen aktiviert sein
- Die Website muss über HTTPS geladen werden (außer localhost)
- Benutzer muss die NFC-Berechtigung explizit erteilen

##### ❌ iOS/iPadOS

Die Web NFC API wird auf iOS **NICHT unterstützt**:

- ❌ Safari auf iOS/iPadOS
- ❌ Chrome auf iOS/iPadOS (verwendet WebKit-Engine)
- ❌ Edge auf iOS/iPadOS (verwendet WebKit-Engine)
- ❌ Firefox auf iOS/iPadOS (verwendet WebKit-Engine)

**Grund**: Apple hat die Web NFC API bisher nicht in WebKit implementiert. Alle iOS-Browser müssen WebKit verwenden (Apple-Richtlinie), daher gibt es keine Unterstützung unabhängig vom Browser.

### 🔒 Sicherheitsanforderungen

Die Web NFC API erfordert:

1. **Secure Context (HTTPS)** - Die Website muss über HTTPS geladen werden
   - Ausnahme: `localhost` für Entwicklung
2. **User Activation** - NFC-Scan kann nur durch User-Interaktion (z.B. Button-Click) gestartet werden
3. **Permission Prompt** - Benutzer muss NFC-Zugriff explizit erlauben

### 📊 Browser-Support-Matrix

| Platform | Browser          | Version | NFC Support |
| -------- | ---------------- | ------- | ----------- |
| Android  | Chrome           | 89+     | ✅ Ja       |
| Android  | Edge             | 89+     | ✅ Ja       |
| Android  | Samsung Internet | 15+     | ✅ Ja       |
| Android  | Firefox          | Alle    | ❌ Nein     |
| iOS      | Alle Browser     | Alle    | ❌ Nein     |
| Windows  | Alle Browser     | Alle    | ❌ Nein     |
| macOS    | Alle Browser     | Alle    | ❌ Nein     |
| Linux    | Alle Browser     | Alle    | ❌ Nein     |

### 🧪 Testing der App

#### So testen Sie die NFC-Funktionalität:

1. **Android-Gerät mit Chrome verwenden**:

   - Öffnen Sie die App auf einem Android-Smartphone
   - Verwenden Sie Chrome, Edge oder Samsung Internet
   - Aktivieren Sie NFC in den Systemeinstellungen

2. **Entwicklung**:

   - Testen Sie lokal auf Android via `http://localhost:3000`
   - Oder deployen Sie auf HTTPS

3. **Was Sie sehen werden**:
   - ✅ Auf unterstützten Geräten: NFC-Scanner-Interface
   - ❌ Auf nicht unterstützten Geräten: Warnmeldung "NFC nicht verfügbar"

### 🔗 Weitere Informationen

- [Web NFC Specification (W3C)](https://w3c.github.io/web-nfc/)
- [Can I Use: Web NFC](https://caniuse.com/webnfc)
- [MDN: Web NFC API](https://developer.mozilla.org/en-US/docs/Web/API/Web_NFC_API)

## 📂 Projektstruktur

```
nfc-web-prototype/
├── .github/
│   ├── workflows/
│   │   └── deploy.yml          # GitHub Actions Workflow
│   ├── copilot-instructions.md # GitHub Copilot Instructions
│   └── copilot/
│       └── component-examples.md
├── src/
│   ├── components/
│   │   ├── ui/                 # UI-Komponenten (Button, Card)
│   │   ├── layout/             # Layout (Navigation, Layout)
│   │   └── features/           # Features (NFCScanner)
│   ├── pages/                  # Seiten (Home, Impressum)
│   ├── services/               # Services (NFC Service)
│   ├── types/                  # TypeScript Types
│   ├── App.tsx                 # Haupt-App-Komponente
│   ├── main.tsx               # Entry Point
│   └── index.css              # Globale Styles
├── public/                     # Statische Assets
├── vite.config.ts             # Vite Konfiguration
├── tailwind.config.js         # Tailwind Konfiguration
├── tsconfig.json              # TypeScript Konfiguration
└── package.json               # Dependencies

```

## 🎨 Features

### Navigation

- **Hamburger-Menü** für Mobile
- **Horizontale Navigation** für Desktop
- Active Route Highlighting
- Smooth Transitions

### NFC-Scanner

- Browser-Support-Check
- NFC-Tag Scanning
- Anzeige von:
  - Seriennummer
  - Record-Typ
  - Daten
  - Zeitstempel
- Umfassende Fehlerbehandlung

### UI-Komponenten

- **Button** mit Variants und Loading-State
- **Card** mit Header, Body und Footer
- Responsive Design
- Dark Mode Ready

## 🤝 Contributing

Contributions sind willkommen! Bitte erstellen Sie einen Pull Request oder öffnen Sie ein Issue.

## 📄 Lizenz

MIT License - siehe LICENSE Datei für Details.

## 👤 Autor

**Oliver Scheer**

- GitHub: [@oliverscheer](https://github.com/oliverscheer)

## 🙏 Danksagungen

- React Team für das Framework
- Tailwind CSS Team für das CSS Framework
- W3C für die Web NFC API Spezifikation

---

**Hinweis**: Diese App ist ein Proof of Concept und dient zu Demonstrationszwecken. Die NFC-Funktionalität ist aufgrund von Browser-Limitierungen nur auf Android-Geräten mit Chrome/Edge verfügbar.
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },

},
])

````

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
````
