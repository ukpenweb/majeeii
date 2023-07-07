const productName = document.querySelectorAll(".product-name")
const productNameText = document.querySelectorAll(".product-name p")
const menuIcon = document.querySelector(".menu-icon")
const navLink = document.querySelector(".nav-links")

// for (let i = 0; i < productName.length; i++) {
//     productName[i].addEventListener("mouse", () => {
//         productNameText[i].classList.toggle("show")
//     })
// }

menuIcon.addEventListener("click", () => {
    navLink.classList.toggle("show")
})

window.onscroll = () => {
    navLink.classList.remove("show")
}