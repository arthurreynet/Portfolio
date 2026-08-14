# Portfolio — Arthur Reynet

Site vitrine d'un développeur full-stack freelance. Il s'adresse aux entreprises qui cherchent un prestataire : connecteurs et synchronisation de données, applications métier sur mesure, migration et modernisation, mise en production. Direction artistique sobre — fond vert profond, accent vert clair, un seul grotesque, retenue dans le motion — et une seule page qui mène par la preuve.

**Live** : [www.arthurreynet.dev](https://www.arthurreynet.dev)

## Aperçu

<!-- TODO : ajouter une capture ou un GIF de démo (ex: scroll de la home + le mini-jeu du footer) -->

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** — design tokens en OKLCH (`@theme`), thème clair sur `body[data-theme="light"]`
- **Motion** — révélations en cascade, états de survol sobres, tilt 3D sur la capture du projet phare
- **next/font** — Schibsted Grotesk, self-hostée
- **Formspree** — formulaire de contact sans backend
- Déploiement **Vercel**

## Caractéristiques

- **Sections** : Hero · 01 Services · 02 Travaux · 03 Méthode · 04 Contact — plus une section Recommandations qui n'apparaît qu'une fois une citation saisie
- **Deux thèmes** : sombre par défaut, clair au choix, restauré avant peinture pour éviter le flash
- **Accessibilité** : contraste WCAG AA sur les deux thèmes, hiérarchie de titres, landmarks ARIA, skip-link, navigation clavier, `prefers-reduced-motion`
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
| `NEXT_PUBLIC_SITE_URL` | URL de production (metadataBase, canonical, OG, sitemap). Fallback : `https://www.arthurreynet.dev` |
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
│  ├─ layout.tsx           Metadata, font, JSON-LD, thème, skip-link
│  ├─ page.tsx             Composition de la home
│  ├─ globals.css          Design tokens OKLCH + base styles
│  ├─ opengraph-image.tsx  Carte OG 1200×630 générée
│  ├─ icon.tsx             Favicon monogramme
│  ├─ sitemap.ts / robots.ts
└─ components/             SiteHeader, Hero, Services, Travaux, TiltFrame,
                           Methode, Recommandations, Contact, Footer, DinoGame…
public/projets/            Visuels des projets
```

## Déploiement

1. Pousser sur GitHub (fait).
2. Importer le repo sur [Vercel](https://vercel.com/new).
3. Définir les variables d'environnement (`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_FORMSPREE_ID`).
4. Déployer — Vercel détecte Next.js automatiquement.
