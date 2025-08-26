class Propuesta {
  constructor({ id, nombre, descripcion, precio, status }) {
    if (!nombre || typeof nombre !== "string") {
      throw new Error("El nombre es requerido y debe ser un string");
    }
    if (precio == null || typeof precio !== "number") {
      throw new Error("El precio es requerido y debe ser un número");
    }
    if (!["pendiente", "aceptado", "rechazado"].includes(status)) {
      throw new Error("El status debe ser 'pendiente', 'aceptado' o 'rechazado'");
    }

    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion || "";
    this.precio = precio;
    this.status = status;
    this.createdAt = new Date();
  }
}

module.exports = Propuesta;
