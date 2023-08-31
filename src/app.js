import express from "express";

const app = express();
app.use(express.json());

const mangas = [
    {
        id: 1,
        title: "Chi no Wadachi"
    },
    {
        id: 2,
        title: "Okaeri Alice"
    }
]

function buscaMangas (id) {
    return mangas.findIndex(mangas => {
        return mangas.id === Number(id);
    })
}

app.get ("/", (req, res) => {
res.status(200).send("Node Server");
});

app.get ("/mangas", (req, res) => {
    res.status(200).json(mangas);
    });

app.get ("/mangas/:id", (req, res) => {
    const index = buscaMangas(req.params.id);
    res.status(200).json(mangas[index]);

})

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

