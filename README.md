# Gestor de Portafolio de Proyectos Freelance

## Descripción del proyecto

Este proyecto es una aplicación de línea de comandos (CLI) desarrollada en **Node.js** que permite a freelancers gestionar de manera integral su portafolio profesional. La herramienta facilita la administración de clientes, propuestas, proyectos, contratos, entregables y finanzas, centralizando toda la información relevante para el trabajo independiente en un solo lugar.

El sistema está diseñado bajo principios de **Programación Orientada a Objetos** y aplica los **principios SOLID** junto a patrones de diseño como **Repository** y **Command**, asegurando un código mantenible, escalable y fácil de probar. La experiencia de usuario en consola se ve enriquecida mediante el uso de librerías como **chalk**.

La persistencia de datos se realiza en **MongoDB** utilizando el driver oficial, implementando operaciones con transacciones reales para garantizar la integridad de la información, especialmente en procesos financieros y de entregables.

## Situación Problema

A medida que un profesional freelance tiene éxito y su cartera de clientes crece, la complejidad de la gestión administrativa aumenta exponencialmente. Sin una herramienta adecuada, el freelancer se enfrenta a un conjunto de desafíos que pueden frenar su crecimiento y afectar su rentabilidad.

**Los Desafíos Comunes:**

1.  **Fragmentación de la Información:** Los datos cruciales del negocio se encuentran dispersos en múltiples plataformas: la información de los clientes en una aplicación de contactos, los detalles de los proyectos en un gestor de tareas, las conversaciones en el correo electrónico y los registros financieros en hojas de cálculo. Esta fragmentación hace que encontrar información sea un proceso lento e ineficiente.

2.  **Procesos Manuales y Repetitivos:** Tareas como la creación de propuestas, la redacción de contratos y la facturación se convierten en un trabajo manual y repetitivo. Esto no solo consume un tiempo valioso que podría dedicarse a tareas facturables, sino que también aumenta el riesgo de cometer errores costosos, como olvidar cláusulas importantes o equivocarse en los montos.

3.  **Falta de Visibilidad y Control:** Sin un sistema centralizado, es difícil tener una visión clara del estado de todos los proyectos. El seguimiento de los entregables, el cumplimiento de los plazos y la gestión de las expectativas del cliente se vuelven complicados, lo que puede llevar a retrasos, malentendidos y una percepción de falta de profesionalismo.

4.  **Gestión Financiera Ineficiente:** Llevar un control preciso de los ingresos y gastos por proyecto es un reto. Calcular la rentabilidad real de un trabajo o tener una previsión financiera clara requiere un esfuerzo manual considerable, lo que dificulta la toma de decisiones estratégicas para el negocio.

**La Consecuencia:**
Esta sobrecarga administrativa desvía el enfoque del profesional de su área de especialización. El resultado es una pérdida directa de productividad, oportunidades de negocio y, en última- instancia, de ingresos.

**La Necesidad:**
Surge la necesidad crítica de una **solución de gestión unificada** que centralice todas las operaciones del negocio freelance. Una herramienta que automatice las tareas repetitivas, proporcione una visión clara del estado de todos los proyectos y finanzas, y permita al profesional gestionar su negocio de manera eficiente, idealmente desde su propio entorno de trabajo: la línea de comandos.

## Instrucciones de instalación y uso

Para instalar y ejecutar este proyecto localmente, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone <https://github.com/JuanSantoyoJ/Proyecto_S1_Node.JS_SantoyoJuan_GranadosOmar>
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

## Estructura del proyecto

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

-   **`app.js`**: Orquestador principal. Inicializa la conexión a la base de datos y gestiona el menú principal.
-   **`db.js`**: Centraliza la configuración y la lógica para conectarse a MongoDB.
-   **`views/`**: Se encarga de la interacción con el usuario (menús, prompts). Cuando un usuario elige una acción, la vista crea un objeto **Command** correspondiente.
-   **`commands/`**: Cada archivo en esta carpeta representa una acción específica que el usuario puede realizar (ej. `CrearClienteCommand.js`). Esto encapsula los detalles de la operación.
-   **`controllers/`**: Ejecutan los comandos. Contienen la lógica de negocio de alto nivel y coordinan las operaciones, utilizando los repositorios para interactuar con los datos.
-   **`repositories/`**: Abstraen la lógica de acceso a la base de datos. Proporcionan una interfaz limpia (ej. `findById`, `save`) para que los controladores no necesiten saber cómo se guardan o recuperan los datos.
-   **`models/`**: Definen la estructura y validaciones de los datos.

## Principios SOLID aplicados

-   **Principio de Responsabilidad Única (SRP):** Cada clase tiene una única responsabilidad. Las `Views` manejan la interacción con el usuario, los `Controllers` orquestan la lógica de negocio, los `Repositories` gestionan el acceso a datos y los `Models` definen la estructura de los datos.
-   **Principio de Abierto/Cerrado (OCP):** La arquitectura permite añadir nuevas funcionalidades (como nuevos comandos o entidades) creando nuevas clases sin necesidad de modificar el código existente.
-   **Principio de Sustitución de Liskov (LSP):** Se aplica en la implementación de los patrones, donde las clases base pueden ser sustituidas por sus subtipos sin alterar el comportamiento del programa.
-   **Principio de Segregación de Interfaces (ISP):** Se definen interfaces específicas para cada tipo de operación, evitando que las clases implementen métodos que no necesitan.
-   **Principio de Inversión de Dependencias (DIP):** Los módulos de alto nivel (Controllers) no dependen de los de bajo nivel (Repositories), sino de abstracciones. Esto se logra mediante la inyección de dependencias.

## Patrones de diseño usados y dónde

-   **Patrón Repository:**
    -   **Ubicación:** Carpeta `/repositories`.
    -   **Propósito:** Desacopla la lógica de negocio de la lógica de acceso a datos. Los controladores utilizan los repositorios para obtener y guardar datos sin conocer los detalles de la implementación de la base de datos. Esto facilita las pruebas y permite cambiar de motor de base de datos con un impacto mínimo.

-   **Patrón Command:**
    -   **Ubicación:** Carpeta `/commands`.
    -   **Propósito:** Encapsula una solicitud como un objeto, permitiendo parametrizar clientes con diferentes solicitudes, encolar o registrar solicitudes y soportar operaciones que se pueden deshacer. En este proyecto, cada acción del usuario (crear cliente, añadir proyecto) es un `Command` que la `View` instancia y el `Controller` ejecuta.

## Consideraciones técnicas

-   **Base de Datos:** Se utiliza el driver oficial de **MongoDB** (`mongodb`) para la persistencia de datos, evitando el uso de ODMs como Mongoose para tener un control más granular sobre las operaciones.
-   **Transacciones:** Las operaciones críticas que involucran múltiples pasos (como la creación de un proyecto a partir de una propuesta o los registros financieros) se envuelven en **transacciones de MongoDB** para garantizar la atomicidad y consistencia de los datos.
-   **Manejo de Errores:** La aplicación cuenta con un manejo de errores robusto para capturar fallos en la conexión a la base de datos, validaciones de datos y lógica de negocio, informando al usuario de manera clara.

## Créditos

Este proyecto fue desarrollado por:

-   **Juan Santoyo** (`SantoyoJuan`)
-   **Omar Granados** (`GranadosOmar`)

*Desarrollado entre el 21 y el 27 de agosto.*



