class Transaccion {
  constructor({ id, proyectoId, tipo, cantidad, descripcion, fecha }) {
    if (!proyectoId) throw new Error("El proyectoId es requerido");
    if (!["ingreso", "gasto"].includes(tipo)) {
      throw new Error("El tipo debe ser 'ingreso' o 'gasto'");
    }
    if (cantidad == null || typeof cantidad !== "number" || cantidad < 0) {
      throw new Error("La cantidad debe ser un número mayor o igual a 0");
    }
    if (!fecha) throw new Error("La fecha es requerida");

    this.id = id;
    this.proyectoId = proyectoId;
    this.tipo = tipo;
    this.cantidad = cantidad;
    this.descripcion = descripcion || "";
    this.fecha = new Date(fecha);
    this.createdAt = new Date();
  }
}

module.exports = Transaccion;
