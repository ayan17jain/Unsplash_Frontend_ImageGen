import React from "react";
import Navbar from "../common/Navbar/navbar";
import "./homepage.css";

const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <Navbar page="home" />
            <header className="header">
                <h1>Image Generator</h1>
                <p>Get inspired with stunning images from Unsplash</p>
            </header>

            <div className="card-container">
                <div className="card">
                    <h2>What We Offer</h2>
                    <p>Explore a vast collection of high-quality images generated just for you.</p>
                </div>
                <div className="card">
                    <h2>Contact Us</h2>
                    <p>Reach out for any inquiries or support. We're here to help!</p>
                </div>
                <div className="card">
                    <h2>About Us</h2>
                    <p>Learn more about our mission to provide the best image generation service.</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
