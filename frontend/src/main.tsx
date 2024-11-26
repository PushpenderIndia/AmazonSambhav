import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import routing tools
// import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx"; // Import the HomePage component
import "./index.css";
import Dashboard from "./pages/Dashboard.tsx";
import LinkSocialMedia from "./pages/LinkSocialMedia.tsx";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/dashboard" element={<Dashboard/>} />  
          <Route path="/linksocialmedia" element={<LinkSocialMedia/>} />
        </Routes>
      </Router>
    </ClerkProvider>
  </React.StrictMode>
);
