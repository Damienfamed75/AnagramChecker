///////////////////////////////////////////////////////////
////             Made by: Damien Stamates              ////
////                 Version: 0.1.01                   ////
////    Summary: An example as to how this function    ////
////            can be used within your code.          ////
///////////////////////////////////////////////////////////



anagramCheck = (wordOne, wordTwo) => {  // Core function
    return (wordOne.toLowerCase().split('').sort().join('')==wordTwo.toLowerCase().split('').sort().join('') ?
    true:false); // Returns either true of false (true if they're anagrams)
}


((a, b)=>{  // Example as to how somebody could use it
    if(anagramCheck(a, b)) // Uses anagramCheck(wordOne,wordTwo) as boolean
        {
            console.log('These are anagrams');
        } else {
            console.log('These are not anagrams');
        }
})('God', 'Dog');