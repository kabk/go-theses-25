//Filtering

const key = "students"
const Speculative = {}
const Applied = {}
const Aesthetics = {}
Speculative[key] = ["Konings","Akkermans","Bialas"]
Applied[key] = ["Bialas","Fransen"]
Aesthetics[key] = ["Bialas","Jaspers"]



let currentFilters = []
let currentDisplayingStudents = []

for(i=0;i<student_containers.length;i++){
    currentDisplayingStudents.push(student_containers[i].id)
}



function clearAllStudents(){
    Array.prototype.forEach.call(student_containers, function(student_container) {
        student_container.style.display = "none"
    })
    currentDisplayingStudents = []
}

function displayAllStudents(){
    Array.prototype.forEach.call(student_containers, function(student_container) {
        student_container.style.display = "block"
    })
    for(i=0;i<student_containers.length;i++){
        if(currentDisplayingStudents.indexOf(student_containers[i]) > -1){
            currentDisplayingStudents.push(student_containers[i].id)
        }
    }
}

function displayFilteredStudents(){
    clearAllStudents()
    for(i=0;i<currentFilters.length;i++){
        let individualFilterStudents = eval(currentFilters[i]).students
        for(j=0;j<individualFilterStudents.length;j++){
            if(currentDisplayingStudents.indexOf(individualFilterStudents[j]) == -1){
                currentDisplayingStudents.push(individualFilterStudents[j])
                document.getElementById(individualFilterStudents[j]).style.display = "block"
            }            
        }
    }
}



Array.prototype.forEach.call(allFilterPs, function(filterP) {
    filterP.addEventListener("click",()=>{
        if(filterP.classList.contains("active")){
            filterP.classList.remove("active")
            currentFilters.splice(currentFilters.indexOf(filterP.innerText),1)
            displayFilteredStudents()
            if(!currentFilters.length){
                displayAllStudents()
            }
        } else {
            filterP.classList.add("active")
            currentFilters.push(filterP.innerText)
            displayFilteredStudents()
        }
    })
});






//Sorting

let allNames = []
let allTitles = []

for(i=0;i<student_containers.length;i++){
    allNames.push(student_containers[i].id)
    allTitles.push(student_containers[i].children[1].children[1].innerText)
}



let sortedNames = allNames.sort()
let sortedTitles = allTitles.sort()


function sortByAuthor(){
    sort_toggle_author.classList.add("active")
    sort_toggle_title.classList.remove("active")

    for(i=0;i<sortedNames.length;i++){
        let studentContainer_NameSorted = document.getElementById(sortedNames[i])
        scrolling_div.removeChild(studentContainer_NameSorted)
        scrolling_div.appendChild(studentContainer_NameSorted)

        if(isMobile){
            let mobileNameListItem_Sorted = document.getElementById("mobile_name_list_" + sortedNames[i])
            name_list_mobile.removeChild(mobileNameListItem_Sorted)
            name_list_mobile.appendChild(mobileNameListItem_Sorted)
        }
    }
}

function sortByTitle(){
    sort_toggle_title.classList.add("active")
    sort_toggle_author.classList.remove("active")

    for(i=0;i<sortedTitles.length;i++){
        let sortedTitle = sortedTitles[i]
        for(j=0;j<titles.length;j++){
            if(sortedTitle === titles[j].innerText){
                let studentContainer_TitleSorted = titles[j].parentElement.parentElement
                scrolling_div.removeChild(studentContainer_TitleSorted)
                scrolling_div.appendChild(studentContainer_TitleSorted)
            }
        }
    }
}


sort_toggle_author.addEventListener("click",()=>{
    sortByAuthor()
})

sort_toggle_title.addEventListener("click",()=>{
    sortByTitle()
})

window.addEventListener("load",()=>{
    sortByAuthor()
})