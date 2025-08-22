class Proyecto {
    constructor({ clienteId, propuestaId, nombre }) {
      this.clienteId = clienteId;
      this.propuestaId = propuestaId;
      this.nombre = nombre;
      this.estado = "activo"; // activo, pausado, finalizado, cancelado
      this.createdAt = new Date();
    }
  }
  module.exports = Proyecto;