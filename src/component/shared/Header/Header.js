import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
                <div className="nav-title">JoGeek</div>
            </div>
            <div className="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div className="nav-links">
                <a href="/" target="_blank">
                    Github
                </a>
                <a href="/" target="_blank">
                    Stackoverflow
                </a>
                <a href="/" target="_blank">
                    LinkedIn
                </a>
                <a href="/" target="_blank">
                    Codepen
                </a>
                <a href="/" target="_blank">
                    JsFiddle
                </a>
            </div>
        </div>
    );
};

export default Header;