import React from 'react';
// import './styles.css'; 
// Assuming your CSS is stored in a separate file

const Lehangas = () => {
  return (
    <div style={{ padding: '20px', backgroundImage: 'url(/images/background.png)', backgroundSize: 'cover' }}>
      <h1 style={{ color: 'antiquewhite' }}>Lehangas</h1>

      <div className="product">
        <img src="/images/lehanga-1.png" alt="Dress 1" />
        <h3>Plurple Dress</h3>
        <p>$49.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/lehanga-2.png" alt="Dress 2" />
        <h3>Light Blue Lehanga</h3>
        <p>$69.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/lehanga-3.png" alt="Dress 3" />
        <h3>White-Silver Lehanga</h3>
        <p>$59.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/lehanga-4.png" alt="Dress 4" />
        <h3>Soft Pink Lehanga</h3>
        <p>$39.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/lehanga-5.png" alt="Dress 5" />
        <h3>Black Lehanga</h3>
        <p>$45.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/lehanga-6.png" alt="Dress 6" />
        <h3>Peach Lehanga</h3>
        <p>$79.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/lehanga-7.png" alt="Dress 7" />
        <h3>Dark Blue Lehanga</h3>
        <p>$59.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/lehanga-8.png" alt="Dress 8" />
        <h3>Wedding Lehanga</h3>
        <p>$99.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>
    </div>
  );
};

export default Lehangas;
