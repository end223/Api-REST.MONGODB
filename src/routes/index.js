import express from "express";
import mangas from "./mangasRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Node Server"));
    
    app.use(express.json(), mangas);
};

export default routes;