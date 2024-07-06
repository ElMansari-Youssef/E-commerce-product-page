let CAContainer = document.querySelector(".CartAvatarContainer svg");
let myItems = document.querySelector(".myCartItems");
let mainImg = document.getElementById("Main-image");
let close = document.querySelector(".closeSvg img");


close.addEventListener("click", () => {

    let lightbox = document.querySelector(".lightBox");
    let header = document.querySelector(".header");
    lightbox.classList.remove("visible");
    header.classList.remove("visible");
})


mainImg.addEventListener("click", () => {
   
    let lightbox = document.querySelector(".lightBox");
    let header = document.querySelector(".header");

    lightbox.classList.add("visible");
    header.classList.add("visible");

})



CAContainer.addEventListener("click", () => {

    myItems.classList.toggle("show");
})


document.addEventListener("click", () => {

    if (!event.target.closest(".CartAvatarContainer")) {

        myItems.classList.remove("show");
    }

})