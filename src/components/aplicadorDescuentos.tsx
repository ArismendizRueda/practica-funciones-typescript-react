import React from 'react';

export const AplicadorDescuentos: React.FC = () => {
  // Función de orden superior que aplica un callback de descuento al precio
  const aplicarDescuento = (precio: number, calcularDescuento: (p: number) => number): number => {
    return precio - calcularDescuento(precio);
  };

  // Callback: 10% de descuento
  const descuento10 = (p: number): number => p * 0.10;

  // Callback: 25% de descuento
  const descuento25 = (p: number): number => p * 0.25;

  // Callback: 15% de descuento para estudiantes
  const descuentoEstudiante = (p: number): number => p * 0.15;

  const precio = 1000;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
      <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">Aplicador de Descuentos</h3>
      <div className="space-y-2">
        <p className="text-sm font-semibold text-slate-600">Precio base: ${precio}</p>
        <ul className="space-y-2 text-sm">
          <li className="p-2 bg-indigo-50 rounded flex justify-between">
            <span>Con 10% off: </span>
            <strong className="text-indigo-700">${aplicarDescuento(precio, descuento10)}</strong>
          </li>
          <li className="p-2 bg-indigo-50 rounded flex justify-between">
            <span>Con 25% off: </span>
            <strong className="text-indigo-700">${aplicarDescuento(precio, descuento25)}</strong>
          </li>
          <li className="p-2 bg-indigo-50 rounded flex justify-between">
            <span>Descuento estudiante (15%): </span>
            <strong className="text-indigo-700">${aplicarDescuento(precio, descuentoEstudiante)}</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};