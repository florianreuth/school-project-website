/*
This project is licensed under the MIT License.
See the LICENSE file in the project root for details.

Copyright (c) 2024-2026 Florian Reuth <git@florianreuth.de>
*/

document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");

    const themeToggleButton = document.getElementById("theme-toggle");

    function updateThemeButtonText() {
        if (document.body.classList.contains("white-theme")) {
            themeToggleButton.innerHTML = "<kbd>Dunkler Modus</kbd>";
        } else {
            themeToggleButton.innerHTML = "<kbd>Heller Modus</kbd>";
        }
    }

    if (localStorage.getItem("white-theme") === "true") {
        document.body.classList.add("white-theme");
    }

    updateThemeButtonText();

    themeToggleButton.addEventListener("click", function () {
        document.body.classList.toggle("white-theme");
        localStorage.setItem("white-theme", document.body.classList.contains("white-theme"));
        updateThemeButtonText();
    });

    const spinToggleButton = document.getElementById("spin-toggle");
    spinToggleButton.addEventListener("click", function () {
        document.body.classList.toggle("spin");
    });
});