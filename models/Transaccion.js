const { getDB } = require("../db");

class Transaccion {
  static col() {
    return getDB().collection("transaccion");
  }

  static async create(doc) {
    const res = await this.col().insertOne(doc);
    return await this.col().findOne({ _id: res.insertedId });
  }

  static async listByProyecto(proyectoId) {
    return await this.col().find({ proyectoId }).toArray();
  }
}

module.exports = Transaccion;
