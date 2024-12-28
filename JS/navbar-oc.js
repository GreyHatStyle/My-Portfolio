const sidebar = document.getElementById("sidebar")

function openMenuBar(){
    sidebar.setAttribute("class", "show");
    console.log(sidebar);
}

function closeMenuBar(){
    sidebar.setAttribute("class", "hide");
}