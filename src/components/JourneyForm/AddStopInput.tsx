import React from 'react';
import StopInput from './StopInput';

interface Stop {
  destination: string;
  distance: number;
}

interface AdditionalStopInputProps {
  stop: Stop;
  onStopChange: (field: keyof Stop, value: string) => void;
}

const AdditionalStopInput: React.FC<AdditionalStopInputProps> = ({
  stop,
  onStopChange,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <StopInput
        label="Next Stop:"
        value={stop.destination}
        onChange={(e) => onStopChange('destination', e.target.value)}
      />
      <StopInput
        label="Distance (km):"
        value={stop.distance}
        onChange={(e) => onStopChange('distance', e.target.value)}
        type="number"
      />
    </div>
  );
};

export default AdditionalStopInput;
