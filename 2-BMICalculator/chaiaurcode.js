const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  //console.log(height);
  const weight = parseInt(document.querySelector('#weight').value);
  //console.log(weight);
  const result = document.querySelector('#results');
  getBMI();

  function getBMI() {
    if (height === '' || height < 1 || isNaN(height)) {
      result.innerHTML = 'Enter a Valid height';
    } else if (weight === '' || weight < 1 || isNaN(weight)) {
      result.innerHTML = 'Enter a Valid weight';
    } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      result.innerHTML = `<h2>${bmi}</h2>`;
    }
  }
});
