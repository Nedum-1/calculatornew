
var display = document.querySelector('#inputscrn')
var result = document.querySelector('#result')

rep =(x)=>{
    if(result.style.fontSize != "30px"){
        display.innerHTML += x
       
    }
    if(result.style.fontSize == "30px"){
        result.style.fontSize = "20px"
        display.style.fontSize = "30px"
        display.innerHTML += x
    }    
}
ac =()=>{
    display.innerHTML = ''
    result.innerHTML = 0
}
ans =()=>{
    var x = eval(display.innerHTML)
    result.innerHTML = x;
    result.style.fontSize = "30px"
    display.style.fontSize = "20px"
}
del =()=>{
    display.innerHTML = display.innerHTML.substr(0, display.innerHTML.length - 1)
}