console.log("Ik ga dit halen!");

// Ik heb hulp en extra uitleg gehad over hoe ik een fucntie kan aanmaken en daarmee een afbeelding kan veranderen van medestudent Tess Wieman

// Declaraties van variabelen en constanten (geen constaten momenteel aanwezig)
let MakeupKnop = document.querySelector(".MakeupDino");
let AfbeeldingMakeup = document.querySelector("#BasisDino");

let KledingKnop = document.querySelector(".RokjeDino");
let AfbeeldingKleding = document.querySelector("#BasisDino");

let SieradenKnop = document.querySelector(".SieradenDino");
let AfbeeldingSieraden = document.querySelector("#BasisDino");

let NagellakKnop = document.querySelector(".NagellakDino");
let AfbeeldingNagellak = document.querySelector("#BasisDino");

let TasjeKnop = document.querySelector(".TasjeDino");
let AfbeeldingTasje = document.querySelector("#BasisDino");

let NaarDeDateKnop = document.querySelector(".Daten");
let AfbeeldingDate = document.querySelector("#BasisDino");

let BeginOpnieuwKnop = document.querySelector(".HerlaadPagina");

let audio = new Audio();

let buttons = document.querySelectorAll("button");

//Alle functies
function MakeupToevoegen() {
  AfbeeldingMakeup.src = "Afbeeldingen/DinoMakeup.png";
}

function KledingToevoegen() {
  AfbeeldingKleding.src = "Afbeeldingen/DinoKleren.png";
}

function SieradenToevoegen() {
  AfbeeldingSieraden.src = "Afbeeldingen/DinoSieraden.png";
}

function NagellakToevoegen() {
  AfbeeldingNagellak.src = "Afbeeldingen/DinoNagellak.png";
}

function TasjeToevoegen() {
  AfbeeldingTasje.src = "Afbeeldingen/DinoTasje.png";
}

function DateToevoegen() {
  AfbeeldingDate.src = "Afbeeldingen/DinoVerliefd.png"; // Blauwe dino ook afkomstig van Pinterest. Maker onbekend. https://nl.pinterest.com/pin/686165693259302569/
}

function enableNaarDeDateButton() {
  NaarDeDateKnop.disabled = false;
}

// Koppelingen met de eventListeners
MakeupKnop.addEventListener("click", MakeupToevoegen);

KledingKnop.addEventListener("click", KledingToevoegen);

SieradenKnop.addEventListener("click", SieradenToevoegen);

NagellakKnop.addEventListener("click", NagellakToevoegen);

TasjeKnop.addEventListener("click", TasjeToevoegen);

NaarDeDateKnop.addEventListener("click", DateToevoegen);

// Event listener toegevoegd aan de laatste stap om de "Naar de date!" knop in te schakelen
TasjeKnop.addEventListener("click", enableNaarDeDateButton);

// AUDIO BUTTONS. Niet behandeld aspect Audio: Code gebasseerd op https://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

// Verdieping gedaan naar classlist. Hulp gehad aan code op de site. https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
NaarDeDateKnop.addEventListener("mouseover", () => {
  if (!NaarDeDateKnop.disabled) {
    NaarDeDateKnop.classList.add("hover-enabled");
  } else {
    NaarDeDateKnop.classList.remove("hover-enabled");
  }
});

//H1 tekst laten aanpassen bij laatste button
NaarDeDateKnop.addEventListener("click", () => {
  if (!NaarDeDateKnop.disabled) {
    document.querySelector("h1").textContent =
      "Pino de dino is klaar voor haar date!";
  }
});

// Chat GPT, prompt: 'Kan ik ook een button toevoegen de de hele pagina reload zodat ik weer opnieuw kan beginnen?'
BeginOpnieuwKnop.addEventListener("click", () => {
  location.reload();
});

//Overig
audio.src = "Audio/SparkleButtonSound.mp3"; // geluidseffect afkomstig van Pixabay. Twinkle/Sparkle van ShidenBeats Music https://pixabay.com/nl/sound-effects/sound-effect-twinklesparkle-115095/
