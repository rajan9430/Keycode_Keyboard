
let text = document.querySelector(".text");
let container = document.querySelector(".container");
window.addEventListener("keypress",(e)=>{
    container.innerHTML = "";
    
    let key = document.createElement("span");
    key.classList.add("key");
    key.innerText = e.key;

    text.innerText = `You Pressed`
    text.append(key);

    let keyCode = document.createElement("span");
    keyCode.classList.add("key-code")
    keyCode.innerText = e.keyCode;

    container.append(text,keyCode);

})