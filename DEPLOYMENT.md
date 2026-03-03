# Vercel Deployment Guide

## Overview

Your portfolio is now set up for **serverless deployment** on Vercel with the following setup:

- **Frontend**: React + Vite (builds to static assets)
- **Backend**: Vercel Serverless Functions (`api/send-email.js`)
- **Email**: Gmail SMTP with Nodemailer

---

## Step 1: Prepare Your Repository

### 1.1 Remove Express server.js from production

The Express backend is used **only for local development**. Vercel uses the serverless function instead.

**Option A: Keep server.js for local testing**

```bash
npm run dev:full  # Run Vite + Express locally
```

**Option B: Remove from version control** (if not using locally)

```bash
git rm --cached server.js
echo "server.js" >> .gitignore
```

### 1.2 Verify .vercelignore is in place

Check that `.vercelignore` exists in your root. It excludes unnecessary files from build (already created).

### 1.3 Update package.json build command

Vercel automatically detects React + Vite and builds with:

```bash
npm run build
```

No changes needed; your `vite.config.js` is already configured.

---

## Step 2: Deploy to Vercel

### 2.1 Via Vercel Dashboard (Recommended)

1. **Connect Repository**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose your GitHub repo

2. **Configure Environment**:
   - In Project Settings → Environment Variables, add:
     - `EMAIL_USER`: Your Gmail address (e.g., `rajalingammuthiah2011@gmail.com`)
     - `EMAIL_PASS`: Your 16-char Gmail App Password (2FA required)

   **How to get Gmail App Password**:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification if not already done
   - Go to "App Passwords" → Select "Mail" + "Windows Computer" (or your device)
   - Copy the 16-character password
   - Paste into `EMAIL_PASS` on Vercel

3. **Deploy**:
   - Click "Deploy"
   - Vercel builds your React app + serverless functions
   - Your site goes live at `your-project.vercel.app`

### 2.2 Via Vercel CLI (Advanced)

Install Vercel CLI:

```bash
npm install -g vercel
```

Login and deploy:

```bash
vercel
# Follow prompts to link project
# Select yes for production deployment
```

Link to existing project:

```bash
vercel --prod
```

---

## Step 3: Verify Deployment

### 3.1 Test Email Functionality

1. Visit your deployed site: `https://your-project.vercel.app/contact`
2. Fill out the contact form and submit
3. Check your Gmail inbox for:
   - **Owner email** (from form submitter to `EMAIL_USER`)
   - **Auto-reply** (from portfolio to form submitter)

### 3.2 Check Serverless Function Logs

```bash
vercel logs api/send-email
```

Or via Dashboard:

- Project Settings → Functions → `api/send-email` → View Logs

### 3.3 Test Locally with Vercel CLI

```bash
vercel dev
# Runs on http://localhost:3000
# Frontend: http://localhost:3000
# Serverless: http://localhost:3000/api/send-email
```

Then test contact form submission locally (uses serverless function).

---

## Step 4: Verify Environment Setup

### Frontend (.env variables)

```
VITE_API_BASE_URL=/api
```

This is already set. In production (Vercel), `/api` routes to your serverless function.

### Vercel Secrets (set via Dashboard)

```
EMAIL_USER=rajalingammuthiah2011@gmail.com
EMAIL_PASS=qufjwypupcnuhoql  (16-char Gmail App Password)
```

### Verify functions are discoverable

Vercel auto-detects functions in `/api` folder:

```
api/
  send-email.js  → Accessible at /api/send-email
```

---

## Step 5: Production Checklist

- [ ] Repository committed to GitHub
- [ ] `.vercelignore` in place
- [ ] `.env` gitignored (not in version control)
- [ ] Environment variables set on Vercel Dashboard:
  - [ ] `EMAIL_USER` (Gmail address)
  - [ ] `EMAIL_PASS` (Gmail App Password - 16 chars)
- [ ] Deployed and live
- [ ] Contact form tested and receives emails
- [ ] Check function logs for any errors

---

## Troubleshooting

### Contact form shows "Failed to send message"

**Check 1**: Verify environment variables on Vercel

```bash
vercel env list
# Should show EMAIL_USER and EMAIL_PASS
```

**Check 2**: Check function logs

```bash
vercel logs api/send-email --limit 50
```

**Check 3**: Test function directly

```bash
curl -X POST https://your-project.vercel.app/api/send-email \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Test message"}'
```

### "Email service not configured" error

- `EMAIL_USER` or `EMAIL_PASS` missing from Vercel environment
- Verify on Vercel Dashboard → Settings → Environment Variables

### Gmail authentication fails

- Gmail App Password is incorrect (must be 16 chars, generated from Security page)
- 2-Step Verification not enabled on Gmail account
- Recent password change might invalidate previous App Password

### Function timeout

- Gmail SMTP can be slow (5-10s); Vercel default is 60s
- If persists, check Gmail account security alerts or block "less secure apps"

---

## Development vs Production Paths

### Local Development (npm run dev)

```
Frontend: http://localhost:3000 (Vite)
API: /api → http://localhost:5000 (Express via Vite proxy)
```

### Production (Vercel)

```
Frontend: https://your-project.vercel.app
API: /api → Vercel Serverless Function (api/send-email.js)
```

Both use the same endpoint path `/api/send-email`, so **no code changes needed**.

---

## Next: Optional Enhancements

### Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `yourname.com`)
3. Configure DNS records as shown

### Analytics

- Vercel Dashboard automatically tracks performance
- Check Speed Insights and Web Analytics tabs

### Email Notifications

- Vercel Dashboard → Project Settings → Notifications
- Get alerts for deployment failures, etc.

---

## FAQ

**Q: Do I need to keep server.js in production?**
A: No. Express is only for local development. Vercel uses the serverless function.

**Q: Can I test locally before deploying?**
A: Yes: `vercel dev` runs the deployed stack locally.

**Q: What if my Gmail password doesn't work?**
A: Use an App Password (16-char), not your regular Gmail password. 2FA must be enabled.

**Q: How do I update code after deployment?**
A: Push to GitHub → Vercel auto-rebuilds and deploys.

**Q: Can I add a database?**
A: Yes. Vercel has integrations for PostgreSQL, MongoDB, etc. See Vercel Integrations.

---

## Support

- [Vercel Docs](https://vercel.com/docs)
- [Nodemailer Gmail Guide](https://nodemailer.com/smtp/gmail/)
- [Vercel Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions)
