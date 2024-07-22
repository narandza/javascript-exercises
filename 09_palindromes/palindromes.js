const palindromes = function (str) {
  str = str.toLowerCase();
  const lettersRegEx = /[a-zA-z0-9]/;
  const stripedStr = str.split("").filter((x) => x.match(lettersRegEx));
  str = stripedStr.join("");
  const reversed = stripedStr.reverse().join("");

  return str === reversed;
};

// Do not edit below this line
module.exports = palindromes;
