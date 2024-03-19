let matricesDiv = document.getElementById('matrices');
let resultadoDiv = document.getElementById('resultado');

function crearMatrices() {
  let filas1 = parseInt(document.getElementById('filas1').value);
  let columnas1 = parseInt(document.getElementById('columnas1').value);
  let filas2 = parseInt(document.getElementById('filas2').value);
  let columnas2 = parseInt(document.getElementById('columnas2').value);

  if (isNaN(filas1) || isNaN(columnas1) || isNaN(filas2) || isNaN(columnas2)) {
    alert('Por favor ingrese números válidos para las filas y columnas.');
    return;
  }

  matricesDiv.innerHTML = '';
  let matriz1 = '<h3>Matriz 1:</h3>';
  let matriz2 = '<h3>Matriz 2:</h3>';

  for (let i = 0; i < filas1; i++) {
    for (let j = 0; j < columnas1; j++) {
      matriz1 += `<input type="number" id="matriz1_${i}_${j}" class="valor" placeholder="Fila ${i + 1}, Columna ${j + 1}"> `;
    }
    matriz1 += '<br>';
  }

  for (let i = 0; i < filas2; i++) {
    for (let j = 0; j < columnas2; j++) {
      matriz2 += `<input type="number" id="matriz2_${i}_${j}" class="valor" placeholder="Fila ${i + 1}, Columna ${j + 1}"> `;
    }
    matriz2 += '<br>';
  }

  matricesDiv.innerHTML = matriz1 + '<br>' + matriz2;
}

async function sumarMatrices() {
    const filas1 = parseInt(document.getElementById('filas1').value);
    const columnas1 = parseInt(document.getElementById('columnas1').value);
    const filas2 = parseInt(document.getElementById('filas2').value);
    const columnas2 = parseInt(document.getElementById('columnas2').value);
  
    // Crear matrices
    const matriz1 = [];
    const matriz2 = [];
  
    for (let i = 0; i < filas1; i++) {
      matriz1[i] = [];
      for (let j = 0; j < columnas1; j++) {
        matriz1[i][j] = parseInt(document.getElementById(`matriz1_${i}_${j}`).value);
      }
    }
  
    for (let i = 0; i < filas2; i++) {
      matriz2[i] = [];
      for (let j = 0; j < columnas2; j++) {
        matriz2[i][j] = parseInt(document.getElementById(`matriz2_${i}_${j}`).value);
      }
    }
  
    // Enviar matrices al servidor para la suma
    const response = await fetch('http://localhost:3000/sumar-matrices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ matriz1, matriz2 })
    });
  
    const resultado = await response.json();
    console.log(resultado);
  }
  