import React from 'react';

export const CalculadoraIMC: React.FC = () => {
  // Calcula el IMC dado el peso (kg) y la altura (m)
  const calcularIMC = (peso: number, altura: number): number => peso / (altura * altura);

  // Clasifica la condición según el valor del IMC
  const clasificarIMC = (imc: number): string => {
    if (imc < 18.5) return 'Bajo peso';
    if (imc < 25) return 'Normal';
    if (imc < 30) return 'Sobrepeso';
    return 'Obesidad';
  };

  const peso = 70;
  const altura = 1.75;
  const imc = calcularIMC(peso, altura);
  const clasificacion = clasificarIMC(imc);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
      <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">Calculadora de IMC</h3>
      <div className="space-y-3 text-slate-700">
        <p className="text-sm text-slate-500">Peso: <span className="font-semibold">{peso} kg</span> | Altura: <span className="font-semibold">{altura} m</span></p>
        <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
          <p className="text-lg">IMC: <span className="font-bold text-emerald-700">{imc.toFixed(2)}</span></p>
          <p className="text-md">
            Clasificación: <span className="font-bold text-emerald-800">{clasificacion}</span>
          </p>
        </div>
      </div>
    </div>
  );
};