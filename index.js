function reverse(word){
  return word.split("").reverse().join("")

}


function isPalindrome(word) {
  // Write your algorithm here
  const reveredWord =reverse(word);
     return word === reveredWord;
  
}

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;