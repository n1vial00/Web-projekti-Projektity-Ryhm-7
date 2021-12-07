let images = [document.getElementById("Oulu"), document.getElementById("Turku"), document.getElementById("Tampere"), document.getElementById("Helsinki"), document.getElementById("Joensuu")]

function checkAnwser(image, button) {
    if(window.getComputedStyle(image).visibility === "visible") {
        button.classList.add("correct")
    }
    else {
        button.classList.add("incorrect")
    }
}

document.getElementById("OuluButton").onclick = function() { 
    checkAnwser(document.getElementById("Oulu"), document.getElementById("OuluButton"))
}