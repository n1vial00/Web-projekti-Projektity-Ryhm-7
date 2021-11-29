function GetSelectedText(){
    let e = document.getElementById("dropdownmenu");
    let result = e.options[e.selectedIndex].text;
    
    document.getElementById("dropdownMenuButton1").innerHTML = result;
}