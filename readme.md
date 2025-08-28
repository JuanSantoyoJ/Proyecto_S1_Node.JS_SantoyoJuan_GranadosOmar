<h3 align="center";>
<b>GESTOR DE PORTAFOLIO DE PROYECTOS FREELANCE</b>
</h3>

<br>
<br>
<br>

<h3 align="center";>

**Juan Santoyo**

</h3>

<h3 align="center";>

**Omar Granados**

</h3>

<br>
<br>
<br>
<br>

<h3 align="center";>

**S1**

</h3>

<h3 align="center";>

**Pedro Felipe Gómez Bonilla**

</h3>

<br>
<br>
<br>
<br>

<h3 align="center";>

**CAMPUSLANDS**

</h3>

<h3 align="center";>

**RUTA NODE**

</h3>

<h3 align="center";>

**BUCARAMANGA, SANTANDER**

</h3>

<h3 align="center";>

**2025**

</h3>

---
<h1 align="center";>

# Introducción

</h1>

Este documento servirá como una guía detallada del proceso completo de diseño, estructuración e implementación de una aplicación de línea de comandos (CLI) para la gestión de portafolios de proyectos freelance. El objetivo principal es desarrollar una herramienta robusta que permita a los profesionales independientes administrar eficazmente clientes, propuestas, proyectos, contratos, entregables y transacciones financieras.

Inicialmente, se analizará el caso de estudio que motiva la creación de esta herramienta, junto con los requerimientos específicos del sistema. A partir de esta investigación, se procederá a desarrollar un modelo conceptual detallado donde se identificarán las entidades principales, sus atributos y las relaciones entre ellas. Este paso sienta las bases para comprender la estructura esencial del sistema de gestión.

A continuación, se realizará la conversión del modelo conceptual al modelo lógico, enfocado en una base de datos NoSQL (MongoDB). En esta sección, en lugar de la normalización tradicional, se discutirán las estrategias de modelado de datos, como el uso de referencias y documentos embebidos, para optimizar la estructura de los datos, garantizar la consistencia y minimizar la redundancia.

Posteriormente, se llevará a cabo la conversión del modelo lógico al modelo físico, que define la implementación real de las colecciones, sus validaciones de esquema y las relaciones, incorporando detalles técnicos como los tipos de datos adecuados para cada campo.

Finalmente, se detallará la arquitectura del software, incluyendo los principios SOLID y los patrones de diseño (Repository, Command) que guían la implementación, asegurando un sistema mantenible, escalable y eficiente.

---
<h1 align="center";>

# Caso de Estudio

</h1>

A medida que un profesional freelance tiene éxito y su cartera de clientes crece, la complejidad de la gestión administrativa aumenta exponencialmente. Sin una herramienta adecuada, el freelancer se enfrenta a un conjunto de desafíos que pueden frenar su crecimiento y afectar su rentabilidad.

**Los Desafíos Comunes:**

1.  **Fragmentación de la Información:** Los datos cruciales del negocio se encuentran dispersos en múltiples plataformas: la información de los clientes en una aplicación de contactos, los detalles de los proyectos en un gestor de tareas, las conversaciones en el correo electrónico y los registros financieros en hojas de cálculo. Esta fragmentación hace que encontrar información sea un proceso lento e ineficiente.

2.  **Procesos Manuales y Repetitivos:** Tareas como la creación de propuestas, la redacción de contratos y la facturación se convierten en un trabajo manual y repetitivo. Esto no solo consume un tiempo valioso que podría dedicarse a tareas facturables, sino que también aumenta el riesgo de cometer errores costosos, como olvidar cláusulas importantes o equivocarse en los montos.

3.  **Falta de Visibilidad y Control:** Sin un sistema centralizado, es difícil tener una visión clara del estado de todos los proyectos. El seguimiento de los entregables, el cumplimiento de los plazos y la gestión de las expectativas del cliente se vuelven complicados, lo que puede llevar a retrasos, malentendidos y una percepción de falta de profesionalismo.

