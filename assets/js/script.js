document.addEventListener("DOMContentLoaded", () => {

    // Add a small "loaded" class for pages that want
    // subtle entrance effects.

    document.body.classList.add("loaded");

    // Smoothly reveal gallery images as they enter the screen.

    const photos = document.querySelectorAll(".her-photo");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        photos.forEach((photo) => {
            observer.observe(photo);
        });
    }
});