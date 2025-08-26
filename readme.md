<h3 align="center";>

**GESTOR DE PORTAFOLIO DE PROYECTOS FREELANCE**

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
    *   Añade la siguiente línea, reemplazando `<TU_CONNECTION_STRING>` con tu cadena de conexión de MongoDB:
        ```
        MONGO_URI=<TU_CONNECTION_STRING>
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

---

<h1 align="center";>

# Planificación y Diseño de la Base de Datos

</h1>

## Construcción del Modelo Conceptual

El modelo conceptual proporciona una descripción de alto nivel de las necesidades de información del sistema. Representa los conceptos principales (entidades) y las relaciones entre ellos, sin considerar aspectos técnicos de implementación.

### **Entidades y Atributos**

1.  **Cliente:** Representa a un cliente del freelancer.
    -   `nombre`: Nombre completo del cliente
    -   `correo`: Correo electrónico de contacto
    -   `empresa`: Empresa a la que pertenece (opcional)
    -   `telefono`: Número de contacto (opcional)

2.  **Propuesta:** Documento de oferta comercial para un posible proyecto.
    -   `nombre`: Título descriptivo de la propuesta
    -   `descripcion`: Detalles técnicos y alcance
    -   `precio`: Costo estimado del servicio
    -   `plazo`: Tiempo estimado de entrega
    -   `estado`: Estado actual (pendiente, aceptada, rechazada)

3.  **Proyecto:** Trabajo contratado y en desarrollo.
    -   `nombre`: Nombre del proyecto
    -   `descripcion`: Descripción detallada
    -   `estado`: Estado actual (activo, pausado, finalizado, cancelado)
    -   `fechaInicio`: Fecha de inicio del proyecto
    -   `fechaFin`: Fecha de finalización (opcional)

4.  **Contrato:** Acuerdo formal que rige el proyecto.
    -   `condiciones`: Términos y condiciones del acuerdo
    -   `fechaInicio`: Fecha de inicio contractual
    -   `fechaFin`: Fecha de finalización contractual
    -   `valor`: Monto total acordado

5.  **Entregable:** Producto o hito específico dentro de un proyecto.
    -   `titulo`: Nombre del entregable
    -   `descripcion`: Descripción detallada
    -   `fechaLimite`: Fecha límite de entrega
    -   `estado`: Estado actual (pendiente, entregado, aprobado, rechazado)

6.  **Transacción:** Movimiento financiero asociado al proyecto.
    -   `tipo`: Tipo de movimiento (ingreso, egreso)
    -   `monto`: Cantidad monetaria
    -   `fecha`: Fecha de la transacción
    -   `descripcion`: Detalle del movimiento

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
    CLIENTE {
        string nombre
        string correo
        string empresa
        string telefono
    }
    
    PROPUESTA {
        string nombre
        string descripcion
        decimal precio
        string plazo
        string estado
    }
    
    PROYECTO {
        string nombre
        string descripcion
        string estado
        date fechaInicio
        date fechaFin
        array avances
    }
    
    CONTRATO {
        text condiciones
        date fechaInicio
        date fechaFin
        decimal valor
    }
    
    ENTREGABLE {
        string titulo
        text descripcion
        date fechaLimite
        string estado
    }
    
    TRANSACCION {
        string tipo
        decimal monto
        date fecha
        text descripcion
    }

    CLIENTE ||--o{ PROPUESTA : solicita
    CLIENTE ||--o{ PROYECTO : contrata
    PROPUESTA ||--o| PROYECTO : genera
    PROYECTO ||--|| CONTRATO : "se formaliza con"
    PROYECTO ||--o{ ENTREGABLE : contiene
    PROYECTO ||--o{ TRANSACCION : registra
```

## Construcción del Modelo Lógico (Modelado NoSQL - MongoDB)

