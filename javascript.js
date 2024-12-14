// Scroll Animations for Smooth Transitions
document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");
    let options = {
        rootMargin: "0px 0px -150px 0px",
        threshold: 0.7
    };

    let observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
