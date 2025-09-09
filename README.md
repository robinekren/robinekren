# Robin Ekren - Personal Website

Eine moderne, responsive persönliche Website mit sauberem Design und professioneller Struktur.

## 🚀 Features

- **Responsive Design**: Funktioniert perfekt auf Desktop, Tablet und Mobile
- **Moderne UI/UX**: Sauberes, professionelles Design mit Animationen
- **Performance optimiert**: Schnelle Ladezeiten und optimierte Assets
- **SEO-freundlich**: Semantische HTML-Struktur und Meta-Tags
- **Accessibility**: Barrierefreie Navigation und Tastaturunterstützung
- **Mobile-First**: Optimiert für mobile Geräte

## 📁 Projektstruktur

```
robinekren/
├── index.html          # Haupt-HTML-Datei
├── css/
│   └── style.css       # Haupt-Stylesheet mit CSS-Variablen
├── js/
│   └── script.js       # JavaScript für Interaktivität
├── assets/
│   ├── images/         # Bilder und Fotos
│   └── icons/          # Icons und Grafiken
├── package.json        # Node.js Konfiguration
├── .gitignore         # Git ignore Regeln
└── README.md          # Projektdokumentation
```

## 🛠️ Installation & Setup

1. **Repository klonen oder herunterladen**

2. **Dependencies installieren:**
   ```bash
   npm install
   ```

3. **Development Server starten:**
   ```bash
   npm run dev
   ```
   Die Website ist dann unter `http://localhost:3000` erreichbar.

## 📝 Verwendung

### Inhalte anpassen

1. **Persönliche Informationen:** Bearbeite `index.html` und passe die Texte in den verschiedenen Sektionen an
2. **Styling:** Modifiziere `css/style.css` - alle Farben und Styles sind über CSS-Variablen anpassbar
3. **Bilder:** Füge deine Bilder in den `assets/images/` Ordner hinzu
4. **Favicon:** Ersetze `assets/favicon.ico` mit deinem eigenen Favicon

### Sektionen

- **Hero:** Hauptbereich mit Begrüßung und Call-to-Action Buttons
- **Über mich:** Persönliche Vorstellung und Informationen
- **Projekte:** Showcase deiner Arbeiten und Projekte
- **Kontakt:** Kontaktinformationen und -möglichkeiten

### Farben anpassen

Alle Farben sind als CSS-Variablen in `css/style.css` definiert:

```css
:root {
    --primary-color: #2563eb;    /* Hauptfarbe */
    --secondary-color: #64748b;  /* Sekundärfarbe */
    --accent-color: #f59e0b;     /* Akzentfarbe */
    /* ... weitere Variablen */
}
```

## 🎨 Anpassungen

### Neue Sektionen hinzufügen

1. HTML-Struktur in `index.html` hinzufügen
2. Entsprechende Styles in `css/style.css` erstellen
3. Navigation in der Header-Sektion aktualisieren

### JavaScript-Funktionalität erweitern

Die `js/script.js` Datei enthält bereits:
- Mobile Navigation
- Smooth Scrolling
- Scroll-Animationen
- Header-Effekte
- Notification System

## 📱 Responsive Breakpoints

- **Desktop:** > 768px
- **Tablet:** 768px - 480px
- **Mobile:** < 480px

## 🚀 Deployment

### Statische Hosting-Dienste

Die Website kann auf verschiedenen Plattformen gehostet werden:

- **Netlify:** Einfach den Ordner per Drag & Drop hochladen
- **Vercel:** Repository verknüpfen für automatisches Deployment
- **GitHub Pages:** Repository als GitHub Pages aktivieren
- **Surge.sh:** `npm install -g surge` und `surge` im Projektordner ausführen

### Build-Prozess (optional)

Für erweiterte Optimierungen kannst du Build-Tools hinzufügen:

```bash
npm run build
```

## 🔧 Entwicklung

### Scripts

- `npm start`: Development Server starten
- `npm run dev`: Development Server mit Live-Reload
- `npm run build`: Build-Prozess (kann erweitert werden)

### Code-Qualität

- Semantisches HTML5
- Moderne CSS mit Flexbox und Grid
- Vanilla JavaScript (ES6+)
- Mobile-First Approach
- Accessibility Best Practices

## 📄 Browser-Unterstützung

- Chrome (empfohlen)
- Firefox
- Safari
- Edge
- Mobile Browser

## 🤝 Beitragen

1. Fork das Repository
2. Erstelle einen Feature Branch
3. Committe deine Änderungen
4. Push zum Branch
5. Erstelle einen Pull Request

## 📞 Support

Bei Fragen oder Problemen kannst du gerne ein Issue erstellen oder mich direkt kontaktieren.

## 📜 Lizenz

Dieses Projekt steht unter der MIT Lizenz - siehe [LICENSE](LICENSE) für Details.

---

**Viel Erfolg mit deiner neuen Website! 🎉**
