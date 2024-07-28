window.onload = function() {
  var lyrics = document.querySelector(".lyrics-large");
  var popup = document.querySelector(".lyrics-box");

  var fontSize = 30; 
  while (lyrics.scrollHeight > lyrics.offsetHeight) {
      fontSize -= 1;
      lyrics.style.fontSize = fontSize + "px";
  }

  var maxWidth = Math.max(lyrics.offsetWidth, lyrics.scrollWidth);
  popup.style.width = maxWidth + "px";
}

var currentIndex = 0;

function closeAlert() {
  var lyrics = document.querySelector(".lyrics-large");
  var songLines = [
    ".",
    "Cuando recién te conocí me asusté porque te amé",
    "Te amé demasiado pronto, sentí amor por todo el cuerpo hasta los huesos",
    "Era algo malo o porque mi amor era tan fácil de dártelo", 
    "Solo me bastaron unas semanas para quererte decir te amo", 
    "Pero es que no podía evitarlo",
    "Hablar contigo a diario me hacía sentir vivo",
    "Escucharte hablar de lo que te gustaba me hacía emocionarme",
    "Tal parecía que te entendía", 
    "A una parte de mí le gustaba",
    "Le gustaba sentirlo todo",
    "Porque pensaba que podía hacértelo sentir también",
    "Creía que era romántico y poético, me gustaba amarte",
    "Que estuvieras consciente de que yo por ti lo daba todo", 
    "Y esperar que aunque fuera pronto",
    "Me amaras también",
  ];

  currentIndex = (currentIndex + 1) % songLines.length;
  lyrics.textContent = songLines[currentIndex];

  // Reproducir música
  var audio = document.getElementById('background-music');
  audio.play();
}
