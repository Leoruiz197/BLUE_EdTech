const express = require('express');
const router = express.Router();
const Musica = require('../models/musicas');

router.post("/add", (req, res) => {
    res.send("rota /add musica");
});

router.get('/', (req, res) => {
    res.send("rota ok / musica");
});

router.put("/update", (req, res) => {
    res.send("rota /update musica");
});

router.delete("/delete", (req, res) => {
    res.send("rota /delete musica");
});


module.exports = router;