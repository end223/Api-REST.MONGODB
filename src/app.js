import express from "express";

const app = express();

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

app.get ("/", (req, res) => {
res.status(200).send("Node Server");
});

app.get ("/mangas", (req, res) => {
    res.status(200).json(mangas);
    });

export default app;

