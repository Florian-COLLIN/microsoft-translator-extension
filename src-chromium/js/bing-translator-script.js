/* @author : Florian COLLIN
   @date : 2022
   Bing Translator JavaScript file
   */
// Variables
let version_name = "v1.1.1-alpha.3 (Build 14)";
// Fonctions pour les autres fonctions
function setChildTextNode(elementId, text) {
    document.getElementById(elementId).innerText = text;
}
// Ajoute un lien
function contentLink() {
    let aboutTranslatorPlus = chrome.i18n.getMessage('bingAbout');
    let plusLinkBr = document.createElement("br");
    document.getElementById("tt_translatorHome").appendChild(plusLinkBr);

    let plusLink = document.createElement("div");
        plusLink.id = "tt_translatorPlusContent";
    document.getElementById("tt_translatorHome").appendChild(plusLink);
    document.getElementById("tt_translatorPlusContent").innerHTML = '<table><tr><td>Microsoft Translator Plus - 2022 - ' + version_name + ' - ' + aboutTranslatorPlus + '</td></tr></table>';
}
// Exécution des fonctions
contentLink();
