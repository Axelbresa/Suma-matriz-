// matricesController.js
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
    console.log(resultado);
    return resultado;
}

module.exports = { sumarMatrices };
