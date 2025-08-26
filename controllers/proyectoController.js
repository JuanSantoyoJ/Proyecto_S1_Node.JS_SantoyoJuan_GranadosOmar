const { connectDB } = require("../db.js");
const Proyecto = require("../models/Proyecto.js");

class ProyectoService {
  static async create(data) {
    const db = await connectDB();
    const ultimo = await db.collection("proyecto").find().sort({ id: -1 }).limit(1).toArray();

    let nextId = 1;
    if (ultimo.length > 0) nextId = ultimo[0].id + 1;

    const proyecto = new Proyecto({ id: nextId, ...data });

    await db.collection("proyecto").insertOne(proyecto);
    return proyecto;
  }

  static async list() {
    const db = await connectDB();
    return db.collection("proyecto").find().toArray();
  }

  static async update(proyectoId, data) {
    const db = await connectDB();
    const idNum = typeof proyectoId === "string" ? parseInt(proyectoId, 10) : proyectoId;
    await db.collection("proyecto").updateOne({ id: idNum }, { $set: data });
    return db.collection("proyecto").findOne({ id: idNum });
  }

  static async delete(proyectoId) {
    const db = await connectDB();
    const idNum = typeof proyectoId === "string" ? parseInt(proyectoId, 10) : proyectoId;
    await db.collection("proyecto").deleteOne({ id: idNum });
    return { deletedId: idNum };
  }
}

module.exports = ProyectoService;
