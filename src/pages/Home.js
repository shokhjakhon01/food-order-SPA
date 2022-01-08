import React from "react";
import { Link } from "react-router-dom";
import banner from "../assests/food.jpeg";
import '../styles/Home.css'
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${banner})` }}>
      <div className="headerContainer">
        <h1>Food Corner</h1>
        <p>Uzbek Food At a Click</p>
        <Link to='/menu'>
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
