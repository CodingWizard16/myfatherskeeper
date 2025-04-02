document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxText = document.getElementById("lightbox-text");

    const imageTexts = [
        "Blood lines carry me home, praying to my elders, all glory to God though, made it outta Texas, why I wanna go back though.",
        "Sandstorms make exposure changes while your father’s left hand adjusts the focus. Film grain and grains of sand. Printed photos in dusty boxes.",
        "Breaking fast through plains, watching out for ditches. Learning to drive at 12, first a tractor, then a dirt bike. Finally a car.",
        "Family portraits. Lined up on a leather couch, not quite sure when the picture will be taken. Irish goodbyes and the smell of fry bread in the kitchen.",
        "Halfway through the Swiss Alps in a sweater stitched in Ireland. Ginger beard, cloudless skies. Visiting pagan monuments and paying our respects.",
        "One time you told me something cool about airplanes. I can’t remember what it was, but at least I remember you every time I fly. Astronaut… cowboy.",
        "Somewhere I hope you're reading my latest 2 line poem. I thank G-d all the time that I was given parents like these. What a stroke of luck.", // Moved from index 7 to index 6
        "Linebacker till sixth grade hit. Then wondering when the promised growth spurt would arrive. Not faster, but smarter. Stronger when it counts." // Moved from index 6 to index 7
    ];
    window.addEventListener("wheel", function (event) {
        if (event.deltaY !== 0) {
            event.preventDefault();
            gallery.scrollLeft += event.deltaY * 0.5;
        }
    });
    document.querySelectorAll(".gallery img").forEach((img, index) => {
        img.addEventListener("click", function () {
            lightboxImg.src = img.src;
            lightboxText.textContent = imageTexts[index]; 
            lightbox.style.display = "flex";
        });
    });
    lightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
    });
});
