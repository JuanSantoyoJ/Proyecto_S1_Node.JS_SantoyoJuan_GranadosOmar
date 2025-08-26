const prompt = require("prompt-sync")();
const ContratoService = require("../controllers/contratoController.js");

async function createContrato() {
  const { default: chalk } = await import("chalk");

  const proyectoId = prompt("ID del proyecto (ObjectId): ");
  const terminos = prompt("Términos: ");
  const valor = parseFloat(prompt("Valor del contrato: "));
  const fechaInicio = prompt("Fecha inicio (YYYY-MM-DD): ");
  const fechaFin = prompt("Fecha fin (YYYY-MM-DD): ");
  const fechaAsignada = prompt("Fecha asignada (YYYY-MM-DD): ");

  const data = { proyectoId, terminos, valor, fechaInicio, fechaFin, fechaAsignada };

  try {
    const contrato = await ContratoService.create(data);
    console.log(chalk.green("✅ Contrato creado:"), contrato);
  } catch (error) {
    console.log(chalk.red("❌ Error:"), error.message);
  }
}

async function listContratos() {
  const contratos = await ContratoService.list();
  console.table(contratos);
}

async function updateContrato() {
  await listContratos();
  const id = prompt("ID del contrato a actualizar: ");
  const terminos = prompt("Nuevos términos: ");
  const valor = prompt("Nuevo valor: ");

  const data = {};
  if (terminos) data.terminos = terminos;
  if (valor) data.valor = parseFloat(valor);

  const updated = await ContratoService.update(id, data);
  console.log("✅ Contrato actualizado:", updated);
}

async function deleteContrato() {
  await listContratos();
  const id = prompt("ID del contrato a eliminar: ");
  const result = await ContratoService.delete(id);
  console.log("🗑️ Eliminado:", result);
}

module.exports = { createContrato, listContratos, updateContrato, deleteContrato };
