import mangas from "../models/mangas.js";

class MangaController {

    static async listarMangas (req, res) {
        try {
            const listaMangas = await mangas.find({});
            res.status(200).json(listaMangas);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao listar mangás`});
        }
    };
    
    static async listarMangaPorId (req, res) {
        try {
            const id = req.params.id;
            const mangaEncontrado = await mangas.findById(id);
            res.status(200).json(mangaEncontrado);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao encontrar mangá por id`});
        }
    };

    static async criarManga (req, res) {
        try {
            const novoManga = await mangas.create(req.body);
            res.status(201).json({message: "Mangá criado com sucesso", mangas: novoManga});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao cadastrar mangá`});
        }
    }

    static async atualizarManga (req, res) {
        try {
            const id = req.params.id;
            await mangas.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Mangá atualizado com sucesso" });
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao atualizar mangá`});
        }
    };

    static async deletarManga (req, res) {
        try {
            const id = req.params.id;
            await mangas.findByIdAndRemove(id);
            res.status(200).json({ message: "Mangá removido com sucesso" });
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao remover mangá`});
        }
    };

};

export default MangaController;