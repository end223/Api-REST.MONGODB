import mongoose from "mongoose";

 const authorsSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    bio: { type: String }  
 }, {versionKey: false});

 const authors = mongoose.model("authors", authorsSchema);

 export { authors, authorsSchema };