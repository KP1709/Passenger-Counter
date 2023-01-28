let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment(){
    count = count + 1;
    countEl.textContent = count;
}

function deincrement(){
    count = count - 1;
    count < 0 ? count = 0 :
    countEl.textContent = count;
}

function save(){
    let previousEntry = count + " - ";
    saveEl.textContent = saveEl.textContent + previousEntry ; 
    count = 0; // Resets counter once saved value
    countEl.textContent = count;
}

function reset(){
    count = 0;
    countEl.textContent = count;
}
