const { getDB } = require("../db");

class Contrato {
  static col() {
    return getDB().collection("contrato");
  }

  static async create(doc) {
    const res = await this.col().insertOne(doc);
    return await this.col().findOne({ _id: res.insertedId });
  }

  static async findByProyecto(proyectoId) {
    return await this.col().findOne({ proyectoId });
  }
}

module.exports = Contrato;
