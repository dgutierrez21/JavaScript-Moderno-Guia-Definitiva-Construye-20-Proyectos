// implicit binding

const usuario = {
  nombre: "Pedro",
  edad: 29,
  trabajo: "Programador",
  informacion() {
    console.log(
      `El nombre es ${this.nombre}, su edad es ${this.edad} años y trabaja de ${this.trabajo}`
    ); // this = en este mismo objeto
  },
  mascota: {
    nombre: "Firu",
    edad: 2,
    raza: "Pastor alemán",
    informacion() {
      console.log(
        `El nombre es ${this.nombre}, su edad es ${this.edad} años y su raza es ${this.raza}`
      ); // this = en este mismo objeto
    },
  },
};

usuario.informacion();

usuario.mascota.informacion();
