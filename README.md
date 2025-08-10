# Next.js Portfolio Template

A clean, responsive portfolio template built with Next.js and Tailwind CSS.

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Icons**: Heroicons & React Social Icons
- **Content**: Markdown files with gray-matter frontmatter
- **Timeline**: React Chrono component

## 🚀 Quick Start

### 1. Use This Template

Click the "Use this template" button at the top of this repository, or:

```bash
git clone https://github.com/jotohow/next-portfolio-template.git my-portfolio
cd my-portfolio
```

⭐ Star this repository if you find it useful!

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

### 4. Build for Production

```bash
npm run build
npm start
```

## 📝 Content Management

### Manual Editing Required

#### Homepage (`app/page.jsx`)

- Replace `"Your Name Here"` with your actual name
- Update the profile image path from `/ldn.avif` to your photo

#### About Page (`app/about/page.jsx`)

- Replace `"Your Name"` with your name
- Update `"Professional Title"` with your job title
- Change `"Company Name"` and company URL
- Customize the interests and description

#### Header (`components/Header.jsx`)

- Update social media links (GitHub, Instagram, LinkedIn)
- Replace `yourusername` with your actual usernames

### Dynamic Content

#### Experience Timeline (`_content/experience.json`)

Edit the JSON file to add your work experience, education, and other timeline events:

```json
{
  "id": "unique-id",
  "cardTitle": "Your Job Title",
  "cardSubtitle": "Company Name",
  "cardDetailedText": "Description of your role and achievements...",
  "date": "01-01-2024",
  "date_show": "2024 - Present",
  "image": "/your-image.jpg",
  "media": {
    "source": { "url": "/your-image.jpg" },
    "type": "IMAGE"
  }
}
```

#### Projects (`_content/projects/`)

Add your projects as individual Markdown files:

```markdown
---
title: "Your Project Name"
subtitle: "Brief project description"
date: "2024-01-01"
link: "https://github.com/yourusername/project"
image: "/project-image.jpg"
slug: "project-url-slug"
---

Detailed project description in Markdown format.
```

## 🎨 Customization

### Colors

The template uses CSS custom properties referencing Tailwind colors. Edit your color scheme in `tailwind.config.js`:

```javascript
colors: {
  "custom-bg": "#242e4b",        // Main background
  "custom-hover": "#1b9aaa",     // Link hover effects
}
```

These colors are referenced in `app/globals.css` using `theme('colors.custom-bg')` etc.

### Images

Replace `/ldn.avif` throughout the template with your own images:

- Profile photo (homepage)
- Experience timeline images
- Project screenshots

Add your images to the `public/` directory.

## 📁 Project Structure

```
next-portfolio-template/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── experience/        # Experience timeline page
│   ├── projects/          # Projects listing and detail pages
│   ├── globals.css        # Global styles
│   ├── layout.jsx         # Root layout
│   └── page.jsx           # Homepage
├── components/            # React components
├── _content/              # Content management
│   ├── projects/          # Project markdown files
│   └── experience.json    # Timeline data
├── lib/                   # Data loading utilities
├── public/                # Static assets
└── tailwind.config.js     # Tailwind configuration
```

## 🚀 Deployment

### Netlify (Recommended)

1. Build the project: `npm run build`
2. Deploy the build output to Netlify
3. Set build command to `npm run build` and publish directory to `.next`

### Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Attribution

If you use this template, a link back to the original repository would be appreciated:

```html
Built with
<a href="https://github.com/jotohow/next-portfolio-template"
  >Next.js Portfolio Template</a
>
```

Not required, but appreciated. Consider giving it a ⭐ on GitHub!
