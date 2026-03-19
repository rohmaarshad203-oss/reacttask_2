import React from 'react';
import girlImg from '../assets/image.png'; 

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>All banks are <br /> worried about <br /> fintech ind.</h1>
        <p className="hero-paragraph">We help you get paid any way you want...</p>
        
        <div className="input-group">
          <input type="text" placeholder="Business email" />
          <button className="get-started-btn">Get started</button>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <p>Total Earning</p>
            <h4>$22k</h4>
          </div>
          <div className="stat-card">
            <p>Withdraw</p>
            <h4>$10k</h4>
          </div>
          <div className="stat-card yellow-card">
            <h4>15</h4>
            <p>Total projects</p>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <div className="yellow-shape"></div>
        <img src={girlImg} alt="girl" />
      </div>
    </section>
  );
};

export default Hero;