// Sherry Website
console.log("Sherry Website Loaded Successfully");

// Image Slider
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

if (slides.length > 0) {

    slides[currentSlide].classList.add("active");

    setInterval(() => {

        slides[currentSlide].classList.remove("active");

        currentSlide = (currentSlide + 1) % slides.length;

        slides[currentSlide].classList.add("active");

    }, 3000);

}
