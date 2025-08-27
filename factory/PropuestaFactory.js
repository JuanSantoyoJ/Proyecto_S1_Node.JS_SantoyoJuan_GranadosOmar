function createPropuestaFactory({ clienteId, nombre, descripcion, precio }) {
  if (!clienteId) throw new Error("clienteId requerido");
  if (!nombre) throw new Error("Nombre de propuesta requerido");
  const precioNum = Number(precio);
  if (Number.isNaN(precioNum) || precioNum < 0) throw new Error("Precio inválido");

  return {
    clienteId,
    nombre,
    descripcion: descripcion || "",
    precio: precioNum,
    status: "pendiente",
    createdAt: new Date()
  };
}

module.exports = { createPropuestaFactory };
