const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close");
const openBtn = document.querySelector(".icon");

openBtn.addEventListener("click", () => {
openSideBar();
});

closeBtn.addEventListener("click", () => {
    closeSideBar();
});

let openSideBar = () => {
    sidebar.style.left = "0rem";
}
let closeSideBar = () => {
    sidebar.style.left = "-30rem";
}