import React from 'react';
// import './scarves.css'; 
// If you want to keep styles in a separate CSS file


const ScarvesStore = () => {
  return (
    <div style={{ backgroundImage: "url('/images/background.png')", padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'beige' }}>Scarves</h1>

      <div className="product">
        <img src="/images/scarve-1.png" alt="Scarve 1" />
        <h3 style={{ fontSize: '18px', margin: '10px 0', color: 'antiquewhite' }}>Royal Scarve</h3>
        <p style={{ fontSize: '16px', color: 'greenyellow' }}>$4.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/scarve-2.png" alt="Scarve 2" />
        <h3 style={{ fontSize: '18px', margin: '10px 0', color: 'antiquewhite' }}>Cream Scarve</h3>
        <p style={{ fontSize: '16px', color: 'greenyellow' }}>$6.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/scarve-3.png" alt="Scarve 3" />
        <h3 style={{ fontSize: '18px', margin: '10px 0', color: 'antiquewhite' }}>Black Scarve</h3>
        <p style={{ fontSize: '16px', color: 'greenyellow' }}>$5.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/scarve-4.png" alt="Scarve 4" />
        <h3 style={{ fontSize: '18px', margin: '10px 0', color: 'antiquewhite' }}>Peach Scarve</h3>
        <p style={{ fontSize: '16px', color: 'greenyellow' }}>$3.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/scarve-5.png" alt="Scarve 5" />
        <h3 style={{ fontSize: '18px', margin: '10px 0', color: 'antiquewhite' }}>Maroon Scarve</h3>
        <p style={{ fontSize: '16px', color: 'greenyellow' }}>$4.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/scarve-6.png" alt="Scarve 6" />
        <h3 style={{ fontSize: '18px', margin: '10px 0', color: 'antiquewhite' }}>Mint Scarve</h3>
        <p style={{ fontSize: '16px', color: 'greenyellow' }}>$7.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/scarve-7.png" alt="Scarve 7" />
        <h3 style={{ fontSize: '18px', margin: '10px 0', color: 'antiquewhite' }}>Diy Scarve</h3>
        <p style={{ fontSize: '16px', color: 'greenyellow' }}>$7.49</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/scarve-8.png" alt="Scarve 8" />
        <h3 style={{ fontSize: '18px', margin: '10px 0', color: 'antiquewhite' }}>Blue Scarve</h3>
        <p style={{ fontSize: '16px', color: 'greenyellow' }}>$3.95</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>
    </div>
  );
};

export default ScarvesStore;
