const express = require('express');
const app = express();

app.use(express.json());

const Tareas = [
    {id: 1, nombre: 'Estudiar Node.js'},
    {id: 2, nombre: 'Practicar JavaScript'},
    {id: 3, nombre: 'Hacer ejercicio'},
];

app.get('/', (req, res) => {
    res.send("Mi node JS APIs")
});

app.get('/api/Tareas', (req, res) => {
    res.send(Tareas)
});

app.get('/api/Tareas/:id', (req, res) =>{
    const Tarea = Tareas.find(c => c.id === parseInt(req.params.id));
    if (!Tarea) return res.status(404).send('Tarea no encontrada');
    else res.send(Tarea);
});

app.post('/api/Tareas', (req, res) => {
    const Tarea = {
        id: Tareas.length +1,
        nombre: req.body.nombre
    };

    Tareas.push(Tarea);
    res.send(Tarea);
});

app.delete('/api/Tareas/:id', (req, res) => {
    const Tarea = Tareas.find(c => c.id === parseInt(req.params.id));
    if (!Tarea) return res.status(404).send('Tarea no encontrada');

    const index = Tareas.indexOf(Tarea);
    Tareas.splice(index, 1)
    res.send(Tarea)
});

const port = process.env.port || 80
app.listen(port, () => console.log(`Ejecutando puerto${port}...`))
