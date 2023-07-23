const button = document.querySelectorAll('.button');
// console.log(button);
button.forEach(function (button) {
  button.addEventListener('click', function (e) {
    // console.log(e.target.id);

    if (e.target.id) {
      const body = document.querySelector('body');
      body.style.backgroundColor = e.target.id;
    }
  });
});
