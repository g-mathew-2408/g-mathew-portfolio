# G. Mathew — Developer Portfolio

A responsive React + CSS portfolio with a dark Midnight Aurora theme with violet and cyan accents, project cards, education timeline, GitHub links, contact links, and subtle animations.

## 1. Install prerequisites

Install Node.js LTS from https://nodejs.org/ and Git from https://git-scm.com/ if you do not already have them.

## 2. Open the project

Extract this ZIP, open the `g-mathew-portfolio` folder in VS Code, then open **Terminal → New Terminal**.

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`). The page refreshes when you save changes.

## 3. Personalize the content

Open `src/App.jsx` and replace:

- `YOUR-GITHUB-USERNAME` with your GitHub username.
- `YOUR-LINKEDIN-USERNAME` with your LinkedIn profile username.
- `your.email@example.com` with the email address you want public.
- Project repository URLs with your real repositories.
- The skills list with technologies you can comfortably discuss.

The projects shown are based on projects and learning you have mentioned. Keep descriptions accurate to what you actually built. Remove any project that is not ready to share.

## 4. Add your resume

Put your PDF in `public/resume/resume.pdf`. A download button can link to it using:

```jsx
<a href={`${import.meta.env.BASE_URL}resume/resume.pdf`} download>
  Download resume
</a>
```

Only publish a resume you are comfortable making public.

## 5. Create a GitHub repository

1. Sign in to GitHub and create a new **public** repository named `g-mathew-portfolio` (or another name you choose).
2. In the VS Code terminal, from inside this project folder, run:

```bash
git init
git add .
git commit -m "Create developer portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/g-mathew-portfolio.git
git push -u origin main
```

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username. If Git asks you to sign in, follow the browser authentication prompt.

## 6. Configure GitHub Pages

This project uses the `gh-pages` package for deployment.

1. Open `vite.config.js`.
2. If the repository is `https://github.com/YOUR-GITHUB-USERNAME/g-mathew-portfolio/`, change `base: "/"` to `base: "/g-mathew-portfolio/"`. The value must match the repository name, including capitalization.
3. In the terminal, run:

```bash
npm install
npm run deploy
```

4. On GitHub, open the repository → **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Set the branch to `gh-pages`, folder to `/ (root)`, then save if that option is shown.
7. Wait a few minutes. Your site should be available at:

`https://YOUR-GITHUB-USERNAME.github.io/g-mathew-portfolio/`

If your repository is named exactly `YOUR-GITHUB-USERNAME.github.io`, it is a user site instead: keep `base: "/"` and the URL is `https://YOUR-GITHUB-USERNAME.github.io/`.

## 7. Updating your website

After editing the website, save your files and run:

```bash
npm run deploy
```

Commit and push source changes too:

```bash
git add .
git commit -m "Update portfolio"
git push
```

## Notes

- Do not put API keys, passwords, tokens, or private credentials in frontend code.
- The contact section uses a `mailto:` link; it does not submit a server-side contact form.
- Google Fonts are loaded online. The page uses fallback fonts if they are unavailable.
- Check every link and spelling before sharing your portfolio with recruiters.
