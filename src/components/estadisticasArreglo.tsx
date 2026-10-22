import React from 'react';

export const EstadisticasArreglo: React.FC = () => {
  // Calcula el promedio de un arreglo usando reduce
  const calcularPromedio = (nums: number[]): number => {
    if (nums.length === 0) return 0;
    const suma = nums.reduce((acc, curr) => acc + curr, 0);
    return suma / nums.length;
  };

  // Encuentra el valor máximo del arreglo
  const encontrarMaximo = (nums: number[]): number => (nums.length ? Math.max(...nums) : 0);

  // Encuentra el valor mínimo del arreglo
  const encontrarMinimo = (nums: number[]): number => (nums.length ? Math.min(...nums) : 0);

  const numeros = [8, 3, 15, 7, 22, 11, 4];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
      <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">Estadísticas de Arreglo</h3>
      <div className="space-y-3">
        <p className="text-sm text-slate-600 font-mono">
          Arreglo: <span className="font-bold bg-slate-100 px-2 py-1 rounded">[{numeros.join(', ')}]</span>
        </p>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-cyan-50 p-3 rounded-lg border border-cyan-200 text-center">
            <span className="text-xs text-cyan-600 font-bold block">Promedio: </span>
            <span className="text-lg font-bold text-cyan-800">{calcularPromedio(numeros).toFixed(2)}</span>
          </div>
          <div className="bg-cyan-50 p-3 rounded-lg border border-cyan-200 text-center">
            <span className="text-xs text-cyan-600 font-bold block">Máximo: </span>
            <span className="text-lg font-bold text-cyan-800">{encontrarMaximo(numeros)}</span>
          </div>
          <div className="bg-cyan-50 p-3 rounded-lg border border-cyan-200 text-center">
            <span className="text-xs text-cyan-600 font-bold block">Mínimo: </span>
            <span className="text-lg font-bold text-cyan-800">{encontrarMinimo(numeros)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};