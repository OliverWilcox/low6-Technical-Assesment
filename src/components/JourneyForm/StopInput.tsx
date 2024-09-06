import React from 'react';

interface StopInputProps {
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const StopInput: React.FC<StopInputProps> = ({
  label,
  value,
  onChange,
  type = 'text',
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        className="w-full p-2 border rounded"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default StopInput;
