let clock = document.querySelector('#clock');
//console.log(clock);

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = `${date.toLocaleTimeString()}`;
}, 1000);

// setInterval method calls function at specified interval until clearInterval method is not called.
// 1sec = 1000ms
