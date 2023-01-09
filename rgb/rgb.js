function rgb(r, g, b) {
  // function to convert decimal to hexadecimal
  function toHex(number) {
    let remainders = [];
  
    do {
      let a = number % 16;
      remainders.unshift(a);
  
      number = Math.trunc(number / 16);
    } while (number > 0);
  
    remainders = remainders.map(number => {
      if (number === 10) return "A";
      else if (number === 11) return "B";
      else if (number === 12) return "C";
      else if (number === 13) return "D";
      else if (number === 14) return "E";
      else if (number === 15) return "F";
      else return number;
    });
  
    return remainders.join("");
  };

  if (arguments.length === 3) {
    const hexcode = [...arguments].map(argument => {
      if (argument > 254) return "FF";; // normalize values greater than 255
      if (argument < 1) return "00"; // normalize values lesser than 0

      let result = toHex(argument);
      if (result.toString().length < 2) return `0${result}` // make the string a double length string
      else return result;
    });
    return hexcode.join("");
  } else return null;
};