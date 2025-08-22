const { connectDB } = require("../db.js");
const Propuesta = require("../models/Propuesta.js");
const Proyecto = require("../models/Proyecto.js");

class PropuestaService {
  static async create(data) {
    const db = await connectDB();
    const propuesta = new Propuesta(data);
    await db.collection("propuestas").insertOne(propuesta);
    return propuesta;
  }

  static async aceptar(propuestaId) {
    const db = await connectDB();
    const propuesta = await db.collection("propuestas").findOne({ _id: propuestaId });
    if (!propuesta) throw new Error("Propuesta no encontrada");

    await db.collection("propuestas").updateOne(
      { _id: propuestaId },
      { $set: { estado: "aceptada" } }
    );

    // Crear proyecto automáticamente
    const proyecto = new Proyecto({
      clienteId: propuesta.clienteId,
      propuestaId: propuestaId,
      nombre: "Proyecto generado"
    });
    await db.collection("proyectos").insertOne(proyecto);
    return proyecto;
  }
}
module.exports = PropuestaService;