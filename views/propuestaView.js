const prompt = require("prompt-sync")();
const PropuestaService = require("../controllers/propuestaController.js");

async function createPropuesta() {
  const { default: chalk } = await import("chalk");

  const nombre = prompt("Nombre de la propuesta: ");
  const descripcion = prompt("Descripción: ");
  const precio = parseFloat(prompt("Precio: "));
  const status = prompt("Estado (pendiente/aceptado/rechazado): ");

  const data = { nombre, descripcion, precio, status };

  try {
    const propuesta = await PropuestaService.create(data);
    console.log(chalk.green("✅ Propuesta creada:"), propuesta);
  } catch (error) {
    console.log(chalk.red("❌ Error al crear propuesta:"), error.message);
  }
}

async function listPropuestas() {
  const { default: chalk } = await import("chalk");

  try {
    const propuestas = await PropuestaService.list();
    console.table(propuestas);
  } catch (error) {
    console.log(chalk.red("❌ Error al listar propuestas:"), error.message);
  }
}

async function updatePropuesta() {
  await listPropuestas();
  const { default: chalk } = await import("chalk");

  const propuestaId = prompt("ID de la propuesta a actualizar: ");
  const nombre = prompt("Nuevo nombre (dejar vacío para no cambiar): ");
  const descripcion = prompt("Nueva descripción (dejar vacío para no cambiar): ");
  const precioInput = prompt("Nuevo precio (dejar vacío para no cambiar): ");
  const status = prompt("Nuevo estado (pendiente/aceptado/rechazado, dejar vacío para no cambiar): ");

  try {
    const data = {};
    if (nombre) data.nombre = nombre;
    if (descripcion) data.descripcion = descripcion;
    if (precioInput) data.precio = parseFloat(precioInput);
    if (status) data.status = status;

    const updatedPropuesta = await PropuestaService.update(propuestaId, data);
    console.log(chalk.green("✅ Propuesta actualizada:"), updatedPropuesta);
    console.log(chalk.blue("\nLista de propuestas actualizada:\n"));
    await listPropuestas();
  } catch (error) {
    console.log(chalk.red("❌ Error al actualizar propuesta:"), error.message);
  }
}

async function deletePropuesta() {
  await listPropuestas();
  const { default: chalk } = await import("chalk");

  const propuestaId = prompt("ID de la propuesta a eliminar: ");

  try {
    const result = await PropuestaService.delete(propuestaId);
    console.log(chalk.green("🗑️ Propuesta eliminada:"), result);
    console.log(chalk.blue("\nLista de propuestas actualizada:\n"));
    await listPropuestas();
  } catch (error) {
    console.log(chalk.red("❌ Error al eliminar propuesta:"), error.message);
  }
}

module.exports = { createPropuesta, listPropuestas, updatePropuesta, deletePropuesta };
