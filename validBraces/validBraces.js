function validBraces(braces){
  const hasBraces = braces.includes("(") || braces.includes(")")
  const hasParenthesis = braces.includes("{") || braces.includes("}")
  const hasSquareBrackets = braces.includes("[") ||  braces.includes("]")

  console.log(braces, hasBraces, hasParenthesis, hasSquareBrackets);
};

validBraces("({}[]");
// console.log(validBraces("(){}[]"));