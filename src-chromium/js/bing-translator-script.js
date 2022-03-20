/* @author : Florian COLLIN
   @date : 2022
   Bing Translator JavaScript file
   */
// Fonctions
function setChildTextNode(elementId, text) {
    document.getElementById(elementId).innerText = text;
}

function accesDoc() {
    setChildTextNode('spanExtName', chrome.i18n.getMessage("extName"));
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#extName');
    accesDoc();
});

// Ajoute un lien
let plusLinkBr = document.createElement("br");
document.getElementById("tt_translatorHome").appendChild(plusLinkBr);

let plusLink = document.createElement("div");
    plusLink.id = "tt_translatorPlusContent";
document.getElementById("tt_translatorHome").appendChild(plusLink);
document.getElementById("tt_translatorPlusContent").innerHTML = '<table><tr><td>Plus d\'infos - <div id="extName"><span id="spanExtName"></span></div></td></tr></table>';
