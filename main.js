const boxes = document.querySelectorAll(".box-items");
const selectedboxes = []

function boxclick(evt){
    if(selectedboxes.length === 0){
        evt.target.classList.remove("hidden");
        selectedboxes.push(evt.target);
    }
}

function hideALL(){
    for (const box of boxes) {
        box.classList.add("hidden")
    }   
}
function setTimeouthandeler(){
    hideALL();
} 

setTimeout(hideALL,5000)

for(const box of boxes){
    box.addEventListener("click", boxclick)
}