const game = {
    title: "Guess the Number!",
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],

    play: function () {
      this.secretNum =
        Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) +
        this.smallestNum
      let guess = NaN
      while (guess !== this.secretNum) {
        guess = this.getGuess()
        this.prevGuesses.push(guess)
        this.render(guess)
        if (guess === this.secretNum) return
      }
    },

    getGuess: function() {
      let guess = NaN
      while(guess !== this.secretNum) {
        let guess = parseInt(prompt(`Try to guess the secret number between ${this.smallestNum} and ${this.biggestNum}`))
        return guess
      }   
    },

    render: function(guess) {
      if (guess > this.secretNum) {
        alert(`You guessed too high try a lower number! Here are your previous guesses, ${this.prevGuesses.join(', ')}`)
      } else if (guess < this.secretNum) {
        alert(`You guessed too low try a higher number! Here are your previous guesses, ${this.prevGuesses.join(', ')}`)
      } else if (guess === this.secretNum) {
        alert('You have guessed the secret number well done!') 
      } 
    },

  }
  
game.play()

console.log(game.prevGuesses)

  // player is prompted with a number input
  // check to see if it matches the secret number
  // decide what message to send to user
  // tell user result

  // prompt user for number
  // make variable into number (parseInt)
  // return number

  // render usually talks to user
  // guessed correct or incorrect(too high or low) 
  // if else whether or not the number was guessed
  // alert