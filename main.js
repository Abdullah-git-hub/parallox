const parallax = document.getElementById("pp");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.9 + "px";
});