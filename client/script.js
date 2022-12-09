const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '89685e395fmsh3d2378d3ff83ae8p19e6f1jsn2886088315d9',
    'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
  }
};

fetch('https://calorieninjas.p.rapidapi.com/v1/nutrition?query=tomato', options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(data.items);
    console.log(data.items[0].name);
    console.log(data.items[0].calories);

    const cals = `<p>${data.items[0].calories}`;

    document.getElementById('test').innerHTML = cals;
  })
  .catch((err) => console.error(err));
// .then((response) => response.json())
// .then((response) => console.log(response))
// .catch((err) => console.error(err));
