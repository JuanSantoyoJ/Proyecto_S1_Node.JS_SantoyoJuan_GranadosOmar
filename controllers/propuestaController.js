const { connectDB } = require("../db.js");
const Propuesta = require("../models/Propuesta.js");

class PropuestaService {
  static async create(data) {
    const db = await connectDB();

    // Buscar último id
    const ultimo = await db.collection("propuesta").find().sort({ id: -1 }).limit(1).toArray();

    let nextId = 1;
    if (ultimo.length > 0) {
      nextId = ultimo[0].id + 1;
    }

    const propuesta = new Propuesta({
      id: nextId,
      ...data
    });

    await db.collection("propuesta").insertOne(propuesta);
    return propuesta;
  }

  static async list() {
    const db = await connectDB();
    return db.collection("propuesta").find().toArray();
  }

  static async update(propuestaId, data) {
    const db = await connectDB();
    const idNum = typeof propuestaId === "string" ? parseInt(propuestaId, 10) : propuestaId;

    await db.collection("propuesta").updateOne({ id: idNum }, { $set: data });
    return db.collection("propuesta").findOne({ id: idNum });
  }

  static async delete(propuestaId) {
    const db = await connectDB();
    const idNum = typeof propuestaId === "string" ? parseInt(propuestaId, 10) : propuestaId;
    await db.collection("propuesta").deleteOne({ id: idNum });
    return { deletedId: idNum };
  }
}

module.exports = PropuestaService;
