const getTareas = (req, res) => {
    res.status(200).json({ mensaje: 'Mostrar las Tareas' })
}

const setTareas = (req, res) => {
    if(!req.body.texto) {
        //res.status(400).json({mensaje: 'Favor de teclear la descripciòn de la tarea'})
        res.status(400)
        throw new Error('Favor de teclear una descripciòn para la tarea')
    }
    res.status(201).json({ mensaje: 'Crear una tarea' })
}

const updateTareas = (req, res) => {
    res.status(200).json({ mensaje: `Modificar la tarea ${req.params.id}`})
}

const deleteTareas = (req, res) => {
    res.status(200).json({ mensaje: `Eliminar la tarea ${req.params.id}` })
}

module.exports = {
    getTareas,
    setTareas,
    updateTareas,
    deleteTareas
}