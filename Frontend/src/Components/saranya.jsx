import React from 'react';
import '../assets/men.css';

const MenClothingStore = () => {
  return (
    <div>
      <header>
        <h1>Men's Clothing Store</h1>
        <nav>
          <ul>
            <li><a href="#new-arrivals">New Arrivals</a></li>
            <li><a href="#shirts">Shirts</a></li>
            <li><a href="#pants">Pants</a></li>
            <li><a href="#accessories">Accessories</a></li>
            <li><a href="#panchalu">Panchalu</a></li>
            <li><a href="#footwear">Footwear</a></li>
          </ul>
        </nav>
      </header>

      <section id="new-arrivals">
        <h2>New Arrivals</h2>
        <div className="product-grid">
          <div className="product">
            <img src="/images/s.png" alt="Shirt 1" />
            <p>Casual Shirt</p>
            <h2> ₹4,500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/t.png" alt="Pants 1" />
            <p>Flannel White Portrait Oversize Shirt</p>
            <h2> ₹3,000/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/p.png" alt="Shorts 1" />
            <p>Belted Cargo Shorts</p>
            <h2> ₹2,250/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/rip.png" alt="Jeans 1" />
            <p>Blue Distressed Anti Fit Jeans</p>
            <h2> ₹4,000/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/st.png" alt="Jeans 2" />
            <p>Classic Distressed Men's Straight Jeans</p>
            <h2> ₹2,500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/a.png" alt="Watch 1" />
            <p>Retro Watch</p>
            <h2> ₹5,000/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
        </div>
      </section>

      <section id="shirts">
        <h2>Shirts</h2>
        <div className="product-grid">
          <div className="product">
            <img src="/images/floral.png" alt="Shirt 2" />
            <p>Floral Printed Shirt</p>
            <h2> ₹4,500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/pink.png" alt="Shirt 3" />
            <p>Casual Shirt</p>
            <h2> ₹4,999/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/h.png" alt="Shirt 4" />
            <p>Men Navy Blue & Off White Slim Fit Printed Casual Shirt</p>
            <h2> ₹3,500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/o.png" alt="Shirt 5" />
            <p>Grey Structured Checks Half Sleeves Shirt</p>
            <h2> ₹2,500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/b.png" alt="Shirt 6" />
            <p>The Souled Store Plaid Brown Mustard and Black Men Relaxed Shirt</p>
            <h2> ₹3,500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/z.png" alt="Shirt 7" />
            <p>Single Pocket Jade Green Checked Shirt</p>
            <h2> ₹2,000/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
        </div>
      </section>

      <section id="pants">
        <h2>Pants</h2>
        <div className="product-grid">
          <div className="product">
            <img src="/images/jeans.png" alt="Pants 1" />
            <p>Jeans</p>
            <h2> ₹2,500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/d.png" alt="Pants 2" />
            <p>Men Regular Dark Blue Jeans</p>
            <h2> ₹2,750/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/fit.png" alt="Pants 3" />
            <p>Men's Loose Baggy Fit Washed Jeans Non-Stretchable</p>
            <h2> ₹3,750/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/k.png" alt="Pants 4" />
            <p>Light Grey Regular Fit Men's Jeans</p>
            <h2> ₹2,250/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/x.png" alt="Pants 5" />
            <p>Men Tapered Fit</p>
            <h2> ₹1,500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/y.png" alt="Pants 6" />
            <p>Blue Loose Jeans</p>
            <h2> ₹3,500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
        </div>
      </section>

      <section id="accessories">
        <h2>Accessories</h2>
        <div className="product-grid">
          <div className="product">
            <img src="/images/wa.png" alt="Watch 2" />
            <p>Watch</p>
            <h2> ₹4,500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/bel.png" alt="Belt 1" />
            <p>Canvas Grey with Vintage Buckle</p>
            <h2> ₹1,500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/ri.png" alt="Ring 1" />
            <p>Men's Verde Ring</p>
            <h2> ₹2,000/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/we.png" alt="Chain 1" />
            <p>Collier Black Chain</p>
            <h2> ₹2,999/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/kad.png" alt="Bracelet 1" />
            <p>Urban Sleek Kada for Men</p>
            <h2> ₹4,500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/sun.png" alt="Sunglasses 1" />
            <p>Forest Fury Polarized</p>
            <h2> ₹2,250/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
        </div>
      </section>

      <section id="footwear">
        <h2>Footwear</h2>
        <div className="product-grid">
          <div className="product">
            <img src="/images/sandals.png" alt="Shoe 1" />
            <p>Flip Flops</p>
            <h2> ₹1,250/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/boot.png" alt="Shoe 2" />
            <p>Boots</p>
            <h2> ₹3,500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/c.png" alt="Shoe 3" />
            <p>Casual Shoes</p>
            <h2> ₹2,000/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Men's Clothing Store</p>
      </footer>
    </div>
  );
};

export default MenClothingStore;
