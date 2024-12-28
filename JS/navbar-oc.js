const sidebar = document.getElementById("sidebar");
const main_navbar = document.getElementById("navbar");
function openMenuBar(){
    sidebar.setAttribute("class", "show");
    console.log(sidebar);
}

function closeMenuBar(){
    sidebar.setAttribute("class", "hide");
}

document.addEventListener("scroll", ()=>{
    if(window.scrollY > 1){
        main_navbar.classList.add("nav-shadow");
    }
    else{
        main_navbar.classList.remove("nav-shadow");
    }
})