let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let tallyList = [0,0,0]; // Default starting list

function increment(){
    count = count + 1;
    countEl.textContent = count;
}

function deincrement(){
    count = count - 1;
    count < 0 ? count = 0 :  // Condition so de-incrementation cannot be negative
    countEl.textContent = count;
}

function save(){

    tallyList.pop();  // Remove first element from list (oldest)
    tallyList.unshift(count);
    let entry = `Previous Entries: ${tallyList[0]} - ${tallyList[1]} - ${tallyList[2]}`
    saveEl.textContent = entry; // Renders values to webpage

    count = 0; // Resets counter once value is saved
    countEl.textContent = count;
}

function reset(){
    count = 0;
    countEl.textContent = count;
}
