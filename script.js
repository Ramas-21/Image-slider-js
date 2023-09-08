const carousel = document.querySelector(".carousel");

let isDragging = false;

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    carousel.scrollLeft = e.pageX;
}
carousel.addEventListener("mousemove", dragging);