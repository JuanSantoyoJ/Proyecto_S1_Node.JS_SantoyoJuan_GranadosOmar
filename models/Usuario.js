const { getDB } = require("../db");

class Usuario {
  static col() {
    return getDB().collection("usuarios");
  }

  static async create(doc) {
    return await this.col().insertOne(doc);
  }

  static async findByCorreo(correo) {
    return await this.col().findOne({ correo });
  }

  static async findById(id) {
    return await this.col().findOne({ _id: id });
  }

  static async list() {
    return await this.col().find({}, { projection: { contrasena: 0 } }).toArray();
  }

  static async updateById(_id, data) {
    await this.col().updateOne({ _id }, { $set: data });
    return await this.col().findOne({ _id }, { projection: { contrasena: 0 } });
  }
}

module.exports = Usuario;
