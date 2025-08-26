class Proyecto {
  constructor({ id, clienteId, nombre, description, status, progreso, fechaInicio, endDate }) {
    if (!clienteId) throw new Error("El clienteId es requerido");
    if (!nombre || typeof nombre !== "string") throw new Error("El nombre es requerido y debe ser un string");
    if (!["active", "paused", "completed", "cancelled"].includes(status)) {
      throw new Error("El status debe ser válido: active, paused, completed, cancelled");
    }
    if (!fechaInicio) throw new Error("La fechaInicio es requerida");

    this.id = id;
    this.clienteId = clienteId;
    this.nombre = nombre;
    this.description = description || "";
    this.status = status;
    this.progreso = progreso || [];
    this.fechaInicio = new Date(fechaInicio);
    this.endDate = endDate ? new Date(endDate) : null;
    this.createdAt = new Date();
  }
}

module.exports = Proyecto;
