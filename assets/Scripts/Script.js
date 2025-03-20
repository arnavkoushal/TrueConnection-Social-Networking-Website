document.addEventListener("DOMContentLoaded", () => {
    console.log("Entrance page loaded!");

    // Add any entrance animations or interactions here
    const enterBtn = document.querySelector(".enter-btn");

    // Add a hover effect to the button
    enterBtn.addEventListener("mouseenter", () => {
        enterBtn.style.transform = "scale(1.1)";
    });

    enterBtn.addEventListener("mouseleave", () => {
        enterBtn.style.transform = "scale(1)";
    });
});