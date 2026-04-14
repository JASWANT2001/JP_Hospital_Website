# JF Neuro Spine Medical Website

A professional medical website built with React and Tailwind CSS, featuring a clean design for a neurosurgery and pain management center.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional medical website design
- **Tailwind CSS**: Utility-first CSS with inline styles
- **React Components**: Modular component architecture
- **Icons**: Using Lucide React for beautiful icons

## 📋 Sections

- **Navigation Bar**: Sticky header with contact info and booking button
- **Hero Section**: Eye-catching headline with call-to-action buttons
- **Feature Cards**: 24/7 Services, Expert Care, Patient-Centric
- **Specializations**: Neurosurgery and Pain Medicine departments
- **Testimonials**: Patient healing stories
- **Recognition**: Clinical excellence and certifications
- **Footer**: Contact information and quick links

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   - Navigate to `http://localhost:5173`

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
neuro spine-website/
├── src/
│   ├── App.jsx                  # Main App component
│   ├── main.jsx                 # Entry point
│   ├── index.css                # Tailwind CSS imports
│   └── NeuroSpineWebsite.jsx    # Main website component
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind configuration
└── postcss.config.js            # PostCSS configuration
```

## 🎨 Customization

### Colors

The website uses the following color scheme:
- **Primary Blue**: `#1e3a8a` (Navy Blue)
- **Accent Orange**: `#f97316` (Coral/Orange)
- **Teal**: `#2dd4bf` and `#0d9488`

You can customize these in `tailwind.config.js`.

### Content

All content is in the `NeuroSpineWebsite.jsx` component. You can easily modify:
- Text content
- Images
- Links
- Contact information

## 📦 Dependencies

- **react** & **react-dom**: Core React libraries
- **lucide-react**: Icon library
- **tailwindcss**: Utility-first CSS framework
- **vite**: Build tool
- **autoprefixer** & **postcss**: CSS processing

## 🌐 Deployment

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify

### Deploy to Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect Vite and build the project

## 📝 License

This is a demonstration project. All rights reserved.

## 🤝 Support

For issues or questions, please open an issue in the repository.
