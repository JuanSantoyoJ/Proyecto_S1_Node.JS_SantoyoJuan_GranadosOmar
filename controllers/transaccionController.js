const { ObjectId } = require("mongodb");
const Transaccion = require("../models/Transaccion");
const ProyectoController = require("./proyectoController");

class TransaccionController {
  /**
   * Cliente: solo "ingreso"
   * Admin: "ingreso" y "gasto"
   */
  static async create({ proyectoId, tipo, cantidad, descripcion, rolQuienCrea }) {
    const pid = typeof proyectoId === "string" ? new ObjectId(proyectoId) : proyectoId;
    const cant = Number(cantidad);
    if (Number.isNaN(cant) || cant < 0) throw new Error("Cantidad inválida");

    if (rolQuienCrea === "cliente" && tipo !== "ingreso") {
      throw new Error("El cliente solo puede registrar ingresos");
    }
    if (!["ingreso", "gasto"].includes(tipo)) {
      throw new Error("Tipo inválido (ingreso|gasto)");
    }

    // Validar que exista el proyecto
    const proyecto = await ProyectoController.findById(pid);
    if (!proyecto) throw new Error("Proyecto no encontrado");

    return await Transaccion.create({
      proyectoId: pid,
      tipo,
      cantidad: cant,
      descripcion: descripcion || "",
      fecha: new Date()
    });
  }
}

module.exports = TransaccionController;
