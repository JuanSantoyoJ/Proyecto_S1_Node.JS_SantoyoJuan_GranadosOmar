const prompt = require("prompt-sync")();
const UsuarioController = require("../controllers/usuarioController");
const PropuestaController = require("../controllers/propuestaController");
const ProyectoController = require("../controllers/proyectoController");
const EntregableController = require("../controllers/entregableController");
const TransaccionController = require("../controllers/transaccionController");
const ContratoController = require("../controllers/contratoController");
class AdminView {
  async show() {
    let continuar = true
    while(continuar){
    console.log(`
=== MENÚ ADMIN ===
1. Crear usuario (cliente)
2. Listar usuarios
3. Actualizar usuario
4. Ver propuestas pendientes y aceptar una
5. Crear entregable
6. Registrar transacción (ingreso/gasto)
7. Exportar data de cliente
0. Cerrar sesión
`);
    const op = prompt("Opción: ");

    if (op === "1") {
      const nombre = prompt("Nombre: ");
      const correo = prompt("Correo: ");
      const contrasena = prompt.hide("Contraseña: ");
      const empresa = prompt("Empresa (opcional): ");
      const u = await UsuarioController.createByAdmin({ nombre, correo, contrasena, empresa, rol: "cliente" });
      console.log("✅ Usuario creado:", u);
    }

    if (op === "2") {
      const lista = await UsuarioController.listAll();
      console.table(lista.map(u => ({
        _id: u._id.toString(),
        nombre: u.nombre,
        correo: u.correo,
        rol: u.rol,
        empresa: u.empresa || "-"
      })));
    }

    if (op === "3") {
      const lista = await UsuarioController.listAll();
      console.table(lista.map(u => ({
        _id: u._id.toString(),
        nombre: u.nombre,
        correo: u.correo,
        rol: u.rol,
        empresa: u.empresa || "-"
      })));
      const id = prompt("ID de usuario a actualizar: ");
      const nombre = prompt("Nuevo nombre (enter = igual): ");
      const correo = prompt("Nuevo correo (enter = igual): ");
      const empresa = prompt("Nueva empresa (enter = igual): ");
      const rol = prompt("Rol (admin/cliente, enter = igual): ");
      const data = {};
      if (nombre) data.nombre = nombre;
      if (correo) data.correo = correo;
      if (empresa) data.empresa = empresa;
      if (rol) data.rol = rol;
      const upd = await UsuarioController.updateUsuario(id, data);
      console.log("✅ Actualizado:", upd);
    }

    if (op === "4") {
      const pendientes = await PropuestaController.listPendientes();
      if (!pendientes.length) {
        console.log("No hay propuestas pendientes.");
      } else {
        console.table(pendientes.map(p => ({
          _id: p._id.toString(),
          clienteId: p.clienteId.toString(),
          nombre: p.nombre,
          precio: p.precio,
          status: p.status
        })));
        const idp = prompt("ID de propuesta a aceptar: ");
        const terminosContrato = prompt("Términos del contrato: ");
        const { proyecto, contrato } = await PropuestaController.aceptar(idp, { terminosContrato });
        console.log("✅ Propuesta aceptada.");
        console.log("📁 Proyecto:", proyecto);
        console.log("📄 Contrato:", contrato);
      }
    }

    if (op === "5") {
      const activos = await ProyectoController.listActivos();
      if (!activos.length) {
        console.log("No hay proyectos activos.");
      } else {
        console.table(activos.map(p => ({
          _id: p._id.toString(),
          clienteId: p.clienteId.toString(),
          nombre: p.nombre,
          descripcion: p.descripcion,
          status: p.status
        })));
      const proyectoId = prompt("ID del proyecto: ");
      const nombre = prompt("Nombre del entregable: ");
      const descripcion = prompt("Descripción: ");
      const deadline = prompt("Fecha límite (YYYY-MM-DD) (opcional): ");
      const ent = await EntregableController.create({ proyectoId, nombre, descripcion, deadline: deadline || null });
      console.log("✅ Entregable creado:", ent);
    }
  }
    if (op === "6") {
      const proyectoId = prompt("ID del proyecto: ");
      const tipo = prompt("Tipo (ingreso/gasto): ");
      const cantidad = prompt("Cantidad: ");
      const descripcion = prompt("Descripción: ");
      const tx = await TransaccionController.create({ proyectoId, tipo, cantidad, descripcion, rolQuienCrea: "admin" });
      console.log("✅ Transacción registrada:", tx);
    }
    // modalidad examen
    //
    //
    if ( op === "7"){
      const lista = await UsuarioController.listAll();
      console.table(lista.map(u => ({
        _id: u._id.toString(),
        nombre: u.nombre
      })
      ));
      const clienteID = prompt("ID del cliente: ");
      const idObtenido = await UsuarioController.findById(clienteID);
      console.log(idObtenido.nombre);
      const proyectoscliente = await ProyectoController.listByCliente(clienteID);
      for (let i = 0; i<proyectoscliente.length; i++){
        const contratos = await ContratoController.findByProyecto(proyectoscliente[i]._id)
        var contratoscliente = [contratos]
      }
        console.log(contratoscliente)
      console.log(proyectoscliente);
      for (let i = 0; i<proyectoscliente.length; i++){
      const entregables = await EntregableController.listByProyecto(proyectoscliente[i]._id)
      var entregablescliente = [entregables]
      }
      for ( let i = 0; i<proyectoscliente.length; i++){
        const transaccion = await TransaccionController.listByProyecto(proyectoscliente[i]._id);
        var transaccioncliente = [transaccion];
      }
      const datos = {
        _id: idObtenido._id,
        nombre: idObtenido.nombre,
        correo: idObtenido.correo,
        rol: idObtenido.rol,
        proyectos: proyectoscliente,
        contratos: contratoscliente,
        entregables: entregablescliente,
        transacciones: transaccioncliente,
      }
      const data = JSON.stringify(datos);
      const fs = require('fs');
      fs.writeFile('../exports/cliente_${idObtenido._id}', data, function(err, result){
        if(err) console.log("error", err);
        else console.log(result);
      })
    }
    if (op === "0") {
      console.log("🔒 Sesión cerrada");
      continuar=false;
      return null;
    }
  
  }
}
}


module.exports = AdminView;
