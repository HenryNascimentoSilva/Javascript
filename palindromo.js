function isPalindrome(str) {
  const palindrome = str.split("").reverse().join("");
  if (str == palindrome) return true;
  else return false;
}

console.log(isPalindrome("arara"));
