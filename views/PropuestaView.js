const inquirer = require("inquirer");
const PropuestaService = require("../controllers/PropuestaController.js");

async function crearPropuesta() {
  const data = await inquirer.prompt([
    { name: "clienteId", message: "ID del cliente:" },
    { name: "descripcion", message: "Descripción:" },
    { name: "precio", message: "Precio:" },
    { name: "plazo", message: "Plazo (días):" }
  ]);
  const propuesta = await PropuestaService.create(data);
  console.log("✅ Propuesta creada:", propuesta);
}

async function aceptarPropuesta() {
  const { propuestaId } = await inquirer.prompt([
    { name: "propuestaId", message: "ID de la propuesta a aceptar:" }
  ]);
  const proyecto = await PropuestaService.aceptar(propuestaId);
  console.log("✅ Propuesta aceptada. Proyecto generado:", proyecto);
}

module.exports = { crearPropuesta, aceptarPropuesta };