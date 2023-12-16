/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function removeChars(inputString, charsToRemove)
{
  charsToRemove.forEach(char => {
      inputString = inputString.split(char).join('');
  });
  return inputString;
}

function isPalindrome(str)
{
  const charsToRemove = [' ', '?', '!',',','.'];
  const result = removeChars(str, charsToRemove);
  let strr=result.toLowerCase();
  let sizee=strr.length;
  for(let i=0;i<sizee;i++)
  {
     if(strr[i]!=strr[sizee-1-i])return false;
  }
  return true;
}

module.exports = isPalindrome;
