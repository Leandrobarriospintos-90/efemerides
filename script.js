let efemerides = [];

fetch('efemerides.json')
  .then(response => response.json())
  .then(data => {
    efemerides = data;
  })
  .catch(error => console.error('Error cargando efemérides:', error));

function buscarEfemeride() {
  const input = document.getElementById('fechaBuscada').value;
  const resultadosDiv = document.getElementById('resultados');
  resultadosDiv.innerHTML = '';

  if (!input) {
    resultadosDiv.innerHTML = '<p>Por favor, seleccioná una fecha.</p>';
    return;
  }

  const [anio, mes, dia] = input.split('-');
  const fechaFormateada = `${dia}-${mes}`;

  const coincidencias = efemerides.filter(e => e.fecha === fechaFormateada);

  if (coincidencias.length > 0) {
    coincidencias.forEach(e => {
      const p = document.createElement('p');
      p.textContent = `${e.fecha}: ${e.evento}`;
      resultadosDiv.appendChild(p);
    });
  } else {
    resultadosDiv.innerHTML = '<p>No hay efemérides para esa fecha.</p>';
  }
}