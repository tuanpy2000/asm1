import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function Home(props) {
    return (
        <div style={{ height: "100vh", backgroundColor: "pink" }}>
            Home
        </div >
    );
}

function AboutUs(props) {
    return (
        <div style={{ height: "100vh", backgroundColor: "#c0fff5" }}>
            About Us
        </div>
    );
}

export default function App() {
    let navigate = useNavigate();
    const [count, setCount] = useState(0);
    // const [currentPage, setCurrentPage] = useState('home');

    return (
        <div className='app'>
            {/* <button onClick={() => setCurrentPage('home')}>
                Home
            </button>
            <button onClick={() => setCurrentPage('about')}>About Us</button>
            {
                currentPage === 'home' && <Home />
            }
            {
                currentPage === 'about' && <AboutUs />

            } */}
            <div>
                <a onClick={() => navigate("/")}>Home</a>
                <a onClick={() => navigate("about")}>About Us</a>
            </div>
            <div>
                <div>
                    Count: {count}
                </div>
                <button onClick={() => setCount(count + 1)}>+1</button>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
            </Routes>

        </div>
    );
}
