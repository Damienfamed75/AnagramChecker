///////////////////////////////////////////////////////////
////             Made by: Damien Stamates              ////
////                 Version: 0.2.16                   ////
////    Summary: This method can be integrated into    ////
////   your code to check if two words are anagrams.   ////
///////////////////////////////////////////////////////////


// Testing grounds

anagramCheck = (wordOne, wordTwo) => {  // Core function
    return (wordOne.toLowerCase().split('').sort().join('')==wordTwo.toLowerCase().split('').sort().join('') ?
    true:false);
}

((a, b)=>{  // Example as to how somebody could use it
    if(anagramCheck(a, b))
        {
            console.log('These are anagrams');
        } else {
            console.log('These are not anagrams');
        }
})('God', 'Dog');