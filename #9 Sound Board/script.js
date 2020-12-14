const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttons = document.querySelector(".buttons");

sounds.forEach((sound) => {
  btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopCurrentSound();
    document.getElementById(sound).play();
  });

  buttons.appendChild(btn);
});

function stopCurrentSound() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
