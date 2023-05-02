function openLightbox(event) {
    event.preventDefault();
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    var captionText = document.getElementById("lightbox-caption");
    var src = event.target.src;
    var alt = event.target.alt;

    lightbox.style.display = "block";
    lightboxImg.src = src.replace("_thumbnail", "");
    captionText.innerHTML = alt;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Add an event listener for the lightbox container
document.getElementById("lightbox").addEventListener("click", function(event) {
    if (event.target === this || event.target.className === "lightbox-content") {
        closeLightbox();
    }
});
