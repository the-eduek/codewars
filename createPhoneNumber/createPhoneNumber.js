function createPhoneNumber(numbers) {
  if (numbers && numbers.length === 10) {
    let allNumbersEligible  = numbers.every(number => number < 10 && number >= 0);

    if (allNumbersEligible) return `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers.slice(6).join("")}`;
  };
};

console.log(createPhoneNumber("1234567890"))