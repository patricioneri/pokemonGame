// I define global variables
let form = document.querySelector('form')
let playerSelection = document.querySelector('.playerSelection')
let spinnerContainer = document.querySelector('.spinnerContainer')
let carouselContainer = document.querySelector('.carouselContainer')
let playerChoiceContainer = document.querySelector('.playerChoiceContainer')
let btnShowResults = document.querySelector('.btnShowResults')
let btnPlayAgain = document.querySelector('.btnPlayAgain')
let scorePlayer1 = 0
let scorePlayer2 = 0
let resultsContainer = document.querySelector('.resultsContainer')
let ganador = ''
let results = []
let selectedPokemons = [];

//start function use the form event to save player's name in variables and call animation function
//the function hide the start screen and render a spinner
const start = (e) => {
    // I clean the array when the pokemon are saved in case the user wanna play again
    selectedPokemons = []
    e.preventDefault()
    let player1 = e.target.player1
    let player2 = e.target.player2
    if(e.target.player1.value == '' || e.target.player2.value == '') {
        alert('Debes ingresar ambos jugadores')
        return
    }
    playerSelection.style.display = 'none'
    animation()
}
//I add a listener to the form that call start function
form.addEventListener('submit', start)

//animation function renders a spinner for 3 seconds and iterates randonpokemon function calling it six times
const animation = () => {
    for(i=0; i<6; i++) {
        randomPokemon()
    }
    spinnerContainer.style.display = 'flex'
    setTimeout(()=> {
        spinnerContainer.style.display = 'none' 
            renderCards()
                        }, 3000)
}

