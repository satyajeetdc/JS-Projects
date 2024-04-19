const accordianItems = document.querySelectorAll(".accordian-item");

accordianItems.forEach((accordianItems) => {
    const button = accordianItems.querySelector(".accordian-button");
    const content = accordianItems.querySelector(".accordian-content");

    button.addEventListener("click", () => {
        accordianItems.classList.toggle("active");

        if(accordianItems.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight+"px";
        } else {
            content.style.maxHeight = 0;
        }
    })
})