class Entregable {
  constructor({ id, proyectoId, nombre, descripcion, deadline, status }) {
    if (!proyectoId) throw new Error("El proyectoId es requerido");
    if (!nombre || typeof nombre !== "string") throw new Error("El nombre es requerido y debe ser un string");
    if (!["pendiente", "finalizado"].includes(status)) {
      throw new Error("El status debe ser 'pendiente' o 'finalizado'");
    }
    if (!deadline) throw new Error("La fechaFin (deadline) es requerida");

    this.id = id;
    this.proyectoId = proyectoId;
    this.nombre = nombre;
    this.descripcion = descripcion || "";
    this.deadline = new Date(deadline);
    this.status = status;
    this.createdAt = new Date();
  }
}

module.exports = Entregable;
