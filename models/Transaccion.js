class Transaction {
    constructor({ proyectoId, tipo, monto, fecha }) {
      if (!["ingreso", "egreso"].includes(tipo)) throw new Error("Tipo inválido");
      this.proyectoId = proyectoId;
      this.tipo = tipo;
      this.monto = monto;
      this.fecha = fecha || new Date();
    }
  }
  module.exports = Transaction;