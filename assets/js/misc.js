for(i=0;i<allKeywords.length;i++){
    if(allKeywords[i].innerText == ""){
        allKeywords[i].style.display = "none"
    } else {
        allKeywords[i].style.display = "block"
    }
}

var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
    return p.toString() === "[object SafariRemoteNotification]";
})(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

if(!isMobile && isSafari){
    // document.querySelectorAll("p").style.fontSize = "1em"
}