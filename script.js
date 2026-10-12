// CAMBIO DE PANTALLAS
const screens = [
  "intro",
  "letter",
  "prescription",
  "reasons",
  "dreams",
  "memories",
  "promise",
  "universe",
  "garden",
  "finale"
];

function showScreen(id) {
  screens.forEach(screen => {
    document.getElementById(screen)
      .classList.toggle("hidden", screen !== id);
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// PANTALLA COMPLETA
function requestFullscreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen().catch(() => {});
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

document.getElementById("fullscreenBtn").addEventListener("click", () => {
  if (!document.fullscreenElement && !document.webkitFullscreenElement) {
    requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
});

// SOBRE Y CARTA PRINCIPAL
const envelopeButton = document.getElementById("openEnvelope");
const envelopeScene = document.getElementById("envelopeScene");
const letterCard = document.getElementById("letterCard");

envelopeButton.addEventListener("click", () => {
  if (envelopeButton.classList.contains("open")) return;

  envelopeButton.classList.add("open");
  envelopeScene.classList.add("opened");

  setTimeout(() => {
    envelopeScene.classList.add("hidden");
    letterCard.classList.remove("hidden");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, 850);
});

// SOBRE Y CARTA DE LA PROMESA
const promiseEnvelopeBtn = document.getElementById("openPromiseEnvelope");
const promiseEnvelopeScene = document.getElementById("promiseEnvelopeScene");
const promiseCard = document.getElementById("promiseCard");

promiseEnvelopeBtn.addEventListener("click", () => {
  if (promiseEnvelopeBtn.classList.contains("open")) return;

  promiseEnvelopeBtn.classList.add("open");
  promiseEnvelopeScene.classList.add("opened");

  setTimeout(() => {
    promiseEnvelopeScene.classList.add("hidden");
    promiseCard.classList.remove("hidden");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, 850);
});

// INTERACTIVIDAD CORAZÓN DE DISTANCIA (TUCUMÁN - MANILA)
const universeHeartBtn = document.getElementById("universeHeartBtn");
const universeMsgBox = document.getElementById("universeMsgBox");

universeHeartBtn.addEventListener("click", () => {
  universeMsgBox.classList.toggle("hidden");
});

// JARDÍN DE TULIPANES INTERACTIVO
const tulipPhrases = [
  "Cada pétalo blanco representa la paz y la pureza del amor sincero que te tengo.",
  "A la distancia, sos mi pensamiento favorito al despertar y antes de dormir.",
  "Tu sonrisa ilumina mis días sin importar los miles de kilómetros que nos separen.",
  "Admiro tu esfuerzo inagotable y la gran uróloga en la que te estás convirtiendo.",
  "Cada día que pasa es un pasito menos para nuestro próximo y ansiado abrazo.",
  "Sos mi refugio favorito, mi persona en el mundo y mi hogar estés donde estés."
];

const tulipGrid = document.getElementById("tulipGardenGrid");
const tulipDisplayText = document.getElementById("tulipDisplayText");

tulipPhrases.forEach((phrase, index) => {
  const tulipCard = document.createElement("button");
  tulipCard.className = "tulip-card";
  tulipCard.type = "button";
  tulipCard.innerHTML = `
    <span class="tulip-icon">🌷</span>
    <span class="tulip-label">Tulipán 0${index + 1}</span>
  `;

  tulipCard.addEventListener("click", () => {
    document.querySelectorAll(".tulip-card").forEach(c => c.classList.remove("active"));
    tulipCard.classList.add("active");
    tulipDisplayText.textContent = `"${phrase}"`;
  });

  tulipGrid.appendChild(tulipCard);
});

// LAS 26 RAZONES
const reasons = [
  "Por cómo iluminás mis días a la distancia.",
  "Por tu inteligencia.",
  "Por tu dedicación inquebrantable.",
  "Por cómo perseguís tus sueños a pesar de todo.",
  "Por tu sensibilidad.",
  "Por tu valentía ante la distancia.",
  "Por tu forma de aprender y crecer.",
  "Por tu hermosa sonrisa.",
  "Por tu manera de cuidarme incluso lejos.",
  "Por tu perseverancia.",
  "Por tu mirada.",
  "Por tu sentido del humor.",
  "Por la mujer increíble que sos.",
  "Por todo lo que superás día a día.",
  "Por tu ternura.",
  "Por tus ganas de comerte al mundo.",
  "Por tu vocación médica.",
  "Por tu esfuerzo diario en la distancia.",
  "Por tu autenticidad.",
  "Por nuestras largas charlas nocturnas.",
  "Por tus pequeños detalles.",
  "Por la ilusión enorme que me das.",
  "Por nuestros sueños de futuro juntos.",
  "Por todo lo que me enseñás.",
  "Por cada momento que compartimos, cerca o lejos.",
  "Simplemente, por ser vos."
];

const grid = document.getElementById("reasonGrid");

reasons.forEach((reasonText, index) => {
  const button = document.createElement("button");

  button.className = "reason";
  button.type = "button";
  button.innerHTML = `
    <span class="num">${String(index + 1).padStart(2, "0")}</span>
    <span class="label">Razón</span>
    <span class="reason-text">${reasonText}</span>
  `;

  button.addEventListener("click", () => {
    const isOpen = button.classList.contains("open");
    if (!isOpen) {
      button.classList.add("open");
    } else {
      button.classList.remove("open");
    }
  });

  grid.appendChild(button);
});

// NAVEGACIÓN E INICIO
document.getElementById("beginBtn").addEventListener("click", async () => {
  requestFullscreen();

  const romanticAudio = document.getElementById("romanticAudio");
  const romanticBtn = document.getElementById("romanticMusicBtn");

  try {
    await romanticAudio.play();
    romanticBtn.textContent = "♫ Pausar música";
  } catch (err) {
    console.log("Error reproduciendo audio:", err);
  }

  showScreen("letter");
});

document.getElementById("toPrescription").addEventListener("click", () => {
  showScreen("prescription");
});

document.getElementById("toReasons").addEventListener("click", () => {
  showScreen("reasons");
});

document.getElementById("toDreams").addEventListener("click", () => {
  showScreen("dreams");
});

document.getElementById("toMemories").addEventListener("click", () => {
  showScreen("memories");
});

document.getElementById("toPromise").addEventListener("click", () => {
  showScreen("promise");
});

document.getElementById("toUniverse").addEventListener("click", () => {
  showScreen("universe");
});

document.getElementById("toGarden").addEventListener("click", () => {
  showScreen("garden");
});

document.getElementById("toFinale").addEventListener("click", async () => {
  showScreen("finale");
  showerPetals();

  const romanticAudio = document.getElementById("romanticAudio");
  const birthdayAudio = document.getElementById("birthdayAudio");
  const manualPlayBtn = document.getElementById("manualPlayBirthdayBtn");
  
  romanticAudio.pause();
  document.getElementById("romanticMusicBtn").textContent = "♫ Música romántica";

  const birthdayButton = document.getElementById("birthdayMusicBtn");
  birthdayButton.classList.remove("hidden");
  birthdayAudio.currentTime = 0;

  try {
    await birthdayAudio.play();
    birthdayButton.textContent = "♫ Feliz cumpleaños";
    manualPlayBtn.classList.add("hidden");
  } catch (err) {
    console.log("Reproducción automática bloqueada por el navegador:", err);
    manualPlayBtn.classList.remove("hidden");
    birthdayButton.textContent = "♫ Tocar feliz cumpleaños";
  }
});

// Botón manual de respaldo para el feliz cumpleaños
document.getElementById("manualPlayBirthdayBtn").addEventListener("click", async () => {
  const birthdayAudio = document.getElementById("birthdayAudio");
  const manualPlayBtn = document.getElementById("manualPlayBirthdayBtn");
  const birthdayButton = document.getElementById("birthdayMusicBtn");

  try {
    await birthdayAudio.play();
    birthdayButton.textContent = "♫ Feliz cumpleaños";
    manualPlayBtn.classList.add("hidden");
  } catch (err) {
    console.log("No se pudo reproducir audio:", err);
  }
});

// VOLVER A EMPEZAR
document.getElementById("replayBtn").addEventListener("click", () => {
  const birthdayAudio = document.getElementById("birthdayAudio");
  const romanticAudio = document.getElementById("romanticAudio");
  const manualPlayBtn = document.getElementById("manualPlayBirthdayBtn");

  birthdayAudio.pause();
  birthdayAudio.currentTime = 0;
  manualPlayBtn.classList.add("hidden");

  document.getElementById("birthdayMusicBtn").classList.add("hidden");
  document.getElementById("birthdayMusicBtn").textContent = "♫ Feliz cumpleaños";

  // Reset del sobre de la carta principal
  envelopeButton.classList.remove("open");
  envelopeScene.classList.remove("opened");
  envelopeScene.classList.remove("hidden");
  letterCard.classList.add("hidden");

  // Reset del sobre de la promesa
  promiseEnvelopeBtn.classList.remove("open");
  promiseEnvelopeScene.classList.remove("opened");
  promiseEnvelopeScene.classList.remove("hidden");
  promiseCard.classList.add("hidden");

  // Reset de universo y jardín
  universeMsgBox.classList.add("hidden");
  document.querySelectorAll(".tulip-card").forEach(c => c.classList.remove("active"));
  tulipDisplayText.textContent = "Seleccioná un tulipán del jardín para leer su mensaje.";

  document.querySelectorAll(".reason").forEach(card => {
    card.classList.remove("open");
  });

  showScreen("intro");
});

// CONTROLES MANUALES DE MÚSICA
document.getElementById("romanticMusicBtn").addEventListener("click", async () => {
  const audio = document.getElementById("romanticAudio");
  const birthdayAudio = document.getElementById("birthdayAudio");
  const button = document.getElementById("romanticMusicBtn");

  if (audio.paused) {
    birthdayAudio.pause();
    try {
      await audio.play();
      button.textContent = "♫ Pausar música";
    } catch {
      button.textContent = "Añadí romantica.mp3";
    }
  } else {
    audio.pause();
    button.textContent = "♫ Música romántica";
  }
});

document.getElementById("birthdayMusicBtn").addEventListener("click", async () => {
  const audio = document.getElementById("birthdayAudio");
  const romanticAudio = document.getElementById("romanticAudio");
  const button = document.getElementById("birthdayMusicBtn");

  if (audio.paused) {
    romanticAudio.pause();
    try {
      await audio.play();
      button.textContent = "♫ Pausar cumple";
    } catch {
      button.textContent = "Añadí feliz-cumple.mp3";
    }
  } else {
    audio.pause();
    button.textContent = "♫ Feliz cumpleaños";
  }
});

// LLUVIA DE PÉTALOS
function showerPetals() {
  const symbols = ["✿", "❀", "✧", "·"];

  for (let i = 0; i < 30; i++) {
    const petal = document.createElement("span");

    petal.className = "petal";
    petal.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.setProperty("--drift", (Math.random() * 180 - 90) + "px");
    petal.style.animationDuration = (6 + Math.random() * 7) + "s";
    petal.style.animationDelay = (Math.random() * 2) + "s";
    petal.style.fontSize = (12 + Math.random() * 16) + "px";

    document.body.appendChild(petal);

    setTimeout(() => petal.remove(), 15000);
  }
}