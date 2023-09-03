import express from "express";
import AuthorController from "../controllers/AuthorController.js";

const routes = express.Router();

routes.get("/authors", AuthorController.listarAuthors);
routes.get("/authors/:id", AuthorController.listarAuthorPorId);
routes.post("/authors", AuthorController.criarAuthor);
routes.put("/authors/:id", AuthorController.atualizarAuthor);
routes.delete("/authors/:id", AuthorController.deletarAuthor);

export default routes;
