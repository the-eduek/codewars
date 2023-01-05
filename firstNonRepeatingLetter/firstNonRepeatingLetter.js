function firstNonRepeatingLetter(word) {
  if (typeof(word) !== "string") return null; // no errors. non strings would quit the function

  const lettersArray = word.split("");

  let occurenceArray = lettersArray.map(currentLetter => {
    return lettersArray.filter(letter => currentLetter.toLowerCase() === letter.toLowerCase()).length;
  });

  let resultIndex = (occurenceArray.findIndex(number => number === 1));
  
  if (resultIndex != -1) return lettersArray[resultIndex]
  else return "";
};