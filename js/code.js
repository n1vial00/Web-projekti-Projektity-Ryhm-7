function sivunVaihto(osoite) {
    document.querySelector(".sisSivu").src = "./sivut/" + osoite +".html";
    window.history.pushState(osoite, osoite, "/" + osoite);
}