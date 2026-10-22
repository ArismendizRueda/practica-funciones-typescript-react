import React from 'react';

export const Calculadora: React.FC = () => {
  // Función para sumar dos números
  const sumar = (a: number, b: number): number => a + b;

  // Función para restar dos números
  const restar = (a: number, b: number): number => a - b;

  // Función para multiplicar dos números
  const multiplicar = (a: number, b: number): number => a * b;

  // Función para dividir dos números, retorna 0 si b es 0
  const dividir = (a: number, b: number): number => (b === 0 ? 0 : a / b);

  const a = 15;
  const b = 4;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
      <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">Calculadora Básica</h3>
      <div className="space-y-2 font-mono text-slate-700">
        <p className="bg-slate-50 p-2 rounded">{a} + {b} = <span className="font-bold text-indigo-600">{sumar(a, b)}</span></p>
        <p className="bg-slate-50 p-2 rounded">{a} - {b} = <span className="font-bold text-indigo-600">{restar(a, b)}</span></p>
        <p className="bg-slate-50 p-2 rounded">{a} × {b} = <span className="font-bold text-indigo-600">{multiplicar(a, b)}</span></p>
        <p className="bg-slate-50 p-2 rounded">{a} ÷ {b} = <span className="font-bold text-indigo-600">{dividir(a, b).toFixed(2)}</span></p>
      </div>
    </div>
  );
};