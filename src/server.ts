import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRouter from './routes/index';

dotenv.config();

const server = express();

server.engine('mustache', mustache());
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));

server.use(express.static(path.join(__dirname, '../public')));
server.use(mainRouter);

const PORT = Number(process.env.PORT) || 4000;

server.use((req, res) => {
  res.status(404).render('pages/404');
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
