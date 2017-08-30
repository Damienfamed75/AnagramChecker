///////////////////////////////////////////////////////////
////             Made by: Damien Stamates              ////
////                 Version: 0.0.01                   ////
////    Summary: This method can be integrated into    ////
////   your code to check if two words are anagrams.   ////
///////////////////////////////////////////////////////////


// Testing grounds

((a,b)=>{
    var y = a.split('').sort().join(''), z = b.split('').sort().join('');
    console.log(z === y ? a + ' and ' + b + ' are anagrams' :
        a + ' and ' + b + ' are not anagrams');
})('god','dog');