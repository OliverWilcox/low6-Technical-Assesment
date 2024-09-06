import React from 'react';

const RATES = {
  car: 0.3,
  train: 0.15,
  plane: 0.1,
};

const RateDisplay: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4 rounded">
      <h2 className="font-bold mb-2">Cost per km:</h2>
      <ul>
        {Object.entries(RATES).map(([vehicle, rate]) => (
          <li key={vehicle}>
            {vehicle.charAt(0).toUpperCase() + vehicle.slice(1)}: $
            {rate.toFixed(2)} per km
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RateDisplay;
