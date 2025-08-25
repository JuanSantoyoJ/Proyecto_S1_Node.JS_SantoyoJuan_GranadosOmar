class Deliverable {
    constructor({ proyectoId, titulo, fechaLimite }) {
      this.proyectoId = proyectoId;
      this.titulo = titulo;
      this.fechaLimite = fechaLimite;
      this.estado = "pendiente"; // pendiente, entregado, aprobado, rechazado
    }
  }
  module.exports = Deliverable;