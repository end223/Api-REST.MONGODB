import express from "express";
import connectDB from "./config/dbConnect.js";
import mangas from "./models/mangas.js";

const connect = await connectDB();

connect.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

connect.once("open", () => {
    console.log("Conectado a DB com sucesso!");
});

const app = express();
app.use(express.json());

app.get ("/", (req, res) => {
res.status(200).send("Node Server");
});

app.get ("/mangas", async (req, res) => {
    const listaMangas = await mangas.find({});
    res.status(200).json(listaMangas);
    });

app.get ("/mangas/:id", (req, res) => {
    const index = buscaMangas(req.params.id);
    res.status(200).json(mangas[index]);

});

app.post("/mangas", (req, res) => {
    mangas.push(req.body);
    res.status(201).send("Mangá adicionado com sucesso");
});

app.put ("/mangas/:id", (req, res) => {
    const index = buscaMangas(req.params.id);
    mangas[index].title = req.body.title;
    res.status(200).json(mangas);
});

app.delete ("/mangas/:id", (req, res) => {
    const index = buscaMangas(req.params.id);
    mangas.splice(index, 1);
    return res.status(200).send ("Mangá deletado com sucesso");

});

export default app;

// 

