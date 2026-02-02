# Valentine's Day Interactive Website 💕

A romantic, interactive website to ask someone to be your Valentine with email notifications!

## Features

✨ Beautiful animated Valentine's proposal page  
📅 Date picker for scheduling your date  
🍔 Food selection with multiple choices  
🍰 Dessert preferences  
🎨 Activity selection (arcade, cinema, park, etc.)  
💌 **SMTP Email notifications** when form is completed  
💾 Saves all responses in browser  
📊 Summary page with all selections  

## Quick Start

```bash
# Install dependencies
npm install

# Configure email (see SMTP_SETUP.md)
cp .env.example .env
# Edit .env with your SMTP settings

# Start server
npm start

# Open in browser
http://localhost:3000
```

## Email Setup

See [SMTP_SETUP.md](SMTP_SETUP.md) for detailed instructions on setting up email notifications with:
- Gmail
- Outlook
- Yahoo
- Custom SMTP servers

## Project Structure

```
valentine/
├── server.js           # Node.js backend with SMTP
├── package.json        # Dependencies
├── .env.example        # Environment variables template
├── index.html          # Valentine proposal page
├── thankyou.html       # Acceptance page
├── date.html           # Date picker
├── food.html           # Food selection
├── dessert.html        # Dessert selection
├── activities.html     # Activities selection
├── lastpage.html       # Final page with summary + email trigger
├── css/               # Stylesheets
└── food/              # Food/activity images
```

## How It Works

1. User answers "Yes" to Valentine proposal
2. Selects date for the date
3. Chooses food preferences
4. Picks dessert options
5. Selects activities
6. On final page:
   - All selections are displayed
   - Email automatically sent to you with all choices
   - Responses saved in browser localStorage

## Deployment

Can be deployed on:
- Your own server
- Heroku
- Railway
- Any Node.js hosting platform

See [SMTP_SETUP.md](SMTP_SETUP.md) for deployment instructions.

## Technologies

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Email:** Nodemailer with SMTP
- **Storage:** LocalStorage (client-side)

## License

MIT

---

Made with ❤️ for Aishwarya
