window.onload = calculateHeightForElements;

// -------- FUKTIOT

/**
 * Laskee korkeuden headerille perustuen navbarin korkeuteen
 */
function calculateHeightForElements() {
    const NAV = document.querySelector('nav');
    const HEADER = document.querySelector("embed");
    const HEADER_CONTENT = document.querySelector("header>.container-fluid");
    const FOOTER = document.querySelector('footer');

    let navbarHeight = NAV.offsetHeight; // navbarin korkeus
    let footerHeight = FOOTER.offsetHeight;
    HEADER.style.height = "calc(100vh - " + navbarHeight + "px - " + footerHeight + "px - 6px)";
    HEADER_CONTENT.style.height = "calc(100vh - " + navbarHeight + "px)";
}

