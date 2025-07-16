let myChart = null;

function calcular() {
    const opcion = document.getElementById('opciones').value;
    const acpm = parseFloat(document.getElementById('ACPM').value) || 0;

    let ctb = 0, cte = 0, ceb = 0, cee = 0;
    let energiaLabel = '';

    if (opcion === 'eolica') {
        energiaLabel = 'Energía Eólica';
        ctb = acpm * 0.1;  // Tiempo de generación para ACPM (horas por kW)
        cte = acpm * 0.04; // Tiempo de generación para eólica
        ceb = acpm * 680;  // Emisiones ACPM (gCO2 por kW)
        cee = acpm * 15;   // Emisiones eólica
    } else if (opcion === 'solar') {
        energiaLabel = 'Energía Solar';
        ctb = acpm * 0.1;
        cte = acpm * 1;
        ceb = acpm * 680;
        cee = acpm * 35;
    } else if (opcion === 'biocombustible') {
        energiaLabel = 'Biocombustible';
        ctb = acpm * 0.1;
        cte = acpm * 0.07;
        ceb = acpm * 680;
        cee = acpm * 150;
    } else {
        alert('Por favor, selecciona una energía.');
        return;
    }

    document.getElementById('tituloC').textContent = energiaLabel;
    document.getElementById('ctb').textContent = ctb.toFixed(2);
    document.getElementById('cte').textContent = cte.toFixed(2);
    document.getElementById('ceb').textContent = ceb.toFixed(2);
    document.getElementById('cee').textContent = cee.toFixed(2);

    // Destruir gráfico anterior si existe
    if (myChart) {
        myChart.destroy();
    }

    // Crear nuevo gráfico
    const ctx = document.getElementById('miGrafico').getContext('2d');
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Tiempo de Generación (h)', 'Emisiones Generadas (gCO2)'],
            datasets: [
                {
                    label: 'ACPM',
                    data: [ctb, ceb],
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label: energiaLabel,
                    data: [cte, cee],
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    type: 'logarithmic', // Escala logarítmica para manejar rangos amplios
                    beginAtZero: false,  // Escala logarítmica no puede empezar en 0
                    min: 0.01,           // Valor mínimo para evitar problemas con 0
                    title: {
                        display: true,
                        text: 'Valores (escala logarítmica)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Métricas'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Comparación de Consumo y Emisiones'
                }
            }
        }
    });
}