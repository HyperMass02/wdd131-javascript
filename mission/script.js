function myFunction() {
  // Toggle dark/light mode
  const body = document.body;
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
}

let isOriginal = true;
byui-logo_white.png

function toggleImage() {
  const img = document.querySelector("img");
  if (isOriginal) {
    img.src = "byui-logo_blue.webp"; // Replace with your alternate image path
  } else {
    img.src = "byui-logo_white.png"; // Original image
  }
  isOriginal = !isOriginal;
}
