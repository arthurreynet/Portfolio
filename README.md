# Portfolio — Arthur Reynet

Portfolio personnel de développeur full-stack. Direction artistique éditoriale : typographie forte, grille asymétrique, palette crème + terracotta, retenue dans le motion. Pensé pour mener par la preuve (projets, expérience réelle) auprès de recruteurs et de porteurs de projet freelance.

**Live** : _à venir_ (déploiement Vercel)

## Aperçu

<!-- TODO : ajouter une capture ou un GIF de démo (ex: scroll de la home + le mini-jeu du footer) -->

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** — design tokens en OKLCH (variables CSS + `@theme`)
- **Motion** — révélations en cascade, états de survol sobres
- **next/font** — Fraunces (display), Hanken Grotesk (corps), JetBrains Mono (métadonnées), self-hostées
- **Formspree** — formulaire de contact sans backend
- Déploiement **Vercel**

## Caractéristiques

- **Design éditorial** sans template : Hero masthead, grille 12 colonnes, hairlines, beaucoup de blanc chaud
- **Sections** : Hero · 01 À propos · 02 Travaux (vignettes OG + liens live/repo) · 03 Parcours · 04 Compétences · 05 Contact
- **Accessibilité** : contraste WCAG AA, hiérarchie de titres, landmarks ARIA, skip-link, navigation clavier, `prefers-reduced-motion`
- **SEO** : metadata complète, OG image générée à la volée, JSON-LD Person, `sitemap.xml`, `robots.txt`
- **Easter egg** : le jeu du dinosaure de Chrome, version maison, dans le footer
- 100 % statique, optimisé pour Lighthouse 95+

## Développement local

Prérequis : **Node ≥ 20.9** (voir `.nvmrc`).

```bash
nvm use
npm install
cp .env.example .env.local   # renseigner les variables ci-dessous
npm run dev
```

Le site tourne sur http://localhost:3000.

### Variables d'environnement (`.env.local`)

| Variable | Rôle |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL de production (metadataBase, canonical, OG, sitemap). Fallback : `https://arthurreynet.com` |
| `NEXT_PUBLIC_FORMSPREE_ID` | ID du formulaire Formspree pour la section Contact |

## Scripts

| Commande | Action |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Serveur de production |
| `npm run lint` | ESLint |

## Structure

```
src/
├─ app/
│  ├─ layout.tsx           Metadata, fonts, JSON-LD, skip-link
│  ├─ page.tsx             Composition de la home
│  ├─ globals.css          Design tokens OKLCH + base styles
│  ├─ opengraph-image.tsx  Carte OG 1200×630 générée
│  ├─ icon.tsx             Favicon monogramme
│  ├─ sitemap.ts / robots.ts
└─ components/             Hero, About, SelectedWork, Parcours,
                           Competences, Contact, Footer, DinoGame…
public/projets/            Visuels des projets
```

## Déploiement

1. Pousser sur GitHub (fait).
2. Importer le repo sur [Vercel](https://vercel.com/new).
3. Définir les variables d'environnement (`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_FORMSPREE_ID`).
4. Déployer — Vercel détecte Next.js automatiquement.
