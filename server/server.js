const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors'); 
const { sumarMatrices } = require('./controllador_matrices'); 

app.use(bodyParser.json());
app.use(cors());

app.post('/sumar-matrices', (req, res) => {
  const { matriz1, matriz2 } = req.body;

  if (!matriz1 || !matriz2 || matriz1.length !== matriz2.length || matriz1[0].length !== matriz2[0].length) {
      res.status(400).json({ error: 'Las matrices no son válidas para la suma.' });
      return;
  }

  const resultado = sumarMatrices(matriz1, matriz2); // Usa la función del controlador
  res.json(resultado);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
