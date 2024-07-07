let CAContainer = document.querySelector(".CartAvatarContainer svg");
let myItems = document.querySelector(".myCartItems");
let mainImg = document.getElementById("Main-image");
let close = document.querySelector(".closeSvg img");
let thumbnails = document.querySelectorAll(".imageContainer .thumbNails img");
let thumbnails2 = document.querySelectorAll(".imageContainerbox .thumbNails img");

let mainImg2 = document.querySelector(".imageContainer .Main-image img");
let mainImgBox = document.querySelector(".imageContainerbox .Main-image img");


thumbnails.forEach((element) => {


    element.addEventListener("click", () => {

        thumbnails.forEach((element) => {element.classList.remove("active")});

        let str = element.outerHTML;
        let s = str.split("src=")[1].split('"')[1].slice(0, 24) + ".jpg";
        mainImg2.src = s;
        element.classList.add("active");

    })

})

thumbnails2.forEach((element) => {


    element.addEventListener("click", () => {

        thumbnails2.forEach((element) => { element.classList.remove("active2") });

        let str = element.outerHTML;
        let s = str.split("src=")[1].split('"')[1].slice(0, 24) + ".jpg";
        mainImgBox.src = s;
        element.classList.add("active2");

    })

})

//event listeners

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