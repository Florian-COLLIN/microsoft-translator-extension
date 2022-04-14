// @author : Florian COLLIN
// Fonctions pour les fonctions
function setChildTextNode(elementId, text) {
    document.getElementById(elementId).innerText = text;
}

// Fonctions de langues
function accesBing() {
    setChildTextNode('languageSpan', chrome.i18n.getMessage("popupAccesBing"));
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#accept_lang');
    accesBing();
});

function accesDoc() {
    setChildTextNode('docSpan', chrome.i18n.getMessage("popupAccesDoc"));
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#acces_doc');
    accesDoc();
});

function whatsNew() {
    setChildTextNode('whatsnewSpan', chrome.i18n.getMessage("popupWhatsNew"));
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#whatsnew');
    whatsNew();
});
