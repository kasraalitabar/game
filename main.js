const boxes = document.querySelectorAll(".box-items");

function boxclick(evt){
    
}

function hideALL(){
    for (const box of boxes) {
        box.classList.add("hidden")
    }   
}
function setTimeouthandeler(){

    hideALL();
} 

setTimeout(hideALL,1000)

for(const box of boxes){
    box.addEventListener("click", boxclick)
}