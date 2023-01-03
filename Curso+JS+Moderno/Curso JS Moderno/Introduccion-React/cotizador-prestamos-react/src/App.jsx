import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatearDinero } from "./helpers";

function App() {
  // El React useState Hook nos permite rastrear el estado en un componente de función. Estado generalmente se refiere a los datos o propiedades que necesitan ser de seguimiento en una aplicación.

  // Estado | Actualizar estado
  const [cantidad, setCantidad] = useState(10000);

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
    </div>
  );
}

export default App;
