///////////////////////////////////////////////////////////
////             Made by: Damien Stamates              ////
////                 Version: 0.3.16                   ////
////   Summary: This function can be integrated into   ////
////   your code to check if two words are anagrams.   ////
///////////////////////////////////////////////////////////



anagramCheck = (wordOne, wordTwo) => {  // Core function
    return (wordOne.toLowerCase().split('').sort().join('')==wordTwo.toLowerCase().split('').sort().join('') ?
    true:false); // Returns either true of false (true if they're anagrams)
}