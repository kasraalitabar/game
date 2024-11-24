const boxes = document.querySelectorAll(".box-items");
const selectedBoxes = [];

function boxclick(evt) {
    if (selectedBoxes.length === 0) {
        evt.target.classList.remove("hidden")
        selectedBoxes.push(evt.target)
    } else {
        evt.target.classList.remove("hidden");
        selectedBoxes.push(evt.target);
        if (selectedBoxes[0].innerHTML === selectedBoxes[1].innerHTML) {
            selectedBoxes[0].classList.add("matched");
            selectedBoxes[1].classList.add("matched");
            selectedBoxes.length = 0;
        } else {
            freez()
            setTimeout(function () {
                selectedBoxes[0].classList.add("hidden");
                selectedBoxes[1].classList.add("hidden");
                selectedBoxes.length = 0;
            }, 1000)
        }
    }
}

function freez() {
    for (const box of boxes) {
        box.classList.add("freeze")
    }
}

function hideALL() {
    for (const box of boxes) {
        box.classList.add("hidden")
    }
}
setTimeout(hideALL, 1000)

for (const box of boxes) {
    box.addEventListener("click", boxclick)
}