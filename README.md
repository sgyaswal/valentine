# Valentine's Day Interactive Website 💕
### Static Version with Google Forms Integration

A romantic, interactive website to ask someone to be your Valentine - No backend required!

## 🌟 Features

✨ Beautiful animated Valentine's proposal page  
📅 Date picker for scheduling your date  
🍔 Food selection with multiple choices  
🍰 Dessert preferences  
🎨 Activity selection (arcade, cinema, park, etc.)  
📝 **Google Forms integration** - Responses saved automatically!  
💾 Browser storage for selections  
📊 Summary page showing all choices  
🚀 **100% Static** - Deploy free anywhere!  

## 🚀 Quick Deploy

### GitHub Pages (Free)
1. Go to repository Settings → Pages
2. Select branch: `google-forms-version`
3. Click Save
4. Site live at: `https://sgyaswal.github.io/valentine/`

### Netlify (Free)
1. Drag & drop folder to [netlify.com](https://netlify.com)
2. Done!

### Vercel (Free)
1. Import from GitHub
2. Select `google-forms-version` branch
3. Deploy

## 📝 Setup (5 minutes)

1. **Create Google Form** with 4 short answer questions:
   - Selected Date
   - Food Choices
   - Dessert Choices
   - Activities

2. **Get pre-filled link** from form settings

3. **Update lastpage.html** with your form URL and entry IDs

4. **Deploy** to any static host

**Detailed guide:** [GOOGLE_FORMS_SETUP.md](GOOGLE_FORMS_SETUP.md)

## 📂 Files

```
valentine/
├── index.html       # Proposal page
├── thankyou.html    # Acceptance page
├── date.html        # Date picker
├── food.html        # Food selection
├── dessert.html     # Dessert selection
├── activities.html  # Activities
├── lastpage.html    # Summary + Form submission
├── css/            # Styles
└── food/           # Images
```

## ✅ Why This Version?

✅ **Zero cost** - Completely free hosting  
✅ **No server** - Pure HTML/CSS/JS  
✅ **Easy setup** - 5 minutes to deploy  
✅ **Google Sheets** - All responses in spreadsheet  
✅ **Email alerts** - Google Forms notifications  
✅ **No maintenance** - Set and forget  

## 📊 View Responses

1. Open your Google Form
2. Click "Responses" tab  
3. Link to Google Sheets
4. Enable email notifications

## 🔄 Switch to SMTP Version

Want custom emails with Node.js backend?
```bash
git checkout main
```

See main branch README for SMTP setup.

## 📖 Documentation

- [GOOGLE_FORMS_SETUP.md](GOOGLE_FORMS_SETUP.md) - Complete setup guide

## 💻 Local Testing

Just open `index.html` in your browser. No server needed!

## 📱 Works On

✅ All modern browsers  
✅ Mobile devices  
✅ Tablets  
✅ Desktop  

---

Made with ❤️ for Aishuu❤️
