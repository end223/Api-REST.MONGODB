import http from "http";

const PORT = 3000;

const rotas = {
    "/": "Node Server",
    "/livros": "Sessão de livros",
    "/autores": "Sessão de autores",
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(rotas[req.url]);
});

server.listen(PORT, () => {
    console.log("Node.js rodando na porta 3000");
});

