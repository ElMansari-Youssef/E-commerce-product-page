let CAContainer = document.querySelector(".CartAvatarContainer svg");
let myItems = document.querySelector(".myCartItems");

CAContainer.addEventListener("click", () => {

    myItems.classList.toggle("show");
})


document.addEventListener("click", () =>{

    if (!event.target.closest(".CartAvatarContainer")){

        myItems.classList.remove("show");
    }
    
})