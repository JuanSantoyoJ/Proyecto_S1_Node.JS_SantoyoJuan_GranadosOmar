const { connectDB } = require("../db");
const { ObjectId } = require("mongodb");

class Propuesta {
  static async col() {
    const db = await connectDB();
    return db.collection("propuesta");
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

  static async listPendientes() {
    const col = await this.col();
    return await col.find({ status: "pendiente" }).toArray();
  }

  static async findById(id) {
    const col = await this.col();
    const _id = typeof id === "string" ? new ObjectId(id) : id;
    return await col.findOne({ _id });
  }

  static async setStatus(id, status) {
    const col = await this.col();
    const _id = typeof id === "string" ? new ObjectId(id) : id;
    await col.updateOne({ _id }, { $set: { status } });
    return await col.findOne({ _id });
  }
}

module.exports = Propuesta;
