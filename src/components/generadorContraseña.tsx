import React from 'react';

export const GeneradorContraseña: React.FC = () => {
  // Genera una contraseña aleatoria concatenando conjuntos de caracteres según las opciones
  const generarPassword = (longitud: number, incluirNumeros: boolean, incluirSimbolos: boolean): string => {
    let caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+';

    if (incluirNumeros) caracteres += numeros;
    if (incluirSimbolos) caracteres += simbolos;

    let resultado = '';
    for (let i = 0; i < longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      resultado += caracteres.charAt(indiceAleatorio);
    }
    return resultado;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
      <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">Generador de Contraseñas</h3>
      <div className="space-y-3 font-mono text-sm">
        <div className="p-3 bg-slate-50 rounded border flex justify-between items-center">
          <span className="text-slate-600">Básica (8 car.): </span>
          <span className="font-bold text-slate-900 bg-white px-2 py-1 rounded shadow-sm">
            {generarPassword(8, false, false)}
          </span>
        </div>
        <div className="p-3 bg-slate-50 rounded border flex justify-between items-center">
          <span className="text-slate-600">Media (12 car.): </span>
          <span className="font-bold text-slate-900 bg-white px-2 py-1 rounded shadow-sm">
            {generarPassword(12, true, false)}
          </span>
        </div>
        <div className="p-3 bg-slate-50 rounded border flex justify-between items-center">
          <span className="text-slate-600">Fuerte (16 car.): </span>
          <span className="font-bold text-emerald-600 bg-white px-2 py-1 rounded shadow-sm">
            {generarPassword(16, true, true)}
          </span>
        </div>
      </div>
    </div>
  );
};