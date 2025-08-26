const { connectDB } = require("../db.js");
const Entregable = require("../models/Entregable.js");

class EntregableService {
  static async create(data) {
    const db = await connectDB();
    const ultimo = await db.collection("entregable").find().sort({ id: -1 }).limit(1).toArray();

    let nextId = 1;
    if (ultimo.length > 0) nextId = ultimo[0].id + 1;

    const entregable = new Entregable({ id: nextId, ...data });
    await db.collection("entregable").insertOne(entregable);
    return entregable;
  }

  static async list() {
    const db = await connectDB();
    return db.collection("entregable").find().toArray();
  }

  static async update(entregableId, data) {
    const db = await connectDB();
    const idNum = typeof entregableId === "string" ? parseInt(entregableId, 10) : entregableId;
    await db.collection("entregable").updateOne({ id: idNum }, { $set: data });
    return db.collection("entregable").findOne({ id: idNum });
  }

  static async delete(entregableId) {
    const db = await connectDB();
    const idNum = typeof entregableId === "string" ? parseInt(entregableId, 10) : entregableId;
    await db.collection("entregable").deleteOne({ id: idNum });
    return { deletedId: idNum };
  }
}

module.exports = EntregableService;
