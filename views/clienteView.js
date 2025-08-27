const prompt = require("prompt-sync")();
const UsuarioController = require("../controllers/usuarioController");
const PropuestaController = require("../controllers/propuestaController");
const ProyectoController = require("../controllers/proyectoController");
const TransaccionController = require("../controllers/transaccionController");

class ClienteView {
  async show(currentUser) {
    console.log(`
=== MENÚ CLIENTE ===
1. Ver mi información
2. Actualizar mi información
3. Crear propuesta
4. Registrar ingreso en un proyecto
0. Cerrar sesión
`);
    const op = prompt("Opción: ");

    if (op === "1") {
      console.log({
        _id: currentUser._id.toString(),
        nombre: currentUser.nombre,
        correo: currentUser.correo,
        empresa: currentUser.empresa || null,
        rol: currentUser.rol
      });
    }

    if (op === "2") {
      const nombre = prompt("Nuevo nombre (enter = igual): ");
      const correo = prompt("Nuevo correo (enter = igual): ");
      const empresa = prompt("Nueva empresa (enter = igual): ");
      const data = {};
      if (nombre) data.nombre = nombre;
      if (correo) data.correo = correo;
      if (empresa) data.empresa = empresa;
      const upd = await UsuarioController.updateUsuario(currentUser._id, data);
      console.log("✅ Actualizado:", upd);
      return upd; // refrescamos usuario
    }

    if (op === "3") {
      const nombre = prompt("Nombre de la propuesta: ");
      const descripcion = prompt("Descripción: ");
      const precio = prompt("Precio: ");
      const prop = await PropuestaController.create({ clienteId: currentUser._id, nombre, descripcion, precio });
      console.log("✅ Propuesta creada:", prop);
    }

    if (op === "4") {
      const proyectos = await ProyectoController.listByCliente(currentUser._id);
      if (!proyectos.length) {
        console.log("Aún no tienes proyectos.");
      } else {
        console.table(proyectos.map(p => ({
          _id: p._id.toString(),
          nombre: p.nombre,
          status: p.status,
          fechaInicio: p.fechaInicio?.toISOString()?.slice(0,10)
        })));
        const proyectoId = prompt("ID del proyecto: ");
        const cantidad = prompt("Cantidad: ");
        const descripcion = prompt("Descripción: ");
        const tx = await TransaccionController.create({ proyectoId, tipo: "ingreso", cantidad, descripcion, rolQuienCrea: "cliente" });
        console.log("✅ Ingreso registrado:", tx);
      }
    }

    if (op === "0") {
      console.log("🔒 Sesión cerrada");
      return null;
    }

    return currentUser;
  }
}

module.exports = ClienteView;
