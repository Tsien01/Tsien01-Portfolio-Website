export function generateRandomLetter () {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    return letters[Math.floor(Math.random() * letters.length)]
  }