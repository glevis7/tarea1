import express  from "express";

const PORT = 8000
const app = express()

const json_get = {
    "id": "6197f7d7c1b2af0dccecdca2",
    "name": "Juan",
    "lastname":"Perez",
}

const logger = (req, res, next) => {
    const {method, url} = req
    console.log(`se realizó una peticion del metodo ${method} desde la ruta ${url}`)
    next()
}

app.use(logger)

app.use(express.json())

app.get("/users", logger, (req, res) => {
    res.json(json_get)
})

app.post("/users", (req, res) =>{

    const {body} = req

    res.status(201).json({
        "messege": "Usuario creado",
        "userInfo": {body}
    })
})

app.listen(PORT, () => {
    console.log(`se esta ejecutando el servidor ${PORT}`)
})