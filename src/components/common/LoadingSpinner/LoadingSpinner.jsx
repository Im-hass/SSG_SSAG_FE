import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import './LoadingSpinner.scss';

function LoadingSpinner() {
  return (
    <div className="loading-wrapper">
      <RotatingLines
        strokeColor="#ff3e3e"
        strokeWidth="3"
        animationDuration="3"
        width="70"
      />
    </div>
  );
}

export default LoadingSpinner;
