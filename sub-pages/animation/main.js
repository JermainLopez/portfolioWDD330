const btnadds = document.querySelectorAll("#addToCart");
btnadds.forEach((btn)=>{
    btn.addEventListener("click", (e) =>{
        e.preventDefault();
        /*Add animation of button */
        if (!btn.classList.contains("add")){
            btn.classList.add("add");
            const div = document.querySelector(".button-added");
            div.setAttribute("class","button-add");
            const div2 = document.querySelector(".items-on-bagpack");
            div2.setAttribute("class","button-add2");
            /*Remove the class animation from button */
            setTimeout(() =>{
                btn.classList.remove("add");
                div.classList.remove("button-add");
                div.setAttribute("class","button-added");
            }, 3000);
        }
    })
});