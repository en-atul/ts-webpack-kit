# 🔧 Advanced React + TypeScript Webpack Setup

## This is a minimal yet **advanced Webpack setup** for building React applications using **TypeScript**, **Babel**, **CSS Modules**, **Sass**, and support for **image/font assets**, **.env configuration**, and **code splitting**.

## 📦 Features

- ✅ React + TypeScript support
- ✅ Babel loader for transpiling JSX/TSX
- ✅ Sass and CSS Modules
- ✅ Image and font handling
- ✅ HTML template generation with `html-webpack-plugin`
- ✅ Environment variable support via `.env`
- ✅ Code splitting and optimized builds
- ✅ Module aliasing (e.g., `@/components/` → `src/components/`)
- ✅ Cache busting via `[contenthash]`
- ✅ Runtime chunk separation for better caching

---

## 📁 Project Structure

```

.
├── public/
│ └── index.html
├── src/
│ ├── components/
│ ├── App.tsx
│ └── index.tsx
├── .babelrc
├── .env
├── package.json
├── tsconfig.json
└── webpack.config.js

```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run start
```

Starts the app on `http://localhost:` with hot-reloading.

### 3. Build for Production

```bash
npm run build
```

Outputs optimized production files to the `dist/` directory.

---

## 🧰 Scripts

| Command         | Description            |
| --------------- | ---------------------- |
| `npm start`     | Start dev server       |
| `npm run build` | Create optimized build |

---

## ⚙️ Webpack Highlights

- `babel-loader` is used to transpile `.tsx`/`.jsx` files using Babel (via `.babelrc`).
- CSS Modules support with `css-loader` and `sass-loader`.
- Asset modules handle images (`asset`) and fonts (`asset/resource`).
- `HtmlWebpackPlugin` injects scripts into `index.html`.
- `Dotenv` plugin loads environment variables from `.env`.

---

## 🔍 Code Splitting

Out of the box, Webpack will split your code based on dynamic imports. To further improve caching:

```js
optimization: {
  runtimeChunk: 'single',
  splitChunks: {
    chunks: 'all',
  },
}
```

---

## 🌎 Environment Variables

Add a `.env` file at the root:

```
REACT_APP_API_URL=https://api.example.com
```

And access it in your code using:

```ts
process.env.REACT_APP_API_URL;
```

---

## 🧪 Optional Enhancements

- ✅ Add ESLint and Prettier for linting and formatting
- ✅ Integrate Storybook for isolated UI development
- ✅ Use `react-refresh` for fast refresh during development

---
