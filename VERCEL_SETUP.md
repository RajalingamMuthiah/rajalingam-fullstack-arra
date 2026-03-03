# 🚀 Vercel Serverless Deployment - Complete Setup

## What Just Happened

Your portfolio is now **fully configured for production deployment** with Vercel serverless email handling. Here's the complete architecture:

```
┌─────────────────────────────────────────────────────────────┐
│                      USER'S BROWSER                         │
│                   https://your-url.com                      │
└──────────────────────────┬──────────────────────────────────┘
                           │
                    ┌──────▼──────┐
                    │   Vercel    │
                    │  Static CDN │ (Your React app - React + Vite)
                    └──────┬──────┘
                           │
              (User submits contact form)
                           │
         ┌─────────────────▼─────────────────┐
         │                                   │
    ┌────▼────┐                      ┌──────▼──────┐
    │  POST   │                      │   POST      │
    │ /api/   │                      │ /api/send- │
    │send-    │                      │ email      │
    │email    │                      │            │
    └────┬────┘                      └──────┬──────┘
         │                                   │
         │ (Dev/local only)                  │ (Production)
         │                                   │
    ┌────▼─────────────────┐    ┌──────────▼──────────────┐
    │  Vite Proxy          │    │ Vercel Serverless      │
    │ /api → localhost:    │    │ Function: api/          │
    │ 5000 (Express)       │    │ send-email.js          │
    └────┬─────────────────┘    └──────────┬──────────────┘
         │                                   │
         └────────────────────┬──────────────┘
                              │
                    ┌─────────▼──────────┐
                    │  Nodemailer        │
                    │  Gmail SMTP        │
                    │  Send Email        │
                    └────────────────────┘
```

---

## 📁 Project Structure

```
portfolio/
├── api/
│   └── send-email.js              ← Vercel serverless function (PRODUCTION)
│
├── src/
│   ├── pages/
│   │   └── Contact.jsx            ← Uses /api/send-email endpoint
│   └── ...
│
├── server.js                       ← Express backend (LOCAL DEV ONLY)
├── vite.config.js                 ← Dev proxy config (LOCAL DEV ONLY)
│
├── .env                            ← Your secrets (DON'T COMMIT)
├── .env.example                    ← Template for developers
├── .vercelignore                   ← Exclude files from Vercel build
├── DEPLOYMENT.md                   ← This guide
│
├── package.json
└── ...
```

---

## ⚙️ Configuration Summary

| Environment    | Frontend                      | Backend                             | Email                            |
| -------------- | ----------------------------- | ----------------------------------- | -------------------------------- |
| **Local Dev**  | `npm run dev` (Vite) on :3000 | `npm run server` (Express) on :5000 | `server.js` + Nodemailer         |
| **Full Dev**   | Both (Vite + Express)         | -                                   | `npm run dev:full`               |
| **Production** | React build → Vercel CDN      | -                                   | `api/send-email.js` (Serverless) |

---

## 🔄 API Endpoint Flow

### Contact Form Submission

```javascript
// src/pages/Contact.jsx (line ~120)
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "/api";
await fetch(`${apiBaseUrl}/send-email`, { ... })
```

### Local Dev (npm run dev)

```
POST /api/send-email
    ↓ (Vite proxy)
    ↓
localhost:5000/api/send-email
    ↓ (Express)
    ↓
server.js → Nodemailer → Gmail SMTP
```

### Production (Vercel)

```
POST /api/send-email
    ↓ (Vercel routing)
    ↓
api/send-email.js (Serverless Function)
    ↓ (Nodemailer)
    ↓
Gmail SMTP → Your Gmail Inbox
```

**No code changes needed** — both paths use the same endpoint!

---

## 📧 Email Flow

### When user submits contact form:

1. **Validation** (Contact.jsx)
   - Client-side: Name, email, subject, message required
   - Regex check: Valid email format

2. **Server Processing** (api/send-email.js)
   - Receives form data via POST
   - Server-side validation (name, email, subject, message)
   - Creates Nodemailer transporter (Gmail SMTP)

3. **Email Sending**
   - **Email 1**: Portfolio owner gets notification
     - From: `GMAIL_USER` (your email)
     - To: `GMAIL_USER` (your inbox)
     - Subject: `Contact Form: {formSubject}`
     - Body: User's message + name/email
   - **Email 2**: User gets auto-reply
     - From: `GMAIL_USER` (your email)
     - To: User's submitted email
     - Subject: `Re: {formSubject}`
     - Body: Confirmation message

