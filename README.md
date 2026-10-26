# Jagadeeswari D – Portfolio

React + Vite + plain CSS. No backend, API keys or paid services.

## 1. Run it locally
1. Install **Node.js LTS** from https://nodejs.org (check with `node -v`).
2. Unzip the project and open the folder in VS Code (`File > Open Folder`).
3. Open the terminal (`Ctrl+``) and run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the address it prints (usually http://localhost:5173).

## 2. Update your content
Everything lives in `src/data/portfolioData.js`:
- `EMAIL` – add your email to enable the contact form (it opens the visitor's email app via `mailto:`).
- Skill levels ("Familiar with", "Currently Learning", "Interested in") – **adjust to what is true for you**.
- Projects – fill `code` / `demo` only with verified links. Empty values hide the button.

## 3. Add your resume
Replace `public/resume.pdf` (currently a placeholder) with your real PDF, keeping the same name.

## 4. Deploy for free
```bash
npm run build      # creates /dist
```
- **Netlify:** drag the `dist` folder onto https://app.netlify.com/drop
- **Vercel:** push to GitHub, import the repo at vercel.com, keep the defaults.
- **GitHub Pages:** push the repo, then in Settings > Pages deploy the `dist` output (or use the GitHub Actions "Vite" template).

### Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Jagadeeswari1785/<repo-name>.git
git push -u origin main
```

## Common errors
- `npm is not recognized` – reinstall Node.js and restart VS Code.
- `Port 5173 in use` – close the other dev server or run `npm run dev -- --port 3000`.
- Blank page after deploy – make sure you deployed the `dist` folder, not the source.
- Weird install errors – delete `node_modules` and `package-lock.json`, then `npm install` again.
