const { connectDB } = require("../db.js");
const Transaccion = require("../models/Transaccion.js");

class TransaccionService {
  static async create(data) {
    const db = await connectDB();
    const ultimo = await db.collection("transaccion").find().sort({ id: -1 }).limit(1).toArray();

    let nextId = 1;
    if (ultimo.length > 0) nextId = ultimo[0].id + 1;

    const transaccion = new Transaccion({ id: nextId, ...data });
    await db.collection("transaccion").insertOne(transaccion);
    return transaccion;
  }

  static async list() {
    const db = await connectDB();
    return db.collection("transaccion").find().toArray();
  }

  static async update(transaccionId, data) {
    const db = await connectDB();
    const idNum = typeof transaccionId === "string" ? parseInt(transaccionId, 10) : transaccionId;
    await db.collection("transaccion").updateOne({ id: idNum }, { $set: data });
    return db.collection("transaccion").findOne({ id: idNum });
  }

  static async delete(transaccionId) {
    const db = await connectDB();
    const idNum = typeof transaccionId === "string" ? parseInt(transaccionId, 10) : transaccionId;
    await db.collection("transaccion").deleteOne({ id: idNum });
    return { deletedId: idNum };
  }
}

module.exports = TransaccionService;
