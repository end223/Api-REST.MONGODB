import mongoose from "mongoose";

const mangasSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true},
    author: { type: String },
    price: { type: Number },
    pages: { type: Number },
},{ versionKey: false});

const mangas = mongoose.model("Manga", mangasSchema, "Oshimi Shuuzo");

export default mangas;
