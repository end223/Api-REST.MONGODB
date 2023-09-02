import express from "express";
import connectDB from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connect = await connectDB();

connect.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

connect.once("open", () => {
    console.log("Conectado a DB com sucesso!");
});

const app = express();

routes(app);

export default app;

// 

