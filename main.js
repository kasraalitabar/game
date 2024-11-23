const boxes = document.querySelectorAll(".box-items");
const selectedBoxes = []

function boxclick(evt) {
    if (selectedBoxes.length === 0) {
        evt.target.classList.remove("hidden")
        selectedBoxes.push(evt.target)
    } else {
        evt.target.classList.remove("hidden");
        selectedBoxes.push(evt.target);
        if (selectedBoxes[0].innerHtml === selectedBoxes[1].innerHtml) {
            selectedBoxes[0].classList.add("matched")
            selectedBoxes[1].classList.add("matched")
            selectedBoxes.length = 0;
        } else {
            freez()
            setTimeout(function () {
                selectedBoxes[0].classList.add("hidden");
                selectedBoxes[1].classList.add("hidden");
                selectedBoxes.length = 0;
            },1000)
        }
    }
}

function freez(){
    for (const box of boxes) {
        box.classList.add("freeze")
        
    }
}

function hideALL() {
    for (const box of boxes) {
        box.classList.add("hidden")
    }
}
function setTimeouthandeler() {
    hideALL();
}

setTimeout(hideALL, 5000)

for (const box of boxes) {
    box.addEventListener("click", boxclick)
}