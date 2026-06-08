// Fade animation

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.fade').forEach(el => observer.observe(el));


// Back to top button

const btn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 400 ? 'block' : 'none';
});

btn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};


// ======================
// CARPON SLIDER
// ======================

let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

function showSlide(index){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}


// ======================
// TUGAS TAMBAHAN SLIDER
// ======================

let tugasIndex = 0;

const tugasSlides = document.querySelectorAll(".tugas-slide");

function showTugas(index){

    tugasSlides.forEach(slide => {
        slide.classList.remove("active");
    });

    tugasSlides[index].classList.add("active");
}

function nextTugas(){

    tugasIndex++;

    if(tugasIndex >= tugasSlides.length){
        tugasIndex = 0;
    }

    showTugas(tugasIndex);
}

function prevTugas(){

    tugasIndex--;

    if(tugasIndex < 0){
        tugasIndex = tugasSlides.length - 1;
    }

    showTugas(tugasIndex);
}


// Initialize

showSlide(0);
showTugas(0);