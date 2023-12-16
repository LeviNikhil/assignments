/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let strr=str.toLowerCase();
    let ans=0;
    for(let i=0;i<strr.length;i++)
    {
       if(strr[i]=='a' || strr[i]=='e' || strr[i]=='i' || strr[i]=='o' || strr[i]=='u') ans++;
    } 
    return ans;
}

module.exports = countVowels;