# DDoSim Site

The official website for [DDoSim](https://ddosim.live) - an interactive platform for simulating and visualizing Distributed Denial-of-Service (DDoS) attacks in real time across the globe.

## 🚀 Overview

DDoSim Site is a modern, performant Next.js application that serves as the landing page and blog platform for the DDoSim project. It provides an engaging user experience with interactive visualizations, educational content, and seamless integration with the DDoSim simulator.

## ✨ Features

- **Interactive Landing Page** - Beautiful hero section with 3D globe visualization
- **Feature Showcase** - Highlight key capabilities of the DDoSim platform
- **Blog Platform** - Comprehensive cybersecurity articles and DDoS attack guides
- **SEO Optimized** - Built-in sitemap, robots.txt, and comprehensive metadata
- **Analytics Integration** - Google Analytics 4 (GA4) support
- **Dark Mode** - Full dark/light theme support
- **Responsive Design** - Mobile-first approach with excellent cross-device compatibility
- **Performance Optimized** - Next.js 16 with React 19 and React Compiler

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.1.1](https://nextjs.org/) (App Router)
- **React**: 19.2.3
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) with custom components
- **Icons**: [Phosphor Icons](https://phosphoricons.com/)
- **3D Visualization**: Three.js, React Three Fiber, Three Globe
- **Animations**: Motion (Framer Motion), Rough Notation
- **Content**: React Markdown with Mermaid diagram support
- **Analytics**: React GA4
- **Package Manager**: pnpm

## 📦 Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

## 🏃 Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/DDoSimLab/Site.git
cd Site
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
site/
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages and routes
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Dynamic sitemap generation
│   └── robots.ts          # Robots.txt configuration
├── components/            # React components
│   ├── animate-ui/        # Animated UI components
│   ├── blog/              # Blog-specific components
│   ├── layout/            # Header, Footer
│   ├── sections/          # Landing page sections
│   └── ui/                # shadcn/ui components
├── data/                  # Static data (blogs, globe config)
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and constants
│   ├── constants.ts       # Application constants
│   ├── ga.ts             # Google Analytics utilities
│   └── utils.ts          # Helper functions
└── public/                # Static assets
```

## 🎨 Key Components

### Sections

- **HeroSection** - Main landing section with CTA
- **FeaturesSection** - Platform feature highlights
- **AboutSection** - Mission and vision
- **BlogsSection** - Recent blog posts showcase

### UI Components

- **Globe** - Interactive 3D globe visualization
- **Highlighter** - Text highlighting animations
- **BlogContent** - Markdown blog post renderer with Mermaid support

## 🔧 Configuration

### Environment Variables

The application uses environment variables for configuration. Create a `.env.local` file if needed:

```env
# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=your-ga-id
```

### Constants

Most configuration is centralized in `lib/constants.ts`, including:

- Site URLs and metadata
- Navigation routes
- Text content
- Globe visualization settings
- Blog configuration

## 📝 Blog System

The blog system supports:

- Markdown content with frontmatter
- Mermaid diagram rendering
- Search functionality
- Tag-based categorization
- Reading time estimation
- SEO-optimized blog posts

Blog posts are defined in `data/blogs.ts` and rendered dynamically.

## 🧪 Development

### Linting

```bash
pnpm lint
```

### Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/) via Commitizen:

```bash
pnpm cz
```

## 🌐 Deployment

The site is optimized for deployment on platforms like Vercel, Netlify, or any Node.js hosting service.

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/DDoSimLab/Site)

## 🔗 Related Links

- **Live Site**: [ddosim.live](https://ddosim.live)
- **Simulator**: [sim.ddosim.live](https://sim.ddosim.live)
- **GitHub Repository**: [DDoSimLab/Site](https://github.com/DDoSimLab/Site)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Phosphor Icons](https://phosphoricons.com/)
- 3D visualizations powered by [Three.js](https://threejs.org/)

---

Made with ❤️ by [Jaimin](https://x.com/jaimintwt)
