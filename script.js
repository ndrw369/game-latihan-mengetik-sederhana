const gameDiv = document.getElementById("game");
const input = document.getElementById("input");
let score = 0;
let time = 60;
let chars =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";
let gameInterval = setInterval(() => {
  let char = chars.charAt(Math.floor(Math.random() * chars.length));
  let newDiv = document.createElement("div");
  newDiv.innerText = char;
  gameDiv.appendChild(newDiv);
}, 1000);

input.addEventListener("input", (e) => {
  let currentChar = gameDiv.firstChild.innerText;
  let typedChar = e.target.value.charAt(e.target.value.length - 1);
  if (currentChar === typedChar) {
    gameDiv.removeChild(gameDiv.firstChild);
    score++;
    e.target.value = "";
  }
});

let timeInterval = setInterval(() => {
  time--;
  if (time === 0) {
    clearInterval(gameInterval);
    clearInterval(timeInterval);
    let accuracy = (score / (score + gameDiv.children.length)) * 100;
    alert(
      `Game over! Score: ${score}, Accuracy: ${accuracy.toFixed(2)}%, Time: ${
        60 - time
      }s`
    );
  }
}, 1000);
