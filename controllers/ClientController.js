const { connectDB } = require("../db.js");
const Client = require("../models/Client.js");

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
}
module.exports = ClientService;