import React from 'react';
// import './dresses.css'; 
// If you want to keep styles in a separate CSS file

const SareeStore = () => {
  return (
    <div style={{ backgroundImage: "url('/images/background.png')", padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'antiquewhite' }}>Sarees</h1>

      <div className="product">
        <img src="/images/saree-1.png" alt="Dress 1" />
        <h3 style={{ fontSize: '18px', margin: '10px 0', color: 'beige' }}>White Silk Saree</h3>
        <p style={{ fontSize: '16px', color: 'greenyellow' }}>$49.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/saree-2.png" alt="Dress 2" />
        <h3 style={{ fontSize: '18px', margin: '10px 0', color: 'beige' }}>Blue Net Saree</h3>
        <p style={{ fontSize: '16px', color: 'greenyellow' }}>$69.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/saree-3.png" alt="Dress 3" />
        <h3 style={{ fontSize: '18px', margin: '10px 0', color: 'beige' }}>Wine Sequence Saree</h3>
        <p style={{ fontSize: '16px', color: 'greenyellow' }}>$59.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/saree-4.png" alt="Dress 4" />
        <h3 style={{ fontSize: '18px', margin: '10px 0', color: 'beige' }}>Black Party Wear Saree</h3>
        <p style={{ fontSize: '16px', color: 'greenyellow' }}>$39.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/saree-5.png" alt="Dress 5" />
        <h3 style={{ fontSize: '18px', margin: '10px 0', color: 'beige' }}>Half-and-Half Summer Dress</h3>
        <p style={{ fontSize: '16px', color: 'greenyellow' }}>$45.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/saree-6.png" alt="Dress 6" />
        <h3 style={{ fontSize: '18px', margin: '10px 0', color: 'beige' }}>Peacock Blue Wedding Saree</h3>
        <p style={{ fontSize: '16px', color: 'greenyellow' }}>$79.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/saree-7.png" alt="Dress 7" />
        <h3 style={{ fontSize: '18px', margin: '10px 0', color: 'beige' }}>Orange Sunset Saree</h3>
        <p style={{ fontSize: '16px', color: 'greenyellow' }}>$38.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/saree-8.png" alt="Dress 8" />
        <h3 style={{ fontSize: '18px', margin: '10px 0', color: 'beige' }}>Royal Purple Saree</h3>
        <p style={{ fontSize: '16px', color: 'greenyellow' }}>$58.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>
    </div>
  );
};

export default SareeStore;
