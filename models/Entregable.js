const { connectDB } = require("../db");
const { ObjectId } = require("mongodb");

class Entregable {
  static async col() {
    const db = await connectDB();
    return db.collection("entregable");
  }

  static async create(doc) {
    const col = await this.col();
    const res = await col.insertOne(doc);
    return await col.findOne({ _id: res.insertedId });
  }

  static async listByProyecto(proyectoId) {
    const col = await this.col();
    return await col.find({ proyectoId }).toArray();
  }

  static async findById(id) {
    const col = await this.col();
    const _id = typeof id === "string" ? new ObjectId(id) : id;
    return await col.findOne({ _id });
  }
}

module.exports = Entregable;