//This function hit and API endpoint with a random number to generate six pokemons and saves it in and array of objects
const randomPokemon = () => {
    let randomNumber = (Math.floor((Math.random() * 100 + 1))).toString()    
    fetch( `https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    .then(response => response.json())
    .then(data => 
        {
            pokemon = { 
            id : selectedPokemons.length,
            name : data.name.toUpperCase(),
            img : data.sprites.front_default,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            }
    selectedPokemons.push(pokemon)
        }
    )
}

// When the spinner finish the cards render in a carrousel
const renderCards = () => {
    carouselContainer.style.display = 'block'

        carouselContainer.innerHTML = `
    <div class="btnCloseContainer"><button class="btnClose" onclick="playerChoice()">></button></div>

    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">

        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
            <div class="playerSelection"><p>Pokemon 1/3 de ${player1.value}</p></div>
                <img src=${selectedPokemons[0].img} class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${selectedPokemons[0].name}</h5>
                    <p><strong>HP</strong>:${selectedPokemons[0].hp} <br>
                    <strong>Attack</strong>:${selectedPokemons[0].attack} <br>
                    <strong>Defense</strong>:${selectedPokemons[0].defense}</p>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <div class="playerSelection"><p>Pokemon 2/3 de ${player1.value}</p></div>
                <img src=${selectedPokemons[1].img} class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${selectedPokemons[1].name}</h5>
                    <p><strong>HP</strong>:${selectedPokemons[1].hp} <br>
                    <strong>Attack</strong>:${selectedPokemons[1].attack} <br>
                    <strong>Defense</strong>:${selectedPokemons[1].defense}</p>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <div class="playerSelection"><p>Pokemon 3/3 de ${player1.value}</p></div>
                <img src=${selectedPokemons[2].img} class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${selectedPokemons[2].name}</h5>
                    <p><strong>HP</strong>:${selectedPokemons[2].hp} <br>
                    <strong>Attack</strong>:${selectedPokemons[2].attack} <br>
                <strong>Defense</strong>:${selectedPokemons[2].defense}</p>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <div class="playerSelection"><p>Pokemon 1/3 de ${player2.value}</p></div>
                <img src=${selectedPokemons[3].img} class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${selectedPokemons[3].name}</h5>
                    <p><strong>HP</strong>:${selectedPokemons[3].hp} <br>
                    <strong>Attack</strong>:${selectedPokemons[3].attack} <br>
                    <strong>Defense</strong>:${selectedPokemons[3].defense}</p>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <div class="playerSelection"><p>Pokemon 2/3 de ${player2.value}</p></div>
                <img src=${selectedPokemons[4].img} class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${selectedPokemons[4].name}</h5>
                    <p><strong>HP</strong>:${selectedPokemons[4].hp} <br>
                    <strong>Attack</strong>:${selectedPokemons[4].attack} <br>
                    <strong>Defense</strong>:${selectedPokemons[4].defense}</p>
                </div>
            </div>
                <div class="carousel-item">
                    <div class="playerSelection"><p>Pokemon 3/3 de ${player2.value}</p></div>
                <img src=${selectedPokemons[5].img} class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${selectedPokemons[5].name}</h5>
                    <p><strong>HP</strong>:${selectedPokemons[5].hp} <br>
                    <strong>Attack</strong>:${selectedPokemons[5].attack} <br>
                    <strong>Defense</strong>:${selectedPokemons[5].defense}</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
`;
}

//when the user hits > button the app gives the option to play with differents cards or to show the results
const playerChoice = () => {
    carouselContainer.style.display = 'none'
    playerChoiceContainer.style.display = 'flex'

    btnShowResults.addEventListener('click', showResults)
    btnPlayAgain.addEventListener('click', playAgain)
}

//the function play again calls randompokemon again to re-start the game
const playAgain = () => {
    playerChoiceContainer.style.display = 'none'
    selectedPokemons = []
    for(i=0; i<6; i++) {
        randomPokemon()
    }
    animation()
}

//This function calculates the stats of each pokemon and determines which user has a higher score
//then the user's pokemons and score are show on the screen
const showResults = () => {
    playerChoiceContainer.style.display = 'none'
    // the total score of each pokemon is saved in a variable and then are compared
    selectedPokemons.forEach(e => {
        if(e.id <= 2) {
            scorePlayer1 += e.hp + e.attack + e.defense
        } else {
            scorePlayer2 += e.hp + e.attack + e.defense
        }
    })
    if (scorePlayer1 > scorePlayer2) {
        ganador = `Ganó ${player1.value}`
    } else if (scorePlayer2 > scorePlayer1) {
        ganador = `Ganó ${player2.value}`
    } else {
        ganador = 'Es un empate'
    }
    resultsContainer.style.display = 'block'
    resultsContainer.innerHTML = `
        <div class="btnResultsCloseContainer">
            <button class="btnResultsClose btnClose" onclick="backToStart()">X</button></div>
        <div class="player1ResultsContainer">
            <h3>${player1.value}</h3>
            <div class="imgResultsContainer">
                <img src="${selectedPokemons[0].img}" >
                <img src="${selectedPokemons[1].img}" >
                <img src="${selectedPokemons[2].img}" >
            </div>
            <div class="scoreResultsContainer">
                <p>Score:${scorePlayer1}</p>
            </div>
        </div>
        <div class="player2ResultsContainer">
            <h3>${player2.value}</h3>
            <div class="imgResultsContainer">
                <img src="${selectedPokemons[3].img}" >
                <img src="${selectedPokemons[4].img}" >
                <img src="${selectedPokemons[5].img}" >
            </div>
            <div class="scoreResultsContainer">
                <p>Score:${scorePlayer2}</p>
            </div>
            <div class="winnerContainer">
                <h3>${ganador}</h3>
            </div>
            <div class="btnResultsSaveContainer">
                <button class="btnResultsClose2" onclick="backToStart()">Salir</button>
                <button class="btnResultsSave" onclick="saveResults()">Guardar</button>
            </div>
        </div>
    `
}
// The final screen gives the oportunity to the user to start again..
const backToStart = () => {
    form.reset()
    resultsContainer.style.display = 'none'
    playerSelection.style.display = 'block'
}

// or to save the results in the first screen and to visualize the given pokemons on the carousel again
const saveResults = () => {
    resultsContainer.style.display = 'none'
    playerSelection.style.display = 'block'
    result  = {
        player1: player1.value,
        player2: player2.value,
        selectedPokemons: selectedPokemons
    }
    results.push(result)
    let savedResults = document.createElement('div')
    savedResults.classList.add('savedResultsContainer')
    playerSelection.append(savedResults)
    results.forEach(e => {
        let objeto = JSON.stringify(e.selectedPokemons)
        savedResults.innerHTML = `
        <div class="individualResult">
            <p>${e.player1} VS ${e.player2}</p>
            <button class="btnShowIndividualResult" onclick='showIndividualResult(${objeto})'>></button>
        </div>
    `  
    })
}

// this function renders the previous results in a carousel
const showIndividualResult = (previousResults) => {
    playerSelection.style.display = 'none'
    carouselContainer.style.display = 'block'
    carouselContainer.innerHTML = `
    <div class="btnCloseContainer"><button class="btnClose" onclick="returnStart()">X</button></div>
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
            <div class="playerSelection"><p>Pokemon 1/3 de ${player1.value}</p></div>
                <img src=${previousResults[0].img} class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${previousResults[0].name}</h5>
                    <p><strong>HP</strong>:${previousResults[0].hp} <br>
                    <strong>Attack</strong>:${previousResults[0].attack} <br>
                    <strong>Defense</strong>:${previousResults[0].defense}</p>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <div class="playerSelection"><p>Pokemon 2/3 de ${player1.value}</p></div>
                <img src=${previousResults[1].img} class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${previousResults[1].name}</h5>
                    <p><strong>HP</strong>:${previousResults[1].hp} <br>
                    <strong>Attack</strong>:${previousResults[1].attack} <br>
                    <strong>Defense</strong>:${previousResults[1].defense}</p>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <div class="playerSelection"><p>Pokemon 3/3 de ${player1.value}</p></div>
                <img src=${previousResults[2].img} class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${previousResults[2].name}</h5>
                    <p><strong>HP</strong>:${previousResults[2].hp} <br>
                    <strong>Attack</strong>:${previousResults[2].attack} <br>
                <strong>Defense</strong>:${previousResults[2].defense}</p>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <div class="playerSelection"><p>Pokemon 1/3 de ${player2.value}</p></div>
                <img src=${previousResults[3].img} class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${previousResults[3].name}</h5>
                    <p><strong>HP</strong>:${previousResults[3].hp} <br>
                    <strong>Attack</strong>:${previousResults[3].attack} <br>
                    <strong>Defense</strong>:${previousResults[3].defense}</p>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <div class="playerSelection"><p>Pokemon 2/3 de ${player2.value}</p></div>
                <img src=${previousResults[4].img} class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${previousResults[4].name}</h5>
                    <p><strong>HP</strong>:${previousResults[4].hp} <br>
                    <strong>Attack</strong>:${previousResults[4].attack} <br>
                    <strong>Defense</strong>:${previousResults[4].defense}</p>
                </div>
            </div>
                <div class="carousel-item">
                    <div class="playerSelection"><p>Pokemon 3/3 de ${player2.value}</p></div>
                <img src=${previousResults[5].img} class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${previousResults[5].name}</h5>
                    <p><strong>HP</strong>:${previousResults[5].hp} <br>
                    <strong>Attack</strong>:${previousResults[5].attack} <br>
                    <strong>Defense</strong>:${previousResults[5].defense}</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
`
}

// this function is used to return from carousel of past games to the start
const returnStart = () => {
    playerSelection.style.display = 'block'
    carouselContainer.style.display = 'none'
}