# Comment développer une application Front via React ?

## React

ReactJS est une bibliothèque JavaScript populaire pour la création d'interfaces utilisateur (UI). Elle a été créée par Facebook et est utilisée pour la construction d'applications web complexes, évolutives et performantes.

ReactJS utilise une approche basée sur les composants, qui consiste à diviser l'interface utilisateur en petits éléments réutilisables appelés "composants". Ces composants sont ensuite assemblés pour former l'interface utilisateur complète.

Une des fonctionnalités principales de ReactJS est son DOM virtuel (Virtual DOM) qui permet de mettre à jour l'interface utilisateur de manière efficace et rapide sans avoir à actualiser complètement la page web.

## Prérequis

Pour lancer React sur votre poste, vous devez avoir les prérequis suivants :

1. Node.js : React est construit sur Node.js, donc vous devez avoir Node.js installé sur votre ordinateur. Vous pouvez télécharger Node.js depuis le site officiel : **[https://nodejs.org](https://nodejs.org/)**.

Pour vérifier si vous avez déjà Node.js et npm installés et vérifier la version installée, exécutez les commandes suivantes :

```bash
node -v
npm -v
```

## Création de votre projet via viteJS

TODO 

```bash
# Si version npm > 6.x
npm create vite@latest my-vue-app --template react

#  Si version npm > 7.x
npm create vite@latest spotify-bis -- --template react
```

## Lancement de votre projet

```bash
cd spotify-bis
npm install
npm run dev

## Résulat 

VITE v4.2.1  ready in 442 ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

## Architecture du projet

## Technologies utilisées

MUI : Material UI : [https://mui.com/](https://mui.com/) 

installation

```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material # pour les menus
```

React Query 

Utilisation de la v3 car utilisation de React via Javascript et non TypeScript

[https://tanstack.com/query/v3/docs/react/overview](https://tanstack.com/query/v3/docs/react/overview) 

```bash
npm i react-query
```

Moockoon 

React router

[https://reactrouter.com/en/main/start/tutorial](https://reactrouter.com/en/main/start/tutorial) 

```bash
npm install react-router-dom localforage match-sorter sort-by
```

Axios 

Permet d’effectuer des requetes HTTP

[https://axios-http.com/fr/docs/intro](https://axios-http.com/fr/docs/intro)

```bash
npm install axios
```

Comment créer des composants ?

TODO c’est quoi un composant ?

Exemple de composant 

```jsx
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const MusiquePage = () => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
};

export default MusiquePage;
```

Utilisation du composant

```jsx
import MusiquePage from './components/MusiquePage'

function App() {
  return (
    <MusiquePage/>
  )
}

export default App;
```