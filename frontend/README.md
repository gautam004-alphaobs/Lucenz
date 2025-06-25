# Baylor Scott White Login Application

A modern React-based login application with user and admin authentication, MFA support, and terms & conditions dialog.

## Features

- **Dual Authentication**: Separate login flows for users and admins
- **Multi-Factor Authentication (MFA)**: Enhanced security with MFA support
- **Modern UI**: Built with Chakra UI and custom styling
- **Responsive Design**: Works across different screen sizes
- **Terms & Conditions**: Integrated legal terms dialog
- **Password Recovery**: Forgot password functionality

## Tech Stack

- **Frontend**: React 19 + Vite
- **UI Library**: Chakra UI
- **Styling**: Custom CSS with IBM Plex Sans and Space Grotesk fonts
- **Build Tool**: Vite

## Local Development

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

### Option 1: Vercel (Recommended - Free)

1. **Install Vercel CLI** (optional but helpful):
```bash
npm install -g vercel
```

2. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Vite project
   - Click "Deploy"

3. **Deploy via CLI** (alternative):
```bash
vercel
```

### Option 2: Netlify (Free)

1. **Build the project**:
```bash
npm run build
```

2. **Deploy via Netlify Dashboard**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login
   - Drag and drop the `dist` folder to deploy
   - Or connect your GitHub repository for automatic deployments

3. **Deploy via CLI**:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Pages (Free)

1. **Add GitHub Pages configuration** to `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/<your-repo-name>/'
})
```

2. **Deploy**:
   - Push your code to GitHub
   - Go to repository Settings > Pages
   - Select "GitHub Actions" as source
   - Create a workflow file for automatic deployment

### Option 4: Firebase Hosting (Free)

1. **Install Firebase CLI**:
```bash
npm install -g firebase-tools
```

2. **Initialize Firebase**:
```bash
firebase login
firebase init hosting
```

3. **Build and deploy**:
```bash
npm run build
firebase deploy
```

## Environment Variables

Create a `.env` file in the root directory for any environment-specific variables:

```env
VITE_API_URL=your_api_url_here
```

## Project Structure

```
frontend/
├── src/
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   ├── MFAPage.jsx          # Multi-factor authentication page
│   ├── testVariables.js     # Test credentials
│   └── assets/              # Static assets (images, SVGs)
├── components/
│   ├── ForgotPasswordDialog.jsx
│   └── TermsConditionsDialog.jsx
├── public/                  # Public assets
├── package.json
├── vite.config.js
└── vercel.json             # Vercel deployment config
```

## Customization

### Styling
- Modify Chakra UI theme in `src/App.jsx`
- Update custom CSS in the `<style>` tag
- Replace assets in `src/assets/`

### Authentication
- Update test credentials in `src/testVariables.js`
- Integrate with your backend API
- Implement proper session management

## Support

For issues or questions:
1. Check the browser console for errors
2. Verify all dependencies are installed
3. Ensure Node.js version is compatible
4. Check deployment platform documentation

## License

This project is for demonstration purposes. Please ensure compliance with your organization's policies before using in production.
