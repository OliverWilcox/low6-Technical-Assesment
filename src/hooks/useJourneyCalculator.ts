import { useState } from 'react';

interface Stop {
  destination: string;
  distance: number;
}

const RATES: { [key: string]: number } = {
  car: 0.3,
  train: 0.15,
  plane: 0.1,
};

const useJourneyCalculator = () => {
  const [startPoint, setStartPoint] = useState('');
  const [stops, setStops] = useState<Stop[]>([
    { destination: '', distance: 0 },
  ]);
  const [vehicleType, setVehicleType] = useState('car');
  const [totalCost, setTotalCost] = useState(0);

  const handleStartPointChange = (value: string) => {
    setStartPoint(value);
  };

  const handleStopChange = (
    index: number,
    field: keyof Stop,
    value: string
  ) => {
    const newStops = stops.map((stop, i) => {
      if (i === index) {
        return {
          ...stop,
          [field]: field === 'distance' ? Number(value) : value,
        };
      }
      return stop;
    });
    setStops(newStops);
  };

  const handleAddStop = () => {
    setStops([...stops, { destination: '', distance: 0 }]);
  };

  const handleVehicleTypeChange = (value: string) => {
    setVehicleType(value);
  };

  const calculateCost = () => {
    const totalDistance = stops.reduce((sum, stop) => sum + stop.distance, 0);
    const cost = totalDistance * RATES[vehicleType];
    setTotalCost(cost);
  };

  return {
    startPoint,
    stops,
    vehicleType,
    totalCost,
    handleStartPointChange,
    handleStopChange,
    handleAddStop,
    handleVehicleTypeChange,
    calculateCost,
  };
};

export default useJourneyCalculator;
