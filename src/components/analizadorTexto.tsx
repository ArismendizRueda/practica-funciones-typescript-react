import React from 'react';

export const AnalizadorTexto: React.FC = () => {
  // Cuenta las palabras dividiendo la cadena por espacios en blanco
  const contarPalabras = (texto: string): number => {
    const textoLimpio = texto.trim();
    return textoLimpio ? textoLimpio.split(/\s+/).length : 0;
  };

  // Cuenta las vocales (incluyendo acentos) usando expresiones regulares
  const contarVocales = (texto: string): number => {
    const coincidencia = texto.match(/[aeiouáéíóú]/gi);
    return coincidencia ? coincidencia.length : 0;
  };

  // Invierte el orden de los caracteres de un texto
  const invertirTexto = (texto: string): string => texto.split('').reverse().join('');

  const texto = 'Hola mundo desde TypeScript';

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
      <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">Analizador de Texto</h3>
      <div className="space-y-3">
        <p className="p-3 bg-slate-100 rounded text-slate-800 italic">"{texto}"</p>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <span className="block text-xs text-purple-600 font-semibold uppercase">Palabras: </span>
            <span className="text-xl font-bold text-purple-800">{contarPalabras(texto)}</span>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <span className="block text-xs text-purple-600 font-semibold uppercase">Vocales: </span>
            <span className="text-xl font-bold text-purple-800">{contarVocales(texto)}</span>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200 col-span-3 sm:col-span-1">
            <span className="block text-xs text-purple-600 font-semibold uppercase">Invertido: </span>
            <span className="text-sm font-mono font-bold text-purple-800 block truncate">{invertirTexto(texto)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};