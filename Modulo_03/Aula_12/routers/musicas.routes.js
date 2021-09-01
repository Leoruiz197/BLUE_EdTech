const express = require('express');
const router = express.Router();
const Musica = require('../models/musicas');

router.post("/add", async (req, res) => {
    await Musica.create(req.body)
    .then(() => {
        res.status(200).send("Musica adicionada com sucesso");
    }).catch((err) => {
        res.status(400).send("Algo errado com a musica, tente novamente");
        console.error(err);
    })
});

router.get('/', async (req, res) => {
    await Musica.find({})
    .then((musica) => {
        res.status(200).send(musica);
    })
    .catch((err) => {
        res.status(400).send("Algo errado com a musica, tente novamente");
        console.log(err);
    })
});

router.get('/findById/:id', async (req, res) => {
    await Musica.find({_id : req.params.id})
    .then((musica) => {
        res.status(200).send(musica);
    })
    .catch((err) => {
        res.status(400).send("Algo errado com a musica, tente novamente");
        console.log(err);
    })
});

router.get('/findByName/:name', async (req, res) => {
    await Musica.find({nome : req.params.name})
    .then((musica) => {
        res.status(200).send(musica);
    })
    .catch((err) => {
        res.status(400).send("Algo errado com a musica, tente novamente");
        console.log(err);
    })
});

router.put("/update/:id", async (req, res) => {
    await Musica.updateOne({_id : req.params.id},req.body)
    .then(() => {
        res.status(200).send("Atualizado com sucesso");
    })
    .catch((err) => {
        res.status(400).send("Algo errado com a musica, tente novamente");
        console.log(err);
    });
});

router.delete("/delete/:id", async (req, res) => {
    await Musica.deleteOne({_id : req.params.id})
    .then(() => {
        res.status(200).send("Deletado com sucesso");
    })
    .catch((err) => {
        res.status(400).send("Algo errado com a musica, tente novamente");
        console.log(err);
    });
});


module.exports = router;