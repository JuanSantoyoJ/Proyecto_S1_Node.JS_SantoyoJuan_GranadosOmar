class Contrato {
  constructor({ id, proyectoId, terminos, valor, fechaInicio, fechaFin, fechaAsignada }) {
    if (!proyectoId) throw new Error("El proyectoId es requerido");
    if (valor == null || typeof valor !== "number") throw new Error("El valor es requerido y debe ser numérico");
    if (!fechaInicio) throw new Error("La fechaInicio es requerida");

    this.id = id;
    this.proyectoId = proyectoId;
    this.terminos = terminos || "";
    this.valor = valor;
    this.fechaInicio = new Date(fechaInicio);
    this.fechaFin = fechaFin ? new Date(fechaFin) : null;
    this.fechaAsignada = fechaAsignada ? new Date(fechaAsignada) : null;
    this.createdAt = new Date();
  }
}

module.exports = Contrato;
