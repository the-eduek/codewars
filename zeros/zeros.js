function zeros(n) {
  let result = 0;
 
  while (n > 4) {
    let quotient = Math.floor(n / 5);
    result = result + quotient

    if (quotient > 4) n = quotient;
    else break;
  };

  return result;
};