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
    const el = document.getElementById(screen);
    if (el) {
      el.classList.toggle("hidden", screen !== id);
    }
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

// CONFIGURACIÓN DE AUDIO ROMÁNTICO
const romanticAudio = document.getElementById("romanticAudio");
if (romanticAudio) {
  romanticAudio.loop = true;
  romanticAudio.addEventListener("ended", () => {
    romanticAudio.currentTime = 0;
    romanticAudio.play().catch(err => console.log("Error al reiniciar audio romántico:", err));
  });
}

// REPRODUCTOR PERSONALIZADO DE LA CANCIÓN SOPRESA
const mySongAudio = document.getElementById("mySongAudio");
const customPlayBtn = document.getElementById("customPlayBtn");
const customProgressBar = document.getElementById("customProgressBar");
const customProgressContainer = document.getElementById("customProgressContainer");
const customTime = document.getElementById("customTime");
const songDisc = document.getElementById("songDisc");

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

if (mySongAudio && customPlayBtn) {
  customPlayBtn.addEventListener("click", () => {
    if (mySongAudio.paused) {
      // Pausar otros audios al reproducir la canción sorpresa
      const birthdayAudio = document.getElementById("birthdayAudio");
      if (birthdayAudio) {
        birthdayAudio.pause();
        birthdayAudio.currentTime = 0;
      }
      const birthdayMusicBtn = document.getElementById("birthdayMusicBtn");
      if (birthdayMusicBtn) birthdayMusicBtn.textContent = "♫ Feliz cumpleaños";

      if (romanticAudio) {
        romanticAudio.pause();
        romanticAudio.currentTime = 0;
      }
      const romanticBtn = document.getElementById("romanticMusicBtn");
      if (romanticBtn) romanticBtn.textContent = "♫ Música romántica";

      mySongAudio.play();
      customPlayBtn.textContent = "❚❚";
      if (songDisc) songDisc.style.animationPlayState = "running";
    } else {
      mySongAudio.pause();
      customPlayBtn.textContent = "▶";
      if (songDisc) songDisc.style.animationPlayState = "paused";
    }
  });

  mySongAudio.addEventListener("timeupdate", () => {
    if (mySongAudio.duration) {
      const progressPercent = (mySongAudio.currentTime / mySongAudio.duration) * 100;
      customProgressBar.style.width = `${progressPercent}%`;
      customTime.textContent = `${formatTime(mySongAudio.currentTime)} / ${formatTime(mySongAudio.duration)}`;
    }
  });

  customProgressContainer.addEventListener("click", (e) => {
    const width = customProgressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = mySongAudio.duration;
    if (duration) {
      mySongAudio.currentTime = (clickX / width) * duration;
    }
  });

  mySongAudio.addEventListener("ended", () => {
    customPlayBtn.textContent = "▶";
    customProgressBar.style.width = "0%";
    if (songDisc) songDisc.style.animationPlayState = "paused";
  });
}

// SOBRE Y CARTA PRINCIPAL
const envelopeButton = document.getElementById("openEnvelope");
const envelopeScene = document.getElementById("envelopeScene");
const letterCard = document.getElementById("letterCard");

if (envelopeButton) {
  envelopeButton.addEventListener("click", () => {
    if (envelopeButton.classList.contains("open")) return;

    envelopeButton.classList.add("open");
    envelopeScene.classList.add("opened");

    setTimeout(() => {
      envelopeScene.classList.add("hidden");
      letterCard.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 850);
  });
}

// SOBRE Y CARTA DE LA PROMESA
const promiseEnvelopeBtn = document.getElementById("openPromiseEnvelope");
const promiseEnvelopeScene = document.getElementById("promiseEnvelopeScene");
const promiseCard = document.getElementById("promiseCard");

if (promiseEnvelopeBtn) {
  promiseEnvelopeBtn.addEventListener("click", () => {
    if (promiseEnvelopeBtn.classList.contains("open")) return;

    promiseEnvelopeBtn.classList.add("open");
    promiseEnvelopeScene.classList.add("opened");

    setTimeout(() => {
      promiseEnvelopeScene.classList.add("hidden");
      promiseCard.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 850);
  });
}

// INTERACTIVIDAD CORAZÓN DE DISTANCIA (TUCUMÁN - MANILA)
const universeHeartBtn = document.getElementById("universeHeartBtn");
const universeMsgBox = document.getElementById("universeMsgBox");

if (universeHeartBtn) {
  universeHeartBtn.addEventListener("click", () => {
    universeMsgBox.classList.toggle("hidden");
  });
}

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

if (tulipGrid) {
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
}

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
if (grid) {
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
      button.classList.toggle("open");
    });

    grid.appendChild(button);
  });
}