En esta fase, se traduce el modelo conceptual a una estructura de colecciones y documentos para MongoDB. Las decisiones clave giran en torno a si usar **referencias** (linking) o **documentos embebidos** (embedding).

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
Se consideró para relaciones 1:1 o datos intrínsecos pequeños, pero se priorizaron las referencias para mayor flexibilidad.

### **Colecciones y Estructura de Documentos**

#### **1. Colección `clients`**
```javascript
{
  _id: ObjectId,
  name: String,           // Nombre del cliente
  email: String,          // Correo electrónico (único)
  company: String,        // Empresa (opcional)
  phone: String,          // Teléfono (opcional)
  createdAt: Date         // Fecha de registro
}
```

#### **2. Colección `proposals`**
```javascript
{
  _id: ObjectId,
  clientId: ObjectId,     // Referencia a clients._id
  name: String,           // Título de la propuesta
  description: String,    // Descripción detallada
  price: Number,          // Precio propuesto
  deadline_estimate: String, // Estimación de tiempo
  status: String,         // 'pending', 'accepted', 'rejected'
  createdAt: Date         // Fecha de creación
}
```

#### **3. Colección `projects`**
```javascript
{
  _id: ObjectId,
  clientId: ObjectId,     // Referencia a clients._id
  proposalId: ObjectId,   // Referencia a proposals._id
  name: String,           // Nombre del proyecto
  description: String,    // Descripción del proyecto
  status: String,         // 'active', 'paused', 'completed', 'cancelled'
  progress_log: [         // Array embebido para el log de progreso
    {
      date: Date,
      note: String
    }
  ],
  startDate: Date,        // Fecha de inicio
  endDate: Date,          // Fecha de finalización (opcional)
  createdAt: Date         // Fecha de creación
}
```

#### **4. Colección `contracts`**
```javascript
{
  _id: ObjectId,
  projectId: ObjectId,    // Referencia a projects._id
  terms: String,          // Términos y condiciones
  totalValue: Number,     // Valor total del contrato
  startDate: Date,        // Fecha de inicio contractual
  endDate: Date,          // Fecha de finalización contractual
  signedAt: Date,         // Fecha de firma
  createdAt: Date         // Fecha de creación
}
```

#### **5. Colección `deliverables`**
```javascript
{
  _id: ObjectId,
  projectId: ObjectId,    // Referencia a projects._id
  name: String,           // Nombre del entregable
  description: String,    // Descripción del entregable
  deadline: Date,         // Fecha límite de entrega
  status: String,         // 'pending', 'delivered', 'approved', 'rejected'
  createdAt: Date         // Fecha de creación
}
```

#### **6. Colección `transactions`**
```javascript
{
  _id: ObjectId,
  projectId: ObjectId,    // Referencia a projects._id
  type: String,           // 'income', 'expense'
  amount: Number,         // Monto (siempre positivo)
  description: String,    // Descripción del movimiento
  date: Date,             // Fecha de la transacción
  createdAt: Date         // Fecha de registro
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
    use GestorFreelanceDB
    ```

-   **Creación de Colecciones con Validación de Esquema:**

    1.  **Colección `clients`**
        ```javascript
        db.createCollection("clients", {
           validator: {
              $jsonSchema: {
                 bsonType: "object",
                 required: ["name", "email"],
                 properties: {
                    name: { bsonType: "string", description: "must be a string and is required" },
                    email: { bsonType: "string", pattern: "@mongodb\.com$", description: "must be a string and match the regular expression pattern" },
                    company: { bsonType: "string", description: "must be a string if the field exists" }
                 }
              }
           }
        })
        ```

    2.  **Colección `projects`**
        ```javascript
        db.createCollection("projects", {
           validator: {
              $jsonSchema: {
                 bsonType: "object",
                 required: ["clientId", "name", "status"],
                 properties: {
                    clientId: { bsonType: "objectId", description: "must be an objectId and is required" },
                    name: { bsonType: "string", description: "must be a string and is required" },
                    description: { bsonType: "string" },
                    status: { enum: ["active", "completed", "paused"], description: "can only be one of the enum values and is required" },
                    startDate: { bsonType: "date" },
                    endDate: { bsonType: "date" }
                 }
              }
           }
        })
        ```
    *(... y así sucesivamente para las demás colecciones: `proposals`, `contracts`, `deliverables`, `transactions`, cada una con su respectivo esquema y referencias a otras colecciones mediante `bsonType: "objectId"`)*

