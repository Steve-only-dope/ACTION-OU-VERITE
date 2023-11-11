const actions = [
    "Faites une danse bizarre",
    "Chantez une chanson à haute voix",
    "Imitez un animal de votre choix",
    "Faites 10 sauts sur place",
    "Faites une imitation d'une célébrité",
    "Faites une danse ridicule.",
    "Chantez une chanson à haute voix.",
    "Imiter un animal de votre choix.",
   "Faites 10 sauts sur place.",
    "Faites une imitation d'une célébrité.",
     "Faites une grimace drôle et demandez à tout le monde de vous rejoindre.",
    "Dansez comme si vous étiez sous la pluie.",
    "Faites un saut périlleux avant imaginaire.",
    "Faites une course à reculons jusqu'à la porte.",
    "Imiter un personnage de dessin animé pendant 30 secondes.",
    "Faites semblant d'être un kangourou en sautant autour de la pièce.",
"Faites un cri d'animal exotique.",
    "Faites une impression de votre professeur préféré.",
    "Faites une étrange chorégraphie sur votre chanson préférée.",
    // Ajoutez plus d'actions ici
];

const truths = [
    "Quelle est votre plus grande peur?",
    "Quelle est la chose la plus folle que vous ayez jamais faite?",
    "Si vous pouviez voyager dans le temps, où iriez-vous?",
    "Quel est votre rêve le plus étrange?",
    "Quelle est votre activité préférée en secret?",
    "Avez-vous déjà triché à un jeu?",
"Quel est le mensonge le plus gros que vous ayez dit?",
    "Quelle est la chose la plus embarrassante que vous ayez faite en public?",
    "Quel est votre film préféré, même si vous avez honte de l admettre?",
    "Quelle est votre habitude la plus étrange?",
    "Avez-vous déjà eu un coup de foudre pour un enseignant?",
    "Quelle est la pire nourriture que vous ayez déjà mangée?",
    "Si vous pouviez échanger de place avec quelqu'un pour une journée, qui serait-ce?",
    "Avez-vous déjà fait semblant d'être malade pour échapper à quelque chose?",
    "Quel est le secret que vous ne voulez pas que vos parents découvrent?",
    "Avez-vous déjà parlé à un animal de compagnie comme s'il pouvait vous comprendre?",
    "Quelle est la chose la plus bizarre que vous ayez mangée?",
    "Quel est le surnom le plus embarrassant que quelqu'un vous a donné?",
    "Avez-vous déjà triché pendant un examen?",
    "Quelle est la plus grosse bêtise que vous ayez faite à l'école?",
    "Avez-vous déjà volé quelque chose, même quelque chose de petit?",
    "Si vous pouviez être n'importe qui d'autre pour une journée, qui seriez-vous?",
    "Quel est le mensonge le plus gros que vous ayez dit à vos amis?",
    "Avez-vous déjà eu un coup de foudre pour le/la meilleur(e) ami(e) de quelqu'un?",
    "Quel est le rêve le plus étrange que vous ayez fait?",
    // Ajoutez plus de vérités ici
];

const actionButton = document.getElementById("actionButton");
const truthButton = document.getElementById("truthButton");
const result = document.getElementById("result");

actionButton.addEventListener("click", () => {
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    result.textContent = `Action: ${randomAction}`;
});

truthButton.addEventListener("click", () => {
    const randomTruth = truths[Math.floor(Math.random() * truths.length)];
    result.textContent = `Vérité: ${randomTruth}`;
});

