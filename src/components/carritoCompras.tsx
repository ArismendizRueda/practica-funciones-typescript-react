import React from 'react';

interface ProductoCarrito {
  producto: string;
  precio: number;
  cantidad: number;
}

export const CarritoCompras: React.FC = () => {
  // Calula el subtotal individual (precio * cantidad)
  const calcularSubtotal = (precio: number, cantidad: number): number => precio * cantidad;

  // Calcula el valor correspondiente al IVA del 16%
  const calcularIVA = (subtotal: number): number => subtotal * 0.16;

  // Suma el subtotal con el IVA
  const calcularTotal = (subtotal: number): number => subtotal + calcularIVA(subtotal);

  // Opciones de formato de moneda
  const formatearPrecio = (precio: number): string => `$${precio.toFixed(2)}`;

  const carrito: ProductoCarrito[] = [
    { producto: 'Laptop', precio: 15000, cantidad: 1 },
    { producto: 'Mouse', precio: 350, cantidad: 2 },
    { producto: 'Teclado', precio: 800, cantidad: 1 },
  ];

  // Acumulación del subtotal general mediante .reduce()
  const subtotalGeneral = carrito.reduce(
    (acc, item) => acc + calcularSubtotal(item.precio, item.cantidad),
    0
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
      <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">Carrito de Compras</h3>
      <div className="space-y-2 mb-4 text-sm text-slate-700">
        {carrito.map((item, index) => (
          <div key={index} className="flex justify-between border-b border-slate-100 pb-1">
            <span>
              {item.producto} <span className="text-slate-400">x{item.cantidad}</span> =  </span>
            <span className="font-mono">
              {formatearPrecio(calcularSubtotal(item.precio , item.cantidad))}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 p-4 rounded-lg space-y-1 font-mono text-sm text-slate-700">
        <div className="flex justify-between">
          <span>Subtotal: </span>
          <span>{formatearPrecio(subtotalGeneral)}</span>
        </div>
        <div className="flex justify-between text-slate-500">
          <span>IVA (16%): </span>
          <span>{formatearPrecio(calcularIVA(subtotalGeneral))}</span>
        </div>
        <div className="flex justify-between text-base font-bold text-slate-900 border-t pt-2 mt-2">
          <span>Total: </span>
          <span className="text-indigo-600">{formatearPrecio(calcularTotal(subtotalGeneral))}</span>
        </div>
      </div>
    </div>
  );
};