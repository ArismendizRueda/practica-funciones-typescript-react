import React from 'react';

export const ConversorTemperatura: React.FC = () => {
  // Convierte grados Celsius a Fahrenheit
  const celsiusAFahrenheit = (c: number): number => (c * 9) / 5 + 32;

  // Convierte grados Fahrenheit a Celsius
  const fahrenheitACelsius = (f: number): number => ((f - 32) * 5) / 9;

  const temperatura = 25;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
      <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">Conversor de Temperatura</h3>
      <div className="space-y-2 text-slate-700">
        <p className="bg-amber-50 p-3 rounded-lg border border-amber-100">
          <span className="font-semibold">{temperatura}°C</span> equivalen a{' '}
          <strong className="text-amber-600">{celsiusAFahrenheit(temperatura)}°F</strong>
        </p>
        <p className="bg-blue-50 p-3 rounded-lg border border-blue-100">
          <span className="font-semibold">100°F</span> equivalen a{' '}
          <strong className="text-blue-600">{fahrenheitACelsius(100).toFixed(2)}°C</strong>
        </p>
      </div>
    </div>
  );
};