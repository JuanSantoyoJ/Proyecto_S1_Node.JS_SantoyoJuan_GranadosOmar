const prompt = require("prompt-sync")(); // 👈 importante los paréntesis
const chalk = require("chalk");
const ClientService = require("../controllers/ClientController.js");

async function createClient() {
  const nombre = prompt("Nombre del cliente: ");
  const correo = prompt("Correo electrónico: ");
  const empresa = prompt("Empresa (opcional): ");

  const data = { nombre, correo, empresa: empresa || null };

  const client = await ClientService.create(data);
  console.log(chalk.green("✅ Cliente creado:"), client);
}

async function listClients() {
  const clients = await ClientService.list();
  console.table(clients);
}

module.exports = { createClient, listClients };
