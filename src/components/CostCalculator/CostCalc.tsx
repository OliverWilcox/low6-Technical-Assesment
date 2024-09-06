import React from 'react';
import RateDisplay from './Rates';

interface CostCalculatorProps {
  totalCost: number;
  onCalculate: () => void;
}

const CostCalculator: React.FC<CostCalculatorProps> = ({
  totalCost,
  onCalculate,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-bold">
          Total Cost: ${totalCost.toFixed(2)}
        </div>
        <button
          onClick={onCalculate}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Calculate cost
        </button>
      </div>
      <RateDisplay />
    </div>
  );
};

export default CostCalculator;
