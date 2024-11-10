import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styl.css'; // Updated import path

// Import images
import image1 from '../assets/images/image1.png';
import image4 from '../assets/images/image4.png';
import image3 from '../assets/images/image3.png';
import image5 from '../assets/images/image5.png';
import homImage from '../assets/images/hom.png'; // Correct import for homepage background image


const HomePage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div>
            {/* Header and Navigation Bar */}
            <header className="main-header">
                <div className="logo">
                    <h1><b>INDRAKSHI</b></h1>
                </div>
                <nav className="navbar">
                    <ul>
                        <li><Link to="/saranya">Men Wear</Link></li>
                        <li><Link to="/womenWear">Women Wear</Link></li>
                        <li><Link to="/cosmetics">Cosmetics</Link></li>
                        <li><Link to="/ani">Accessories</Link></li>
                        <li>
                            <button onClick={handleLoginClick} className="login-button">
                                Login
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section 
                className="hero-section" 
                style={{ background: `url(${homImage}) center/cover no-repeat` }}
            >
                <div className="hero-content">
                    <h1>Embrace Elegance</h1>
                    <p>Discover the Art of Indian Fashion</p>
                </div>
            </section>

            {/* Featured Collections */}
            <section className="collections-section">
                <h2>Featured Collections</h2>
                <div className="collections-grid">
                    <div className="collection-card">
                        <img src={image1} alt="Bridal Collection" />
                        <h3>Bridal Collection</h3>
                    </div>
                    <div className="collection-card">
                        <img src={image4} alt="Kid's Wear" />
                        <h3>Kid's Wear</h3>
                    </div>
                    <div className="collection-card">
                        <img src={image3} alt="Luxury Sarees" />
                        <h3>Luxury Sarees</h3>
                    </div>
                    <div className="collection-card">
                        <img src={image4} alt="Men's Ethnic Wear" />
                        <h3>Men's Ethnic Wear</h3>
                    </div>
                </div>
            </section>

            {/* Craftsmanship Section */}
            <section className="craftsmanship-section">
                <h2>Artisan Craftsmanship</h2>
                <div className="craftsmanship-content">
                    <img src={image5} alt="Artisan Craftsmanship" className="full-width-image" />
                    <p>Each creation is a masterpiece, meticulously forged by artisans...</p>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="footer-section">
                <div className="footer-container">
                    <div className="footer-column">
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Contact Us</h3>
                        <p>Email: support@Indrakshi.com</p>
                        <p>Phone: 79816236879</p>
                    </div>
                    <div className="footer-column">
                        <h3>About Us</h3>
                        <p>Discover the essence of luxury fashion.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
