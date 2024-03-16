if (document.querySelector('[data-element-id="side-bar-background"]')) {
    document.querySelector('[data-element-id="side-bar-background"]').style.backgroundColor = "black";
    document.querySelectorAll('[data-element-id="side-bar-background"] *').forEach(el => {
        el.style.color = "white";
    });
}

document.querySelectorAll('[data-element-id="user-message"]').forEach(function(element) {
    element.style.backgroundColor = "#757575"; 
    element.classList.remove('bg-blue-500'); 
});
