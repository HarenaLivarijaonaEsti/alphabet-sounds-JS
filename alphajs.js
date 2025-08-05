let currentLang = 'fr'; // Par défaut : français

// Lettres absentes en malgache
const excludedInMalagasy = ['c', 'u', 'q', 'x', 'w'];
const body = document.querySelector("body");


// Fonction pour mettre à jour l’état des lettres
function updateLetterStates() {
    document.querySelectorAll('.lettre').forEach(el => {
        const letter = el.textContent.toLowerCase();

        if (currentLang === 'mg' && excludedInMalagasy.includes(letter)) {
            
            el.classList.add('disabled');
        } else {
           
            el.classList.remove('disabled');
        }
    });
}

// Changer de langue via les boutons
document.getElementById("btn1").addEventListener("click", () => {
    body.style.backgroundImage = "url('./pics/saina_fr.png')";
    currentLang = 'fr';
    console.log("Langue : Français");
    updateLetterStates();
});

document.getElementById("btn2").addEventListener("click", () => {
    body.style.backgroundImage = "url('./pics/saina_mg.webp')";
    currentLang = 'mg';
    console.log("Langue : Malagasy");
    updateLetterStates();
});

// Jouer le son selon la langue sélectionnée
document.querySelectorAll('.lettre').forEach(el => {
    el.addEventListener('click', () => {
        if (el.classList.contains('disabled')) return;

        const letter = el.textContent.toLowerCase();
        let audioPath;

        if (currentLang === 'fr') {
            audioPath = `./sons/french/${letter}.mp3`;
        } else if (currentLang === 'mg') {
            audioPath = `./sons/malagasy/${letter}_mg.mp3`;
        }

        const audio = new Audio(audioPath);
        audio.play().catch(err => {
            console.error("Erreur de lecture audio :", err);
        });
    });
});

// Initialiser l'état des lettres
updateLetterStates();