// INTERACTIVIDAD CAJA DE REGALO FINAL
const openGiftBtn = document.getElementById("openGiftBtn");
const giftSection = document.getElementById("giftSection");
const songRevealCard = document.getElementById("songRevealCard");

if (openGiftBtn) {
  openGiftBtn.addEventListener("click", () => {
    if (openGiftBtn.classList.contains("opened")) return;
    openGiftBtn.classList.add("opened");

    setTimeout(() => {
      giftSection.classList.add("hidden");
      songRevealCard.classList.remove("hidden");
      songRevealCard.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 600);
  });
}

// NAVEGACIÓN E INICIO
const beginBtn = document.getElementById("beginBtn");
if (beginBtn) {
  beginBtn.addEventListener("click", async () => {
    requestFullscreen();
    const romanticBtn = document.getElementById("romanticMusicBtn");

    if (romanticAudio) {
      try {
        await romanticAudio.play();
        if (romanticBtn) romanticBtn.textContent = "♫ Pausar música";
      } catch (err) {
        console.log("Error reproduciendo audio:", err);
      }
    }

    showScreen("letter");
  });
}

const safeClick = (id, targetScreen) => {
  const btn = document.getElementById(id);
  if (btn) {
    btn.addEventListener("click", () => showScreen(targetScreen));
  }
};

safeClick("toPrescription", "prescription");
safeClick("toReasons", "reasons");
safeClick("toDreams", "dreams");
safeClick("toMemories", "memories");
safeClick("toPromise", "promise");
safeClick("toUniverse", "universe");
safeClick("toGarden", "garden");

const toFinaleBtn = document.getElementById("toFinale");
if (toFinaleBtn) {
  toFinaleBtn.addEventListener("click", async () => {
    showScreen("finale");
    showerPetals();

    const birthdayAudio = document.getElementById("birthdayAudio");
    const manualPlayBtn = document.getElementById("manualPlayBirthdayBtn");
    
    if (mySongAudio) {
      mySongAudio.pause();
      mySongAudio.currentTime = 0;
      if (customPlayBtn) customPlayBtn.textContent = "▶";
    }

    if (romanticAudio) {
      romanticAudio.pause();
      romanticAudio.currentTime = 0;
    }
    const romanticBtn = document.getElementById("romanticMusicBtn");
    if (romanticBtn) romanticBtn.textContent = "♫ Música romántica";

    const birthdayButton = document.getElementById("birthdayMusicBtn");
    if (birthdayButton) {
      birthdayButton.classList.remove("hidden");
      birthdayAudio.currentTime = 0;

      try {
        await birthdayAudio.play();
        birthdayButton.textContent = "♫ Feliz cumpleaños";
        if (manualPlayBtn) manualPlayBtn.classList.add("hidden");
      } catch (err) {
        console.log("Reproducción automática bloqueada:", err);
        if (manualPlayBtn) manualPlayBtn.classList.remove("hidden");
        birthdayButton.textContent = "♫ Tocar feliz cumpleaños";
      }
    }
  });
}

// Botón manual de respaldo para el feliz cumpleaños
const manualPlayBirthdayBtn = document.getElementById("manualPlayBirthdayBtn");
if (manualPlayBirthdayBtn) {
  manualPlayBirthdayBtn.addEventListener("click", async () => {
    const birthdayAudio = document.getElementById("birthdayAudio");
    const birthdayButton = document.getElementById("birthdayMusicBtn");

    try {
      if (birthdayAudio) await birthdayAudio.play();
      if (birthdayButton) birthdayButton.textContent = "♫ Feliz cumpleaños";
      manualPlayBirthdayBtn.classList.add("hidden");
    } catch (err) {
      console.log("No se pudo reproducir audio:", err);
    }
  });
}

// VOLVER A EMPEZAR
const replayBtn = document.getElementById("replayBtn");
if (replayBtn) {
  replayBtn.addEventListener("click", () => {
    const birthdayAudio = document.getElementById("birthdayAudio");
    if (birthdayAudio) {
      birthdayAudio.pause();
      birthdayAudio.currentTime = 0;
    }
    if (manualPlayBirthdayBtn) manualPlayBirthdayBtn.classList.add("hidden");

    const birthdayMusicBtn = document.getElementById("birthdayMusicBtn");
    if (birthdayMusicBtn) {
      birthdayMusicBtn.classList.add("hidden");
      birthdayMusicBtn.textContent = "♫ Feliz cumpleaños";
    }

    if (openGiftBtn) openGiftBtn.classList.remove("opened");
    if (giftSection) giftSection.classList.remove("hidden");
    if (songRevealCard) songRevealCard.classList.add("hidden");

    if (mySongAudio) {
      mySongAudio.pause();
      mySongAudio.currentTime = 0;
      if (customPlayBtn) customPlayBtn.textContent = "▶";
    }

    if (envelopeButton) envelopeButton.classList.remove("open");
    if (envelopeScene) {
      envelopeScene.classList.remove("opened");
      envelopeScene.classList.remove("hidden");
    }
    if (letterCard) letterCard.classList.add("hidden");

    if (promiseEnvelopeBtn) promiseEnvelopeBtn.classList.remove("open");
    if (promiseEnvelopeScene) {
      promiseEnvelopeScene.classList.remove("opened");
      promiseEnvelopeScene.classList.remove("hidden");
    }
    if (promiseCard) promiseCard.classList.add("hidden");

    if (universeMsgBox) universeMsgBox.classList.add("hidden");
    document.querySelectorAll(".tulip-card").forEach(c => c.classList.remove("active"));
    if (tulipDisplayText) tulipDisplayText.textContent = "Seleccioná un tulipán del jardín para leer su mensaje.";

    document.querySelectorAll(".reason").forEach(card => card.classList.remove("open"));

    showScreen("intro");
  });
}

// CONTROLES MANUALES DE MÚSICA
const romanticMusicBtn = document.getElementById("romanticMusicBtn");
if (romanticMusicBtn) {
  romanticMusicBtn.addEventListener("click", async () => {
    const birthdayAudio = document.getElementById("birthdayAudio");

    if (romanticAudio && romanticAudio.paused) {
      if (birthdayAudio) birthdayAudio.pause();
      try {
        await romanticAudio.play();
        romanticMusicBtn.textContent = "♫ Pausar música";
      } catch {
        romanticMusicBtn.textContent = "Añadí romantica.mp3";
      }
    } else if (romanticAudio) {
      romanticAudio.pause();
      romanticMusicBtn.textContent = "♫ Música romántica";
    }
  });
}

const birthdayMusicBtn = document.getElementById("birthdayMusicBtn");
if (birthdayMusicBtn) {
  birthdayMusicBtn.addEventListener("click", async () => {
    const birthdayAudio = document.getElementById("birthdayAudio");

    if (birthdayAudio && birthdayAudio.paused) {
      if (romanticAudio) romanticAudio.pause();
      if (romanticMusicBtn) romanticMusicBtn.textContent = "♫ Música romántica";
      try {
        await birthdayAudio.play();
        birthdayMusicBtn.textContent = "♫ Pausar cumple";
      } catch {
        birthdayMusicBtn.textContent = "Añadí feliz-cumple.mp3";
      }
    } else if (birthdayAudio) {
      birthdayAudio.pause();
      birthdayMusicBtn.textContent = "♫ Feliz cumpleaños";
    }
  });
}

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