const { ObjectId } = require("mongodb");
const Usuario = require("../models/Usuario");
const { createUsuarioFactory } = require("../factory/UsuarioFactory");

class UsuarioController {
  static async register(data) {
    const payload = createUsuarioFactory({ ...data, rol: "cliente" });
    const existe = await Usuario.findByCorreo(payload.correo);
    if (existe) throw new Error("Correo ya registrado");
    const res = await Usuario.create(payload);
    return { _id: res.insertedId, ...payload, contrasena: undefined };
  }

  static async createByAdmin(data) {
    const payload = createUsuarioFactory(data); // admin puede setear rol
    const existe = await Usuario.findByCorreo(payload.correo);
    if (existe) throw new Error("Correo ya registrado");
    const res = await Usuario.create(payload);
    return { _id: res.insertedId, ...payload, contrasena: undefined };
  }

  static async login(correo, contrasena) {
    const user = await Usuario.findByCorreo(correo);
    if (!user || user.contrasena !== contrasena) return null;
    delete user.contrasena;
    return user;
  }

  static async listAll() {
    return await Usuario.list();
  }

  static async updateUsuario(id, data) {
    const _id = typeof id === "string" ? new ObjectId(id) : id;
    // No permitir cambiar contrasena aquí (o hacerlo explícito si lo deseas)
    if ("contrasena" in data) delete data.contrasena;
    return await Usuario.updateById(_id, data);
  }
}

module.exports = UsuarioController;
