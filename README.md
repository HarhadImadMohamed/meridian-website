# Meridian — Homepage simplifiée, SEO-first (v4)

Cette passe recentre le site autour de la **clarté et de la conversion**
plutôt que du spectacle visuel : homepage courte et directe, workflow de
réservation en 5 étapes mis en avant, informations détaillées (approche
complète, plateforme de simulation, comparatif concurrentiel, FAQ)
déplacées sur une page secondaire `/company`. Identité, palette et contenu
Meridian conservés.

## Ce qui a changé dans cette passe (v4)

- **Homepage radicalement simplifiée** : plus de grand M en arrière-plan,
  plus de titres éditoriaux géants, plus de longs paragraphes. Un visiteur
  doit comprendre ce qu'est Meridian en 10–15 secondes.
- **Hero court** : "AI consulting & business automation" + une phrase +
  deux CTA ("Book an appointment" / "Explore our services"), avec un petit
  motif M discret (plus de système géant piloté par le scroll).
- **Nouvelle section "How we work"** (`HowWeWork.jsx`) : le workflow de
  réservation en 5 étapes demandé — Appointment Booking → Solution Design
  → Prototype Presentation → Specs Validation & Contract → Final Delivery.
  C'est distinct de la méthodologie Diagnose/Simulate/Build/Measure/
  Optimize (qui reste, en version courte, dans "Our Approach").
- **Nouvelle section "What we do"** (`WhatWeDo.jsx`) : grille compacte de
  6 services, une ligne de description chacun.
- **"Why Meridian"** simplifié en liste à coches (`WhyMeridian.jsx`).
- **Page secondaire `/company`** (`pages/CompanyPage.jsx`) : contient tout
  ce qui ne doit pas dominer la homepage — le détail complet du processus
  (`Process.jsx`), la plateforme de simulation (`SimulationPlatform.jsx`),
  les statistiques et le comparatif concurrentiel (`Company.jsx`), et la
  FAQ. Rien n'a été supprimé, uniquement déplacé.
- **Routing** ajouté via `react-router-dom` (`/` et `/company`).
- **SEO** : `index.html` a un nouveau titre, une meta description ciblée,
  une balise canonique, des balises Open Graph, et un bloc JSON-LD
  `ProfessionalService` décrivant Meridian. Chaque page a un seul `<h1>`
  et des `<h2>` logiques.
- Les études de cas sont désormais explicitement étiquetées
  **"Illustrative example"** — jamais présentées comme des résultats
  clients réels.

### Limites assumées (transparence)

- Je n'ai pas inventé de contenu investisseur/TAM/SAM sur `/company` :
  le projet source ne contenait pas ce contenu à l'origine (seule la FAQ
  mentionne le modèle tarifaire). Si vous avez ce contenu ailleurs
  (le site Vercel d'origine, un doc), partagez-le et je l'intègre sur
  `/company`.
- Palette : toujours violet/lavande (celle réellement présente dans le
  code), pas crème/émeraude/laiton comme mentionné dans le brief — même
  remarque que les passes précédentes.
- `/company` reste une page unique regroupant "Approche détaillée +
  Simulation + Entreprise + FAQ" plutôt que 4 pages séparées, pour rester
  simple à maintenir. Facile à scinder plus tard si besoin.

## Structure

```
meridian/
├── index.html                      # ⭐ SEO : titre, meta description, JSON-LD
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                    # BrowserRouter
    ├── App.jsx                     # Routes "/" et "/company"
    ├── pages/
    │   ├── HomePage.jsx            # homepage simplifiée
    │   └── CompanyPage.jsx         # infos détaillées (approche, simulation, stats, FAQ)
    ├── styles/
    │   ├── main.scss
    │   ├── _tokens.scss            # police + couleurs principales centralisées
    │   ├── _base.scss
    │   └── components/
    │       └── _NomDuComposant.scss
    └── components/
        ├── Header.jsx              # nav : Services / How it works / Industries / Case studies / Company
        ├── Hero.jsx                # version courte
        ├── WhatWeDo.jsx            # ⭐ nouveau — grille de services compacte
        ├── HowWeWork.jsx           # ⭐ nouveau — workflow de réservation en 5 étapes
        ├── WhyMeridian.jsx         # ⭐ nouveau — liste à coches
        ├── OurApproach.jsx         # ⭐ nouveau — teaser court, renvoie vers /company
        ├── Process.jsx             # méthodologie détaillée (sur /company)
        ├── SimulationPlatform.jsx  # plateforme de simulation détaillée (sur /company)
        ├── Industries.jsx
        ├── Work.jsx                # études de cas / exemples illustratifs
        ├── Company.jsx             # stats + comparatif concurrentiel (sur /company)
        ├── FAQ.jsx                 # (sur /company)
        ├── CTAFooter.jsx
        ├── Footer.jsx
        └── MotifM.jsx              # petit motif M, utilisé avec parcimonie
```

## Installation et lancement (VS Code)

Prérequis : Node.js 18+ et npm.

1. Dézippez le projet, ouvrez le dossier `meridian/` dans VS Code.
2. Terminal VS Code (`Terminal > New Terminal`).
3. Installez les dépendances (React, Framer Motion, **React Router**, Sass) :
   ```bash
   npm install
   ```
4. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```
5. Ouvrez l'URL affichée (par défaut `http://localhost:5173`). La page
   `/company` est accessible via le lien "Company" dans la navigation.

Autres commandes :
```bash
npm run build     # build de production dans dist/
npm run preview   # prévisualise le build de production
```

## Personnalisation rapide

- **Couleurs / polices** : `src/styles/_tokens.scss`.
- **Workflow de réservation** : tableau `STEPS` dans `src/components/HowWeWork.jsx`.
- **Services affichés en homepage** : tableau `ITEMS` dans `src/components/WhatWeDo.jsx`.
- **Contenu de la page Company** : `src/pages/CompanyPage.jsx`.
