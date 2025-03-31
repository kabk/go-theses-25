viewToggleGrid.classList.add("active")
let currentView = "grid"

function changeToGrid(){
    viewToggleList.classList.remove("active")
    viewToggleGrid.classList.add("active")

    for(i=0;i<student_containers.length;i++){

        scrolling_div.style.display = "grid"

        name_title_containers[i].style.display = "block"
        student_containers[i].style.marginBottom = 50 + "px";

        keywords_containers[i].style.display = "flex"
        names[i].style.fontSize = "0.7em"
        titles[i].style.fontSize = "0.7em"
        questions[i].style.display = "block"
        preview_texts[i].style.display = "block"
    }
    currentView = "grid"
}

function changeToList(){
    viewToggleGrid.classList.remove("active")
    viewToggleList.classList.add("active")

    for(i=0;i<student_containers.length;i++){

        scrolling_div.style.display = "block"

        name_title_containers[i].style.display = "grid"
        titles[i].style.order = "2"
        names[i].style.order = "1"

        name_title_containers[i].style.gridTemplateColumns = "25vw 50vw"
        student_containers[i].style.marginBottom = 0;

        keywords_containers[i].style.display = "none"
        names[i].style.fontSize = "0.5em"
        titles[i].style.fontSize = "0.5em"
        questions[i].style.display = "none"
        preview_texts[i].style.display = "none"
    }
    currentView = "list"
}


if(!isMobile){
    viewToggleGrid.addEventListener("click",()=>{
        if(currentView == "list"){
            changeToGrid()
        }
    })
    
    viewToggleList.addEventListener("click",()=>{
        if(currentView == "grid"){
            changeToList()
        }
    })
    
    window.addEventListener("resize",()=>{
        if(window.innerWidth < 399){
            location.reload()
        }
    })
    
    window.addEventListener("load",()=>{
        changeToList()
    })
}
