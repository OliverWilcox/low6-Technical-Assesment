import React from 'react';
import JourneyForm from '../JourneyForm/JourneyForm';
import CostCalculator from '../CostCalculator/CostCalc';
import useJourneyCalculator from '../../hooks/useJourneyCalculator';

const HomePage: React.FC = () => {
  const {
    startPoint,
    stops,
    vehicleType,
    totalCost,
    handleStartPointChange,
    handleStopChange,
    handleAddStop,
    handleVehicleTypeChange,
    calculateCost,
  } = useJourneyCalculator();

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Journey Expense Calculator</h1>
      <JourneyForm
        startPoint={startPoint}
        stops={stops}
        vehicleType={vehicleType}
        onStartPointChange={handleStartPointChange}
        onStopChange={handleStopChange}
        onAddStop={handleAddStop}
        onVehicleTypeChange={handleVehicleTypeChange}
      />
      <CostCalculator totalCost={totalCost} onCalculate={calculateCost} />
    </div>
  );
};

export default HomePage;
