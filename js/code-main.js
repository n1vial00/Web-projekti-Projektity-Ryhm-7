window.onload = calculateHeightForElements;

// -------- FUKTIOT

/**
 * Laskee korkeuden headerille perustuen navbarin korkeuteen
 */
function calculateHeightForElements() {
    const NAV = document.querySelector('nav');
    const HEADER = document.querySelector("header");
    const HEADER_CONTENT = document.querySelector("header>.container-fluid");

    let navbarHeight = NAV.offsetHeight; // navbarin korkeus
    HEADER.style.height = "calc(100vh - " + navbarHeight + "px)";
    HEADER_CONTENT.style.height = "calc(100vh - " + navbarHeight + "px)";
}