class Client {
    constructor({ nombre, correo, empresa }) {
      if (!nombre || typeof nombre !== "string") {
        throw new Error("El nombre es requerido y debe ser un string");
      }
      if (!correo || !/\S+@\S+\.\S+/.test(correo)) {
        throw new Error("El correo no es válido");
      }
      this.nombre = nombre;
      this.correo = correo;
      this.empresa = empresa || null;
      this.createdAt = new Date();
    }
  }
  
  module.exports = Client;