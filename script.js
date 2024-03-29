let bobo = document.querySelector('#lanz');
let text="";

const clickSound = new Audio('sound/click1.wav')
const equalSound = new Audio('sound/equals.wav')
const morning = new Audio('sound/morning.wav')
const night = new Audio('sound/night.wav')

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
var dele = document.querySelector('.dele')
var perc = document.querySelector('.perc')
var divi = document.querySelector('.divi')
var multi = document.querySelector('.multi')
var mini = document.querySelector('.mini')
var plus = document.querySelector('.plus')
var equals = document.querySelector('.equal')

darkMode = () =>{
    night.play()
    element.classList.add("dark-mode")
    tblelement.classList.add("darktbl")
    ac.classList.add("acdark")
    dele.classList.add("deldark")
    perc.classList.add("percdark")
    divi.classList.add("dividark")
    multi.classList.add("multidark")
    mini.classList.add("minidark")
    plus.classList.add("plusdark")
    equals.classList.add("equalsdark")

    document.getElementById("night").style.display="none"
    document.getElementById("sun").style.display="block"
}
lightMode = () =>{
    morning.play()
    element.classList.remove("dark-mode")
    tblelement.classList.remove("darktbl")
    ac.classList.remove("acdark")
    dele.classList.remove("deldark")
    perc.classList.remove("percdark")
    divi.classList.remove("dividark")
    multi.classList.remove("multidark")
    mini.classList.remove("minidark")
    plus.classList.remove("plusdark")
    equals.classList.remove("equalsdark")

    document.getElementById("sun").style.display="none"
    document.getElementById("night").style.display="block"
}
sound = () =>{
    clickSound.play()
}
soundEqual = () =>{
    equalSound.play()
}