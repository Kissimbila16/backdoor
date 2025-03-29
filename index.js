const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.get('/ola', (req, res) => {
    exec('./ola_mundo.sh', (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro ao executar o script: ${error}`);
            return res.status(500).send('Erro ao executar o script');
        }
        res.send(stdout);
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
