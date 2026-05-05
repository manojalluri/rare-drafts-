# Flashshot — Pro shoots & reels delivered in minutes

A premium, modern web application for booking professional photographers and reels-editors at events. Shot, edited, and delivered before the event ends.

## Features

- **Premium UI/UX**: Dark-mode aesthetic with glassmorphism and 3D interactions.
- **Mobile Optimized**: Fully responsive, touch-friendly, and app-like experience.
- **Booking System**: Streamlined form for picking packages and scheduling shoots.
- **Gallery**: Category-filtered portfolio showcasing delivered work.
- **Admin Panel**: Internal dashboard for managing bookings and updating the gallery.
- **Fast Content Delivery**: Built for the speed of modern social media.

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/router/v1/docs/guide/start/overview) (React + SSR)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: CSS Keyframes + Tailwind Animate

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm / yarn / bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/manojalluri/flashshoot-clone.git
   cd flashshoot-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Deployment

This project is configured for **Cloudflare Pages** via TanStack Start.

#### Deploy to Cloudflare Pages (Recommended)

1. Connect your GitHub repository to [Cloudflare Pages](https://pages.cloudflare.com/).
2. Use the following build settings:
   - **Framework preset**: None
   - **Build command**: `npm run build`
   - **Build output directory**: `dist/client`
3. Environment variables:
   - Ensure `NODE_VERSION` is set to `18` or higher.

#### GitHub Actions

A GitHub Action is provided in `.github/workflows/deploy.yml` to automatically build and check your code on every push.

## License

All rights reserved. Owned by Manoj Alluri.
