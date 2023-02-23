
// function isPalindrome(wordToCheck) {
//     let wordForwards = wordToCheck.split('');

//     for (let i = 0; i < wordForwards.length; i++) {
//         if (wordForwards[i] !== wordForwards[wordForwards.length - i - 1]) {
//             console.log(`${wordToCheck} is not a palindrome`);
//             return false;
//         }
//     }
//     console.log(`${wordToCheck} is a palindrome`);
//     return true;
// }

// function isPal(str) {
//     for (let i = 0; i < str.length; i++) {
//         let charF = str[i]
//         let charB = str[str.length - 1 - i]

//         if (charF !== charB) {
//             return false
//         }
//     }

//     return true
// }

// console.log(isPal('hello'))

// const isPalindrome =(word)=>{
//     let arrWord = word.split('')
//     let arrWordRevese = arrWord.reverse()
//     let arrWordJoin = arrWordRevese.join('')
//     if(word === arrWordJoin){
//       return true
//     }else{
//       return false
//     }
//   }

function palindrome(str){
    let newStr = str.toLowerCase().split('').reverse().join('')

  if (str.toLowerCase() === newStr) {
    return true
  } else {
    return false
  }
}

console.log(palindrome('raceCAr')) // it returns true