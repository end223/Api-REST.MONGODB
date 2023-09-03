import mongoose from "mongoose";
import { authorsSchema } from "./author.js";

const mangasSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true},
    authors: authorsSchema,
    price: { type: Number },
    pages: { type: Number },
},{ versionKey: false});

const mangas = mongoose.model("Manga", mangasSchema);

export default mangas;
