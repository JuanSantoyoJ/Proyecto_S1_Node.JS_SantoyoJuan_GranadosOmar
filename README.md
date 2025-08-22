// 📂 models/Client.js
// 👉 Definición del modelo Cliente con validaciones
class Client {
  constructor({ nombre, correo, empresa }) {
    if (!nombre || typeof nombre !== "string") {
      throw new Error("El nombre es requerido y debe ser un string");
    }
    if (!correo || !/\S+@\S+\.\S+/.test(correo)) {
      throw new Error("El correo no es válido");
    }
    this.nombre = nombre;
    this.correo = correo;
    this.empresa = empresa || null;
    this.createdAt = new Date();
  }
}

module.exports = Client;

// 📂 models/Propuesta.js
class Propuesta {
  constructor({ clienteId, descripcion, precio, plazo }) {
    if (!clienteId) throw new Error("Debe asociarse a un cliente");
    this.clienteId = clienteId;
    this.descripcion = descripcion;
    this.precio = precio;
    this.plazo = plazo;
    this.estado = "pendiente"; // pendiente, aceptada, rechazada
    this.createdAt = new Date();
  }
}
module.exports = Propuesta;

// 📂 models/Proyecto.js
class Proyecto {
  constructor({ clienteId, propuestaId, nombre }) {
    this.clienteId = clienteId;
    this.propuestaId = propuestaId;
    this.nombre = nombre;
    this.estado = "activo"; // activo, pausado, finalizado, cancelado
    this.createdAt = new Date();
  }
}
module.exports = Proyecto;

// 📂 models/Contrato.js
class Contrato {
  constructor({ proyectoId, condiciones, fechaInicio, fechaFin, valor }) {
    this.proyectoId = proyectoId;
    this.condiciones = condiciones;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.valor = valor;
  }
}
module.exports = Contrato;

// 📂 models/Entregable.js
class Entregable {
  constructor({ proyectoId, titulo, fechaLimite }) {
    this.proyectoId = proyectoId;
    this.titulo = titulo;
    this.fechaLimite = fechaLimite;
    this.estado = "pendiente"; // pendiente, entregado, aprobado, rechazado
  }
}
module.exports = Entregable;
// 📂 models/Transaccion.js
class Transaccion {
  constructor({ proyectoId, tipo, monto, fecha }) {
    if (!["ingreso", "egreso"].includes(tipo)) throw new Error("Tipo inválido");
    this.proyectoId = proyectoId;
    this.tipo = tipo;
    this.monto = monto;
    this.fecha = fecha || new Date();
  }
}
module.exports = Transaccion;

### SERVICIOS (controller)
// 📂 services/clientService.js
const { connectDB } = require("../config/database");
const Client = require("../models/Client");

class ClientService {
  static async create(data) {
    const db = await connectDB();
    const client = new Client(data);
    await db.collection("clientes").insertOne(client);
    return client;
  }
  static async list() {
    const db = await connectDB();
    return db.collection("clientes").find().toArray();
  }
}
module.exports = ClientService;
// 📂 services/propuestaService.js
const { connectDB } = require("../config/database");
const Propuesta = require("../models/Propuesta");
const Proyecto = require("../models/Proyecto");

class PropuestaService {
  static async create(data) {
    const db = await connectDB();
    const propuesta = new Propuesta(data);
    await db.collection("propuestas").insertOne(propuesta);
    return propuesta;
  }

  static async aceptar(propuestaId) {
    const db = await connectDB();
    const propuesta = await db.collection("propuestas").findOne({ _id: propuestaId });
    if (!propuesta) throw new Error("Propuesta no encontrada");

    await db.collection("propuestas").updateOne(
      { _id: propuestaId },
      { $set: { estado: "aceptada" } }
    );

    // Crear proyecto automáticamente
    const proyecto = new Proyecto({
      clienteId: propuesta.clienteId,
      propuestaId: propuestaId,
      nombre: "Proyecto generado"
    });
    await db.collection("proyectos").insertOne(proyecto);
    return proyecto;
  }
}
module.exports = PropuestaService;

### COMANDOS CLI(view)

// 📂 commands/clientCommands.js
const inquirer = require("inquirer");
const chalk = require("chalk");
const ClientService = require("../services/clientService");

async function crearCliente() {
  const data = await inquirer.prompt([
    { name: "nombre", message: "Nombre del cliente:" },
    { name: "correo", message: "Correo electrónico:" },
    { name: "empresa", message: "Empresa (opcional):" }
  ]);
  const cliente = await ClientService.create(data);
  console.log(chalk.green("✅ Cliente creado:"), cliente);
}

async function listarClientes() {
  const clientes = await ClientService.list();
  console.table(clientes);
}

module.exports = { crearCliente, listarClientes };

// 📂 commands/propuestaCommands.js
const inquirer = require("inquirer");
const PropuestaService = require("../services/propuestaService");

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

### app.js

// 📂 index.js
const inquirer = require("inquirer");
const { crearCliente, listarClientes } = require("./commands/clientCommands");
const { crearPropuesta, aceptarPropuesta } = require("./commands/propuestaCommands");

async function main() {
  const { opcion } = await inquirer.prompt([
    {
      type: "list",
      name: "opcion",
      message: "Selecciona una opción:",
      choices: [
        "Crear cliente",
        "Listar clientes",
        "Crear propuesta",
        "Aceptar propuesta",
        "Salir"
      ]
    }
  ]);

  if (opcion === "Crear cliente") await crearCliente();
  if (opcion === "Listar clientes") await listarClientes();
  if (opcion === "Crear propuesta") await crearPropuesta();
  if (opcion === "Aceptar propuesta") await aceptarPropuesta();
  if (opcion === "Salir") process.exit(0);

  main(); // vuelve al menú
}

main();