# Examen Parcial - Pipeline de Despliegue Automatizado (Vite + React)

Este proyecto cumple con los requisitos del Examen Parcial utilizando el framework **Vite + React** (evitando el uso de Next.js como se indicó en las instrucciones).

## Contenido
- **App**: Aplicación moderna "Hola Mundo" construida con Vite, React 18, TypeScript y Tailwind CSS.
- **Dockerfile**: Configuración multi-etapa que construye la app y la sirve mediante **Nginx** en el puerto 80.
- **GitHub Actions**: Pipeline completo para desplegar en la infraestructura de la Tarea 2.

## Configuración en GitHub
1. Sube este código a un repositorio de GitHub.
2. Agrega los siguientes **Secrets**:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`

## Funcionamiento del Pipeline
Al hacer `push` a `main`:
1. Construye el binario estático de React.
2. Empaqueta el binario en una imagen de Nginx.
3. Sube la imagen a AWS ECR.
4. Actualiza ECS Fargate para usar la nueva versión del examen.

## Infraestructura Objetivo (Tarea 2)
- **Cluster**: `tarea2-fargate-cluster`
- **Servicio**: `tarea2-fargate-service`
- **Registro**: `tarea2-fargate` (ECR)
