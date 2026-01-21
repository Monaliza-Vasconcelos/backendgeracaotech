import express from 'express';

//Criar uma rota do zero

const lista = {"Maicon": 10,
                "Ana": 9, 
                "João": 8, 
                "Maria": 6.5};

const app = express();
app.get('/', (req, res) => {
    res.json({message: 'Olá Mundo!'});//Resposta em formato JSON
})

app.get('/alunos', (req, res) => {
    res.json(lista);//Resposta em formato JSON
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta http://localhost:3000');
}   ); //Servidor ouvindo na porta 3000
