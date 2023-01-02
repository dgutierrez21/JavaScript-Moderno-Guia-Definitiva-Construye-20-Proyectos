import Header from "./components/Header";

function App() {
  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      {/* Se recomienda usar esta sintaxis solo para componentes que tienen finalidad ser más reutilizables y pasarles contenido más dinamico */}
      {/* <Header></Header> */}
    </div>
  );
}

export default App;
