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
*/
for (var i = 1; i < 6; i++)
    $('h1').hide(1000 * i).show(1000 * i)

