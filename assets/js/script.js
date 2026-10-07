/*
=========================================================
SECRET EASTER EGG
Global JavaScript
=========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /*
    -----------------------------------------------------
    Optional typewriter effect

    Any element with:

    class="typewriter"

    and a data-text attribute will receive
    a subtle typewriter animation.
    -----------------------------------------------------
    */

    const typewriters = document.querySelectorAll(".typewriter");

    typewriters.forEach((element) => {

        const text = element.dataset.text || element.textContent;

        element.textContent = "";

        let index = 0;

        const speed = 45;

        function type() {

            if (index < text.length) {

                element.textContent += text.charAt(index);

                index++;

                setTimeout(type, speed);

            }

        }

        setTimeout(type, 500);
    });


    /*
    -----------------------------------------------------
    Secret link interaction
    -----------------------------------------------------
    */

    const secretLinks = document.querySelectorAll(".secret-link");

    secretLinks.forEach((link) => {

        link.addEventListener("click", () => {

            document.body.classList.add("leaving");

        });

    });


    /*
    -----------------------------------------------------
    Optional audio handling

    If an audio element has no valid source,
    hide its container instead of displaying
    a broken audio player.
    -----------------------------------------------------
    */

    const audioContainers =
        document.querySelectorAll(".audio-container");

    audioContainers.forEach((container) => {

        const audio = container.querySelector("audio");

        if (!audio) {
            container.style.display = "none";
            return;
        }

        const source = audio.querySelector("source");

        if (!source || !source.getAttribute("src")) {
            container.style.display = "none";
        }

    });


    /*
    -----------------------------------------------------
    Optional photo handling

    If an image uses:

    data-optional="true"

    and fails to load, hide its container.
    -----------------------------------------------------
    */

    const optionalImages =
        document.querySelectorAll(
            "img[data-optional='true']"
        );

    optionalImages.forEach((image) => {

        image.addEventListener("error", () => {

            const frame =
                image.closest(".photo-frame");

            if (frame) {
                frame.style.display = "none";
            }

        });

    });


    /*
    -----------------------------------------------------
    Current year
    -----------------------------------------------------
    */

    const yearElements =
        document.querySelectorAll("[data-year]");

    yearElements.forEach((element) => {

        element.textContent =
            new Date().getFullYear();

    });

});