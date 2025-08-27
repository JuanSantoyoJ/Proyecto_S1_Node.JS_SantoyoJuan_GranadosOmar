const prompt = require("prompt-sync")();
const EntregableService = require("../controllers/entregableController.js");

async function createEntregable() {
  const { default: chalk } = await import("chalk");

  const proyectoId = prompt("ID del proyecto (ObjectId): ");
  const nombre = prompt("Nombre del entregable: ");
  const descripcion = prompt("Descripción: ");
  const deadline = prompt("Fecha límite (YYYY-MM-DD): ");

  const data = { proyectoId, nombre, descripcion, deadline };

  try {
    const entregable = await EntregableService.create(data);
    console.log(chalk.green("✅ Entregable creado:"), entregable);
  } catch (error) {
    console.log(chalk.red("❌ Error:"), error.message);
  }
}

async function listEntregables() {
  const entregables = await EntregableService.list();
  console.table(entregables);
}

async function updateEntregable() {
  await listEntregables();
  const id = prompt("ID del entregable a actualizar: ");
  const nombre = prompt("Nuevo nombre: ");

  const data = {};
  if (nombre) data.nombre = nombre;

  const updated = await EntregableService.update(id, data);
  console.log("✅ Entregable actualizado:", updated);
}

async function deleteEntregable() {
  await listEntregables();
  const id = prompt("ID del entregable a eliminar: ");
  const result = await EntregableService.delete(id);
  console.log("🗑️ Eliminado:", result);
}

module.exports = { createEntregable, listEntregables, updateEntregable, deleteEntregable };
