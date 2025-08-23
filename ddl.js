/*
* DDL (Data Definition Language)
*
* Este script contiene los comandos para crear la estructura de la base de datos
* y las colecciones para el Gestor de Portafolio de Proyectos Freelance.
*
* Base de Datos: GestorFreelanceDB
*/

// --- Seleccionar la Base de Datos ---
use('GestorFreelanceDB');

// --- Creación de Colecciones con Validación de Esquema ---

// 1. Colección para el perfil del Freelancer (Usuario de la App)
// Esta colección contendrá un único documento con la información del usuario.
db.createCollection('user_profile', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'User Profile Validation',
      required: ['name', 'email', 'title'],
      properties: {
        name: {
          bsonType: 'string',
          description: 'El nombre completo del freelancer es requerido.'
        },
        email: {
          bsonType: 'string',
          description: 'El email profesional es requerido.'
        },
        title: {
          bsonType: 'string',
          description: 'El título o rol profesional es requerido (ej: Desarrollador Full-Stack).'
        },
        address: {
          bsonType: 'string',
          description: 'Dirección para facturación.'
        },
        taxId: {
          bsonType: 'string',
          description: 'Número de identificación fiscal.'
        },
        bankDetails: {
          bsonType: 'object',
          properties: {
            bankName: { bsonType: 'string' },
            accountNumber: { bsonType: 'string' },
            swiftCode: { bsonType: 'string' }
          }
        }
      }
    }
  }
});

// 2. Colección de Clientes
db.createCollection('clients', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Client Validation',
      required: ['name', 'email', 'createdAt'],
      properties: {
        name: {
          bsonType: 'string',
          description: 'El nombre del cliente es requerido.'
        },
        email: {
          bsonType: 'string',
          description: 'El email del cliente es requerido y debe ser único.'
          // En la lógica de la aplicación se debe asegurar la unicidad.
        },
        company: {
          bsonType: 'string',
          description: 'Empresa del cliente (opcional).'
        },
        phone: {
          bsonType: 'string',
          description: 'Teléfono de contacto (opcional).'
        },
        createdAt: {
          bsonType: 'date',
          description: 'Fecha de registro del cliente.'
        }
      }
    }
  }
});

// 3. Colección de Propuestas
db.createCollection('proposals', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Proposal Validation',
      required: ['clientId', 'name', 'price', 'status', 'createdAt'],
      properties: {
        clientId: {
          bsonType: 'objectId',
          description: 'Referencia al _id del cliente. Es requerido.'
        },
        name: {
          bsonType: 'string',
          description: 'Título de la propuesta es requerido.'
        },
        description: {
          bsonType: 'string',
          description: 'Descripción detallada de la oferta.'
        },
        price: {
          bsonType: 'number',
          description: 'Costo del servicio propuesto.'
        },
        deadline_estimate: {
          bsonType: 'string',
          description: 'Tiempo estimado de entrega (ej: "2 semanas").'
        },
        status: {
          enum: ['pending', 'accepted', 'rejected'],
          description: 'El estado solo puede ser uno de los valores del enum.'
        },
        createdAt: {
          bsonType: 'date',
          description: 'Fecha de creación de la propuesta.'
        }
      }
    }
  }
});

// 4. Colección de Proyectos
db.createCollection('projects', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Project Validation',
      required: ['clientId', 'proposalId', 'name', 'status', 'startDate'],
      properties: {
        clientId: {
          bsonType: 'objectId',
          description: 'Referencia al cliente.'
        },
        proposalId: {
          bsonType: 'objectId',
          description: 'Referencia a la propuesta que originó el proyecto.'
        },
        name: {
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
        progress_log: {
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
        startDate: {
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
db.createCollection('contracts', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Contract Validation',
      required: ['projectId', 'totalValue', 'startDate'],
      properties: {
        projectId: {
          bsonType: 'objectId',
          description: 'Referencia al proyecto.'
        },
        terms: {
          bsonType: 'string',
          description: 'Términos y condiciones del contrato.'
        },
        totalValue: {
          bsonType: 'number',
          description: 'Valor total acordado.'
        },
        startDate: {
          bsonType: 'date'
        },
        endDate: {
          bsonType: 'date'
        },
        signedAt: {
          bsonType: 'date'
        }
      }
    }
  }
});

// 6. Colección de Entregables
db.createCollection('deliverables', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Deliverable Validation',
      required: ['projectId', 'name', 'deadline', 'status'],
      properties: {
        projectId: {
          bsonType: 'objectId',
          description: 'Referencia al proyecto.'
        },
        name: {
          bsonType: 'string',
          description: 'Nombre del entregable.'
        },
        description: {
          bsonType: 'string'
        },
        deadline: {
          bsonType: 'date',
          description: 'Fecha límite de entrega.'
        },
        status: {
          enum: ['pending', 'delivered', 'approved', 'rejected'],
          description: 'Estado del entregable.'
        }
      }
    }
  }
});

// 7. Colección de Transacciones Financieras
db.createCollection('transactions', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Transaction Validation',
      required: ['projectId', 'type', 'amount', 'date'],
      properties: {
        projectId: {
          bsonType: 'objectId',
          description: 'Referencia al proyecto asociado.'
        },
        type: {
          enum: ['income', 'expense'],
          description: 'Tipo de transacción: ingreso o gasto.'
        },
        amount: {
          bsonType: 'number',
          minimum: 0,
          description: 'Monto de la transacción (siempre positivo).'
        },
        description: {
          bsonType: 'string',
          description: 'Descripción del movimiento.'
        },
        date: {
          bsonType: 'date',
          description: 'Fecha de la transacción.'
        }
      }
    }
  }
});

print("Base de datos 'GestorFreelanceDB' y colecciones creadas con éxito.");
