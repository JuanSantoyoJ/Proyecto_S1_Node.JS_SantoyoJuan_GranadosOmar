const prompt = require("prompt-sync")();
const TransaccionService = require("../controllers/transaccionController.js");

async function createTransaccion() {
  const { default: chalk } = await import("chalk");

  const proyectoId = prompt("ID del proyecto (ObjectId): ");
  const tipo = prompt("Tipo (ingreso/gasto): ");
  const cantidad = parseFloat(prompt("Cantidad: "));
  const descripcion = prompt("Descripción: ");
  const fecha = prompt("Fecha (YYYY-MM-DD): ");

  const data = { proyectoId, tipo, cantidad, descripcion, fecha };

  try {
    const transaccion = await TransaccionService.create(data);
    console.log(chalk.green("✅ Transacción creada:"), transaccion);
  } catch (error) {
    console.log(chalk.red("❌ Error:"), error.message);
  }
}

async function listTransacciones() {
  const transacciones = await TransaccionService.list();
  console.table(transacciones);
}

async function updateTransaccion() {
  await listTransacciones();
  const id = prompt("ID de la transacción a actualizar: ");
  const tipo = prompt("Nuevo tipo (ingreso/gasto): ");
  const cantidad = prompt("Nueva cantidad: ");

  const data = {};
  if (tipo) data.tipo = tipo;
  if (cantidad) data.cantidad = parseFloat(cantidad);

  const updated = await TransaccionService.update(id, data);
  console.log("✅ Transacción actualizada:", updated);
}

async function deleteTransaccion() {
  await listTransacciones();
  const id = prompt("ID de la transacción a eliminar: ");
  const result = await TransaccionService.delete(id);
  console.log("🗑️ Eliminado:", result);
}

module.exports = { createTransaccion, listTransacciones, updateTransaccion, deleteTransaccion };
