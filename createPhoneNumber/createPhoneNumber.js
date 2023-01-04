function createPhoneNumber(numbers) {
  if (numbers && numbers.length === 10 && Array.isArray(numbers)) {
    let allNumbersEligible = numbers.every(number => number < 10 && number >= 0); // makes sure each digit is between 0 and 9

    if (allNumbersEligible) return `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers.slice(6).join("")}`;
  };

  return null;
};