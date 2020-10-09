/*

Skriv en funktion som tar en sträng som parameter, gör om alla tecken som inte är a-z (stora eller små) till HTML-entiteter och returnerar resultatet.

Läs mer om HTML-entiteter här: https://dev.w3.org/html5/html-author/charref

Din funktion måste byta ut alla "osäkra" tecken mot "säkra". De tecken ni behöver byta ut är:
<
>
å
ä
ö
'

Alla tecken som inte är a-z eller någon av ovanstående (t ex kommatecken, punkter, bindestreck osv) ska tas bort.

*/

function safe_string(string) {
  let newString = string.split("");
  let string2 = [];
  //string2 = newString.toString();
  

  for(let i = 0; i < newString.length; i++)
  {
      
  }
  //console.log(string2)
  
  for (let i = 0; i < newString.length; i++) {

    
    
    if (newString[i] === '<') {
        string2.push("&lt;");
    }

    if (newString[i] === '>'){
        string2.push("&gt;");
    }
    if (newString[i] === "å"){
        string2.push("&aring;")
    }

    if (newString[i] === "ä")
    {
        string2.push("&auml;");
    }

    if (newString[i] === "ö"){
        string2.push("&ouml;")
    }

    else{
        string2.push([i])
        
    }

}

   
  let newString2 = string2.join("");

  console.log(newString2);
  

}

//console.log( safe_string( "<h1>Sjörövare, O'hoj</h1>" ) ); // Expected output: &lt;h1&gt;Sj&ouml;r&ouml;vare O&apos;hoj&lt;/h1&gt;

safe_string("<h1>Sjörövare, O'hoj</h1>");
