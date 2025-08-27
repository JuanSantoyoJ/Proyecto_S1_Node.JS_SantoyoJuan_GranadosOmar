const { ObjectId } = require("mongodb");
const Propuesta = require("../models/Propuesta");
const Proyecto = require("../models/Proyecto");
const Contrato = require("../models/Contrato");
const { createPropuestaFactory } = require("../factory/PropuestaFactory");

class PropuestaController {
  static async create({ clienteId, nombre, descripcion, precio }) {
    const payload = createPropuestaFactory({
      clienteId: typeof clienteId === "string" ? new ObjectId(clienteId) : clienteId,
      nombre,
      descripcion,
      precio
    });
    return await Propuesta.create(payload);
  }

  static async listByCliente(clienteId) {
    const id = typeof clienteId === "string" ? new ObjectId(clienteId) : clienteId;
    return await Propuesta.listByCliente(id);
  }

  static async listPendientes() {
    return await Propuesta.listPendientes();
  }

  /**
   * Aceptar propuesta:
   * - Cambia status a "aceptado"
   * - Crea proyecto (status active, fechaInicio now)
   * - Crea contrato (valor = precio de propuesta). terminos se pasan por parámetro.
   * Devuelve { propuesta, proyecto, contrato }
   */
  static async aceptar(propuestaId, { terminosContrato }) {
    const _id = typeof propuestaId === "string" ? new ObjectId(propuestaId) : propuestaId;
    const prop = await Propuesta.findById(_id);
    if (!prop) throw new Error("Propuesta no encontrada");
    if (prop.status !== "pendiente") throw new Error("La propuesta no está pendiente");

    const propuesta = await Propuesta.setStatus(_id, "aceptado");

    // Crear proyecto desde propuesta
    const proyecto = await Proyecto.create({
      clienteId: prop.clienteId,
      propuestaId: prop._id,
      nombre: prop.nombre,
      description: prop.descripcion || "",
      status: "active",
      fechaInicio: new Date()
    });

    // Crear contrato
    const contrato = await Contrato.create({
      proyectoId: proyecto._id,
      terminos: terminosContrato || "",
      valor: prop.precio,
      fechaInicio: new Date(),
      fechaFin: null,
      fechaAsignada: new Date()
    });

    return { propuesta, proyecto, contrato };
  }
}

module.exports = PropuestaController;
