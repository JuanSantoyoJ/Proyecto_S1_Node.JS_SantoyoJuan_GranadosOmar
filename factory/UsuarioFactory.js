function createUsuarioFactory({ nombre, correo, contrasena, empresa, rol }) {
  if (!nombre || typeof nombre !== "string") throw new Error("Nombre requerido");
  if (!correo || !/\S+@\S+\.\S+/.test(correo)) throw new Error("Correo inválido");
  if (!contrasena || typeof contrasena !== "string") throw new Error("Contraseña requerida");
  const rolesPermitidos = ["admin", "cliente"];
  const rolFinal = rolesPermitidos.includes(rol) ? rol : "cliente";

  return {
    nombre,
    correo,
    contrasena,       // (opcional: hashear en el futuro)
    empresa: empresa || null,
    rol: rolFinal,
    createdAt: new Date()
  };
}

module.exports = { createUsuarioFactory };
