import React from 'react';
import { Outlet } from 'react-router-dom';
import './index.scss';

const MobileContent = () => {
  return (
    <div className="mobile-container">
      <div className="mobile-content">
        
        <Outlet /> {/* This will render your route content */}
      </div>
    </div>
  );
};

export default MobileContent; 