---
<h1 align="center";>

# Arquitectura del Software

</h1>

El proyecto está organizado siguiendo una arquitectura que separa las responsabilidades en diferentes capas, facilitando su mantenimiento y escalabilidad.

```
/
├── app.js                # Punto de entrada de la aplicación
├── db.js                 # Configuración y conexión de la base de datos
├── package.json          # Dependencias y scripts del proyecto
├── README.md             # Documentación del proyecto
├── commands/             # (Patrón Command) Comandos que encapsulan las acciones
├── controllers/          # Lógica de negocio y coordinación
├── models/               # Definición de los modelos de datos
├── repositories/         # (Patrón Repository) Abstracción del acceso a datos
└── views/                # Manejo de la interfaz de línea de comandos (CLI)
```

## Principios SOLID Aplicados

-   **Principio de Responsabilidad Única (SRP):** Cada clase tiene una única responsabilidad. Las `Views` manejan la interacción con el usuario, los `Controllers` orquestan la lógica de negocio, los `Repositories` gestionan el acceso a datos y los `Models` definen la estructura de los datos.
-   **Principio de Abierto/Cerrado (OCP):** La arquitectura permite añadir nuevas funcionalidades (como nuevos comandos o entidades) creando nuevas clases sin necesidad de modificar el código existente.
-   **Principio de Sustitución de Liskov (LSP):** Se aplica en la implementación de los patrones, donde las clases base pueden ser sustituidas por sus subtipos sin alterar el comportamiento del programa.
-   **Principio de Segregación de Interfaces (ISP):** Se definen interfaces específicas para cada tipo de operación, evitando que las clases implementen métodos que no necesitan.
-   **Principio de Inversión de Dependencias (DIP):** Los módulos de alto nivel (Controllers) no dependen de los de bajo nivel (Repositories), sino de abstracciones. Esto se logra mediante la inyección de dependencias.

## Patrones de Diseño Usados

-   **Patrón Repository:**
    -   **Ubicación:** Carpeta `/repositories`.
    -   **Propósito:** Desacopla la lógica de negocio de la lógica de acceso a datos. Los controladores utilizan los repositorios para obtener y guardar datos sin conocer los detalles de la implementación de la base de datos. Esto facilita las pruebas y permite cambiar de motor de base de datos con un impacto mínimo.

-   **Patrón Command:**
    -   **Ubicación:** Carpeta `/commands`.
    -   **Propósito:** Encapsula una solicitud como un objeto, permitiendo parametrizar clientes con diferentes solicitudes, encolar o registrar solicitudes. En este proyecto, cada acción del usuario (crear cliente, añadir proyecto) es un `Command` que la `View` instancia y el `Controller` ejecuta.

## Consideraciones Técnicas

-   **Base de Datos:** Se utiliza el driver oficial de **MongoDB** (`mongodb`) para la persistencia de datos, evitando el uso de ODMs como Mongoose para tener un control más granular sobre las operaciones.
-   **Transacciones:** Las operaciones críticas que involucran múltiples pasos (como la creación de un proyecto a partir de una propuesta o los registros financieros) se envuelven en **transacciones de MongoDB** para garantizar la atomicidad y consistencia de los datos.
-   **Manejo de Errores:** La aplicación cuenta con un manejo de errores robusto para capturar fallos en la conexión a la base de datos, validaciones de datos y lógica de negocio, informando al usuario de manera clara.

---
<h1 align="center";>

# Créditos

</h1>

Este proyecto fue desarrollado por:

-   **Juan Santoyo**
-   **Omar Fernandez**

*Desarrollado entre el 21 y el 27 de agosto de 2025.*
