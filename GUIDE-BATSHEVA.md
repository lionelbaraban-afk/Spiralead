# Guide de Modification du Site Spiralead

Bonjour Batsheva ! 👋

Ce guide vous aidera à modifier et maintenir votre site web Spiralead.

---

## 📁 Structure du Site

```
spiralead/
├── index.html              ← Contenu principal du site
├── css/style.css          ← Tous les styles visuels
├── js/script.js           ← Fonctionnalités interactives
├── images/
│   ├── batsheva-photo.jpg ← Votre photo
│   └── logo.png           ← Logo Spiralead
└── README.md              ← Documentation technique
```

---

## ✏️ Modifications Courantes

### **1. Changer le Texte**

**Fichier à modifier :** `index.html`

**Exemples :**

**Modifier le titre principal :**
```html
Cherchez : <h1 class="hero-title">Navigate Complexity.<br>Lead with Clarity.<br>Bridge Cultures.</h1>
Modifiez le texte entre les balises <h1>...</h1>
```

**Modifier votre bio :**
```html
Cherchez la section : <section id="about" class="about">
Modifiez le texte dans les balises <p class="about-text">...</p>
```

**Modifier les offres :**
```html
Cherchez : <div class="offering-card">
Modifiez le contenu de chaque carte d'offre
```

---

### **2. Changer les Couleurs**

**Fichier à modifier :** `css/style.css`

**En haut du fichier, vous trouverez :**
```css
:root {
    --primary-navy: #1a4d6d;      ← Bleu principal
    --primary-gold: #d4a574;      ← Or principal
    --dark-navy: #0f2d3f;         ← Bleu foncé
    --light-gold: #e6c9a8;        ← Or clair
}
```

Changez ces valeurs hexadécimales pour modifier les couleurs du site.

---

### **3. Remplacer les Images**

**Pour votre photo :**
1. Préparez une nouvelle photo (format JPG, taille recommandée : 800x800px)
2. Nommez-la `batsheva-photo.jpg`
3. Remplacez le fichier dans le dossier `images/`

**Pour le logo :**
1. Préparez un nouveau logo (format PNG avec fond transparent)
2. Nommez-le `logo.png`
3. Remplacez le fichier dans le dossier `images/`

---

### **4. Modifier l'Email de Contact**

**Fichier à modifier :** `index.html`

**Cherchez :**
```html
<a href="mailto:batsheva@spiralead.com">batsheva@spiralead.com</a>
```

**Remplacez par votre vrai email :**
```html
<a href="mailto:votre-email@exemple.com">votre-email@exemple.com</a>
```

---

### **5. Ajouter votre LinkedIn**

**Fichier à modifier :** `index.html`

**Cherchez :**
```html
<a href="https://www.linkedin.com/in/batsheva-baraban" target="_blank">Connect on LinkedIn</a>
```

**Remplacez par votre URL LinkedIn réelle.**

---

## 🛠️ Outils pour Éditer

### **Éditeurs de Code Recommandés (Gratuits) :**

1. **Visual Studio Code** (recommandé)
   - Téléchargement : https://code.visualstudio.com/
   - Facile à utiliser, avec coloration syntaxique

2. **Sublime Text**
   - https://www.sublimetext.com/

3. **Notepad++** (Windows uniquement)
   - https://notepad-plus-plus.org/

### **Comment tester vos modifications :**
1. Ouvrez le fichier modifié
2. Sauvegardez (Ctrl+S / Cmd+S)
3. Double-cliquez sur `index.html`
4. Le site s'ouvre dans votre navigateur
5. Rafraîchissez (F5) pour voir les changements

---

## 🚀 Publier les Modifications

### **Option A : Via cette Plateforme (GenSpark)**
1. Modifiez les fichiers ici
2. Utilisez l'onglet "Publish"
3. Le site se met à jour automatiquement

### **Option B : Via Netlify (Recommandé pour le long terme)**
1. Créez un compte gratuit sur https://netlify.com
2. Glissez-déposez votre dossier `spiralead`
3. Votre site est en ligne !
4. Pour les mises à jour : re-glissez-déposez le dossier

### **Option C : Via GitHub + Netlify (Professionnel)**
1. Créez un compte GitHub
2. Créez un repository "spiralead"
3. Uploadez vos fichiers
4. Connectez à Netlify
5. Chaque modification sur GitHub = mise à jour automatique

---

## 📝 Modifications Courantes - Checklist

- [ ] Remplacer l'email par le vrai
- [ ] Ajouter l'URL LinkedIn réelle
- [ ] Vérifier tous les textes
- [ ] Tester le formulaire de contact
- [ ] Vérifier sur mobile (responsive)
- [ ] Optimiser les images si nécessaires

---

## 🆘 Besoin d'Aide ?

### **Modifications Simples (Texte, Email, etc.)**
- Modifiez directement `index.html`
- Testez dans le navigateur

### **Modifications de Design**
- Modifiez `css/style.css`
- Gardez des sauvegardes avant de modifier

### **Nouveautés Complexes**
- Utilisez l'assistant IA sur cette plateforme
- Ou engagez un développeur web pour quelques heures

---

## 💡 Conseils Professionnels

1. **Toujours faire des sauvegardes** avant de modifier
2. **Tester sur mobile** après chaque modification
3. **Garder le design cohérent** (couleurs, polices)
4. **Optimiser les images** (compresser avant upload)
5. **Mettre à jour régulièrement** le contenu

---

## 🎯 Prochaines Étapes Suggérées

1. **Court terme :**
   - Mettre à jour email et LinkedIn
   - Vérifier tous les textes
   - Publier le site

2. **Moyen terme :**
   - Ajouter section témoignages
   - Intégrer Calendly pour réservations
   - Créer des PDF téléchargeables

3. **Long terme :**
   - Ajouter un blog
   - Optimiser pour SEO
   - Intégrer Google Analytics

---

**Bon travail avec votre site Spiralead !** 🌟

Si vous avez des questions, n'hésitez pas à utiliser l'assistant IA ou à consulter la documentation complète dans `README.md`.
