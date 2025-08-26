/*
* DDL (Data Definition Language)
*
* Este script contiene los comandos para crear la estructura de la base de datos
* y las colecciones para el Gestor de Portafolio de Proyectos Freelance.
*
* Base de Datos: GestorFreelanceDB
*/

// --- Seleccionar la Base de Datos ---
use('Proyecto_NodeJS');

// --- Creación de Colecciones con Validación de Esquema ---

// 1. Colección para el perfil del Freelancer (Usuario de la App)
// Esta colección contendrá un único documento con la información del usuario.

// 2. Colección de Clientes
db.createCollection('cliente', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name',"id", 'email', 'createdAt'],
      properties: {
        name:{
          bsonType:"string"
        },
        id:{
          bsonType:["string","number"]
        },
        email:{
          bsonType:"string"
        },
        createdAT:{
          bsonType:"date"
        }
      }
    }
  }
});

// 3. Colección de Propuestas
db.createCollection('propuesta', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['nombre', 'precio', 'status', 'createdAt'],
      properties: {
        nombre: {
          bsonType: 'string'
        },
        descripcion: {
          bsonType: 'string'
        },
        precio: {
          bsonType: ['number',"int"]
        },
        status: {
          enum: ['pendiente', 'aceptado', 'rechazado']
        },
        createdAt: {
          bsonType: 'date'
        }
      }
    }
  }
});

// 4. Colección de Proyectos
db.createCollection('proyecto', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['clienteId','nombre', 'status', 'fechaInicio'],
      properties: {
        clientId: {
          bsonType: 'objectId',
          description: 'Referencia al cliente.'
        },
        nombre: {
          bsonType: 'string',
          description: 'Nombre del proyecto.'
        },
        description: {
          bsonType: 'string',
          description: 'Descripción del proyecto.'
        },
        status: {
          enum: ['active', 'paused', 'completed', 'cancelled'],
          description: 'Estado actual del proyecto.'
        },
        progreso: {
          bsonType: 'array',
          items: {
            bsonType: 'object',
            required: ['date', 'note'],
            properties: {
              date: { bsonType: 'date' },
              note: { bsonType: 'string' }
            }
          }
        },
        fechaInicio: {
          bsonType: 'date'
        },
        endDate: {
          bsonType: 'date'
        }
      }
    }
  }
});

// 5. Colección de Contratos
db.createCollection('contrato', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['proyectoId', 'totalValue', 'fechaInicio'],
      properties: {
        projectId: {
          bsonType: 'objectId'
        },
        terminos: {
          bsonType: 'string'
        },
        valor: {
          bsonType: ['number',"int"]
        },
        fechaInicio: {
          bsonType: 'date'
        },
        fechaFin: {
          bsonType: 'date'
        },
        fechaAsignada: {
          bsonType: 'date'
        }
      }
    }
  }
});

// 6. Colección de Entregables
db.createCollection('entregable', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['proyectoId', 'nombre', 'fechaFin', 'status'],
      properties: {
        projectId: {
          bsonType: 'objectId',
          description: 'Referencia al proyecto.'
        },
        nombre: {
          bsonType: 'string'
        },
        descripcion: {
          bsonType: 'string'
        },
        deadline: {
          bsonType: 'date'
        },
        status: {
          enum: ['pendiente', 'finalizado']
        }
      }
    }
  }
});

// 7. Colección de Transacciones Financieras
db.createCollection('transaccion', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['proyectoId', 'tipo', 'cantidad', 'fecha'],
      properties: {
        proyectoId: {
          bsonType: 'objectId'
        },
        tipo: {
          enum: ['ingreso', 'gasto']
        },
        cantidad: {
          bsonType: ['number',"int"],
          minimum: 0
        },
        descripcion: {
          bsonType: 'string'
        },
        fecha: {
          bsonType: 'date'
        }
      }
    }
  }
});


