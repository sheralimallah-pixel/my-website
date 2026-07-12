console.log("Sherry Website Loaded Successfully");
let slides = document.querySelectorAll(".slide");
let current = 0;

setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
}, 3000);
.slider{
    width:100%;
    max-width:900px;
    height:400px;
    margin:30px auto;
    position:relative;
    overflow:hidden;
    border-radius:10px;
}

.slide{
    width:100%;
    height:100%;
    object-fit:cover;
    position:absolute;
    top:0;
    left:0;
    display:none;
}

.slide.active{
    display:block;
}
console.log("Sherry Website Loaded Successfully");

const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {
    let current = 0;

    setInterval(() => {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
    }, 3000);
                }
