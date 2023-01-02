import Header from "./components/Header";

function App() {
  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      {/* Se recomienda usar esta sintaxis solo para componentes que tienen finalidad ser más reutilizables y pasarles contenido más dinamico */}
      {/* <Header></Header> */}

      {/* Los inputs en react se cierran con /> al final */}
      <input
        type="range"
        className="w-full h6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
      />
    </div>
  );
}

export default App;
