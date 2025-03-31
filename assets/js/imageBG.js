if(!isMobile){
    
    for(i=0;i<titles.length;i++){
        titles[i].addEventListener("mouseenter",(titleElement)=>{
            let studentID = titleElement.target.parentElement.parentElement.id
            image_bg.src = "./assets/images/" + studentID + ".jpg"
            image_bg.style.opacity = 1
        })
        titles[i].addEventListener("mouseleave",()=>{
            image_bg.style.opacity = 0
            image_bg.src = ""
        })
    }
    
}

