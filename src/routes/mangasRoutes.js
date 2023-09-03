import express from "express";
import MangaController from "../controllers/MangaController.js";

const routes = express.Router();

routes.get("/mangas", MangaController.listarMangas);
routes.get("/mangas/:id", MangaController.listarMangaPorId);
routes.post("/mangas", MangaController.criarManga);
routes.put("/mangas/:id", MangaController.atualizarManga);
routes.delete("/mangas/:id", MangaController.deletarManga);

export default routes;
