import { Calculadora } from './components/calculadoraBasica';
import { ConversorTemperatura } from './components/conversorTemperatura';
import { CalculadoraIMC } from './components/calculadoraIMC';
import { ValidadorEdad } from './components/validarEdad';
import { AnalizadorTexto } from './components/analizadorTexto';
import { EstadisticasArreglo } from './components/estadisticasArreglo';
import { GeneradorContraseña } from './components/generadorContraseña';
import { AplicadorDescuentos } from './components/aplicadorDescuentos';
import { SistemaCalificaciones } from './components/sistemaCalificaciones';
import { CarritoCompras } from './components/carritoCompras';

function App() {
  return (
    <div>
      <header className="header-banner">
        <div>
          <h1>Práctica de Funciones en TypeScript</h1>
          <p>React + TypeScript · 10 ejercicios</p>
        </div>
        <div className="header-badge">Alexander Arismendiz Rueda</div>
      </header>

      <main className="grid-container">
        <div className="tarjeta-ejercicio"><Calculadora /></div>
        <div className="tarjeta-ejercicio"><ConversorTemperatura /></div>
        <div className="tarjeta-ejercicio"><CalculadoraIMC /></div>
        <div className="tarjeta-ejercicio"><ValidadorEdad /></div>
        <div className="tarjeta-ejercicio"><AnalizadorTexto /></div>
        <div className="tarjeta-ejercicio"><EstadisticasArreglo /></div>
        <div className="tarjeta-ejercicio"><GeneradorContraseña /></div>
        <div className="tarjeta-ejercicio"><AplicadorDescuentos /></div>
        <div className="tarjeta-ejercicio"><SistemaCalificaciones /></div>
        <div className="tarjeta-ejercicio"><CarritoCompras /></div>
      </main>
    </div>
  );
}

export default App;