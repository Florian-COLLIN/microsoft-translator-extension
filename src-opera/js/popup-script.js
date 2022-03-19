// @author : Florian COLLIN
function setChildTextNode(elementId, text) {
    document.getElementById(elementId).innerText = text;
}

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
