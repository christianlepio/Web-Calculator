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

darkMode = () =>{
    var element = document.body
    element.classList.add("dark-mode")
    document.getElementById("night").style.display="none"
    document.getElementById("sun").style.display="block"
}
lightMode = () =>{
    var element = document.body
    element.classList.remove("dark-mode")
    document.getElementById("sun").style.display="none"
    document.getElementById("night").style.display="block"
}