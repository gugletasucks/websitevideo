[README.md](https://github.com/user-attachments/files/29133327/README.md)
# Gugleta Portfolio

## File Structure

```
gugleta/
├── index.html                      ← Projects page (home)
├── logo.png                        ← Nav logo
├── favicon.png                     ← Browser tab icon
├── Profilna.jpeg                   ← About page profile photo
├── youtube.html                    ← Helper page used to embed YouTube videos
├── css/
│   └── style.css                   ← All styles
├── js/
│   ├── main.js                     ← Nav, back-to-top, year (runs on every page)
│   ├── projects.js                 ← PROJECTS data — edit to add/change videos on the Projects page
│   ├── project-page.js             ← Renders the individual Projects detail page
│   ├── motion-graphics-projects.js ← MOTION_PROJECTS data — edit to add/change videos on the Motion Graphics page
│   ├── motion-graphics-page.js     ← Renders the individual Motion Graphics detail page
│   └── contact.js                  ← EmailJS contact form handler
└── pages/
    ├── about.html                  ← About page
    ├── contact.html                ← Contact page
    ├── project.html                ← Single project view for the Projects page
    ├── motion-graphics.html        ← Motion Graphics page (grid)
    └── motion-graphics-project.html ← Single project view for the Motion Graphics page
```

## How to Add / Edit Projects

The site has **two separate, independent project grids** — Projects and Motion Graphics. They use the same card layout and behavior but pull from two different data files, so editing one never affects the other.

### Projects page → `js/projects.js`
Edit the `PROJECTS` array. Each project is one object:

```js
{
  id: "p01",                       // unique slug — used in URLs (?id=p01)
  titleOverride: "My Project Title", // set to null to auto-fetch the title from YouTube/Vimeo
  type: "VIDEO EDITOR · COLORIST",   // shown as label above the title
  thumb: "URL to thumbnail image",
  platform: "youtube",             // youtube | vimeo | external
  embed: "VIDEO_ID",                // YouTube/Vimeo: video ID only (may include ?si=... for YouTube)
  description: "Role: Video Editor, Colorist",
  related: ["p02", "p03", "p04"]    // IDs of projects shown in "You May Also Like"
}
```

### Motion Graphics page → `js/motion-graphics-projects.js`
Same exact format, but edit the `MOTION_PROJECTS` array instead. IDs in this file should be prefixed differently (e.g. `m01`, `m02`) to avoid confusion with Projects IDs — they're independent, but keeping them visually distinct helps when editing.

### Thumbnails

**YouTube:**
`https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg`

**Vimeo:**
`https://vumbnail.com/YOUR_VIDEO_ID.jpg`

## Favicon & Logo
Replace `favicon.png` and `logo.png` in the root with your own files, keeping the same filenames — no code changes needed.

## Profile Photo
Replace `Profilna.jpeg` in the root with your own photo, keeping the same filename.

## EmailJS (Contact Form)
The contact form sends to your email via EmailJS. Your current keys live in `js/contact.js`:
- `publicKey`
- Service ID (e.g. `service_xxxxxxx`)
- Template ID (e.g. `template_xxxxxxx`)

If you ever need to reconnect or change the destination email, update your EmailJS dashboard and paste the new IDs into `js/contact.js`.
