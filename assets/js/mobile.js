if(isMobile){

    let keywords_container_mobile = document.createElement("div");
        keywords_container_mobile.classList.add("keywords_container")
        student_container_mobile.prepend(keywords_container_mobile)
        for(i=0;i<3;i++){
            let keyword = document.createElement("h2");
                keywords_container_mobile.appendChild(keyword)
        }


    for(i=0;i<student_containers.length;i++){
        let mobileNameListItem = document.createElement("p")
        let studentName = student_containers[i].children[1].children[0].innerText
        mobileNameListItem.innerText = studentName;
        mobileNameListItem.id = "mobile_name_list_" + student_containers[i].id
        name_list_mobile.appendChild(mobileNameListItem)
    }

    let filterMenuDisplaying = false;
    mobile_filter_toggle.addEventListener("click",()=>{
        if(!filterMenuDisplaying){
            mobile_filter_toggle.innerText = "▼ Filter"
            filter_list_div.style.opacity = 1
            filterMenuDisplaying = true;
            mobile_filter_blur.style.filter = "blur(3px)"
            name_list_mobile.style.filter = "blur(3px)"
        } else {
            mobile_filter_toggle.innerText = "▲ Filter"
            filter_list_div.style.opacity = 0
            filterMenuDisplaying = false;
            mobile_filter_blur.style.filter = "blur(0px)"
            name_list_mobile.style.filter = "blur(0px)"
        }
    })

    


    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      }
    const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{

        if(entry.isIntersecting){

            let collectionKeywords = entry.target.children[0].children
            for(i=0;i<collectionKeywords.length;i++){
                keywords_container_mobile.children[i].innerText = collectionKeywords[i].innerText
                if(collectionKeywords[i].innerText == ""){
                    keywords_container_mobile.children[i].style.display = "none"
                } else {
                    keywords_container_mobile.children[i].style.display = "block"
                }
            }

            let entryName = entry.target.children[1].children[0].innerText
            let entryTitle = entry.target.children[1].children[1].innerText
            let entryQuestion = entry.target.children[2].innerText
            let studentID = entry.target.id

            name_mobile.innerText = entryName;
            title_mobile.innerText = entryTitle;
            question_mobile.innerText = entryQuestion;
            setTimeout(()=>{
                image_bg.src = "../assets/images/" + studentID + ".jpg"
                image_bg.style.opacity = 1
            },200)


            for(i=0;i<name_list_mobile.children.length;i++){
                if(entryName == name_list_mobile.children[i].innerText){
                    name_list_mobile.children[i].style.textDecoration = "underline"
                } else {
                    name_list_mobile.children[i].style.textDecoration = "none"
                }
            }
        }
    })
    }, observerOptions);
    student_containers.forEach(student_container=>{
    observer.observe(student_container);
    })

}