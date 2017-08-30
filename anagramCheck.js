///////////////////////////////////////////////////////////
////             Made by: Damien Stamates              ////
////                 Version: 0.0.01                   ////
////    Summary: This method can be integrated into    ////
////   your code to check if two words are anagrams.   ////
///////////////////////////////////////////////////////////


// Testing grounds

((a, b)=>{
    console.log(a.split('').sort().join('')==b.split('').sort().join('')?
    a + ' and ' + b + ' are anagrams' : a + ' and ' + b + ' are not anagrams');
})('dog', 'god');