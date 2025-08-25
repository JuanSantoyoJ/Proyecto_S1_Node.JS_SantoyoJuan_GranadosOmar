const prompt = require("prompt-sync")(); // 👈 importante los paréntesis
const ClientService = require("../controllers/clienteController.js");

async function createClient() {
  const { default: chalk } = await import("chalk");
  
  const nombre = prompt("Nombre del cliente: ");
  const correo = prompt("Correo electrónico: ");
  const empresa = prompt("Empresa (opcional): ");

  const data = { nombre, correo, empresa: empresa || null };

  try {
    const client = await ClientService.create(data);
    console.log(chalk.green("✅ Cliente creado:"), client);
  } catch (error) {
    console.log(chalk.red("❌ Error al crear cliente:"), error.message);
  }
}

async function listClients() {
  const { default: chalk } = await import("chalk");
  
  try {
    const clients = await ClientService.list();
    console.table(clients);
  } catch (error) {
    console.log(chalk.red("❌ Error al listar clientes:"), error.message);
  }
}

async function updateClient() {
  await listClients();
  const { default: chalk } = await import("chalk");

  const clientId = prompt("ID del cliente a actualizar: ");
  const nombre = prompt("Nuevo nombre (dejar vacío para no cambiar): ");
  const correo = prompt("Nuevo correo (dejar vacío para no cambiar): ");
  const empresa = prompt("Nueva empresa (dejar vacío para no cambiar): ");

  try {
    const data = {};
    if (nombre) data.nombre = nombre;
    if (correo) data.correo = correo;
    if (empresa) data.empresa = empresa;

    const updatedClient = await ClientService.update(clientId, data);
    console.log(chalk.green("✅ Cliente actualizado:"), updatedClient);
    console.log(chalk.blue("\nLista de clientes actualizada:\n"));
    await listClients();
  } catch (error) {
    console.log(chalk.red("❌ Error al actualizar cliente:"), error.message);
  }
}
module.exports = { createClient, listClients, updateClient };