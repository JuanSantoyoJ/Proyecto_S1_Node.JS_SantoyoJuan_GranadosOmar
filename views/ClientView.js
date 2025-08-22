const prompt = require("prompt-sync")(); // 👈 importante los paréntesis
const chalk = require("chalk");
const ClientService = require("../controllers/ClientController.js");

async function crearCliente() {
  const nombre = prompt("Nombre del cliente: ");
  const correo = prompt("Correo electrónico: ");
  const empresa = prompt("Empresa (opcional): ");

  const data = { nombre, correo, empresa: empresa || null };

  const cliente = await ClientService.create(data);
  console.log(chalk.green("✅ Cliente creado:"), cliente);
}

async function listarClientes() {
  const clientes = await ClientService.list();
  console.table(clientes);
}

module.exports = { crearCliente, listarClientes };
