import React from 'react';
import { FaCreditCard, FaWallet, FaShieldAlt } from 'react-icons/fa';

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature-item">
        <div className="icon-wrap green-dot"><FaCreditCard /></div>
        <h3>Improved collection performance</h3>
        
      </div>
      <div className="feature-item">
        <div className="icon-wrap yellow-dot"><FaWallet /></div>
        <h3>Convenient, local payment options</h3>
        
      </div>
      <div className="feature-item">
        <div className="icon-wrap dark-dot"><FaShieldAlt /></div>
        <h3>The best price guarantee</h3>
        
      </div>
    </div>
  );
};

export default Features;