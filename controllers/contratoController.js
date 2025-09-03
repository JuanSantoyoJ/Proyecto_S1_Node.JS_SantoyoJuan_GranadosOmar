const { ObjectId } = require("mongodb");
const Contrato = require("../models/Contrato");

class ContratoController {
  static async create(proyectoId, { terminos, valor, fechaInicio, fechaFin }) {
    const pid = typeof proyectoId === "string" ? new ObjectId(proyectoId) : proyectoId;
    return await Contrato.create({
      proyectoId: pid,
      terminos: terminos || "",
      valor: Number(valor),
      fechaInicio: fechaInicio || new Date(),
      fechaFin: fechaFin || null,
      fechaAsignada: new Date()
    });
  }
  static async findByProyecto(proyectoId){
    const id = typeof proyectoId === "string" ? new ObjectId(proyectoId) : proyectoId;
    return await Contrato.findByProyecto(id);
  }
}

module.exports = ContratoController;
