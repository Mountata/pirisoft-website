# Pirisoft — Site Vitrine

> Leaders du numérique en Afrique — Génie Logiciel · Data Science · IA

## Stack technique
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Resend** (emails formulaire contact)
- **Vercel** (hébergement recommandé)

---

## 🚀 Installation & Démarrage

### 1. Cloner / ouvrir le projet
```bash
cd pirisoft
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configurer les variables d'environnement
```bash
cp .env.local.example .env.local
# Puis éditez .env.local avec votre clé Resend
```

### 4. Placer les images dans /public/images/
Renommez et placez vos images comme suit :

| Fichier attendu                    | Description              |
|------------------------------------|--------------------------|
| `public/images/equipe.png`         | Photo équipe au travail  |
| `public/images/dev-web-mobile.png` | Service Dev Web/Mobile   |
| `public/images/data-science-ia.png`| Service Data Science/IA  |
| `public/images/conseil-transformation.png` | Service Conseil |
| `public/images/produits-saas.png`  | Service SaaS             |
| `public/images/datacleaning.png`   | Projet DataCleaning      |
| `public/images/cabinet-avocat.png` | Projet Cabinet Avocat    |
| `public/images/yourblog.png`       | Projet YourBlog          |
| `public/images/mediscan.png`       | Projet MediScan          |
| `public/images/agritech.png`       | Projet AgriTech Congo    |
| `public/images/mission-africa.png` | Section Mission (fond)   |
| `public/images/contact-bg.png`     | Section Contact (fond)   |

### 5. Lancer en développement
```bash
npm run dev
# → http://localhost:3000
```

---

## 📧 Configurer l'envoi d'emails (Resend)

1. Créez un compte gratuit sur [resend.com](https://resend.com)
2. Générez une **API Key**
3. Ajoutez votre domaine (pirisoft.tech) dans Resend → Domains
4. Dans `.env.local`, ajoutez :
   ```
   RESEND_API_KEY=re_votre_cle_ici
   ```
5. Dans `src/app/api/contact/route.ts`, décommentez le bloc **Option A**

---

## 🌐 Déploiement sur Vercel (recommandé)

### Étape 1 — Pousser sur GitHub
```bash
git init
git add .
git commit -m "feat: initial Pirisoft website"
git branch -M main
git remote add origin https://github.com/votre-username/pirisoft.git
git push -u origin main
```

### Étape 2 — Connecter à Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez **Add New Project**
3. Importez votre repo GitHub `pirisoft`
4. Ajoutez la variable d'env `RESEND_API_KEY` dans les settings Vercel
5. Cliquez **Deploy** → votre site est en ligne !

### Étape 3 — Connecter votre domaine
1. Dans Vercel → Project Settings → Domains
2. Ajoutez `pirisoft.tech` (ou votre domaine)
3. Suivez les instructions DNS chez votre registrar (Namecheap, Gandi…)

---

## 🗂️ Structure du projet

```
pirisoft/
├── src/
│   └── app/
│       ├── layout.tsx          ← Layout global + SEO metadata
│       ├── page.tsx            ← Page d'accueil (assemble tout)
│       ├── globals.css         ← Styles globaux + polices Syne/Inter
│       ├── components/
│       │   ├── Navbar.tsx      ← Navigation sticky responsive
│       │   ├── Hero.tsx        ← Section Hero plein écran
│       │   ├── Stats.tsx       ← Barre de statistiques
│       │   ├── Services.tsx    ← 4 cartes services
│       │   ├── Projects.tsx    ← Grille 5 projets
│       │   ├── Mission.tsx     ← Section mission (image fond)
│       │   ├── Team.tsx        ← Équipe fondatrice
│       │   ├── Contact.tsx     ← Formulaire de contact
│       │   └── Footer.tsx      ← Pied de page
│       └── api/
│           └── contact/
│               └── route.ts    ← API endpoint email
├── public/
│   └── images/                 ← Toutes vos images ici
├── .env.local                  ← Variables d'environnement (ne pas commiter)
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## 📱 Responsive
Le site est entièrement responsive :
- **Mobile** (< 768px) : navigation hamburger, layout colonne unique
- **Tablette** (768–1024px) : grilles 2 colonnes
- **Desktop** (> 1024px) : layout complet 2 colonnes hero

---

## 🎨 Charte graphique
| Élément      | Valeur                |
|--------------|-----------------------|
| Couleur principale | `#185FA5` (bleu) |
| Couleur sombre | `#0D1B2A` (nuit)   |
| Fond alternatif | `#F7FAFF` (bleu pâle) |
| Police titres | Syne (Google Fonts)  |
| Police corps  | Inter (Google Fonts)  |

---

## 🔮 Prochaines étapes
- [ ] Intégrer **Sanity CMS** pour gérer les projets via interface
- [ ] Ajouter une section **Blog / Insights**
- [ ] Page dédiée pour chaque produit (DataCleaning, MediScan…)
- [ ] Intégrer **Google Analytics** ou **Plausible**
- [ ] Version **anglaise** (i18n)

---

*Pirisoft © 2025 — Dakar, Sénégal · Building Africa's digital future*
