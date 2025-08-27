const { getDB } = require("../db");

class Propuesta {
  static col() {
    return getDB().collection("propuesta");
  }

  static async create(doc) {
    const res = await this.col().insertOne(doc);
    return await this.col().findOne({ _id: res.insertedId });
  }

  static async listByCliente(clienteId) {
    return await this.col().find({ clienteId }).toArray();
  }

  static async listPendientes() {
    return await this.col().find({ status: "pendiente" }).toArray();
  }

  static async findById(_id) {
    return await this.col().findOne({ _id });
  }

  static async setStatus(_id, status) {
    await this.col().updateOne({ _id }, { $set: { status } });
    return await this.col().findOne({ _id });
  }
}

module.exports = Propuesta;
