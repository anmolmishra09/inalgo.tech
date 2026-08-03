import React, { useState, useEffect } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
            setScroll(scrolled);
        };

        window.addEventListener("scroll", handleScroll);
        
        // Initial calculation
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div 
            className="scroll-progress-bar"
            style={{ width: `${scroll}%` }}
        />
    );
};

export default ScrollProgress;
