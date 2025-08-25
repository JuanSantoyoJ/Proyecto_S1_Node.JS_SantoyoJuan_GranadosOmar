const { connectDB } = require("../db.js");
const Client = require("../models/cliente.js");

class ClientService {
  static async create(data) {
    const db = await connectDB();
    const client = new Client(data);
    await db.collection("clients").insertOne(client);
    return client;
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