4.  **Gestión Financiera Ineficiente:** Llevar un control preciso de los ingresos y gastos por proyecto es un reto. Calcular la rentabilidad real de un trabajo o tener una previsión financiera clara requiere un esfuerzo manual considerable, lo que dificulta la toma de decisiones estratégicas para el negocio.

**La Necesidad:**
Surge la necesidad crítica de una **solución de gestión unificada** que centralice todas las operaciones del negocio freelance. Una herramienta que automatice las tareas repetitivas, proporcione una visión clara del estado de todos los proyectos y finanzas, y permita al profesional gestionar su negocio de manera eficiente, idealmente desde su propio entorno de trabajo: la línea de comandos.

---
<h1 align="center";>

# Requisitos del Sistema

</h1>

Para ejecutar correctamente la aplicación, es necesario contar con el siguiente software instalado:

-   **Node.js:** versión 18.x o superior.
-   **NPM (Node Package Manager):** Generalmente se instala junto con Node.js.
-   **MongoDB:** versión 5.x o superior.
-   **Git:** Para clonar el repositorio desde GitHub.

---

<h1 align="center";>

# Instalación y Configuración

</h1>


Para instalar y ejecutar este proyecto localmente, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/JuanSantoyoJ/Proyecto_S1_Node.JS_SantoyoJuan_GranadosOmar
    ```

2.  **Navega a la carpeta del proyecto:**
    ```bash
    cd Proyecto_S1_Node.JS_SantoyoJuan_GranadosOmar
    ```

3.  **Instala las dependencias:**
    ```bash
    npm install
    ```

4.  **Configura las variables de entorno:**
    *   Crea un archivo `.env` en la raíz del proyecto.
    *   Añade las siguientes líneas, reemplazando los valores por los de tu base de datos:
        ```
        URI=<TU_CONNECTION_STRING>
        DB_NAME=<NOMBRE_BD>
        ```

5.  **Ejecuta la aplicación:**
    ```bash
    node app.js
    ```

---

## Documentación de SCRUM

Este proyecto fue desarrollado siguiendo la metodología ágil SCRUM, implementando un enfoque iterativo e incremental para la gestión del proyecto. La documentación completa del proceso SCRUM incluye:

- **Sprint Planning:** Planificación detallada de cada sprint con definición de objetivos, historias de usuario y criterios de aceptación
- **Product Backlog:** Lista priorizada de todas las funcionalidades, mejoras y correcciones requeridas para el sistema
- **Sprint Backlog:** Elementos seleccionados del Product Backlog para cada sprint específico
- **Daily Standups:** Registro de reuniones diarias para seguimiento del progreso y identificación de impedimentos
- **Sprint Review:** Evaluación de los entregables completados al final de cada sprint
- **Sprint Retrospective:** Análisis del proceso y identificación de mejoras para futuros sprints
- **Burndown Charts:** Gráficos de seguimiento del progreso durante cada sprint
- **Definition of Done:** Criterios claros que definen cuándo una tarea se considera completamente terminada

La implementación de SCRUM nos permitió mantener un desarrollo organizado, con entregas incrementales de valor y una comunicación efectiva entre los miembros del equipo, asegurando la calidad del producto final y el cumplimiento de los plazos establecidos.

**[Documentación de SCRUM](./SCRUM/Proyecto_NodeS1_SantoyoJuan_OmarGranados.docx.pdf)**

**[Trello](https://trello.com/b/Wubqyf4B/gestor-de-portafolio-freelance)**

---

<h1 align="center";>

# Planificación y Diseño de la Base de Datos

</h1>

## Construcción del Modelo Conceptual

El modelo conceptual proporciona una descripción de alto nivel de las necesidades de información del sistema. Representa los conceptos principales (entidades) y las relaciones entre ellos, sin considerar aspectos técnicos de implementación.


### **Entidades y Atributos**

1.  **Usuario:** Representa a un usuario del sistema (puede ser admin o cliente).
    -   `nombre`: Nombre completo
    -   `correo`: Correo electrónico (único)
    -   `contrasena`: Contraseña
    -   `empresa`: Empresa (opcional)
    -   `rol`: "admin" o "cliente"
    -   `createdAt`: Fecha de registro

2.  **Propuesta:** Oferta comercial para un posible proyecto.
    -   `clienteId`: Referencia a usuario (cliente)
    -   `nombre`: Título de la propuesta
    -   `descripcion`: Detalles técnicos y alcance
    -   `precio`: Costo estimado
    -   `status`: Estado actual (pendiente, aceptado, rechazado)
    -   `createdAt`: Fecha de creación

3.  **Proyecto:** Trabajo contratado y en desarrollo.
    -   `clienteId`: Referencia a usuario (cliente)
    -   `propuestaId`: Referencia a propuesta
    -   `nombre`: Nombre del proyecto
    -   `description`: Descripción detallada
    -   `status`: Estado actual (active, paused, completed, cancelled)
    -   `fechaInicio`: Fecha de inicio
    -   `endDate`: Fecha de finalización (opcional)

4.  **Contrato:** Acuerdo formal que rige el proyecto.
    -   `proyectoId`: Referencia a proyecto
    -   `terminos`: Términos y condiciones
    -   `valor`: Monto total acordado
    -   `fechaInicio`: Fecha de inicio contractual
    -   `fechaFin`: Fecha de finalización contractual (opcional)
    -   `fechaAsignada`: Fecha de asignación

5.  **Entregable:** Producto o hito específico dentro de un proyecto.
    -   `proyectoId`: Referencia a proyecto
    -   `nombre`: Nombre del entregable
    -   `descripcion`: Descripción detallada
    -   `deadline`: Fecha límite de entrega

6.  **Transacción:** Movimiento financiero asociado al proyecto.
    -   `proyectoId`: Referencia a proyecto
    -   `tipo`: Tipo de movimiento (ingreso, gasto)
    -   `cantidad`: Cantidad monetaria
    -   `descripcion`: Detalle del movimiento
    -   `fecha`: Fecha de la transacción

### **Relaciones y Cardinalidades**

-   Un `Cliente` puede solicitar muchas `Propuestas` (1:N)
-   Un `Cliente` puede contratar muchos `Proyectos` (1:N)
-   Una `Propuesta` puede generar máximo un `Proyecto` (1:1)
-   Un `Proyecto` se formaliza con un `Contrato` (1:1)
-   Un `Proyecto` se compone de muchos `Entregables` (1:N)
-   Un `Proyecto` registra muchas `Transacciones` (1:N)

### **Diagrama Conceptual (Entidad-Relación)**

```mermaid
erDiagram
    USUARIOS {
        string nombre
        string correo
        string telefono
        string empresa
        string contrasena
        enum rol
        date createdAt
    }

    PROPUESTA {
        objectId clienteId
        string nombre
        string descripcion
        double precio
        string plazo
        enum status
        date createdAt
    }

    PROYECTO {
        objectId clienteId
        objectId propuestaId
        string nombre
        string descripcion
        enum status
        array avances
        date fechaInicio
        date fechaFin
    }

    CONTRATO {
        objectId proyectoId
        string condiciones
        double valor
        date fechaInicio
        date fechaFin
    }

    ENTREGABLE {
        objectId proyectoId
        string titulo
        string descripcion
        date deadline
    }

    TRANSACCION {
        objectId proyectoId
        enum tipo
        double monto
        string descripcion
        date fecha
    }

    %% Relaciones
    USUARIOS ||--o{ PROPUESTA : "realiza"
    USUARIOS ||--o{ PROYECTO : "contrata"
    PROPUESTA ||--o| PROYECTO : "origina"
    PROYECTO ||--|| CONTRATO : "formaliza"
    PROYECTO ||--o{ ENTREGABLE : "incluye"
    PROYECTO ||--o{ TRANSACCION : "registra"

```

## Construcción del Modelo Lógico (Modelado NoSQL - MongoDB)

En esta fase, se traduce el modelo conceptual a una estructura de colecciones y documentos para MongoDB.

### **Estrategia de Modelado**

Se optó por un **modelo híbrido**, favoreciendo las **referencias** para las entidades principales para mantener la consistencia y evitar la duplicación masiva de datos.

#### **Referencias (Linking):**
Se usará para relaciones 1:N donde las entidades "N" pueden crecer indefinidamente o necesitan ser consultadas de forma independiente.

**Ventajas:**
- Datos consistentes y normalizados
- Menor duplicación de información
- Documentos más pequeños y eficientes
- Facilita las actualizaciones

**Desventajas:**
- Requiere consultas adicionales (`$lookup`) para obtener datos relacionados
- Ligeramente más complejo en consultas

#### **Documentos Embebidos (Embedding):**
Se evaluó su uso principalmente para relaciones 1:1 y para almacenar atributos pequeños e intrínsecos al documento. Sin embargo, se priorizó el uso de referencias (ObjectId) en la mayoría de los casos, con el fin de mantener la flexibilidad, evitar redundancia y facilitar la consistencia de datos en relaciones 1:N y N:M.


### **Colecciones y Estructura de Documentos (según el código actual)**

#### **Colección `usuarios`**
```javascript
{
    _id: ObjectId,
    nombre: String,
    correo: String,
    contrasena: String,
    empresa: String,
    rol: String, // "admin" o "cliente"
    createdAt: Date
}
```

#### **Colección `propuesta`**
```javascript
{
    _id: ObjectId,
    clienteId: ObjectId, // Referencia a usuarios._id
    nombre: String,
    descripcion: String,
    precio: Number,
    status: String, // "pendiente", "aceptado", "rechazado"
    createdAt: Date
}
```

#### **Colección `proyecto`**
```javascript
{
    _id: ObjectId,
    clienteId: ObjectId, // Referencia a usuarios._id
    propuestaId: ObjectId, // Referencia a propuesta._id
    nombre: String,
    description: String,
    status: String, // "active", "paused", "completed", "cancelled"
    fechaInicio: Date,
    endDate: Date
}
```

#### **Colección `contrato`**
```javascript
{
    _id: ObjectId,
    proyectoId: ObjectId, // Referencia a proyecto._id
    terminos: String,
    valor: Number,
    fechaInicio: Date,
    fechaFin: Date,
    fechaAsignada: Date
}
```

#### **Colección `entregable`**
```javascript
{
    _id: ObjectId,
    proyectoId: ObjectId, // Referencia a proyecto._id
    nombre: String,
    descripcion: String,
    deadline: Date
}
```

#### **Colección `transaccion`**
```javascript
{
    _id: ObjectId,
    proyectoId: ObjectId, // Referencia a proyecto._id
    tipo: String, // "ingreso" o "gasto"
    cantidad: Number,
    descripcion: String,
    fecha: Date
}
```

### **Diagrama del Modelo Lógico**

```mermaid
graph TB
    subgraph "Colecciones MongoDB"
        A[clients]
        B[proposals]
        C[projects]
        D[contracts]
        E[deliverables]
        F[transactions]
    end
    
    subgraph "Estructura de Documentos"
        A1["clients {<br/>_id: ObjectId<br/>name: String<br/>email: String<br/>company: String<br/>phone: String<br/>createdAt: Date<br/>}"]
        
        B1["proposals {<br/>_id: ObjectId<br/>clientId: ObjectId ⟶<br/>name: String<br/>description: String<br/>price: Number<br/>deadline_estimate: String<br/>status: String<br/>createdAt: Date<br/>}"]
        
        C1["projects {<br/>_id: ObjectId<br/>clientId: ObjectId ⟶<br/>proposalId: ObjectId ⟶<br/>name: String<br/>description: String<br/>status: String<br/>progress_log: Array<br/>startDate: Date<br/>endDate: Date<br/>createdAt: Date<br/>}"]
        
        D1["contracts {<br/>_id: ObjectId<br/>projectId: ObjectId ⟶<br/>terms: String<br/>totalValue: Number<br/>startDate: Date<br/>endDate: Date<br/>signedAt: Date<br/>createdAt: Date<br/>}"]
        
        E1["deliverables {<br/>_id: ObjectId<br/>projectId: ObjectId ⟶<br/>name: String<br/>description: String<br/>deadline: Date<br/>status: String<br/>createdAt: Date<br/>}"]
        
        F1["transactions {<br/>_id: ObjectId<br/>projectId: ObjectId ⟶<br/>type: String<br/>amount: Number<br/>description: String<br/>date: Date<br/>createdAt: Date<br/>}"]
    end
    
    A --> A1
    B --> B1
    C --> C1
    D --> D1
    E --> E1
    F --> F1
    
    %% Referencias entre colecciones
    A1 -.->|"clientId"| B1
    A1 -.->|"clientId"| C1
    B1 -.->|"proposalId"| C1
    C1 -.->|"projectId"| D1
    C1 -.->|"projectId"| E1
    C1 -.->|"projectId"| F1
    
    style A1 fill:#e1f5fe
    style B1 fill:#f3e5f5
    style C1 fill:#e8f5e8
    style D1 fill:#fff3e0
    style E1 fill:#fce4ec
    style F1 fill:#f1f8e9
```

### **Decisiones de Diseño**

1. **Single Source of Truth**: Cada entidad se almacena una sola vez, evitando duplicación
2. **Referencias explícitas**: Uso de ObjectId para mantener relaciones claras
3. **Flexibilidad**: Estructura que permite evolución sin reestructuración masiva
4. **Eficiencia**: Balance entre consultas simples y complejidad de joins
5. **Auditoria**: Campo `createdAt` en todas las colecciones para trazabilidad

Esta estructura basada en referencias es análoga a tener tablas separadas en SQL con claves foráneas, garantizando que cada pieza de información se almacena una sola vez.

## Construcción del Modelo Físico

El modelo físico define la implementación final en MongoDB, incluyendo los tipos de datos y las reglas de validación de esquema para cada colección.

-   **Para crear y usar la base de datos:**
    ```javascript
    use Proyecto_NodeJS
    ```

-   **Creación de Colecciones con Validación de Esquema:**

    1.  **Colección `usuarios`**
        ```javascript
        db.createCollection('usuarios', {
        validator: {
            $jsonSchema: {
            bsonType: 'object',
            required: ['nombre', 'correo', 'contrasena', 'rol', 'createdAt'],
            properties: {
                nombre: {
                bsonType: 'string'
                },
                correo: {
                bsonType: 'string'
                },
                contrasena: {
                bsonType: 'string'
                },
                empresa:{
                bsonType: "string"
                },
                rol: {
                enum: ['admin', 'cliente']
                },
                createdAt: {
                bsonType: 'date'
                }
            }
            }
        }
        });
        ```
---
<h1 align="center";>

# Arquitectura del Software

</h1>

El proyecto está organizado siguiendo una arquitectura que separa las responsabilidades en diferentes capas, facilitando su mantenimiento y escalabilidad.


```
/
├── app.js                # Punto de entrada de la aplicación
├── db.js                 # Configuración y conexión de la base de datos
├── SCRUM                 # Detalles de requerimientos e historias de usuario
├── package.json          # Dependencias y scripts del proyecto
├── README.md             # Documentación del proyecto
├── controllers/          # Lógica de negocio y coordinación
├── ddl.js                # Comandos para la base de datos
├── factory/              # Factories para validación y creación de entidades
└── views/                # Manejo de la interfaz de línea de comandos (CLI)
```


## Principios y Consideraciones Técnicas

-   **Responsabilidad Única:** Cada clase tiene una única responsabilidad. Las `views` manejan la interacción con el usuario, los `controllers` orquestan la lógica de negocio, los `models` definen la estructura de los datos y los `factory` validan y crean entidades.
-   **Base de Datos:** Se utiliza el driver oficial de **MongoDB** (`mongodb`) para la persistencia de datos, sin ODMs como Mongoose.
-   **Manejo de Errores:** La aplicación cuenta con manejo de errores para capturar fallos en la conexión, validaciones y lógica de negocio, informando al usuario de manera clara.
-   **Roles:** El sistema maneja roles de usuario (`admin` y `cliente`) y menús diferenciados en la CLI.

---
<h1 align="center";>

# Créditos

</h1>

Este proyecto fue desarrollado por:

-   **Juan Santoyo**
-   **Omar Granados**

*Desarrollado entre el 21 y el 27 de agosto de 2025.*
