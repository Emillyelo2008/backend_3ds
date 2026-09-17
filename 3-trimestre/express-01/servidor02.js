import express from 'express'
import path from 'path'

const dirBase = import.meta.dirname
const app = express()
const porta = 3000
//Usando Middleware (software intermediário)
app.use(express.static(path.join(dirBase, 'publico')))

// Cria as rotas do servidor
app.get('/', (req, res)=> {
    res.sendFile('/paginas/index.html',{root:dirBase})

})

//Liberar a porta do meu computador 
app.listen(porta,() => {console.log('Servidor está vivo!')})

