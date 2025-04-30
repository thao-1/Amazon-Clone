# Amazon Clone

![Amazon Clone](public/images/main/Amazon22.png)

## Live Demo

This website is deployed using Vercel. You can access the live demo at:
[https://amazon-clone-lovat-pi.vercel.app/](https://amazon-clone-lovat-pi.vercel.app/)

## Overview

This project is a functional clone of Amazon's e-commerce platform, built with modern web technologies. It features a responsive design, interactive UI components, and core e-commerce functionality.

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Product Browsing**: Browse products across different categories
- **Shopping Cart**: Add, remove, and update items in your cart
- **User Interface**: Modern UI with carousels, cards, and interactive elements
- **Multiple Pages**: Home, Today's Deals, Gift Cards, Registry, Customer Service, and Sell pages

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/thao-1/Amazon-Clone.git
   cd Amazon-Clone
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm start
# or
yarn start
```

## Project Structure

```
├── app/                # Next.js app directory (pages and layouts)
├── components/         # Reusable UI components
│   └── ui/             # UI component library
├── lib/                # Utility functions and context providers
├── public/             # Static assets
│   └── images/         # Image assets
└── styles/             # Global styles
```

## Key Components

- **Cart System**: Implemented using React Context API for state management across the application
- **Header**: Consistent navigation header across all pages
- **Product Cards**: Reusable components for displaying products
- **Carousels**: Interactive image carousels for showcasing products and promotions

## Acknowledgements

- Design inspired by Amazon.com
- Built with Next.js and Tailwind CSS

## License

This project is intended for educational purposes only.
