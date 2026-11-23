# Gugleta Portfolio

Single-page portfolio for Lazar Gugleta, hosted on GitHub Pages at https://gugleta.com

## File structure

```
├── index.html                      ← The whole site (design, content, project data, scripts)
├── logo.png                        ← Logo (nav / header)
├── favicon.png                     ← Browser tab icon
├── Profilna.jpeg                   ← Profile photo on the About view
├── opengraph.jpg                   ← Preview image when the link is shared (1200x630)
├── We Got Your Back Thumbnail.png  ← Custom thumbnail image
├── lockddd DJ Set Thumbnail.png    ← Custom thumbnail image
├── CNAME                           ← Keeps the gugleta.com domain (do not delete)
└── README.md
```

`index.html` contains four views that switch without reloading: **Projects**, **Motion Graphics**, **About** and **Contact**.

## Adding or editing projects

Project data is inside `index.html`, in the `<script>` near the bottom. Search for `const PROJECTS` and `const MOTION_PROJECTS`.

```js
{
  id: "p09",                         // unique; p01... for Projects, m01... for Motion Graphics
  title: "My Project Title",         // shown in the list and above the video
  role: "DP · VIDEO EDITOR",         // small label above the title in the video window
  embed: "YOUTUBE_VIDEO_ID",         // only the ID: youtube.com/watch?v=THIS_PART
  thumb: "https://img.youtube.com/vi/YOUTUBE_VIDEO_ID/maxresdefault.jpg"
}
```

- The **order in the array is the order in the list**.
- To remove a project, delete its whole `{ ... },` block.
- Don't forget the comma between blocks.
- Hovering a title plays that video as the full-screen background; clicking opens it in the theater window.

## Editing text

- **About text, software and disciplines lists:** inside `<section id="aboutView">`.
- **Contact text and email:** inside `<section id="contactView">`.
- **Browser tab title:** the `<title>` tag at the top of `index.html`.
- **Link preview (WhatsApp, Instagram...):** the `og:` lines at the top. Replace `opengraph.jpg` to change the image. Social apps cache previews, so changes can take a while to show.

## Contact form (EmailJS)

The form sends mail through EmailJS. The public key, service ID and template ID are in `index.html`, in the contact form handler (search for `emailjs.send`). The template receives `name`, `email`, `subject` and `message`.

To change where messages arrive, edit the template or service in the EmailJS dashboard. If you ever create new ones, paste the new IDs into that `emailjs.send(...)` line. In the EmailJS dashboard, you can also limit the key to the gugleta.com domain.

## Publishing changes

1. Upload the changed files to the GitHub repo (`gugletasucks/websitevideo`) and commit.
2. GitHub Pages rebuilds in a minute or two.
3. Hard refresh to see the new version: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows).

## Notes

- Styling uses Tailwind via CDN, and fonts come from Google Fonts. No build step is needed.
- Background videos are YouTube embeds. YouTube shows a brief pause icon on embeds as they start, so the site covers each video with its thumbnail until it clears.
