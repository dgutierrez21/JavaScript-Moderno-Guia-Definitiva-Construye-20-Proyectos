function App() {
  let mensaje;

  const verOfal = true;

  if (verOfal) {
    mensaje = "Hola mundo en React JS";
  } else {
    mensaje = "Ha ocurrido un error";
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white text-black shadow p-10">
      <p>
        {verOfal
          ? "Se inicio sesión correctamente"
          : "No se pudo iniciar sesión"}
      </p>
      <p>{mensaje} </p>
    </div>
  );
}

export default App;
