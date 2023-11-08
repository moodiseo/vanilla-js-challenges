const clock = document.querySelector("#clock");

function christmasClock() {
  const christmas = new Date("2023-12-25");
  const date = new Date();

  const gap = christmas - date;

  const day = String(Math.floor(gap / (1000 * 60 * 60 * 24))).padStart(3, "0");
  const hours = String(Math.floor((gap / (1000 * 60 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const minutes = String(Math.floor((gap / (1000 * 60)) % 60)).padStart(2, "0");
  const seconds = String(Math.floor((gap / 1000) % 60)).padStart(2, "0");

  clock.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

christmasClock();
setInterval(christmasClock, 1000);
