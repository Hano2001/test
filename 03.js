/*

Gör en funktion som tar emot en fras som parameter och returnerar true (boolskt, inte sträng eller annat) om strängen är ett palindrom eller false om den inte är det.

https://sv.wikipedia.org/wiki/Palindrom

https://medium.com/better-programming/5-ways-to-reverse-a-string-in-javascript-466f62845827

Lägg märke till att ni måste hantera mellanslag. "Ni talar bra latin" är t ex ett palindrom. Ni behöver bara hantera små bokstäver.

*/

function is_palindrome(palindrom) {
    let newPalindrom = palindrom.split("")
    let newPalindrom2 = [];
    let amount = newPalindrom.length -1;
    for(i = 0; i < newPalindrom.length; i ++) {
        if(palindrom[i] = " ")
        
        newPalindrom2.push(newPalindrom[amount -i])
    }
    finalPalindrom = newPalindrom.join("");
    finalPalindrom2 = newPalindrom2.join("");

    if(palindrom == finalPalindrom) {
        console.log(palindrom + " Är ett palindrom!")
    }

    else {
        console.log(palindrom + " Är inget palindrom!")
    }

    
    
}
is_palindrome("ni talar bra latin");
// let test_string = 'sirap i paris';
// if ( is_palindrome( test_string ) ) {
//     console.log( test_string + " is a palindrome" );
// } else {
//     console.log( test_string + " is NOT a palindrome" );
// }
