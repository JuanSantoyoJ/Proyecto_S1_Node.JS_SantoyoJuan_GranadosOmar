const { connectDB } = require("../db");
const { ObjectId } = require("mongodb");

class Usuario {
  static async col() {
    const db = await connectDB();
    return db.collection("usuarios");
  }

  static async create(doc) {
    const col = await this.col();
    return await col.insertOne(doc);
  }

  static async findByCorreo(correo) {
    const col = await this.col();
    return await col.findOne({ correo });
  }

  static async findById(id) {
    const col = await this.col();
    const _id = typeof id === "string" ? new ObjectId(id) : id;
    return await col.findOne({ _id });
  }

  static async list() {
    const col = await this.col();
    return await col.find({}, { projection: { contrasena: 0 } }).toArray();
  }

  static async updateById(id, data) {
    const col = await this.col();
    const _id = typeof id === "string" ? new ObjectId(id) : id;
    await col.updateOne({ _id }, { $set: data });
    return await col.findOne({ _id }, { projection: { contrasena: 0 } });
  }
}

module.exports = Usuario;
