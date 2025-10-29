/**
 * Textos per a cada idioma
 */
const texts = {
  0: { // Español
    title: "Memory Game",
    difficulty: "Dificultad:",
    easy: "Fácil (12 cartas)",
    medium: "Medio (16 cartas)",
    hard: "Difícil (20 cartas)",
    restart: "🔄 Reiniciar",
    time: "⏱️ Tiempo",
    movestext: "🌀 Movimientos",
    reminder: "Recuerda las posiciones de las cartas y encuentra los pares!",
    win: "¡Felicidades!",
    completed: "¡Has completado el juego!",
    close: "Volver a jugar",
    sec: " segundos"
  },
  1: { // Inglés
    title: "Memory Game",
    difficulty: "Difficulty:",
    easy: "Easy (12 cards)",
    medium: "Medium (16 cards)",
    hard: "Hard (20 cards)",
    restart: "🔄 Restart",
    time: "⏱️ Time",
    movestext: "🌀 Moves",
    reminder: "Remember the card positions and find the pairs!",
    win: "Congratulations!",
    completed: "You completed the game!",
    close: "Play again",
    sec: " seconds"
  }
};

/**
 * Genera un array de n elements amb n/2 parelles de cartes en posicions aleatòries.
 * @param {number} n - Nombre total d'elements (ha de ser parell).
 * @returns {Array} - Array amb n/2 parelles de cartes en posicions aleatòries.
 */
const initial_cards = (n) => {
    return new Array(n).fill(0).map((e, i) => Math.floor(i / 2) + 1).sort(e => Math.random() - 0.5);
};

// --- Variables globals ---
let flippedCards = [];
let lockBoard = false;
let moves = 0;
let matches = 0;
let timer = 0;
let interval;
let timeStart = false;

// --- Dark/Light mode i llengua ---
let darkMode = true;  // True = Dark, false = Light
let language = 0;     // 0 = Español, 1 = Inglés

// --- Mostrar missatge de felicitació ---
const showEndMessage = (moves, timer) => {
    // Elimina qualsevol modal antic
    $("#end-message").remove();

    const $modal = $(`
        <div id="end-message">
            <div class="message-box">
                <h2>${texts[language].win}</h2>
                <p>${texts[language].completed}</p>
                <p>${texts[language].time}: <strong>${timer}</strong> ${texts[language].sec}</p>
                <p>${texts[language].movestext}: <strong>${moves}</strong></p>
                <button id="close-message">${texts[language].close}</button>
            </div>
        </div>
    `);

    $("body").append($modal);

    // Botó per tancar i reiniciar
    $("#close-message").on("click", () => {
        $("#end-message").fadeOut(300, () => {
            $("#end-message").remove();
            startGame(parseInt($("#difficulty").val()));
        });
    });
};


// --- Funció per reiniciar el joc ---
const startGame = (n) => {
    const $gameBoard = $("#game-board");
    const cards = initial_cards(n);
    const rows = Math.floor(Math.sqrt(n));
    const cols = Math.ceil(n / rows);

    // Reiniciar valors
    flippedCards = [];
    lockBoard = false;
    moves = 0;
    matches = 0;
    timer = 0;
    timeStart = false;
    clearInterval(interval);
    $("#moves").text(moves);
    $("#time").text(timer);

    // Crear taula amb cartes
    let tableHTML = "";
    let cardIndex = 0;

    for (let i = 0; i < rows; i++) {
        tableHTML += "<tr>";
        for (let j = 0; j < cols; j++) {
            if (cardIndex < cards.length) {
                const val = cards[cardIndex];
                tableHTML += `
                    <td>
                        <img src="card${val}.svg" alt="Card ${val}" class="hidden card" data-value="${val}" width="100%">
                    </td>`;
                cardIndex++;
            } else {
                tableHTML += "<td></td>";
            }
        }
        tableHTML += "</tr>";
    }

    $gameBoard.html(tableHTML);

    // --- Lògica del joc ---
    const $cards = $(".card");

    $cards.off("click").on("click", function () {
        const $card = $(this);
        if (lockBoard || !$card.hasClass("hidden")) return;

        if (!timeStart) {
            timeStart = true;
            interval = setInterval(() => {
                timer++;
                $("#time").text(timer);
            }, 1000);
        }

        $card.removeClass("hidden");
        flippedCards.push($card);

        if (flippedCards.length === 2) {
            lockBoard = true;
            moves++;
            $("#moves").text(moves);

            const [$first, $second] = flippedCards;
            const match = $first.data("value") === $second.data("value");

            if (match) {
                matches++;
                flippedCards = [];
                lockBoard = false;

                // Comprovar fi de partida
                if (matches === n / 2) {
                    clearInterval(interval);
                    setTimeout(() => {
                        showEndMessage(moves, timer);
                    }, 500);
                }
            } else {
                setTimeout(() => {
                    $first.addClass("hidden");
                    $second.addClass("hidden");
                    flippedCards = [];
                    lockBoard = false;
                }, 1000);
            }
        }
    });
};

// --- Inicialització del joc ---
$(document).ready(() => {

    // Posa els textos inicials
    $("h1").text(texts[language].title);
    $("#difficulty").prev("label").text(texts[language].difficulty);
    $("#difficulty option[value='12']").text(texts[language].easy);
    $("#difficulty option[value='16']").text(texts[language].medium);
    $("#difficulty option[value='20']").text(texts[language].hard);
    $("#restart").text(texts[language].restart);
    $("#reminder").text(texts[language].reminder);
    $("#time").prev("label").text(texts[language].time);
    $("#moves").prev("label").text(texts[language].movestext);
    

    let difficulty = parseInt($("#difficulty").val());
    startGame(difficulty);

    $("#restart").on("click", () => {
        startGame(parseInt($("#difficulty").val()));
    });

    $("#difficulty").on("change", function () {
        startGame(parseInt($(this).val()));
    });

    // --- Toggle Dark / Light Mode ---
    $("#theme-toggle").on("click", () => {
        darkMode = !darkMode;
        $("body").toggleClass("light-mode", !darkMode);
        $("#theme-toggle").text(darkMode ? "🌙" : "☀️");
    });

    // --- Toggle Language ---
    $("#lang-toggle").on("click", () => {
        language = language === 0 ? 1 : 0;

        $("#lang-toggle").html(language === 0 ? "🇪🇸" : "🇬🇧");

        // Actualitza textos del joc
        $("h1").text(texts[language].title);
        $("#difficulty").prev("label").text(texts[language].difficulty);
        $("#difficulty option[value='12']").text(texts[language].easy);
        $("#difficulty option[value='16']").text(texts[language].medium);
        $("#difficulty option[value='20']").text(texts[language].hard);
        $("#restart").text(texts[language].restart);
        $("#reminder").text(texts[language].reminder);
        $("#time").prev("label").text(texts[language].time);
        $("#moves").prev("label").text(texts[language].movestext);
    });

    // Inicialitza botons
    $("#theme-toggle").text(darkMode ? "🌙" : "☀️");
    $("#lang-toggle").html(language === 0 ? "🇪🇸" : "🇬🇧");
});