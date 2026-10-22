import React from 'react';

interface Alumno {
  nombre: string;
  califs: number[];
}

export const SistemaCalificaciones: React.FC = () => {
  // Calcula el promedio de las calificaciones recibidas
  const calcularPromedio = (calificaciones: number[]): number => {
    if (calificaciones.length === 0) return 0;
    const total = calificaciones.reduce((acc, curr) => acc + curr, 0);
    return total / calificaciones.length;
  };

  // Asigna una letra de calificación según el promedio
  const obtenerLetra = (promedio: number): string => {
    if (promedio >= 90) return 'A';
    if (promedio >= 80) return 'B';
    if (promedio >= 70) return 'C';
    if (promedio >= 60) return 'D';
    return 'F';
  };

  // Evalúa si el promedio es aprobatorio (>= 70)
  const estaAprobado = (promedio: number): boolean => promedio >= 70;

  const alumnos: Alumno[] = [
    { nombre: 'Ana', califs: [95, 88, 92] },
    { nombre: 'Luis', califs: [70, 65, 72] },
    { nombre: 'María', califs: [85, 90, 88] },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
      <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">Sistema de Calificaciones</h3>
      <div className="space-y-2">
        {alumnos.map((alumno, index) => {
          const promedio = calcularPromedio(alumno.califs);
          const letra = obtenerLetra(promedio);
          const aprobado = estaAprobado(promedio);

          return (
            <div
              key={index}
              className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center text-sm"
            >
              <div>
                <strong className="text-slate-800">{alumno.nombre} </strong>
                <span className="text-slate-500 text-xs block">
                  Promedio: {promedio.toFixed(1)} | Letra: {letra}
                </span>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  aprobado ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                }`}
              >
                {aprobado ? 'Aprobado' : 'Reprobado'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};