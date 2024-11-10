import React from 'react';
import { Link } from 'react-router-dom';
// Uncomment the line below if you have a CSS file for styling
// import './categories.css';

const WomensWearCategories = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/background.png')", // Ensure the image path is correct
        backgroundSize: 'cover',
        padding: '40px',
        textAlign: 'center',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ fontSize: '36px', marginBottom: '40px', color: 'burlywood' }}>
        Women's Wear
      </h1>

      {/* Use a list structure for the categories */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={listItemStyle}>
          <Link to="/sarees" style={linkStyle}>Sarees</Link>
        </li>
        <li style={listItemStyle}>
          <Link to="/lehanga" style={linkStyle}>Lehangas</Link>
        </li>
        <li style={listItemStyle}>
          <Link to="/kurti" style={linkStyle}>Kurtis</Link>
        </li>
        <li style={listItemStyle}>
          <Link to="/scarves" style={linkStyle}>Scarves</Link>
        </li>
      </ul>
    </div>
  );
};

// Inline styles for list items and links
const listItemStyle = {
  margin: '10px 0',
};

const linkStyle = {
  fontSize: '24px',
  textDecoration: 'none',
  color: 'burlywood',
  fontWeight: 'bold',
  transition: 'color 0.3s',
  cursor: 'pointer',
};

export default WomensWearCategories;
