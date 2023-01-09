function toWeirdCase(string){
  let stringArray = string.split(" ").map(element => {
    wordArray = element.split("").map((letter, letterIndex) => {
      if ((letterIndex % 2) === 0)  return letter.toUpperCase();
      if ((letterIndex % 2) === 1)  return letter.toLowerCase();
    });

    return wordArray.join("");    
  });

  return stringArray.join(" ");
};