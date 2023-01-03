import { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatearDinero, calcularTotal } from "./helpers";

function App() {
  // El React useState Hook nos permite rastrear el estado en un componente de función. Estado generalmente se refiere a los datos o propiedades que necesitan ser de seguimiento en una aplicación.

  // Estado | Actualizar estado
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);

  //   El gancho useEffect le permite realizar efectos secundarios en sus componentes.

  // Algunos ejemplos de efectos secundarios son: obtención de datos, actualización directa del DOM y temporizadores.

  // useEffect acepta dos argumentos. El segundo argumento es opcional.
  useEffect(() => {
    const resultado = calcularTotal(cantidad, meses);
    setTotal(resultado);
  }, [cantidad, meses]);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  console.log(cantidad);

  function handleChange(e) {
    setCantidad(Number(e.target.value));
  }

  function handleClickDecrement() {
    const valor = cantidad - STEP;

    if (valor < MIN + 100) {
      alert("Cantidad no válida.");

      return;
    }

    setCantidad(valor);
  }
  function handleClickIncrement() {
    const valor = cantidad + STEP;

    if (valor > MAX) {
      alert("Cantidad no válida.");

      return;
    }

    setCantidad(valor);
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      {/* Se recomienda usar esta sintaxis solo para componentes que tienen finalidad ser más reutilizables y pasarles contenido más dinamico */}
      {/* <Header></Header> */}

      {/* Los inputs en react se cierran con /> al final */}

      <div className="flex justify-between my-6">
        <Button operador="-" fn={handleClickDecrement} />

        <Button operador="+" fn={handleClickIncrement} />
      </div>
      <input
        type="range"
        className="w-full h6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />

      <p className="text-center my-10 text-5xl text-indigo-600 font-extrabold">
        {formatearDinero(cantidad)}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span className="text-indigo-600">plazo</span> a pagar
      </h2>

      <select
        name=""
        id=""
        className="mt-5 w-full p-2 bg-white border  border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
        value={meses}
        onChange={(e) => setMeses(+e.target.value)}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Resumen <span className="text-indigo-600">de pagos</span>
        </h2>
        <p className="text-xl text-gray-500 text-center font-bold">
          {meses} Meses
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {formatearDinero(total)} Total a pagar
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">Mensuales</p>
      </div>
    </div>
  );
}

export default App;
