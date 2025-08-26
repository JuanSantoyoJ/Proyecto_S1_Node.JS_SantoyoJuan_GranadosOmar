const prompt = require("prompt-sync")();
const ProyectoService = require("../controllers/proyectoController.js");

async function createProyecto() {
  const { default: chalk } = await import("chalk");

  const clienteId = prompt("ID del cliente (ObjectId): ");
  const nombre = prompt("Nombre del proyecto: ");
  const description = prompt("Descripción: ");
  const status = prompt("Estado (active/paused/completed/cancelled): ");
  const fechaInicio = prompt("Fecha de inicio (YYYY-MM-DD): ");
  const endDate = prompt("Fecha fin (opcional, YYYY-MM-DD): ");

  const data = {
    clienteId,
    nombre,
    description,
    status,
    fechaInicio,
    endDate: endDate || null
  };

  try {
    const proyecto = await ProyectoService.create(data);
    console.log(chalk.green("✅ Proyecto creado:"), proyecto);
  } catch (error) {
    console.log(chalk.red("❌ Error al crear proyecto:"), error.message);
  }
}

async function listProyectos() {
  const proyectos = await ProyectoService.list();
  console.table(proyectos);
}

module.exports = { createProyecto, listProyectos };
