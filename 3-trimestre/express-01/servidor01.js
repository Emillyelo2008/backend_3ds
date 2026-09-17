import express from 'express'

const app = express()
const porta = 3000

// Cria as rotas do servidor
app.get('/', (req, res)=> {
    res.send('Olá, abacaxi!')
})
app.get('/doces', (req, res)=> {
    res.send(
        `<h1>Olá, Morango do Amor<h1>
            <p>Nossa loja de morangos...</p>`
    )
})
// Liberar a porta do meu computador 
app.listen(porta, () => { console.log('Servidor está vivo!')})