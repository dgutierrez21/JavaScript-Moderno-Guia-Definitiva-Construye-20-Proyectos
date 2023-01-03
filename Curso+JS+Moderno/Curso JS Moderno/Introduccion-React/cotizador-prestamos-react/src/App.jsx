import { useState } from "react";
import Header from "./components/Header";

function App() {
  // El React useState Hook nos permite rastrear el estado en un componente de función. Estado generalmente se refiere a los datos o propiedades que necesitan ser de seguimiento en una aplicación.

  // Estado | Actualizar estado
  const [cantidad, setCantidad] = useState(10000);

  console.log(cantidad);

  function handleChange(e) {
    console.log(Number(e.target.value));
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      {/* Se recomienda usar esta sintaxis solo para componentes que tienen finalidad ser más reutilizables y pasarles contenido más dinamico */}
      {/* <Header></Header> */}

      {/* Los inputs en react se cierran con /> al final */}
      <input
        type="range"
        className="w-full h6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
