var words = ["bus", "motor", "garden", "craft"]
var word = words[Math.floor(Math.random() * words.length)]
var guessWord = []
for (var i = 0; i < word.length; i++) {
    guessWord[i] = "_"
}
var remainingLetters = word.length
while (remainingLetters > 0) {
    alert(guessWord.join(" "));
    var guess = prompt("guess the letter or click cancel to stop playing")
    alreadyGuess = {}

    if (guess.length > 1 || guess.length == 0) {
        alert("put only one letter here")
    }
    else if (guess === null) {
        break
    }
    else {
        for (var i = 0; i < word.length; i++) {
            if (guess === word[i]) {
                guessWord[i] = guess
                alreadyGuess.guess = false
                remainingLetters--
            }
        }
    }

}
alert("congratulation, the word was " + word)

