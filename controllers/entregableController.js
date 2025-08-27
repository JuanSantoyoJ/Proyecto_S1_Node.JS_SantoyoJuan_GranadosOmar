const { ObjectId } = require("mongodb");
const Entregable = require("../models/Entregable");

class EntregableController {
  static async create({ proyectoId, nombre, descripcion, deadline }) {
    const pid = typeof proyectoId === "string" ? new ObjectId(proyectoId) : proyectoId;
    if (!nombre) throw new Error("Nombre de entregable requerido");

    return await Entregable.create({
      proyectoId: pid,
      nombre,
      descripcion: descripcion || "",
      deadline: deadline ? new Date(deadline) : new Date(),
      status: "pendiente"
    });
  }

  static async listByProyecto(proyectoId) {
    const pid = typeof proyectoId === "string" ? new ObjectId(proyectoId) : proyectoId;
    return await Entregable.listByProyecto(pid);
  }
}

module.exports = EntregableController;
