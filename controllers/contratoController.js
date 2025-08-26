const { connectDB } = require("../db.js");
const Contrato = require("../models/Contrato.js");

class ContratoService {
  static async create(data) {
    const db = await connectDB();
    const ultimo = await db.collection("contrato").find().sort({ id: -1 }).limit(1).toArray();

    let nextId = 1;
    if (ultimo.length > 0) nextId = ultimo[0].id + 1;

    const contrato = new Contrato({ id: nextId, ...data });
    await db.collection("contrato").insertOne(contrato);
    return contrato;
  }

  static async list() {
    const db = await connectDB();
    return db.collection("contrato").find().toArray();
  }

  static async update(contratoId, data) {
    const db = await connectDB();
    const idNum = typeof contratoId === "string" ? parseInt(contratoId, 10) : contratoId;
    await db.collection("contrato").updateOne({ id: idNum }, { $set: data });
    return db.collection("contrato").findOne({ id: idNum });
  }

  static async delete(contratoId) {
    const db = await connectDB();
    const idNum = typeof contratoId === "string" ? parseInt(contratoId, 10) : contratoId;
    await db.collection("contrato").deleteOne({ id: idNum });
    return { deletedId: idNum };
  }
}

module.exports = ContratoService;
