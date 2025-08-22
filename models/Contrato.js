class Contrato {
    constructor({ proyectoId, condiciones, fechaInicio, fechaFin, valor }) {
      this.proyectoId = proyectoId;
      this.condiciones = condiciones;
      this.fechaInicio = fechaInicio;
      this.fechaFin = fechaFin;
      this.valor = valor;
    }
  }
  module.exports = Contrato;