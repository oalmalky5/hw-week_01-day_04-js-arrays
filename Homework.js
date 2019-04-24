const numberSum = function(n){
    var sum = 0;
      for(i = 0; i <= n; i++){
        sum += i; 
         }
    console.log(sum)
}
numberSum(5);

====================


var avg = [8, 2, 2, 4].reduce((p,c,_,a) => p + c/a.length,0);
console.log(avg)
 

===================
var nums = [8, 2, 2, 4]
nums.join("-")

==================

function findLongestWord(str) {
    const stringArray = str.split(" ");
    const orderedArray = stringArray.sort((a, b) => {
      return a.length < b.length;
    });
    return orderedArray[0].length;
  }
  findLongestWord("The quick brown fox jumped over the lazy dog");
  
  =======================
  function mostLetters(str) {
    const stringArray = str.split(" ");
    const mostLetters = stringArray.reduce((a, b) => {
      if(b.length > a.length) {
        return b;
      } else {
        return a;
      }
    });
    return mostLetters;
  }
  mostLetters("good lesson we had today");
  