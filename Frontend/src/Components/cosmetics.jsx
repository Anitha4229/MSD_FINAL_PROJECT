import React from "react";
import "../assets/style1.css"; // Assuming the CSS file is correctly imported

const CosmeticStore = () => {
  return (
    <div>
      <header>
        <h1>Cosmetic Store</h1>
        <nav>
          <ul>
            <li><a href="#new-arrivals">New Arrivals</a></li>
            <li><a href="#lipsticks">Lipsticks</a></li>
            <li><a href="#foundation">Foundation</a></li>
            <li><a href="#fragrance">Fragrance</a></li>
            <li><a href="#eyemakeup">Eye Makeup</a></li>
            <li><a href="#hair">Hair</a></li>
          </ul>
        </nav>
      </header>

      <section id="new-arrivals">
        <h2>New Arrivals</h2>
        <div className="product-grid">
          <div className="product">
            <img src="/images/a1.jpg" alt="makeup" />
            <p>Makeup</p>
          </div>
          <div className="product">
            <img src="/images/a2.jpg" alt="hair" />
            <p>Hair Care</p>
          </div>
          <div className="product">
            <img src="/images/a3.jpg" alt="fragrance" />
            <p>Fragrance</p>
          </div>
          <div className="product">
            <img src="/images/a4.jpg" alt="skincare" />
            <p>Skincare</p>
          </div>
          <div className="product">
            <img src="/images/a5.jpg" alt="appliances" />
            <p>Appliances</p>
          </div>
          <div className="product">
            <img src="/images/a6.jpg" alt="pop-ups" />
            <p>Pop Ups</p>
          </div>
        </div>
      </section>

      <section id="lipsticks">
        <h2>Lipsticks</h2>
        <div className="product-grid">
          <div className="product">
            <img src="/images/lip1.jpg" alt="lipstick" />
            <p>MAC Matte Lipstick (Creame)</p>
            <h2>₹2,500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/lip2.jpg" alt="lipstick" />
            <p>MAC Satin Lipstick (Red)</p>
            <h2>₹1,650/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/lip3.jpeg" alt="lipstick" />
            <p>MAC Powder Kiss (Teddy)</p>
            <h2>₹2,200/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/lip4.jpeg" alt="lipstick" />
            <p>MAC Amplified Creme Lipstick (Vegas Volt)</p>
            <h2>₹2,500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/lip5.jpeg" alt="lipstick" />
            <p>MAC Locked Kiss</p>
            <h2>₹3,500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/lip6.jpg" alt="lipstick" />
            <p>MAC MACximal Matte Lipstick - Diva</p>
            <h2>₹2,000/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
        </div>
      </section>

      <section id="foundation">
        <h2>Foundation</h2>
        <div className="product-grid">
          <div className="product">
            <img src="/images/found.jpg" alt="Foundation" />
            <p>CHANELLES Beiges Foundation</p>
            <h2>₹2,500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/found1.jpeg" alt="Foundation" />
            <p>Fluid Foundation No Transfer</p>
            <h2>₹750/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/found2.jpeg" alt="Foundation" />
            <p>Revlon ColorStay 24 Hours Hydrating Radiant Foundation</p>
            <h2>₹3,750/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/found3.jpg" alt="Foundation" />
            <p>Dior Forever Skin Glow 24H Hydrating Radiant Foundation</p>
            <h2>₹2,250/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/found4.jpg" alt="Foundation" />
            <p>Maybelline New York Dewy - Smooth Foundation</p>
            <h2>₹500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/found5.jpg" alt="Foundation" />
            <p>Lakme White Foundation</p>
            <h2>₹600/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
        </div>
      </section>

      <section id="fragrance">
        <h2>Fragrance</h2>
        <div className="product-grid">
          <div className="product">
            <img src="/images/frag1.jpg" alt="Plum" />
            <p>Plum BodyLovin' Vanilla Vibes Body Mist</p>
            <h2>₹450/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/fra2.jpeg" alt="westside paris" />
            <p>Studio West Paris Perfume</p>
            <h2>₹1,500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/frag3.jpg" alt="Victoria" />
            <p>Victoria's Secret Bombshell</p>
            <h2>₹11,500/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/frag4.jpg" alt="Chanel" />
            <p>Chanel Coco Mademoiselle</p>
            <h2>₹17,300/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/frag5.jpeg" alt="Dior" />
            <p>Dior Women Christian Miss Eau De Rose Parfum Spray</p>
            <h2>₹17,450/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/frag6.jpg" alt="Bath & Body" />
            <p>Bath & Body Works Fragrance Mist</p>
            <h2>₹2,099/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
        </div>
      </section>

      <section id="eyemakeup">
        <h2>Eye Makeup</h2>
        <div className="product-grid">
          <div className="product">
            <img src="/images/eye1.jpg" alt="Eyeshadow" />
            <p>MARS Basic Eyeshadow Palette</p>
            <h2>₹800/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/eye2.jpg" alt="Mascara" />
            <p>Maybelline New York Lash Sensational Mascara</p>
            <h2>₹550/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/eye3.jpg" alt="Eyeliner" />
            <p>L'Oréal Paris Super Liner Black Lacquer Eyeliner</p>
            <h2>₹850/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/eye4.jpg" alt="Mascara" />
            <p>Maybelline New York Great Lash Mascara</p>
            <h2>₹350/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/eye5.jpg" alt="Eyeshadow" />
            <p>MAC Eyeshadow</p>
            <h2>₹2,000/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/eye6.jpg" alt="Eyeliner" />
            <p>Maybelline New York HyperSharp Eyeliner</p>
            <h2>₹250/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
        </div>
      </section>

      <section id="hair">
        <h2>Hair Care</h2>
        <div className="product-grid">
          <div className="product">
            <img src="/images/hair1.jpg" alt="Shampoo" />
            <p>OGX Coconut Milk Shampoo</p>
            <h2>₹600/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/hair2.jpg" alt="Hair Serum" />
            <p>Livon Hair Serum</p>
            <h2>₹300/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/hair3.jpg" alt="Hair Oil" />
            <p>Parachute Advanced Hair Oil</p>
            <h2>₹200/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/hair4.jpg" alt="Shampoo" />
            <p>Head & Shoulders Anti-Dandruff Shampoo</p>
            <h2>₹350/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/hair5.jpg" alt="Conditioner" />
            <p>Herbal Essences Bio Renew Conditioner</p>
            <h2>₹400/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
          <div className="product">
            <img src="/images/hair6.jpg" alt="Shampoo" />
            <p>L'Oréal Paris Total Repair Shampoo</p>
            <h2>₹600/-</h2>
            <a href="#" className="add-to-cart">Add to Cart</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CosmeticStore;
