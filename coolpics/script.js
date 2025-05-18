function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

 // Modal logic
window.onload = function () {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const images = document.querySelectorAll(".myImg");
    const span = document.getElementsByClassName("close")[0];

    images.forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    span.onclick = function () {
        modal.style.display = "none";
    };

    // Optional: Close modal on background click
    modal.onclick = function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    };
};

// Mobile menu toggle (already referenced in HTML)
function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("active");
}
