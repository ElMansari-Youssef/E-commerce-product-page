let CAContainer = document.querySelector(".CartAvatarContainer svg");
let myItems = document.querySelector(".myCartItems");

let mainImg = document.getElementById("Main-image");
let close = document.querySelector(".closeSvg img");
let thumbnails = document.querySelectorAll(".imageContainer .thumbNails img");
let thumbnails2 = document.querySelectorAll(".imageContainerbox .thumbNails img");

let mainImg2 = document.querySelector(".imageContainer .Main-image img");
let mainImgBox = document.querySelector(".imageContainerbox .Main-image img");

let addTocard = document.querySelector(".btn");
let emptyCart = document.querySelector(".myCartItems .emptyCart");

let item3 = document.querySelector(".ItemsNumber .item3");
let item1 = document.querySelector(".ItemsNumber .item1");

let CAContainer2 = document.querySelector(".CartAvatarContainer .myCartItems .checkoutItems");
let checkoutItems = document.querySelector(".checkoutItems .checkOut");

let deleteSvg = document.querySelector(".checkOut svg:last-child")

let imagesArr = ["./images/image-product-1.jpg", "./images/image-product-2.jpg", "./images/image-product-3.jpg", "./images/image-product-4.jpg"]

let left = document.getElementById("left");
let right = document.getElementById("right");
let i = 1, currentIndex;

right.addEventListener("click", () => {

    if (i > 3) i = 0

    currentIndex = imagesArr[i]
    mainImgBox.src = currentIndex;

    i++;

    thumbnails2.forEach((element) => {




        thumbnails2.forEach((element) => { element.classList.remove("active2") });

        element.classList.add("active2");



    })
})

left.addEventListener("click", () => {

    i--;

    if (i < 0) i = 3;
    currentIndex = imagesArr[i];
    mainImgBox.src = currentIndex;


})



deleteSvg.addEventListener("click", () => {

    let checkoutItemsContainer = document.querySelector(".checkoutItems");
    let root = document.querySelector(":root");

    checkoutItemsContainer.classList.remove("checkoutItemsVisibility");




    emptyCart.classList.remove("hideEmptyCardtxt");

    root.style.setProperty("--switcher2", "hidden");
    root.style.setProperty("--opacityy", "0");
    root.style.setProperty("--NbrOfCheckoutItems", "''");

    document.querySelector(".ItemsNumber .item2 span").innerHTML = 0;






})

item1.addEventListener("click", () => {

    let spanText = document.querySelector(".ItemsNumber .item2 span").innerHTML;
    let span2Number = parseInt(spanText);
    let finalSpan = span2Number - 1;
    if (finalSpan >= 0) {
        document.querySelector(".ItemsNumber .item2 span").innerHTML = finalSpan
    }

})

item3.addEventListener("click", () => {

    let spanText = document.querySelector(".ItemsNumber .item2 span").innerHTML
    let span2Number = parseInt(spanText);
    let finalSpan = span2Number + 1;
    document.querySelector(".ItemsNumber .item2 span").innerHTML = finalSpan

})


addTocard.addEventListener("click", () => {

    let multiplier = document.querySelector(".ItemsNumber .item2 span").innerHTML;
    let checkoutItems = document.querySelector(".checkoutItems");

    let numbersOfitems = document.querySelector(".checkoutItems .checkOut .price .multiplier");
    let itemPrice = document.querySelector(".checkoutItems .checkOut .price .itemPrice");
    let total = document.querySelector(".checkoutItems .checkOut .price .total");

    emptyCart.classList.add("hideEmptyCardtxt");
    checkoutItems.classList.toggle("checkoutItemsVisibility");

    numbersOfitems.innerHTML = multiplier;


    total.innerHTML = "$" + (parseInt(itemPrice.textContent) * parseInt(numbersOfitems.innerHTML)).toFixed(2);

    checkContainer(CAContainer2, checkoutItems);


})

thumbnails.forEach((element) => {


    element.addEventListener("click", () => {

        thumbnails.forEach((element) => { element.classList.remove("active") });

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





function checkContainer(parent, child) {


    if (parent.contains(child)) {
        let root = document.querySelector(":root");
        root.style.setProperty("--switcher2", "visible");
        root.style.setProperty("--opacityy", "1");
        root.style.setProperty("--NbrOfCheckoutItems", "'1'");
        // console.log(root.style); 
    }
    else {
        console.log("not exists");
    }

}
