
# TK-BISystem

### 🛠 Initial Setup

* Project bootstrapped using:

  ```bash
  npx create-react-app my-react-app
  ```

* If you encounter an error trying to run the app, fix AJV dependency issues by running:

  ```bash
  npm install ajv@latest ajv-keywords@latest
  ```

  Ref: [StackOverflow fix](https://stackoverflow.com/questions/70020046/quasar-error-cannot-find-module-ajv-dist-compile-codegen)

* Install React Router:

  ```bash
  npm install react-router
  ```

  Ref: [React Router Docs](https://reactrouter.com/start/declarative/installation)

* Add TypeScript support:

  ```bash
  npm install --save typescript @types/node @types/react @types/react-dom @types/jest
  ```

---

### 🧩 CSS Modules

I ran into issues importing `.module.css` files in TypeScript. I fixed this by adding a global declaration file.

Ref: [StackOverflow thread](https://stackoverflow.com/questions/40382842/cant-import-css-scss-modules-typescript-says-cannot-find-module)

---

### 🎨 UI / CSS Styling

The UI and CSS design was inspired by my high-fidelity mockups created in Figma.
Check them out here 👉 [BI SYSTEM Dashboard – Figma Design](https://www.figma.com/design/LAdwGu7uwYujARZAkYH9vt/BI-SYSTEM-Dashboard?node-id=0-1&t=NuL2K21kH8dZrTpo-1)

> ⚠️ If the link doesn't work, let me know and I’ll grant you access!

---

### 📦 Font Awesome Icons

Installed and used Font Awesome for UI icons:

Ref: [Font Awesome Docs](https://docs.fontawesome.com/web/use-with/react)

---

### 📊 Charts

Pie chart and visual data elements were prototyped using:

[Meta Chart Generator](https://www.meta-chart.com/share/untitled-chart-71347)

---

### 🚀 Running the App

1. **Start the frontend**:

   ```bash
   npm start
   ```

2. **Start the backend** (in a separate terminal):

   If it's your first time:

   ```bash
   npm install
   ```

   Then start the server:

   ```bash
   npm run dev
   ```

3. With both servers running, the app will now be fully functional in your browser.

---

Note: This app is responsive. If you notice any distortion please let me know so I can fix it.

Happy Coding! 💻✨

