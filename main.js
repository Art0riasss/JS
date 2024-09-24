/*
var words = ["bus", "motor", "garden", "craft"]
var word = words[Math.floor(Math.random() * words.length)]
var guessWord = []
for (var i = 0; i < word.length; i++) {
    guessWord[i] = "_"
}
var alreadyGuess = {}
var yourTries = word.length * 2
var remainingLetters = word.length
while (remainingLetters > 0 && yourTries > 0) {
    alert(guessWord.join(" "));
    alert("you have: " + yourTries + "left")
    var guess = prompt("guess the letter or click cancel to stop playing")
    guess = guess.toLowerCase()
    if (guess.length > 1 || guess.length == 0) {
        alert("put only one letter here")
    }
    else if (guess === null) {
        break
    }
    else {
        for (var i = 0; i < word.length; i++) {
            if (guess === word[i] && guessWord[i] === "_") {
                guessWord[i] = guess
                remainingLetters--
                alreadyGuess[guess] = true
            }

        }
    }
    yourTries--
}
if (yourTries == 0) {
    alert("you lose((")
}
else {
    alert("congratulation, the word was " + word)
}

function pickWord() {
    words = ['hello', 'bird', 'ostrich', 'guess']
    return words[Math.floor(Math.random() * 4)]
}
function setupAnswerArray(word) {
    var arrUnder = []
    for (var i = 0; i < word.length; i++) {
        arrUnder[i] = "_"
    }
    return arrUnder
}
function showPlayerProgress(answerArray) {
    alert(answerArray.join(' '))
}
function getGuess() {
    return prompt("enter a letter to guess the word")
}
function updateGameState(guess, word, answerArray) {
    var count = 0
    for (var i = 0; i < word.length; i++) {
        if (guess === word[i] && answerArray[i] === "_") {
            answerArray[i] = guess
            count++
        }

    }
    return count
}
function showAnswerAndCongratulatePlayer(answerArray) {
    alert("Congrats you won, the word was " + answerArray.join(''))
}


debugger
var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.")
    } else {
        var correctGuess = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuess;
    }
}
showAnswerAndCongratulatePlayer(answerArray)

var height = 800
var width = 800
var click = 0
var remainClicks = 20
function distanceHint(distance) {
    if (distance < 20) {
        return 'very hot'
    } else if (distance < 50) {
        return 'hot'
    } else if (distance < 120) {
        return 'good'
    } else if (distance < 220) {
        return 'cold'
    } else if (distance < 450) {
        return 'very cold'
    }
}
function getDistance(event, target) {
    var diffX = event.offsetX - target.x
    var diffY = event.offsetY - target.y
    return Math.sqrt((diffX * diffX) + (diffY * diffY))
}
function randomValue(number) {
    return Math.floor(Math.random() * number)
}
var target = {
    x: randomValue(width),
    y: randomValue(height)
}
$('#map').click(function (event) {
    click++
    $('#clicks').text(remainClicks--)
    if (click > 20) {
        alert("you lose!!!!!")
    } else {
        var distance = getDistance(event, target)
        var hint = distanceHint(distance)
        $('#distance').text(hint)
        if (distance < 16) {
            alert('congrats you won 1000$')
        }
    }
})
*/

var leftOffset = 0;
var topOffset = 0;

function moveSquare() {
    $('#distance').offset({
        left: leftOffset,
        top: topOffset
    })
    if (leftOffset == 0 && topOffset < 200) {
        topOffset++
    } else if (topOffset == 200 && leftOffset < 200) {
        leftOffset++
    } else if (topOffset > 0 && leftOffset == 200) {
        topOffset--
    } else if (topOffset == 0 && leftOffset > 0) {
        leftOffset--
    }
}
function fade() {
    $('#distance').fadeOut(500).fadeIn(500)
}

var idIinterval = setInterval(moveSquare, 1)
setInterval(fade, 1)
$('#clicks').click(function () {
    clearInterval(idIinterval)
})