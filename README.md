# Gestor de Portafolio de Proyectos Freelance

## Introducción

Este proyecto es una aplicación de línea de comandos (CLI) desarrollada en **Node.js** que permite a freelancers gestionar de manera integral su portafolio profesional. La herramienta facilita la administración de clientes, propuestas, proyectos, contratos, entregables y finanzas, centralizando toda la información relevante para el trabajo independiente en un solo lugar.

El sistema está diseñado bajo principios de **Programación Orientada a Objetos** y aplica los **principios SOLID** junto a patrones de diseño como *Repository* y *Factory*, asegurando un código mantenible, escalable y fácil de probar. La experiencia de usuario en consola se ve enriquecida mediante el uso de librerías como **chalk**.

La persistencia de datos se realiza en **MongoDB** utilizando el driver oficial, implementando operaciones con transacciones reales para garantizar la integridad de la información, especialmente en procesos financieros y de entregables. El modelo de datos está cuidadosamente validado y estructurado en la carpeta `/models`.

Este gestor busca ser una solución robusta y profesional para freelancers que desean llevar un control detallado y seguro de sus proyectos y relaciones comerciales, facilitando la toma de decisiones y el seguimiento del progreso de su portafolio.

## Caso de Estudio

Esta aplicación está diseñada para ser el centro de operaciones de cualquier profesional freelance que busque optimizar su flujo de trabajo. A continuación, se describe un caso de uso general que ilustra cómo la herramienta apoya el ciclo de vida completo de un proyecto.

**El Flujo de Trabajo Típico:**

1.  **Onboarding del Cliente:**
    *   Un freelancer comienza registrando un nuevo cliente en el sistema. Esto crea un perfil centralizado con toda la información de contacto y fiscal, eliminando la necesidad de buscar datos en diferentes lugares.

2.  **De la Propuesta al Proyecto:**
    *   Cuando surge una oportunidad, el freelancer crea una propuesta formal directamente desde la aplicación, especificando el alcance, los costos y los plazos.
    *   Una vez que el cliente aprueba la propuesta, esta se convierte en un proyecto activo con un solo comando. Este proceso genera automáticamente un contrato y vincula toda la información, asegurando una transición sin fricciones.

3.  **Ejecución y Seguimiento:**
    *   Dentro del proyecto, el freelancer desglosa el trabajo en entregables específicos, cada uno con su propia fecha límite y estado. Esto permite un seguimiento granular del progreso y ayuda a identificar posibles cuellos de botella a tiempo.

4.  **Gestión Financiera Integrada:**
    *   A medida que el proyecto avanza, se registran todos los movimientos financieros. Los pagos recibidos se asocian directamente al proyecto, y los gastos relacionados (como software o recursos externos) también se contabilizan.
    *   La herramienta permite calcular balances para entender la rentabilidad de cada proyecto o cliente.

5.  **Cierre y Análisis:**
    *   Al completar todos los entregables y recibir el pago final, el proyecto se marca como "finalizado".
    *   El sistema mantiene un registro histórico completo, lo que facilita la consulta de proyectos pasados, la generación de informes y la planificación a futuro.

**Beneficio Principal:**
El gestor centraliza todas las facetas del trabajo freelance en una única interfaz de línea de comandos, aportando orden, eficiencia y control. Esto permite al profesional enfocarse en lo más importante: entregar un trabajo de calidad.

## Requisitos del Sistema

Para instalar y ejecutar este proyecto localmente, necesitarás tener instalado el siguiente software:

-   **Node.js**: Se recomienda la versión `18.x` o superior.
-   **npm**: Generalmente se instala junto con Node.js.
-   **MongoDB**: Es necesario tener una instancia de MongoDB en ejecución, ya sea localmente o en un servicio en la nube como MongoDB Atlas.

## Planificación del Proyecto

Este proyecto se gestiona utilizando la metodología **Scrum** para asegurar un desarrollo iterativo, flexible y enfocado en la entrega de valor.

-   **Herramienta de Gestión:** Para el seguimiento de tareas, sprints y artefactos de Scrum, se utiliza **Trello**.
-   **Flujo de Trabajo:** El desarrollo se organiza en Sprints de una semana, cada uno con un objetivo claro y un conjunto de historias de usuario a completar.
-   **Roles del Equipo:**
    -   **Product Owner:** Juan Santoyo
    -   **Scrum Master:** Omar Granados
    -   **Developer(s):** Juan Santoyo, Omar Granados
-   **Documentación:** La planificación detallada, incluyendo el backlog del producto, las historias de usuario y el registro de los sprints, se encuentra en el documento `Planificacion_Scrum.pdf` adjunto en este repositorio.



