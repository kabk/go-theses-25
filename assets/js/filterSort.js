//Filtering

const key = "students"

const Speculative = {}
const Applied = {}
const Aesthetics = {}
const Gender = {}
const Politics = {}
const Identity = {}
const Technology = {}
const Nature = {}
const Health = {}
const Community = {}
const Ornament = {}
const Sound = {}
const Letters = {}

Speculative[key] = ["Chita","Doan","Fixl","Gazmar","Gresko","Hwingwiri","Hyun","Jang","Juras","Konings","Marner","Moss","Rosenborg","Soares","Vignisdottir"]
Applied[key] = ["Bielawska","Gazmar","Gresko","Zajac"]
Aesthetics[key] = ["Anghel","Bialas","Fransen","Jaspers","Juras","Rosenborg","Smets","Vignisdottir","Wojtkiewicz","Zajac"]
Gender[key] = ["Akkermans","Bielawska","Fransen","Madej","Norman","Smets","Wilke","Wojcinowicz","Wojtkiewicz"]
Politics[key] = ["Akkermans","Anghel","Bruijn","Doan","Fixl","Gresko","Her","Hwingwiri","Jang","Jaspers","Konings","Marner","Moss","Norman","Rosenborg","San","Smets","Soares","Vignisdottir"]
Identity[key] = ["Akkermans","Anghel","Bialas","Bruijn","Chita","Fixl","Fransen","Gazmar","Her","Hwingwiri","Hyun","Jaspers","Juras","Madej","Marner","Rosenborg","Smets","Soares","Vignisdottir","Wilke","Wojcinowicz","Yi"]
Technology[key] = ["Akkermans","Anghel","Fixl","Her","Jang","Jaspers","Konings","Marner","San","Soares","Wilke","Wojtkiewicz"]
Nature[key] = ["Doan","Konings","Gresko","Jang","Marner","Soares","Vignisdottir"]
Health[key] = ["Bielawska","Doan","Fransen","Jaspers"]
Community[key] = ["Bialas","Bruijn","Doan","Gresko","Juras","Madej","Marner","Moss","Wojcinowicz"]
Ornament[key] = ["Bialas","Vignisdottir","Yi"]
Sound[key] = ["Bruijn","Gresko","Marner"]
Letters[key] = ["Hyun","Wilke","Yi","Zajac"]



let currentFilters = []
let currentDisplayingStudents = []

for(i=0;i<student_containers.length;i++){
    currentDisplayingStudents.push(student_containers[i].id)
}



function clearAllStudents(){
    Array.prototype.forEach.call(student_containers, function(student_container) {
        student_container.style.display = "none"
    })
    if(window.innerWidth<499){
        for(i=0;i<name_list_mobile.children.length;i++){
            name_list_mobile.children[i].style.display = "none"
        }
    }
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
    if(window.innerWidth<499){
        for(i=0;i<name_list_mobile.children.length;i++){
            name_list_mobile.children[i].style.display = "block"
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

    if(window.innerWidth<499){
        for(i=0;i<currentDisplayingStudents.length;i++){
            let nameListElementID = "mobile_name_list_" + currentDisplayingStudents[i]
            document.getElementById(nameListElementID).style.display = "block"
        }
    }
}



Array.prototype.forEach.call(allFilterPs, function(filterP) {
    filterP.addEventListener("click",()=>{
        if(filterP.classList.contains("active")){
            filterP.classList.remove("active")
            filterP.style.textDecoration = "none"
            currentFilters.splice(currentFilters.indexOf(filterP.innerText),1)
            displayFilteredStudents()
            if(!currentFilters.length){
                displayAllStudents()
            }
        } else {
            filterP.classList.add("active")
            filterP.style.textDecoration = "underline"
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
    allTitles.push(student_containers[i].children[0].children[0].innerText)
}


let sortedNames = allNames.sort()
let sortedTitles = allTitles.sort()


function sortByAuthor(){
    sort_toggle_author.classList.add("active")
    sort_toggle_title.classList.remove("active")

    for(i=1;i<sortedNames.length;i++){
        let studentContainer_NameSorted = document.getElementById(sortedNames[i])
        scrolling_div.removeChild(studentContainer_NameSorted)
        scrolling_div.appendChild(studentContainer_NameSorted)

        if(window.innerWidth<499){
            let mobileNameListItem_Sorted = document.getElementById("mobile_name_list_" + sortedNames[i])
            name_list_mobile.removeChild(mobileNameListItem_Sorted)
            name_list_mobile.appendChild(mobileNameListItem_Sorted)
        }
    }
}

function sortByTitle(){
    sort_toggle_title.classList.add("active")
    sort_toggle_author.classList.remove("active")

    for(i=1;i<sortedTitles.length;i++){
        let sortedTitle = sortedTitles[i]
        for(j=1;j<titles.length;j++){
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