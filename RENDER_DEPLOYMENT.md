# Render Deployment Guide 🚀

Complete guide to deploy your Valentine's website on Render (free tier).

## Quick Deploy

1. **Push code to GitHub** (already done ✅)

2. **Go to Render Dashboard:**
   - Visit https://render.com
   - Sign up/Login with GitHub

3. **Create New Web Service:**
   - Click "New +" → "Web Service"
   - Connect your GitHub account
   - Select `sgyaswal/valentine` repository
   - Click "Connect"

4. **Configure Service:**
   ```
   Name: valentine-website
   Environment: Node
   Build Command: npm install
   Start Command: npm start
   ```

5. **Add Environment Variables:**
   Click "Advanced" and add these variables:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   RECIPIENT_EMAIL=your-email@gmail.com
   ```

6. **Deploy:**
   - Click "Create Web Service"
   - Wait for deployment (2-3 minutes)
   - Your site will be live at: `https://valentine-website.onrender.com`

---

## Detailed Setup

### Step 1: Prepare Your Repository

Your code is already pushed to GitHub ✅

### Step 2: Create Render Account

1. Go to https://dashboard.render.com/register
2. Sign up with GitHub (recommended)
3. Authorize Render to access your repositories

### Step 3: Create Web Service

1. From Render Dashboard, click **"New +"**
2. Select **"Web Service"**
3. Connect your GitHub repository:
   - If first time: Click "Connect account" and authorize
   - Search for "valentine" or "sgyaswal/valentine"
   - Click **"Connect"**

### Step 4: Configure Build Settings

**Basic Settings:**
- **Name:** `valentine-website` (or any name you prefer)
- **Region:** Choose closest to you (e.g., Oregon USA)
- **Branch:** `main` (or `master`)
- **Root Directory:** Leave empty
- **Runtime:** `Node`

**Build & Deploy:**
- **Build Command:** `npm install`
- **Start Command:** `npm start`

### Step 5: Set Environment Variables

Click **"Advanced"** button, then add these environment variables:

| Key | Value |
|-----|-------|
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | Your Gmail address |
| `SMTP_PASS` | Your Gmail App Password |
| `RECIPIENT_EMAIL` | Email where you want to receive notifications |

**Important:** Use Gmail App Password, not your regular password!
- Get it from: https://myaccount.google.com/apppasswords

### Step 6: Choose Plan

- Select **"Free"** plan
- Free tier includes:
  - 750 hours/month (enough for 24/7 running)
  - Automatic HTTPS
  - Auto-deploy on git push
  - ⚠️ Spins down after 15 min of inactivity (first request takes ~30 seconds)

### Step 7: Deploy

1. Click **"Create Web Service"**
2. Watch the build logs in real-time
3. Wait for "Your service is live 🎉" message
4. Click the URL at top (e.g., `https://valentine-website.onrender.com`)

---

## Update Frontend API URL

After deployment, update the API URL in `lastpage.html`:

```javascript
// Change from:
const API_URL = 'http://localhost:3000';

// To your Render URL:
const API_URL = 'https://valentine-website.onrender.com';
```

Then commit and push:
```bash
git add lastpage.html
git commit -m "Update API URL for production"
git push
```

Render will automatically redeploy!

---

## Custom Domain (Optional)

1. In Render Dashboard, go to your service
2. Click "Settings" tab
3. Scroll to "Custom Domain"
4. Add your domain (e.g., `valentine.yourdomain.com`)
5. Update your DNS records as instructed

---

## Troubleshooting

### Build Failed
- Check build logs for errors
- Ensure `package.json` is correct
- Try: Clear build cache in Settings

### Email Not Sending
- Verify environment variables are set correctly
- Check Gmail App Password (no spaces)
- View Logs tab in Render dashboard

### Service Spinning Down
- Free tier sleeps after 15 min inactivity
- First request wakes it up (~30 sec)
- Upgrade to paid plan ($7/month) for always-on

### CORS Errors
The server already has CORS enabled, but if deploying frontend separately, update `server.js`:
```javascript
app.use(cors({
  origin: 'https://your-frontend-domain.com'
}));
```

---

## Monitoring & Logs

**View Logs:**
- Render Dashboard → Your Service → "Logs" tab
- See real-time logs and errors

**Metrics:**
- Monitor CPU, Memory, Bandwidth
- Available in "Metrics" tab

**Email Notifications:**
- Render can email you on deploy failures
- Configure in Settings → Notifications

---

## Auto-Deploy Setup

Already configured! ✅

Every time you push to GitHub:
```bash
git add .
git commit -m "Update feature"
git push
```

Render automatically:
1. Detects the push
2. Rebuilds your app
3. Deploys new version
4. Zero downtime!

---

## Environment Variables Management

**To Update Variables:**
1. Render Dashboard → Your Service
2. "Environment" tab
3. Edit variables
4. Click "Save Changes"
5. Service automatically restarts

**Security Note:**
- Never commit `.env` to Git ✅ (already in .gitignore)
- Environment variables are encrypted on Render
- Only visible to you in dashboard

---

## Cost

**Free Tier Limits:**
- ✅ 750 hours/month (enough for always-on)
- ✅ 100GB bandwidth/month
- ✅ Automatic SSL/HTTPS
- ❌ Spins down after inactivity
- ❌ Slower cold starts

**Paid Plan ($7/month):**
- Always-on (no spin down)
- Faster performance
- More bandwidth
- Better for production use

---

## Testing Your Deployment

1. Visit your Render URL: `https://valentine-website.onrender.com`
2. Go through the Valentine's form
3. Complete all selections
4. Check your email!

**Test Email Endpoint:**
```bash
curl -X POST https://valentine-website.onrender.com/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "date": "2026-02-14",
    "food": ["pizza"],
    "desserts": ["boba"],
    "activities": ["cinema"]
  }'
```

---

## Next Steps

1. ✅ Deploy on Render
2. Update API_URL in lastpage.html
3. Share link with your girlfriend! 💕
4. Monitor logs for when she fills it out
5. (Optional) Set up custom domain

---

## Useful Links

- Render Dashboard: https://dashboard.render.com
- Render Docs: https://render.com/docs
- Your Service Logs: Available in dashboard
- Support: https://render.com/docs/support

---

**Your website will be live at:**
`https://valentine-website.onrender.com`

(Replace `valentine-website` with whatever name you chose)

🎉 Ready to deploy! Follow the steps above and your website will be live in minutes!
