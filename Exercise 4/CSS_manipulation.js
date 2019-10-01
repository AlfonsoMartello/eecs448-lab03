function changeFunc(border_red, border_green, border_blue, border_width, background_red, background_green, background_blue) {
    var pChange = document.getElementById("para_to_change");
    pChange.style.borderColor = "rgb(" + Number(border_red.value) + "," + Number(border_green.value) + "," + Number(border_blue.value) + ")";
    pChange.style.borderWidth = Number(border_width.value) + "px";
    pChange.style.backgroundColor = "rgb(" + Number(background_red.value) + "," + Number(background_green.value) + "," + Number(background_blue.value) + ")";
}