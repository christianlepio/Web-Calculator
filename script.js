let bobo = document.querySelector('#lanz');
let text="";

let temp=0;

process = () => {
    let otpt 
    otpt = eval(bobo.value);
    bobo.value = otpt;
}

plusMin = () => {
}

del = () => {
    let a = bobo.value.length;
    
    for(let i=0 ; i<a-1 ; i++){
        text += bobo.value.charAt(i);
    }
    
    bobo.value=text;
    text="";
}

var element = document.body
var tblelement = document.getElementById("tbldark")
var ac = document.querySelector(".ac")
var del = document.querySelector('.del')
var perc = document.querySelector('.perc')

darkMode = () =>{
    element.classList.add("dark-mode")
    tblelement.classList.add("darktbl")
    ac.classList.add("acdark")
    del.classList.add("deldark")
    perc.classList.add("percdark")

    document.getElementById("night").style.display="none"
    document.getElementById("sun").style.display="block"
}
lightMode = () =>{
    element.classList.remove("dark-mode")
    tblelement.classList.remove("darktbl")
    ac.classList.remove("acdark")
    del.classList.remove("deldark")
    perc.classList.remove("percdark")

    document.getElementById("sun").style.display="none"
    document.getElementById("night").style.display="block"
}