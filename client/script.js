/* eslint-disable no-new */
function apiGet() {
  // var for input
  const input1 = document.getElementById('input1').value;
  const url = `https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${input1}`;

  // header info
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '89685e395fmsh3d2378d3ff83ae8p19e6f1jsn2886088315d9',
      'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
    }
  };

  // request data
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.items[0]);
      const {name} = data.items[0];
      const {calories} = data.items[0];
      const {sugar_g} = data.items[0];
      const {protein_g} = data.items[0];

      const ctx = document.getElementById('myChart');

      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Calories', 'Sugar', 'Protein', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [calories, sugar_g, protein_g, 5, 2, 3],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    })
    .catch((err) => console.error(err));
  // .then((response) => response.json())
  // .then((response) => console.log(response))
  // .catch((err) => console.error(err));
}
