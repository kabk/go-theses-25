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

if(window.innerWidth>499){

    for(i=0;i<titles.length;i++){
        let title = titles[i]
        title.addEventListener("mouseenter",()=>{
            let title_studentID = title.parentElement.parentElement.id
            if(title_studentID === "Her" || title_studentID === "Hyun" || title_studentID === "Jang" || title_studentID === "Moss" || title_studentID === "Soares" || title_studentID === "Wilke"){
                document.querySelector(":root").style.setProperty("--text-color","white")
            } else {
                document.querySelector(":root").style.setProperty("--text-color","black")
            }
        })
        title.addEventListener("mouseleave",()=>{
            document.querySelector(":root").style.setProperty("--text-color","black")
        })
    }

    if(isSafari){
        document.querySelectorAll("p").forEach((prg)=>{
            prg.style.fontSize = "1em"
        })
        document.querySelectorAll("h2").forEach((prg)=>{
            prg.style.fontSize = "1em"
        })
        document.querySelector("h1").style.fontSize = "1.5em"
    
        document.querySelector(":root").style.setProperty("--margin","20px")
    }
    }