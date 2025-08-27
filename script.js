// Graphique consommation mensuelle
const ctx = document.getElementById('consoChart');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [{
      label: 'Conso (kWh)',
      data: [1200, 1100, 900, 950, 870, 800],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.3
    }]
  }
});

// Graphique circulaire
const pie = document.getElementById('pieChart');
new Chart(pie, {
  type: 'pie',
  data: {
    labels: ['Éclairage', 'Climatisation', 'Informatique', 'Autres'],
    datasets: [{
      data: [35, 40, 15, 10],
      backgroundColor: ['#f39c12','#3498db','#2ecc71','#e74c3c']
    }]
  }
});
