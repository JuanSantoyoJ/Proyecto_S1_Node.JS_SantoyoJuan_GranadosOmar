const prompt = require("prompt-sync")(); // 👈 importante los paréntesis
const ClientService = require("../controllers/ClientController.js");

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
  const { default: chalk } = await import("chalk");

  const clientId = prompt("ID del cliente a actualizar: ");
  const nombre = prompt("Nuevo nombre (dejar vacío para no cambiar): ");
  const correo = prompt("Nuevo correo (dejar vacío para no cambiar): ");
  const empresa = prompt("Nueva empresa (dejar vacío para no cambiar): ");

  
}
module.exports = { createClient, listClients, updateClient };