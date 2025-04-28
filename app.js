// let count;

function handleIncriment() {
  let count = document.getElementById("counts").value;
  document.getElementById("counts").value = ++count;
  console.log("clicked");
}

function handleDecrement() {
  let count = document.getElementById("counts").value;
  if (count > 0) {
    document.getElementById("counts").value = --count;
    console.log("clicked");
  }
}

function reset() {
  document.getElementById("counts").value = count = 0;
}
