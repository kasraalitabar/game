const boxes = document.querySelectorAll(".box-items");

function boxclick(evt){
    
}

function hiddenall(){
    for (const box of boxes) {
        box.classList.add("hidden")
    }
}
for(const box of boxes){
    box.addEventListener("click", boxclick)
}