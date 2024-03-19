const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors'); 

app.use(bodyParser.json());
app.use(cors());

app.post('/sumar-matrices', (req, res) => {
    const { matriz1, matriz2 } = req.body;
  
    if (!matriz1 || !matriz2 || matriz1.length !== matriz2.length || matriz1[0].length !== matriz2[0].length) {
      res.status(400).json({ error: 'Las matrices no son válidas para la suma.' });
      return;
    }
  
    const resultado = sumarMatrices(matriz1, matriz2);
    res.json(resultado);
  });
  
  function sumarMatrices(matriz1, matriz2) {
    const filas = matriz1.length;
    const columnas = matriz1[0].length;
    const resultado = [];
  
    for (let i = 0; i < filas; i++) {
      resultado[i] = [];
      for (let j = 0; j < columnas; j++) {
        const valorMatriz1 = matriz1[i][j] || 0; // Tratar valores nulos como cero
        const valorMatriz2 = matriz2[i][j] || 0; // Tratar valores nulos como cero
        resultado[i][j] = valorMatriz1 + valorMatriz2;
      }
    }
    console.log(resultado)
    return resultado;
  }

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
