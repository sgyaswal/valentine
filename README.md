# Valentine's Day Interactive Website 💕

A romantic, interactive website to ask someone to be your Valentine!

## 🌟 Two Versions Available

### Main Branch - SMTP Email Backend
Full-featured version with Node.js backend and custom HTML emails.
- See [SMTP_SETUP.md](SMTP_SETUP.md) for setup
- Deploy on Render, Heroku, Railway

### Google Forms Branch - Static Version
No backend needed! Responses saved to Google Forms/Sheets.
- See [GOOGLE_FORMS_SETUP.md](GOOGLE_FORMS_SETUP.md) for setup  
- Deploy on GitHub Pages, Netlify, Vercel (free!)
- **Switch to this branch:** `git checkout google-forms-version`

---

## Features

✨ Beautiful animated Valentine's proposal page  
📅 Date picker for scheduling your date  
🍔 Food selection with multiple choices  
🍰 Dessert preferences  
🎨 Activity selection (arcade, cinema, park, etc.)  
💾 Saves all responses in browser  
📊 Summary page with all selections  

**Main Branch:** 💌 SMTP Email notifications  
**Google Forms Branch:** 📝 Google Forms/Sheets integration  

---

## Quick Start (Main Branch - SMTP)

```bash
# Install dependencies
npm install

# Configure email
cp .env.example .env
# Edit .env with your SMTP settings

# Start server
npm start

# Open in browser
http://localhost:3000
```

## Quick Start (Google Forms Branch)

```bash
# Switch to Google Forms branch
git checkout google-forms-version

# Open index.html in browser (no server needed!)
# Or deploy to GitHub Pages/Netlify
```

---

## Which Version Should I Use?

| Feature | Main (SMTP) | Google Forms |
|---------|-------------|--------------|
| **Hosting** | Needs server | Static (free) |
| **Setup** | More complex | Very easy |
| **Email** | Custom HTML | Form notifications |
| **Data** | Email only | Google Sheets |
| **Cost** | Free tier limits | Completely free |
| **Best for** | Custom emails | Quick deploy |

---

## Documentation

- [SMTP_SETUP.md](SMTP_SETUP.md) - SMTP backend setup (main branch)
- [GOOGLE_FORMS_SETUP.md](GOOGLE_FORMS_SETUP.md) - Google Forms setup (google-forms-version branch)
- [RENDER_DEPLOYMENT.md](RENDER_DEPLOYMENT.md) - Deploy SMTP version to Render

---

## Project Structure

```
valentine/
├── index.html          # Valentine proposal page
├── thankyou.html       # Acceptance page
├── date.html           # Date picker
├── food.html           # Food selection
├── dessert.html        # Dessert selection
├── activities.html     # Activities selection
├── lastpage.html       # Final page with summary
├── server.js           # Node.js backend (main branch only)
├── package.json        # Dependencies (main branch only)
├── css/               # Stylesheets
└── food/              # Food/activity images
```

---

## How It Works

1. User answers "Yes" to Valentine proposal
2. Selects date for the date
3. Chooses food preferences
4. Picks dessert options
5. Selects activities
6. On final page:
   - All selections are displayed
   - **Main branch:** Email sent via SMTP
   - **Google Forms branch:** Saved to Google Forms/Sheets
   - Responses saved in browser localStorage

---

## Technologies

**Frontend:** HTML, CSS, JavaScript  
**Main Branch Backend:** Node.js, Express, Nodemailer  
**Google Forms Branch:** Pure static (no backend)  
**Storage:** LocalStorage (client) + Email/Google Forms

---

## License

MIT

---

Made with ❤️ for Aishuu❤️
