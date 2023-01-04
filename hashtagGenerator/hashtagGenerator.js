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