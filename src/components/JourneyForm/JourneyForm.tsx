import React from 'react';
import StopInput from './StopInput';
import AdditionalStopInput from './AddStopInput';

interface Stop {
  destination: string;
  distance: number;
}

interface JourneyFormProps {
  startPoint: string;
  stops: Stop[];
  vehicleType: string;
  onStartPointChange: (value: string) => void;
  onStopChange: (index: number, field: keyof Stop, value: string) => void;
  onAddStop: () => void;
  onVehicleTypeChange: (value: string) => void;
}

const JourneyForm: React.FC<JourneyFormProps> = ({
  startPoint,
  stops,
  vehicleType,
  onStartPointChange,
  onStopChange,
  onAddStop,
  onVehicleTypeChange,
}) => {
  return (
    <div>
      <StopInput
        label="Start Location:"
        value={startPoint}
        onChange={(e) => onStartPointChange(e.target.value)}
      />
      <StopInput
        label="Primary Destination:"
        value={stops[0].destination}
        onChange={(e) => onStopChange(0, 'destination', e.target.value)}
      />
      <StopInput
        label="Distance (km):"
        value={stops[0].distance}
        onChange={(e) => onStopChange(0, 'distance', e.target.value)}
        type="number"
      />

      {stops.slice(1).map((stop, index) => (
        <AdditionalStopInput
          key={index + 1}
          stop={stop}
          onStopChange={(field, value) => onStopChange(index + 1, field, value)}
        />
      ))}

      <button onClick={onAddStop} className="text-blue-600 underline mb-4">
        + Add Another Stop
      </button>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Transport Method:
        </label>
        <select
          value={vehicleType}
          onChange={(e) => onVehicleTypeChange(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="car">Car</option>
          <option value="train">Train</option>
          <option value="plane">Plane</option>
        </select>
      </div>
    </div>
  );
};

export default JourneyForm;
