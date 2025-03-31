viewToggleGrid.classList.add("active")
let currentView = "grid"

function changeToGrid() {
    viewToggleList.classList.remove("active")
    viewToggleGrid.classList.add("active")

    for (i = 0; i < student_containers.length; i++) {

        scrolling_div.style.display = "grid"

        name_title_containers[i].style.display = "block"
        student_containers[i].style.marginBottom = 50 + "px";

        keywords_containers[i].style.display = "flex"
        names[i].style.fontSize = "1.3em"
        titles[i].style.fontSize = "1.3em"
        questions[i].style.display = "block"
        preview_texts[i].style.display = "block"

        if (isSafari) {
            names[i].style.fontSize = "1.5em"
            titles[i].style.fontSize = "1.5em"
        }
    }
    currentView = "grid"
}

function changeToList() {
    viewToggleGrid.classList.remove("active")
    viewToggleList.classList.add("active")

    for (i = 0; i < student_containers.length; i++) {

        scrolling_div.style.display = "block"

        name_title_containers[i].style.display = "grid"
        titles[i].style.order = "2"
        names[i].style.order = "1"

        name_title_containers[i].style.gridTemplateColumns = "25vw 50vw"
        student_containers[i].style.marginBottom = 0;

        keywords_containers[i].style.display = "none"
        names[i].style.fontSize = "0.8em"
        titles[i].style.fontSize = "0.8em"
        questions[i].style.display = "none"
        preview_texts[i].style.display = "none"

        if (isSafari) {
            names[i].style.fontSize = "1em"
            titles[i].style.fontSize = "1em"
        }
    }
    currentView = "list"
}


if (window.innerWidth > 499) {
    viewToggleGrid.addEventListener("click", () => {
        if (currentView == "list") {
            changeToGrid()
        }
    })

    viewToggleList.addEventListener("click", () => {
        if (currentView == "grid") {
            changeToList()
        }
    })

    window.addEventListener("resize", () => {
        if (window.innerWidth < 499) {
            location.reload()
        }
    })

    window.addEventListener("load", () => {
        changeToList()
    })
}
