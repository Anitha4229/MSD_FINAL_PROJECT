// src/components/Accessories.js
import React from 'react';
import '../assets/accessories.css';

// Import images for each product category
import clutchBag from '../assets/images/b2.jpeg';
import toteBag from '../assets/images/b6.jpeg';
import pendant from '../assets/images/n1.jpeg';
import bucketBag from '../assets/images/b1.jpeg';
import pradaBag from '../assets/images/b3.jpeg';
import potliBag from '../assets/images/b4.jpeg';
import slingBag from '../assets/images/b5.jpeg';
import bengalBracelet from '../assets/images/d1.jpeg';
import hathphool from '../assets/images/d2.jpeg';
import moissaniteKundan from '../assets/images/d3.jpeg';
import menKundan from '../assets/images/d4.jpeg';
import vintageBracelet from '../assets/images/d5.jpeg';
import arabicCaitlyn from '../assets/images/d6.jpeg';
import bridalJhumkas from '../assets/images/e1.jpeg';
import silverHoops from '../assets/images/e2.jpeg';
import pearlDropEarrings from '../assets/images/e3.jpeg';
import classicStuds from '../assets/images/e4.jpeg';
import charmNecklace from '../assets/images/n2.jpeg';
import pearlStrand from '../assets/images/n3.jpeg';
import chokerNecklace from '../assets/images/n4.jpeg';
import retroSunglasses from '../assets/images/s1.jpeg';
import aviatorSunglasses from '../assets/images/s2.jpeg';
import roundSunglasses from '../assets/images/s3.jpeg';
import catEyeSunglasses from '../assets/images/s4.jpeg';
import rectangularSunglasses from '../assets/images/s5.jpeg';
import louisKourosSunglasses from '../assets/images/s6.jpeg';

