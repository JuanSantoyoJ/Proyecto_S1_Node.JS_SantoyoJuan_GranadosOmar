const { connectDB } = require("../db");
const { ObjectId } = require("mongodb");

class Proyecto {
  static async col() {
    const db = await connectDB();
    return db.collection("proyecto");
  }

  static async create(doc) {
    const col = await this.col();
    const res = await col.insertOne(doc);
    return await col.findOne({ _id: res.insertedId });
  }

  static async listByCliente(clienteId) {
    const col = await this.col();
    return await col.find({ clienteId }).toArray();
  }

  static async findById(id) {
    const col = await this.col();
    const _id = typeof id === "string" ? new ObjectId(id) : id;
    return await col.findOne({ _id });
  }
}

module.exports = Proyecto;
