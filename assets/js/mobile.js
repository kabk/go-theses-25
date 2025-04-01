if (window.innerWidth < 499) {

    let filterMenuDisplaying = false;

    let keywords_container_mobile = document.createElement("div");
    keywords_container_mobile.classList.add("keywords_container")
    student_container_mobile.appendChild(keywords_container_mobile)
    for (i = 0; i < 4; i++) {
        let keyword = document.createElement("h2");
        keywords_container_mobile.appendChild(keyword)
    }


    for (i = 0; i < student_containers.length; i++) {
        let mobileNameListItem = document.createElement("p")
        let studentName = student_containers[i].children[0].children[1].innerText
        let targetStudentContainer = student_containers[i].id

        mobileNameListItem.innerText = studentName;
        mobileNameListItem.id = "mobile_name_list_" + targetStudentContainer
        name_list_mobile.appendChild(mobileNameListItem)

        if (!filterMenuDisplaying) {
            mobileNameListItem.addEventListener("click", () => {
                document.getElementById(targetStudentContainer).scrollIntoView({ behavior: "smooth", block: "center" })
            })
        }
    }



    mobile_filter_toggle.addEventListener("click", () => {
        if (!filterMenuDisplaying) {
            mobile_filter_toggle.innerText = "↓ Filter"
            filter_list_div.style.opacity = 1
            filter_list_div.style.transform = "translate(0,0)";
            filterMenuDisplaying = true;
            mobile_filter_blur.style.filter = "blur(3px)"
            name_list_mobile.style.filter = "blur(3px)"
            filter_overlay_mobile.style.opacity = 1;
            filter_overlay_mobile.style.transform = "translate(0,0)";

        } else {
            mobile_filter_toggle.innerText = "↑ Filter"
            filter_list_div.style.opacity = 0
            filter_list_div.style.transform = "translate(0,100vw)";
            filterMenuDisplaying = false;
            mobile_filter_blur.style.filter = "blur(0px)"
            name_list_mobile.style.filter = "blur(0px)"
            filter_overlay_mobile.style.opacity = 0;
            filter_overlay_mobile.style.transform = "translate(0,100vw)";

        }
    })




    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 1,
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {

                let collectionKeywords = entry.target.children[1].children
                for (i = 0; i < collectionKeywords.length; i++) {
                    keywords_container_mobile.children[i].innerText = collectionKeywords[i].innerText
                    if (collectionKeywords[i].innerText == "") {
                        keywords_container_mobile.children[i].style.display = "none"
                    } else {
                        keywords_container_mobile.children[i].style.display = "block"
                    }
                }

                let studentID = entry.target.id
                let entryName = entry.target.children[0].children[1].innerText
                let entryTitle = entry.target.children[0].children[0].children[0].innerText
                let entryLink = entry.target.children[0].children[0].children[0].href
                let entryQuestion = entry.target.children[2].innerText

                name_mobile.innerText = entryName;
                title_mobile.innerText = entryTitle
                title_link_mobile.href = entryLink
                question_mobile.innerText = entryQuestion;

                // question_mobile.appendChild(entryQuestion)

                // if (question_mobile.children.length > 1) {
                //     question_mobile.removeChild(question_mobile.children[0])
                //     // question_mobile.appendChild(entryQuestion)
                // }


                if (studentID === "AA") {
                    name_mobile.style.display = "none"
                    image_bg.src = ""
                    image_bg.style.opacity = 0
                } else {
                    name_mobile.style.display = "block"
                    setTimeout(() => {
                        image_bg.src = "./assets/images/" + studentID + ".jpg"
                        image_bg.style.opacity = 1
                    }, 200)
                }

                if (studentID === "Her" || studentID === "Hyun" || studentID === "Jang" || studentID === "Moss" || studentID === "Soares" || studentID === "Wilke") {
                    document.querySelector(":root").style.setProperty("--text-color", "white")
                } else {
                    document.querySelector(":root").style.setProperty("--text-color", "black")
                }

                for (i = 0; i < name_list_mobile.children.length; i++) {
                    if (entryName == name_list_mobile.children[i].innerText) {
                        name_list_mobile.children[i].style.textDecoration = "underline"
                    } else {
                        name_list_mobile.children[i].style.textDecoration = "none"
                    }
                }
            }
        })
    }, observerOptions);
    student_containers.forEach(student_container => {
        observer.observe(student_container);
    })

} else {
    scrolling_div.removeChild(welcome_container)
}