const inquirer = require("inquirer");
const ProposalService = require("../controllers/ProposalController.js");

async function createProposal() {
  const data = await inquirer.prompt([
    { name: "clienteId", message: "ID del cliente:" },
    { name: "descripcion", message: "Descripción:" },
    { name: "precio", message: "Precio:" },
    { name: "plazo", message: "Plazo (días):" }
  ]);
  const proposal = await ProposalService.create(data);
  console.log("✅ Propuesta creada:", proposal);
}

async function acceptProposal() {
  const { proposalId } = await inquirer.prompt([
    { name: "proposalId", message: "ID de la propuesta a aceptar:" }
  ]);
  const project = await ProposalService.aceptar(proposalId);
  console.log("✅ Propuesta aceptada. Proyecto generado:", project);
}

module.exports = { createProposal, acceptProposal };