const { getDB } = require("../db");

class Proyecto {
  static col() {
    return getDB().collection("proyecto");
  }

  static async create(doc) {
    const res = await this.col().insertOne(doc);
    return await this.col().findOne({ _id: res.insertedId });
  }

  static async listByCliente(clienteId) {
    return await this.col().find({ clienteId }).toArray();
  }

  static async findById(_id) {
    return await this.col().findOne({ _id });
  }
}

module.exports = Proyecto;
