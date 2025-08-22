class Propuesta {
    constructor({ clienteId, descripcion, precio, plazo }) {
      if (!clienteId) throw new Error("Debe asociarse a un cliente");
      this.clienteId = clienteId;
      this.descripcion = descripcion;
      this.precio = precio;
      this.plazo = plazo;
      this.estado = "pendiente"; // pendiente, aceptada, rechazada
      this.createdAt = new Date();
    }
  }
  module.exports = Propuesta;