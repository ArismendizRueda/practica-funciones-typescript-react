import React from 'react';

export const ValidadorEdad: React.FC = () => {
  // Verifica si una persona es mayor de edad (>= 18)
  const esMayorDeEdad = (edad: number): boolean => edad >= 18;

  // Genera un mensaje sobre el derecho a votar o los años faltantes
  const obtenerMensaje = (edad: number): string => {
    return esMayorDeEdad(edad) ? 'Puede votar' : `Le faltan ${18 - edad} años`;
  };

  const edades = [15, 18, 25, 12];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
      <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">Validador de Edad</h3>
      <ul className="space-y-2">
        {edades.map((edad, index) => {
          const esMayor = esMayorDeEdad(edad);
          return (
            <li
              key={index}
              className={`p-3 rounded-lg flex justify-between items-center ${
                esMayor ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-rose-50 border border-rose-200 text-rose-800'
              }`}
            >
              <span>Edad <strong className="font-semibold">{edad}</strong> años: </span>
              <span className="font-bold">{obtenerMensaje(edad)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};