const { getDB } = require("../db.js");

async function login(correo, contrasena) {
  const db = getDB();
  const user = await db.collection("usuarios").findOne({ correo, contrasena });
  return user; // Aquí también podrías ocultar la contraseña si quieres
}

module.exports = { login };
