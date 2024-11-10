import React from 'react';
// import './styles.css'; 
// Assuming your CSS is stored in a separate file

const Kurtis = () => {
  return (
    <div style={{ padding: '20px', backgroundImage: 'url(/images/background.png)', backgroundSize: 'cover' }}>
      <h1 style={{ color: 'antiquewhite' }}>Kurtis</h1>

      <div className="product">
        <img src="/images/kurti-1.png" alt="Dress 1" />
        <h3>White Dress</h3>
        <p>$49.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/kurti-2.png" alt="Dress 2" />
        <h3>Purple Dress</h3>
        <p>$69.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/kurti-3.png" alt="Dress 3" />
        <h3>Yellow Dress</h3>
        <p>$59.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/kurti-4.png" alt="Dress 4" />
        <h3>Floral Dress</h3>
        <p>$39.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/kurti-5.png" alt="Dress 5" />
        <h3>Mehandi Dress</h3>
        <p>$45.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/kurti-6.png" alt="Dress 6" />
        <h3>Pink Dress</h3>
        <p>$79.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/kurti-7.png" alt="Dress 7" />
        <h3>Black Dress</h3>
        <p>$54.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>

      <div className="product">
        <img src="/images/kurti-8.png" alt="Dress 8" />
        <h3>Red Dress</h3>
        <p>$28.99</p>
        <a href="#" className="add-to-cart">Add to Cart</a>
      </div>
    </div>
  );
};

export default Kurtis;
