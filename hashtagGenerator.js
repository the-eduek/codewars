/** question  - day one */

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false


function generateHashtag(str) {
  if (!str) return false; // if input is an empty string
  else {
    let strArray = str.split(" ") // split the input string by the spaces 
      .filter(string => string.length > 0) // remove any empty string
      .map(string => string[0].toUpperCase() + string.slice(1)); // capitalize each string
    
    if (!strArray.length > 0) return false; // case where the input is a string of spaces

    let result  = `#${strArray.join("")}`;

    if (result.length > 140)  return false; // if char > 140
    else return result;
  };
};