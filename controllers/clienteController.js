const { connectDB } = require("../db.js");
const Client = require("../models/Cliente.js");

class ClientService {
  static async create(data) {
    const db = await connectDB();

    // Buscar último id
    const ultimo = await db.collection("cliente").find().sort({ id: -1 }).limit(1).toArray();

    let nextId = 1;
    if (ultimo.length > 0) {
      nextId = ultimo[0].id + 1;
    }

    const newClient = {
      id: nextId,
      ...data,
      createdAt: new Date()
    };

    await db.collection("cliente").insertOne(newClient);
    return newClient;
  }
  static async list() {
    const db = await connectDB();
    return db.collection("clients").find().toArray();
  }
  static async update(clientId, data) {
    const db = await connectDB();
    await db.collection("clients").updateOne({ _id: clientId }, { $set: data });
    return db.collection("clients").findOne({ _id: clientId });
  }
}
module.exports = ClientService;