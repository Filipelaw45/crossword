const crossword = document.getElementById('crossword')
const tips = document.getElementById('tips')
const btnCheck = document.getElementById('check')

const crosswords = [
    {
        challenge: [
            [' ', ' ', ' ', ' ',  1 , ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', 'P', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', 'A', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ',  6 , ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ',  2 , 'D', 'A', 'L', 'M', 'A', 'T', 'A', ' ', ' ', ' ', ' '], 
            [' ', ' ', ' ',  3 , 'A', ' ', ' ', ' ', ' ', 'O', ' ', ' ', ' ', ' ', ' '], 
            [' ', ' ',  4 , 'C', 'L', 'O', 'R', 'O', ' ', 'M', ' ', ' ', ' ', ' ', ' '], 
            [' ', ' ', ' ', 'H', ' ', ' ', ' ', ' ', ' ', 'A', ' ', ' ', ' ', ' ', ' '], 
            [' ', ' ', ' ', 'A', ' ', ' ', ' ',  7 , ' ', 'D', ' ', ' ', ' ', ' ', ' '], 
            [' ', ' ',  5 , 'P', 'R', 'A', 'T', 'O', ' ', 'A', ' ', ' ', ' ', ' ', ' '], 
            [' ', ' ', ' ', 'A', ' ', ' ', ' ', 'U', ' ', ' ', ' ', ' ', ' ', ' ', ' '], 
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' '], 
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'O', ' ', ' ', ' ', ' ', ' ', ' ', ' '], 
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], 
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']  
        ],

        clue: [
            '1 - Ave facilmente encontrada nas cidades',
            '2 - Raça de cachorros que a Cruela queria fazer roupas',
            '3 - Eae meu ...',
            '4 - Tem na água sanitária',
            '5 - Usado pra te servir comida',
            '6 - Utilizado pra ligar essa sua carroça de PC',
            '7 - Cachorro adora falar sobre esse elemento quimico'
        ],
    },

    {
        challenge: [
            [' ',  1 , ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', 'G', ' ',  3 , ' ', ' ', ' ', ' ',  4 , ' ', ' ', ' ', ' ', ' ', ' '],
            [ 2 , 'A', 'R', 'T', 'R', 'O', 'P', 'O', 'D', 'E', ' ', ' ', ' ', ' ', ' '],
            [' ', 'T', ' ', 'R', ' ', ' ', ' ', ' ', 'I', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', 'O', ' ', 'E', ' ', ' ', ' ', ' ', 'O', ' ', ' ', ' ', ' ', ' ', ' '], 
            [' ', ' ', ' ', 'T', ' ', ' ', ' ', ' ', 'G', ' ', ' ', ' ', ' ', ' ', ' '], 
            [' ', ' ', ' ', 'A', ' ', ' ', ' ', ' ', 'E', ' ', ' ', ' ', ' ', ' ', ' '], 
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'N', ' ', ' ', ' ', ' ', ' ', ' '], 
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'E', ' ', ' ', ' ', ' ', ' ', ' '], 
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'S', ' ', ' ', ' ', ' ', ' ', ' '], 
            [' ', ' ', ' ', ' ',  6 , ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], 
            [' ', ' ',  5 , 'H', 'I', 'D', 'R', 'O', 'G', 'E', 'N', 'I', 'O', ' ', ' '], 
            [' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], 
            [' ', ' ', ' ', ' ', 'I', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], 
            [' ', ' ', ' ', ' ', 'S', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']  
        ],

        clue: [
            '1 - Animal mais fofo do mundo',
            '2 - Filo de animais invertebrados que possuem exoesqueleto',
            '3 - Nome popular dado pra uma briga/discursão',
            '4 - Filósofo grego anti-materialista',
            '5 - Elemento químico mais abundante do universo',
            '6 - Parte colorida do olho'
        ]
    },

    {
        challenge: [
            [' ',  1 , ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', 'A', ' ', ' ', ' ',  3 , ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [ 2 , 'R', 'O', 'E', 'D', 'O', 'R', 'E', 'S', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', 'I', ' ', ' ', ' ', 'V', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', 'G', ' ', ' ', ' ', 'I', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], 
            [' ', 'A', ' ', ' ', ' ', 'P',  6 , ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], 
            [' ', 'T', ' ',  4 , 'K', 'A', 'S', 'S', 'I', 'N', 'O', ' ', ' ', ' ', ' '], 
            [' ', 'O', ' ', ' ', ' ', 'R', 'A', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], 
            [' ', ' ', ' ', ' ', ' ', 'O', 'P', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], 
            [' ', ' ', ' ', ' ',  5 , 'S', 'O', 'P', 'A', ' ', ' ', ' ', ' ', ' ', ' '], 
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], 
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], 
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], 
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], 
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']  
        ],

        clue: [
            '1 - NYAN! Ichi Ni San Nyaa ....',
            '2 - A mais numerosa ordem de mamíferos com placenta',
            '3 - Espécies que nascem e se reproduzem através de ovos',
            '4 - Sábado com Gilberto barros',
            '5 - Caldo com carne, legumes, massas ou outra substância sólida, servido normalmente como jantar',
            '6 - Anfíbios da ordem Anura predominantemente terrestres que fazem croac-croac'
        ]
    }
]

const {challenge, clue} = crosswords[Math.floor(Math.random() * crosswords.length)]

challenge.forEach((row, rowIndex) => {

    row.forEach((collumn, collumnIndex) => {

      if (collumn !== ' ' && !collumn.toFixed) {
        let input = document.createElement('input')
        input.setAttribute('maxLength', 1)
        input.setAttribute('row', rowIndex)
        input.setAttribute('col', collumnIndex)
        input.classList.add('letter')
        crossword.appendChild(input)
      }else{
        let div = document.createElement('div')
        div.setAttribute('row', rowIndex)
        div.setAttribute('col', collumnIndex)
        div.textContent = collumn
        div.classList.add('cross')
        crossword.appendChild(div)
      }
    })
})

clue.forEach(el =>{
    let p = document.createElement('p')
    p.textContent = el
    tips.appendChild(p)
})

let inputs = document.querySelectorAll('.letter')

function checkgame(){
    
    clearInputs()

    inputs.forEach(input => {

        let row = parseInt(input.getAttribute("row"))
        let collumn = parseInt(input.getAttribute("col"))

        challenge[row][collumn] === input.value.toUpperCase() 
            ? input.classList.add('green')
            : input.classList.add('red')
        
    })
}

function clearInputs() {   
    inputs.forEach(input => {
      input.classList.remove('green')
      input.classList.remove('red')
    })
}

btnCheck.addEventListener('click', checkgame)