4. **Response** to frontend
   - Success: `{ success: true }`
   - Error: `{ success: false, error: "..." }`

---

## ✅ Pre-Deployment Checklist

Before pushing to Vercel, verify:

- [ ] **Local testing** — `npm run dev:full` works, form submits successfully
- [ ] **Code committed** to GitHub
- [ ] **`.env` is gitignored** (not in version control)
- [ ] **`.env.example` in repo** with placeholders (no real credentials)
- [ ] **`.vercelignore` exists** in root
- [ ] **Gmail App Password obtained**:
  - [ ] 2FA enabled on Gmail
  - [ ] 16-char App Password generated
  - [ ] Spaces removed (ready to paste)

---

## 🚀 Deployment Steps (5 minutes)

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### Step 2: Create Vercel Project

1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Select your GitHub repo
4. Click **"Import"**

### Step 3: Set Environment Variables

On Vercel Project Settings → Environment Variables:

```
Name: EMAIL_USER
Value: rajalingammuthiah2011@gmail.com

Name: EMAIL_PASS
Value: aaaa bbbb cccc dddd  (16-char Gmail App Password)
```

### Step 4: Deploy

Click **"Deploy"** — Vercel builds and deploys automatically.

**Your site is now live!** 🎉

---

## 🧪 Test Deployment

### Quick Test

1. Visit `https://your-project.vercel.app/contact`
2. Fill form and submit
3. Check your Gmail inbox for two emails:
   - Notification (from form)
   - Auto-reply (to user)

### Advanced Test with CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Test locally (mimics production)
vercel dev
# Visit http://localhost:3000/contact

# Check function logs
vercel logs api/send-email

# Deploy to production
vercel --prod
```

---

## 🛠 Development Workflows

### Option 1: Local Dev with Express (Recommended for testing)

```bash
npm run dev:full
# Runs Vite (port 3000) + Express (port 5000)
# Uses server.js + Nodemailer
```

### Option 2: Frontend-only Dev

```bash
npm run dev
# Runs Vite only
# No backend (contact form will fail without server running)
```

### Option 3: Test with Vercel CLI (prod simulation)

```bash
npm install -g vercel
vercel dev
# Runs exactly as in production
# Uses api/send-email.js
```

---

## 🔧 Troubleshooting

### Form shows "Failed to send message"

1. Check Vercel environment variables set correctly
2. View logs: `vercel logs api/send-email`
3. Test function: `curl -X POST https://your-project.vercel.app/api/send-email ...`

### "Email service not configured"

- EMAIL_USER or EMAIL_PASS missing from Vercel Dashboard

### Gmail auth fails

- Not using App Password (use 16-char generated password, not Gmail password)
- 2FA not enabled on Gmail
- Gmail security settings blocking "less secure apps"

See **DEPLOYMENT.md** for detailed troubleshooting.

---

## 📚 Files Created/Modified

### New Files

- `api/send-email.js` — Vercel serverless function
- `.vercelignore` — Build exclusions
- `DEPLOYMENT.md` — Full deployment guide

### Updated Files

- `.env.example` — Better documentation for App Password setup

### Existing (Already Configured)

- `Contact.jsx` — Uses `/api/send-email` endpoint ✅
- `vite.config.js` — Has dev proxy for `/api` ✅
- `server.js` — Express with Nodemailer ✅
- `package.json` — Has all dependencies ✅

---

## 🎓 Key Concepts

**Vercel Serverless Functions** = No server to manage

- Code runs only when called
- Auto-scales (0 → many instances)
- Pay per execution (generous free tier)
- Cold start: ~500ms first call, instant after

**CORS Headers** in api/send-email.js

- `Access-Control-Allow-Origin: *` — Allows requests from any domain
- Preflight handle (OPTIONS method) — Browser security requirement

**Environment Variables**

- Vercel Dashboard stores secrets securely
- Never committed to GitHub
- Passed to functions at runtime via `process.env.EMAIL_USER`

---

## 🎯 What's Next?

1. **Deploy** using steps above
2. **Test** contact form in production
3. **Monitor** via Vercel Dashboard → Functions → Logs
4. **Iterate** — Make code changes, push to GitHub, Vercel auto-deploys
5. **Scale** — Add database, authentication, more serverless functions as needed

---

## 📞 Support Resources

- [Vercel Docs](https://vercel.com/docs)
- [Nodemailer Gmail Guide](https://nodemailer.com/smtp/gmail/)
- [Gmail App Passwords](https://support.google.com/accounts/answer/185833)
- [Vercel Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions)

---

**You're all set!** Your portfolio is production-ready. 🚀
