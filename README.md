# 🤖 MarketBot AI — Digital Marketing & E-Commerce Agent

A powerful AI agent for digital marketing and e-commerce, built with HTML, CSS, and JavaScript. Powered by Claude AI (Anthropic).

---

## 📁 Files in This Project

```
marketbot/
├── index.html    ← Main webpage
├── style.css     ← All styling
├── config.js     ← Your API key goes here
├── data.js       ← All prompts and modes
├── app.js        ← App logic
└── README.md     ← This guide
```

---

## 🚀 STEP-BY-STEP: Deploy on GitHub Pages (FREE)

### STEP 1 — Create a GitHub Account
1. Go to **https://github.com**
2. Click **Sign up** (top right)
3. Enter your email, create a password, and verify your account

---

### STEP 2 — Create a New Repository
1. After logging in, click the **green "New"** button (top left) OR go to **https://github.com/new**
2. Fill in:
   - **Repository name:** `marketbot-ai` (or any name you like)
   - **Description:** My Digital Marketing AI Agent
   - **Visibility:** ✅ Select **Public** (required for free GitHub Pages)
3. ✅ Check **"Add a README file"**
4. Click **"Create repository"** (green button)

---

### STEP 3 — Upload Your Files
1. Inside your new repository, click **"Add file"** → **"Upload files"**
2. Drag and drop ALL 5 files:
   - `index.html`
   - `style.css`
   - `config.js`
   - `data.js`
   - `app.js`
3. Scroll down, add a commit message like: `Add MarketBot AI files`
4. Click **"Commit changes"** (green button)

---

### STEP 4 — Enable GitHub Pages
1. In your repository, click **"Settings"** (top menu bar)
2. In the left sidebar, click **"Pages"**
3. Under **"Source"**, click the dropdown and select **"Deploy from a branch"**
4. Under **"Branch"**, select **"main"** and keep folder as **"/ (root)"**
5. Click **"Save"**
6. Wait 1-2 minutes, then refresh the page
7. You will see: **"Your site is live at https://YOUR-USERNAME.github.io/marketbot-ai/"** 🎉

---

### STEP 5 — Add Your Anthropic API Key
1. Go to **https://console.anthropic.com**
2. Sign up or log in
3. Click **"API Keys"** in the left menu
4. Click **"Create Key"** → give it a name → copy the key (starts with `sk-ant-...`)
5. Go back to your GitHub repository
6. Click on **`config.js`** file
7. Click the **pencil icon ✏️** (Edit this file)
8. Find this line:
   ```
   ANTHROPIC_API_KEY: "YOUR_API_KEY_HERE",
   ```
9. Replace `YOUR_API_KEY_HERE` with your actual key:
   ```
   ANTHROPIC_API_KEY: "sk-ant-api03-xxxxxxxxxxxx",
   ```
10. Scroll down → Click **"Commit changes"**
11. Wait 1 minute → Your live site will now work! ✅

---

## 🌐 Your Live URL

After setup, your MarketBot will be live at:
```
https://YOUR-GITHUB-USERNAME.github.io/marketbot-ai/
```
Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username.

---

## 💡 Features

- ✅ 9 specialized modes (SEO, Ads, Email, Social, E-Commerce, etc.)
- ✅ 72 quick action prompts
- ✅ India-specific marketing knowledge
- ✅ Copy individual responses
- ✅ Export all outputs as a text file
- ✅ Works on mobile and desktop
- ✅ Free to host on GitHub Pages

---

## ⚠️ Important Notes

- **Keep your API key private** — do not share your `config.js` file publicly with the real key
- Each API call costs a small amount (fractions of a cent) — check Anthropic pricing at console.anthropic.com
- The free tier at Anthropic gives you enough credits to get started

---

## 🔧 Customization

- To change the agent name: edit `index.html` line with `MarketBot AI`
- To add more prompts: edit the `MODES` object in `data.js`
- To change colors: edit the `:root` variables in `style.css`
- To change the AI model: edit `MODEL` in `config.js`

---

## 📞 Need Help?

If you get stuck, common issues:

| Problem | Fix |
|---------|-----|
| "API Key Missing" banner | Add your key in `config.js` |
| Page not loading | Wait 2-3 mins after enabling Pages |
| CORS error | Make sure key is correct in `config.js` |
| Blank page | Check all 5 files are uploaded |

---

Made with ❤️ using Claude AI by Anthropic
