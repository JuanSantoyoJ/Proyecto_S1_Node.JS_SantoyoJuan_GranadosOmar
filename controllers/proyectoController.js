const { ObjectId } = require("mongodb");
const Proyecto = require("../models/Proyecto");

class ProyectoController {
  static async listByCliente(clienteId) {
    const id = typeof clienteId === "string" ? new ObjectId(clienteId) : clienteId;
    return await Proyecto.listByCliente(id);
  }

  static async findById(id) {
    const _id = typeof id === "string" ? new ObjectId(id) : id;
    return await Proyecto.findById(_id);
  }
}

module.exports = ProyectoController;
