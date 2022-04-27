function darkMode(){
    var element = document.body
    element.classList.add("dark-mode")
    document.getElementById("night").style.display="none"
    document.getElementById("sun").style.display="block"
}
function lightMode(){
    var element = document.body
    element.classList.remove("dark-mode")
    document.getElementById("sun").style.display="none"
    document.getElementById("night").style.display="block"
}