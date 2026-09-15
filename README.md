# Meridian — Redesign immersif (v3)

Site vitrine Meridian, cabinet de conseil en IA business
(diagnose → simulate → build → measure → optimize). Direction
artistique inspirée de hugeinc.com : typographie éditoriale géante,
un système visuel signature "M" à grande échelle piloté par le
scroll, et un fond qui change de teinte en douceur au fil de la
page — tout en gardant l'identité, la palette et le contenu réel
de Meridian.

## Nouveautés de cette passe (v3)

- **Giant M** (`src/components/GiantM.jsx`) : le M n'est plus une
  petite icône décorative. C'est désormais un environnement visuel
  géant, fixe en arrière-plan de tout le site, qui traverse 4 états
  au fil du scroll :
  `M solide → lignes ouvertes → réseau de nœuds → grille optimisée → retour au M`.
  Piloté par **GSAP + ScrollTrigger**, sans re-render React (tout
  passe par des refs pour rester fluide).
- **`ScrollEnvironment.jsx`** : un seul `ScrollTrigger` sur toute la
  page pilote à la fois le Giant M et une **couche de fond animée**
  qui interpole en douceur entre plusieurs teintes de la palette
  Meridian existante au fil des grands chapitres (hero → process →
  simulation → solutions → company → CTA).
- Les fonds de section sont désormais **translucides**
  (`--bg-panel`, `--bg-card` dans `_tokens.scss`) pour que le Giant M
  et le fond animé restent visibles *à travers* le contenu — l'effet
  "environnement continu" demandé, plutôt que des sections opaques
  empilées.
- **Contenu restauré** : comparé au code source original fourni,
  j'ai remis ce qui avait été coupé par erreur lors de la première
  passe — la vraie liste des industries (Startups, SaaS, Finance,
  Real estate, etc.), la note "souvent pris pour une agence
  e-commerce", la citation originale du hero, et la citation sur la
  simulation.
- **SCSS séparé du JSX**, comme demandé — voir la structure plus bas.

### Limites assumées (transparence)

Vu l'ampleur de la demande, certains points du brief ont été
simplifiés pour rester dans un projet livrable et maintenable :

- Le Giant M anime **4 états** (pas 7) — le principe de
  transformation continue est là, mais avec moins de paliers.
  Facile à étendre : `KEYFRAMES` et les groupes SVG dans
  `GiantM.jsx` sont conçus pour qu'on en ajoute.
- Je n'ai pas construit un visuel bespoke unique pour *chaque*
  chapitre (Diagnose/Simulate/Build/Measure/Optimize ont chacun
  leur propre visuel dans `Process.jsx`, mais Industries/Solutions
  restent typographiques plutôt qu'illustrés individuellement).
- Palette : le brief mentionne crème / émeraude / laiton, mais le
  code fourni utilise en réalité violet / lavande. J'ai gardé la
  palette **réellement présente dans le code**, et le fond animé
  interpole entre des teintes dérivées de celle-ci
  (`--scroll-stop-1` à `6` dans `_tokens.scss`). Dites-moi si vous
  voulez vraiment basculer vers crème/émeraude/laiton.
- Aucune information investisseur / TAM / SAM séparée n'a été
  ajoutée : le projet source ne contenait pas ce contenu (seule la
  FAQ mentionne le modèle tarifaire, conservée telle quelle). Je n'ai
  rien inventé pour ne pas créer de fausses informations business.

## Structure

```
meridian/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── lib/
    │   └── gsap.js                 # GSAP + ScrollTrigger, enregistré une fois
    ├── styles/
    │   ├── main.scss               # point d'entrée, importe tout le reste
    │   ├── _tokens.scss            # ⭐ police + couleurs principales centralisées
    │   ├── _base.scss              # reset + classes utilitaires (.container, .btn...)
    │   ├── _environment.scss       # styles du fond animé + du Giant M
    │   └── components/
    │       └── _NomDuComposant.scss   # un fichier SCSS par composant JSX
    └── components/
        ├── ScrollEnvironment.jsx   # pilote le Giant M + le fond animé
        ├── GiantM.jsx              # ⭐ le système visuel "M" à grande échelle
        ├── MotifM.jsx              # petit motif M (accents dans Work / Footer)
        ├── Header.jsx
        ├── Hero.jsx
        ├── ProblemStatement.jsx
        ├── Process.jsx
        ├── SimulationPlatform.jsx
        ├── Solutions.jsx
        ├── Work.jsx
        ├── WhyUs.jsx
        ├── Industries.jsx
        ├── Company.jsx             # stats + comparatif concurrentiel
        ├── FAQ.jsx
        ├── CTAFooter.jsx
        └── Footer.jsx
```

Chaque composant JSX ne contient plus que du JSX/logique — son style
vit dans `src/styles/components/_NomDuComposant.scss`, importé une
fois dans `main.scss`. Les classes restent globales (pas de CSS
Modules), donc les noms de classes n'ont pas changé.

## Installation et lancement (VS Code)

Prérequis : Node.js 18+ et npm.

1. Dézippez le projet, puis ouvrez le dossier `meridian/` dans VS Code.
2. Terminal VS Code (`Terminal > New Terminal`).
3. Installez les dépendances (React, Framer Motion, **GSAP**, **Sass**) :
   ```bash
   npm install
   ```
4. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```
5. Ouvrez l'URL affichée (par défaut `http://localhost:5173`).

Autres commandes :
```bash
npm run build     # build de production dans dist/
npm run preview   # prévisualise le build de production
```

## Personnalisation rapide

- **Couleurs / polices / points de couleur du fond animé** : tout est
  dans `src/styles/_tokens.scss`.
- **Giant M** : `src/components/GiantM.jsx`. `KEYFRAMES` définit à
  quel pourcentage du scroll chaque état domine ; les tableaux
  `VERTICES` / `GRID` / `NETWORK` définissent la géométrie de chaque
  état.
- **Rythme du fond animé** : `COLOR_STOPS` dans
  `src/components/ScrollEnvironment.jsx`.
- Le site respecte `prefers-reduced-motion` : le Giant M et les
  animations de scroll se figent proprement pour les utilisateurs qui
  l'ont demandé dans leur système.
