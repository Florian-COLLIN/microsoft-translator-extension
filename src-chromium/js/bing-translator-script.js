/* @author : Florian COLLIN
   @date : 2022
   Bing Translator JavaScript file
   */
let plusLinkBr = document.createElement("br");
document.getElementById("tt_translatorHome").appendChild(plusLinkBr);

let plusLink = document.createElement("div");
    plusLink.id = "tt_translatorPlusContent";
document.getElementById("tt_translatorHome").appendChild(plusLink);
document.getElementById("tt_translatorPlusContent").innerHTML = "<table><tr><td>Plus d'infos</td></tr></table>";
