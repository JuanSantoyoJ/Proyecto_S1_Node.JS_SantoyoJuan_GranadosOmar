const { getDB } = require("../db");

class Entregable {
  static col() {
    return getDB().collection("entregable");
  }

  static async create(doc) {
    const res = await this.col().insertOne(doc);
    return await this.col().findOne({ _id: res.insertedId });
  }

  static async listByProyecto(proyectoId) {
    return await this.col().find({ proyectoId }).toArray();
  }
}

module.exports = Entregable;
