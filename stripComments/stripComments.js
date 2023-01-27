function solution(input, markers) {
  const solution = input.split('\n').map(string => {
    markers.forEach(marker => {
      if (string.includes(marker)) string = string.substring(0, string.indexOf(marker) - 1);
    });

    string = string.trimEnd();
    return string;
  });

  return solution.filter(string => string.length > 0).join('\n');
};