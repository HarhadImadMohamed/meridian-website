# Meridian — Site web (page principale)

Site vitrine pour Meridian, cabinet de conseil en business piloté par l'IA.
Construit avec **React** (via Vite) et exécuté avec **Node.js**.

## Structure du projet

```
meridian/
├── index.html                # Point d'entrée HTML, chargement des polices
├── package.json              # Dépendances npm (React, Vite)
├── vite.config.js            # Configuration du serveur de développement
└── src/
    ├── main.jsx               # Point d'entrée React
    ├── App.jsx                # Assemble toutes les sections de la page
    ├── index.css              # ⭐ Fichier central : couleurs, polices, styles globaux
    └── components/
        ├── Header.jsx          # Barre de navigation fixe
        ├── Hero.jsx            # Section d'accueil + visuel animé
        ├── Stats.jsx           # Bandeau de statistiques
        ├── Services.jsx        # "What we do" — grille des services
        ├── Process.jsx         # "How it works" — timeline en 7 étapes
        ├── Technology.jsx      # Plateforme de simulation
        ├── WhyUs.jsx           # Onglets interactifs "Why this works"
        ├── Industries.jsx      # Secteurs servis
        ├── Competitive.jsx     # Tableau comparatif concurrentiel
        ├── FAQ.jsx             # Accordéon de questions fréquentes
        ├── CTAFooter.jsx       # Appel à l'action final + formulaire
        └── Footer.jsx          # Pied de page
```

## Couleurs et polices — tout est centralisé

**Toutes** les couleurs et polices du site sont définies comme variables CSS
en haut du fichier `src/index.css`, dans le bloc `:root`. C'est le seul
endroit à modifier pour changer l'identité visuelle de tout le site :

```css
--brand-lavender: #CAA9FE;
--brand-violet:   #9F2FFF;
--brand-deep:     #3E2677;

--font-display: 'Space Grotesk', ...;   /* titres */
--font-body:    'IBM Plex Sans', ...;   /* texte courant */
--font-mono:    'IBM Plex Mono', ...;   /* chiffres, labels techniques */
```

Chaque composant réutilise ces variables (`var(--brand-violet)`, etc.) —
aucune couleur ou police n'est codée en dur ailleurs dans le projet.

## Installation et lancement

Prérequis : Node.js 18+ et npm.

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
# → ouvre http://localhost:5273

# 3. Construire la version de production
npm run build
# → génère le dossier dist/

# 4. Prévisualiser la version de production
npm run preview
```

## Notes

- Ceci couvre la **page principale** uniquement, comme demandé.
- La structure s'inspire de sharplink.com : hero plein écran avec visuel animé,
  bandeau de statistiques, sections numérotées pour les processus séquentiels,
  bloc d'onglets interactif, tableau comparatif, FAQ en accordéon, et un bloc
  d'appel à l'action final avant le pied de page.
- Le site est entièrement responsive (mobile, tablette, desktop) et respecte
  `prefers-reduced-motion`.
