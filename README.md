# 🌍 Travel Buddy – Smart Tourism & Travel Platform

A modern, responsive, and animated travel platform featuring real-time atmospheric weather telemetry, AI trip planning, hotel discovery, and a local business promotion hub.

---

## 📁 Modular Project Structure

The project has been separated into clean, modular, and maintainable files:

```
Project/
├── 📄 index.html                  # Clean HTML5 entry point (< 100 lines)
├── 📄 server.js                   # Zero-dependency local Node.js development server
├── 📄 start.bat                   # 1-click Windows launcher (opens browser automatically)
├── 📄 package.json                # Project configuration & npm scripts
├── 📄 README.md                   # Project documentation
│
├── 📂 css/
│   └── 🎨 styles.css              # Custom styling, 3D card tilt effects, dynamic sky gradients & animations
│
└── 📂 js/
    ├── 📊 data.js                 # Initial mock destinations, hotels, businesses & reviews
    ├── 🌤️ weather.js              # Real-time clock & time-of-day weather telemetry engine
    ├── ⚡ app.js                  # Main React App component, state management & local storage persistence
    │
    └── 📂 components/
        ├── 🧭 Navbar.js           # Desktop & mobile navigation bar with active indicators
        ├── 📡 WeatherBar.js       # Live satellite weather telemetry strip & 3D time machine simulator
        ├── 🏠 HomeTab.js          # Hero banner, search filter widget, popular destinations & perks
        ├── 🗺️ ExploreTab.js        # Destination grid & comprehensive detail view with weather radar
        ├── 📝 TripPlannerTab.js   # AI itinerary generator with customizable days, budget & schedule
        ├── 🏨 HotelsTab.js        # Handpicked hotels & luxury resorts with instant booking triggers
        ├── 💼 BusinessHubTab.js   # Local businesses showcase & promotional listing submission
        ├── ⭐ ReviewsTab.js       # Community reviews, star ratings & submission form
        ├── ✨ AnimationTourTab.js  # Virtual flight simulator, animated GPS tracking & 3D showcase cards
        ├── 🪟 Modals.js           # Booking modal & Add Business promotional modal
        └── 📑 Footer.js           # Global footer with quick links & college project prototype tag
```

---

## 🚀 How to Run the Project

### Method 1: One-Click Windows Launcher (Easiest)
Simply **double-click** the [`start.bat`](start.bat) file in this folder. It will launch the built-in local server and open your default browser automatically at `http://localhost:3000/`.

### Method 2: Using NPM / Terminal
Run the following in your terminal or Command Prompt inside this folder:
```bash
npm start
```
or
```bash
node server.js
```
Then navigate to: `http://localhost:3000/`

### Method 3: VS Code Live Server
If you use Visual Studio Code:
1. Open the project folder in VS Code.
2. Right-click on [`index.html`](index.html).
3. Select **"Open with Live Server"**.

---

## 🛠️ Technology Stack
- **HTML5 & Semantic Structure**
- **Vanilla CSS3**: 3D card perspectives, keyframe animations, glassmorphism, dynamic sky gradients
- **Tailwind CSS**: Utility classes for responsive design
- **React 18 & Babel Standalone**: Modular component architecture
- **Local Storage API**: Instant persistence for added businesses and submitted reviews
