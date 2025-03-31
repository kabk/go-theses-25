let image_bg = document.getElementById("image_bg")

let student_container_mobile = document.getElementById("student_container_mobile")
    let name_mobile = document.getElementById("name_mobile")
    let title_mobile = document.getElementById("title_mobile")
        let title_link_mobile = document.getElementById("title_link_mobile")
    let question_mobile = document.getElementById("question_mobile")

let mobile_filter_toggle = document.getElementById("mobile_filter_toggle")
let mobile_filter_blur = document.getElementById("fixed_div").children[0]

let viewToggleGrid = document.getElementById("viewToggleGrid")
let viewToggleList = document.getElementById("viewToggleList")

let sort_toggle_author = document.getElementById("sort_toggle_author")
let sort_toggle_title = document.getElementById("sort_toggle_title")

let filter_list_div = document.getElementById("filter_list_div")
    let allFilterPs = document.getElementsByClassName("filter_p")



let scrolling_div = document.getElementById("scrolling_div")
    let welcome_container = document.getElementById("AA")
    let student_containers = document.querySelectorAll(".student_container")
        let keywords_containers = document.querySelectorAll(".keywords_container")
            let allKeywords = document.querySelectorAll(".keywords_container h2")
        let name_title_containers = document.querySelectorAll(".name_title_container")
            let titles = document.querySelectorAll(".title")
            let names = document.querySelectorAll(".name")
        let questions = document.querySelectorAll(".question")
        let preview_texts = document.querySelectorAll(".preview_text")


let name_list_mobile = document.getElementById("name_list_mobile")


var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
    return p.toString() === "[object SafariRemoteNotification]";
})(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
