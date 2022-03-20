/* @author : Florian COLLIN
   @date : 2022
   Bing Translator JavaScript file
   */
let version_name = "v1.1.1-alpha.2 (Build 13)"
// Fonctions
function setChildTextNode(elementId, text) {
    document.getElementById(elementId).innerText = text;
}

// Ajoute un lien
let plusLinkBr = document.createElement("br");
document.getElementById("tt_translatorHome").appendChild(plusLinkBr);

let plusLink = document.createElement("div");
    plusLink.id = "tt_translatorPlusContent";
document.getElementById("tt_translatorHome").appendChild(plusLink);
document.getElementById("tt_translatorPlusContent").innerHTML = '<table><tr><td>Microsoft Translator Plus - 2022 - '+version_name+'</td></tr></table>';
