/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let i =0;
  let j = str.length - 1;
  while(j>=i){
    if(str.charCodeAt(i)-97 <=0 || str.charCodeAt(i)-97 >= 25 ){
      console.log(str[i]);
      i++;
    }
    else if(str.charCodeAt(j)-97 <=0 || str.charCodeAt(j)-97 >= 25 ){
      console.log(str[j]);
      j--;
    }
    else if(str[i]!=str[j]){
      return false;
    }
    else{
    i++;j--;
    }
  }
  return true;
}

module.exports = isPalindrome;