const Accessories = () => {
  return (
    <div>
      <a id="top"></a>
      <header>
        <nav>
          <div className="nav-container">
            <h2 className="logo">Accessories</h2>
            <ul className="nav-links">
            <li><a href="#new-arrivals">New Arrivals</a></li>
            <li><a href="#bags">Bags</a></li>
              <li><a href="#bracelets">Bracelets</a></li>
              <li><a href="#earrings">Earrings</a></li>
              <li><a href="#necklace">Neck Pieces</a></li>
              <li><a href="#sunglasses">Sunglasses</a></li>
            </ul>
          </div>
        </nav>
      </header>
      <section id="new-arrivals">
  <h2>New Arrivals</h2>
  <div className="product-grid">
    <div className="product">
      <img src={clutchBag} alt="Black Clutch Bag with Gold Detailing" />
      <p>Clutch Bag</p>
      <h2>₹4,999/-</h2>
      <a href="#" className="add-to-cart">Add to Cart</a>
    </div>
    <div className="product">
      <img src={toteBag} alt="Blue Tote Bag" />
      <p>Tote Bag</p>
      <h2>₹2,000/-</h2>
      <a href="#" className="add-to-cart">Add to Cart</a>
    </div>
    <div className="product">
      <img src={pendant} alt="Gold-Plated Circular Pendant" />
      <p>Gold-Plated CZ Studded Circular Pendant</p>
      <h2>₹3,000/-</h2>
      <a href="#" className="add-to-cart">Add to Cart</a>
    </div>
    <div className="product">
      <img src={bucketBag} alt="Green Bucket Bag" />
      <p>Bucket Bag</p>
      <h2>₹4,500/-</h2>
      <a href="#" className="add-to-cart">Add to Cart</a>
    </div>
    <div className="product">
      <img src={pradaBag} alt="Prada Handbag" />
      <p>Prada Bag</p>
      <h2>₹3,500/-</h2>
      <a href="#" className="add-to-cart">Add to Cart</a>
    </div>
  </div>
</section>

<section id="bags">
  <h2>Bags</h2>
  <div className="product-grid">
    <div className="product">
      <img src={bucketBag} alt="Green Bucket Bag" />
      <p>Bucket Bag</p>
      <h2>₹4,500/-</h2>
      <a href="#" className="add-to-cart">Add to Cart</a>
    </div>
    <div className="product">
      <img src={pradaBag} alt="Prada Handbag" />
      <p>Prada Bag</p>
      <h2>₹3,500/-</h2>
      <a href="#" className="add-to-cart">Add to Cart</a>
    </div>
    <div className="product">
      <img src={potliBag} alt="Red Potli Bag" />
      <p>Potli Bag</p>
      <h2>₹2,500/-</h2>
      <a href="#" className="add-to-cart">Add to Cart</a>
    </div>
    <div className="product">
      <img src={slingBag} alt="Black Sling Bag" />
      <p>Sling Bag</p>
      <h2>₹3,500/-</h2>
      <a href="#" className="add-to-cart">Add to Cart</a>
    </div>
    <div className="product">
      <img src={clutchBag} alt="Black Clutch Bag with Gold Detailing" />
      <p>Clutch Bag</p>
      <h2>₹4,999/-</h2>
      <a href="#" className="add-to-cart">Add to Cart</a>
    </div>
  </div>
</section>



      <section id="bracelets">
        <h2>Bracelets</h2>
        <div className="product-grid">
          <div className="product">
            <img src={bengalBracelet} alt="Bengal Byzantine Broadway" />
            <p>Bengal Byzantine Broadway</p>
            <h2>₹2,500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src={hathphool} alt="Kundan Hathphool" />
            <p>Kundan Hathphool</p>
            <h2>₹2,750/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src={moissaniteKundan} alt="Moissanite Kundan Bracelet" />
            <p>Moissanite Kundan Bracelet</p>
            <h2>₹5,000/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src={vintageBracelet} alt="Vintage Bracelet" />
            <p>Vintage Bracelet</p>
            <h2>₹2,200/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src={arabicCaitlyn} alt="Arabic Caitlyn Bracelet" />
            <p>Arabic Caitlyn Bracelet</p>
            <h2>₹3,000/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
        </div>
      </section>

      <section id="earrings">
        <h2>Earrings</h2>
        <div className="product-grid">
          <div className="product">
            <img src={bridalJhumkas} alt="Heavy Bridal Jhumkas" />
            <p>Heavy Bridal Jhumkas</p>
            <h2>₹4,500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src={silverHoops} alt="Silver Hoops" />
            <p>Silver Hoops</p>
            <h2>₹2,000/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src={pearlDropEarrings} alt="Pearl Drop Earrings" />
            <p>Pearl Drop Earrings</p>
            <h2>₹2,800/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src={classicStuds} alt="Classic Studs" />
            <p>Classic Studs</p>
            <h2>₹1,500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src={menKundan} alt="Men's Kundan Earrings" />
            <p>Men's Kundan Earrings</p>
            <h2>₹3,200/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
        </div>
      </section>

      <section id="necklace">
        <h2>Neck Pieces</h2>
        <div className="product-grid">
          <div className="product">
            <img src={pendant} alt="Gold-Plated Pendant" />
            <p>Gold-Plated CZ Studded Circular Pendant</p>
            <h2>₹3,000/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src={charmNecklace} alt="Silver Charm Necklace" />
            <p>Silver Charm Necklace</p>
            <h2>₹2,800/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src={pearlStrand} alt="Pearl Strand Necklace" />
            <p>Pearl Strand Necklace</p>
            <h2>₹3,500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src={chokerNecklace} alt="Choker Necklace" />
            <p>Choker Necklace</p>
            <h2>₹2,200/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src={pendant} alt="Gold-Plated Pendant" />
            <p>Gold-Plated Pendant</p>
            <h2>₹3,000/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
        </div>
      </section>

      <section id="sunglasses">
        <h2>Sunglasses</h2>
        <div className="product-grid">
          <div className="product">
            <img src={retroSunglasses} alt="Retro Square Sunglasses" />
            <p>Retro Square Sunglasses</p>
            <h2>₹4,500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src={aviatorSunglasses} alt="Aviator Sunglasses" />
            <p>Aviator Sunglasses</p>
            <h2>₹3,200/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src={roundSunglasses} alt="Round Sunglasses" />
            <p>Round Sunglasses</p>
            <h2>₹2,800/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src={catEyeSunglasses} alt="Cat Eye Sunglasses" />
            <p>Cat Eye Sunglasses</p>
            <h2>₹2,500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src={louisKourosSunglasses} alt="Louis Kouros Sunglasses" />
            <p>Louis Kouros Sunglasses</p>
            <h2>₹5,000/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Accessories Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Accessories;
