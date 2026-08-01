# Portfolio Site

A clean, professional single-page portfolio: hero, skills, experience,
projects, education/certifications, a resume download, and a working
contact form. Separate from the tracker app on purpose — this one's
public, that one stays private.

Free hosting, same pattern as before: GitHub + Vercel, no database
needed this time (no Supabase) since the content barely changes.

---

## Status

✅ Real resume content is in — `lib/content.ts` now has your actual
education, experience, projects (with live GitHub links), skills,
positions of responsibility, and achievements, pulled from your
uploaded resume.

✅ `public/resume.pdf` is your actual resume file — the "Download
Resume" buttons already work.

**One thing left to set before deploying:** in `lib/content.ts`, the
`email` field is already your real address — just double check
everything reads the way you want before pushing live. Small wording
tweaks from here are just editing that one file.

---

## Deploy steps (same pattern as the tracker app)

1. **GitHub Desktop** → File → Add Local Repository → point at this
   `portfolio-site` folder → Create a repository → Publish repository.

2. **Vercel** → Add New… → Project → import this repo.

3. Before clicking Deploy, add these **Environment Variables** (for the
   contact form — reuse the same Resend account from the tracker app):

   | Name | Value |
   |---|---|
   | `RESEND_API_KEY` | Your Resend API key (Resend dashboard → API Keys) |
   | `CONTACT_TO_EMAIL` | Your own email — where messages should arrive |

4. Click **Deploy**. You'll get a free live link like
   `your-name.vercel.app`.

That's it — no database, no auth, no SQL to run this time.

## What's in this folder, briefly

- `lib/content.ts` — all site text lives here, edit this first
- `components/` — one file per section (Hero, Skills, Experience,
  Projects, Education, Contact, Nav)
- `app/api/contact/route.ts` — sends contact-form messages via Resend
- `public/resume.pdf` — add this yourself (see step 1 above)
