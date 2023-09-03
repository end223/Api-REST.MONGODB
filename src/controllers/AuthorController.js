import { authors } from "../models/author.js";

class AuthorController {

    static async listarAuthors (req, res) {
        try {
            const listaAuthors = await authors.find({});
            res.status(200).json(listaAuthors);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao listar Author`});
        }
    };
    
    static async listarAuthorPorId (req, res) {
        try {
            const id = req.params.id;
            const authorEncontrado = await authors.findById(id);
            res.status(200).json(authorEncontrado);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao encontrar Author por id`});
        }
    };

    static async criarAuthor (req, res) {
        try {
            const novoAuthor = await authors.create(req.body);
            res.status(201).json({message: "Author criado com sucesso", author: novoAuthor});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao cadastrar Author`});
        }
    }

    static async atualizarAuthor (req, res) {
        try {
            const id = req.params.id;
            await authors.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Author atualizado com sucesso" });
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao atualizar Author`});
        }
    };

    static async deletarAuthor (req, res) {
        try {
            const id = req.params.id;
            await authors.findByIdAndRemove(id);
            res.status(200).json({ message: "Author removido com sucesso" });
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao remover Author`});
        }
    };

};

export default AuthorController;
