import React from "react";
import "./App.css"; // Import App.css here

import Navbar from "./components/NavBar";
import Cats from "./components/category";
import CategorySearch from "./components/CategorySearch";
import VideoWithDescription from "./components/Video";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <video autoPlay muted loop className="video-background">
        <source src="video.mp4" type="video/mp4" />
      </video>
      <div className="content">
        {/* Wrap your content in a div */}
        <Navbar />
        <VideoWithDescription />
        <Cats />
        <Footer />
      </div>
    </div>
  );
}

export default App;
