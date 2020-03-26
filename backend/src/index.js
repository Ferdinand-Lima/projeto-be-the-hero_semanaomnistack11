const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
//Rotas e Recurso

// GET: Busca uma informação no Back-End
// POST: Cria uma informação no Back-End
// PUT: Altera uma informação no back-End
// DELETE: Deleta uma informação no Back-End

// Metodos http
// Query Params : Parâmetros nomeados enviados na rota após "?" (Filtros, Páginação)Ex: users/?nome=ferdinand&idade=35
// Route Params : Parâmetros usados para identificar recursos 
// Request body :  Corpo da requisição, utilizado para criar ou alterar recursos

// Bancos de Dados
// SQL: MySQL, SQLite, PostreSQL, Oracle, Microsoft SQL Server
// NoSQL: MongoDB. CouchDB etc.

// Driver: SELECT * FROM users
// Query Builder: table('users').Select('*')where()



app.listen(3333)