# API de Tareas con Node.js y Express

Este es un proyecto de una API REST básica para gestionar tareas, desarrollada con Node.js y Express.

## 🚀 Características
- Obtener todas las tareas.
- Obtener una tarea por su ID.
- Agregar nuevas tareas.
- Eliminar tareas por ID.

## 📋 Requisitos
Asegúrate de tener instalado lo siguiente:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (se instala junto con Node.js)

## 📦 Instalación
1. Clona este repositorio o copia los archivos.
2. Abre una terminal y navega hasta la carpeta del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:
   ```bash
   npm install express
   ```

## 🚀 Uso
Para iniciar el servidor, ejecuta:
```bash
node index.js
```
Por defecto, el servidor se ejecutará en el puerto **80**.

## 🛠 Endpoints

### Obtener todas las tareas
**GET** `/api/Tareas`

### Obtener una tarea por ID
**GET** `/api/Tareas/:id`

### Agregar una nueva tarea
**POST** `/api/Tareas`
- **Body:** `{ "nombre": "Nueva tarea" }`

### Eliminar una tarea por ID
**DELETE** `/api/Tareas/:id`

## 📌 Notas
- El proyecto usa un array en memoria, por lo que los cambios no se guardan en una base de datos.
- Puedes cambiar el puerto modificando la variable `port` en el código.

## 📜 Licencia
Este proyecto se encuentra bajo la licencia MIT.

