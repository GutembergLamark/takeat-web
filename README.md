# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

Questionario

1 - Descreva o que é useEffect, sua usabilidade e cite algum cenário em que seja
necessário.

R -

2 - Cite um caso onde você vê necessidade de usar useState, e faça uma correlação
com o useEffect.

R -

3 - Descreva useCallback, sua usabilidade em algum cenário real.

R -

4 - Já trabalhou ou conhece o useContext? Onde você aplicaria em uma projeto real,
onde o menu (cardápio do restaurante) é baixado através de um rota GET da API, e
disponibilizado em uma página /menu listando pro usuário o menu do restaurante.
(Pense em otimização, renderização e problemas que podem ocorrer pro usuário).

R -

5 - Em qual caso você aplicaria o uso do useImperativeHandle? Justifique.

R -
