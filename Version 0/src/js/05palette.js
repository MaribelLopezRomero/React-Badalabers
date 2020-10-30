"use strict";

/// --- CREO QUE FALTA METER EN ALGÚN SITIO LA PALETA SELECCIONADA DENTRO DEL ARRAY FORM -- IGUAL QUE EN LA FUNCIÓN PAINTACARDS (L37 - 04FORM) ---> Y LO MISMO PARA LA FOTO
const palette1 = document.querySelector(".js-paletteRadio1");
const palette2 = document.querySelector(".js-paletteRadio2");
const palette3 = document.querySelector(".js-paletteRadio3");
const palette4 = document.querySelector(".js-paletteRadio4");

const palette1Value = parseInt(palette1.value);
const palette2Value = parseInt(palette2.value);
const palette3Value = parseInt(palette3.value);
const palette4Value = parseInt(palette4.value);

function selectPalette1() {
  form.palette = palette1Value;
  changeColors();
  setLocalStorage();
}
function selectPalette2() {
  form.palette = palette2Value;
  changeColors();
  setLocalStorage();
}
function selectPalette3() {
  form.palette = palette3Value;
  changeColors();
  setLocalStorage();
}

function selectPalette4() {
  form.palette = palette4Value;
  changeColors();
  setLocalStorage();
}

function changeColors() {
  const name = document.querySelector(".js-nameCard");
  const border1 = document.querySelector(".js-border1");
  const border2 = document.querySelector(".js-border2");
  const circle1 = document.querySelector(".js-circle1");
  const circle2 = document.querySelector(".js-circle2");
  const circle3 = document.querySelector(".js-circle3");
  const circle4 = document.querySelector(".js-circle4");
  const icon1 = document.querySelector(".js-icon1");
  const icon2 = document.querySelector(".js-icon2");
  const icon3 = document.querySelector(".js-icon3");
  const icon4 = document.querySelector(".js-icon4");

  //Palette 1

  if (palette1.checked === true) {
    //Name
    name.classList.add("palette1_name"); //palette 1
    name.classList.remove("palette2_name"); //palette 2
    name.classList.remove("palette3_name"); //palette 3
    name.classList.remove("palette4_name"); //palette 4

    //Border
    border1.classList.add("palette1_border1"); //palette 1
    border1.classList.remove("palette2_border1"); //palette 2
    border1.classList.remove("palette3_border1"); //palette 3
    border1.classList.remove("palette4_border1"); //palette 4
    border2.classList.add("palette1_border2"); //palette 1
    border2.classList.remove("palette2_border2"); //palette 2
    border2.classList.remove("palette3_border2"); //palette 3
    border2.classList.remove("palette4_border2"); //palette 4

    //Circles
    circle1.classList.add("palette1_circle1"); //palette 1
    circle1.classList.remove("palette2_circle1"); //palette 2
    circle1.classList.remove("palette3_circle1"); //palette 3
    circle1.classList.remove("palette4_circle1"); //palette 4
    circle2.classList.add("palette1_circle2"); //palette 1
    circle2.classList.remove("palette2_circle2"); //palette 2
    circle2.classList.remove("palette3_circle2"); //palette 3
    circle2.classList.remove("palette4_circle2"); //palette 4
    circle3.classList.add("palette1_circle3"); //palette 1
    circle3.classList.remove("palette2_circle3"); //palette 2
    circle3.classList.remove("palette3_circle3"); //palette 3
    circle3.classList.remove("palette4_circle3"); //palette 4
    circle4.classList.add("palette1_circle4"); //palette 1
    circle4.classList.remove("palette2_circle4"); //palette 2
    circle4.classList.remove("palette3_circle4"); //palette 3
    circle4.classList.remove("palette4_circle4"); //palette 4

    //Icons
    icon1.classList.add("palette1_icon1"); //palette 1
    icon1.classList.remove("palette2_icon1"); //palette 2
    icon1.classList.remove("palette3_icon1"); //palette 3
    icon1.classList.remove("palette4_icon1"); //palette 4
    icon2.classList.add("palette1_icon2"); //palette 1
    icon2.classList.remove("palette2_icon2"); //palette 2
    icon2.classList.remove("palette3_icon2"); //palette 3
    icon2.classList.remove("palette4_icon2"); //palette 4
    icon3.classList.add("palette1_icon3"); //palette 1
    icon3.classList.remove("palette2_icon3"); //palette 2
    icon3.classList.remove("palette3_icon3"); //palette 3
    icon3.classList.remove("palette4_icon3"); //palette 4
    icon4.classList.add("palette1_icon4"); //palette 1
    icon4.classList.remove("palette2_icon4"); //palette 2
    icon4.classList.remove("palette3_icon4"); //palette 3
    icon4.classList.remove("palette4_icon4"); //palette 4
  }

  //Palette 2

  if (palette2.checked === true) {
    //Name
    name.classList.remove("palette1_name"); //palette 1
    name.classList.add("palette2_name"); //palette 2
    name.classList.remove("palette3_name"); //palette 3
    name.classList.remove("palette4_name"); //palette 4

    //Border
    border1.classList.remove("palette1_border1"); //palette 1
    border1.classList.add("palette2_border1"); //palette 2
    border1.classList.remove("palette3_border1"); //palette 3
    border1.classList.remove("palette4_border1"); //palette 4
    border2.classList.remove("palette1_border2"); //palette 1
    border2.classList.add("palette2_border2"); //palette 2
    border2.classList.remove("palette3_border2"); //palette 3
    border2.classList.remove("palette4_border2"); //palette 4

    //Circles
    circle1.classList.remove("palette1_circle1"); //palette 1
    circle1.classList.add("palette2_circle1"); //palette 2
    circle1.classList.remove("palette3_circle1"); //palette 3
    circle1.classList.remove("palette4_circle1"); //palette 4
    circle2.classList.remove("palette1_circle2"); //palette 1
    circle2.classList.add("palette2_circle2"); //palette 2
    circle2.classList.remove("palette3_circle2"); //palette 3
    circle2.classList.remove("palette4_circle2"); //palette 4
    circle3.classList.remove("palette1_circle3"); //palette 1
    circle3.classList.add("palette2_circle3"); //palette 2
    circle3.classList.remove("palette3_circle3"); //palette 3
    circle3.classList.remove("palette4_circle3"); //palette 4
    circle4.classList.remove("palette1_circle4"); //palette 1
    circle4.classList.add("palette2_circle4"); //palette 2
    circle4.classList.remove("palette3_circle4"); //palette 3
    circle4.classList.remove("palette4_circle4"); //palette 4

    //Icons
    icon1.classList.remove("palette1_icon1"); //palette 1
    icon1.classList.add("palette2_icon1"); //palette 2
    icon1.classList.remove("palette3_icon1"); //palette 3
    icon1.classList.remove("palette4_icon1"); //palette 4
    icon2.classList.remove("palette1_icon2"); //palette 1
    icon2.classList.add("palette2_icon2"); //palette 2
    icon2.classList.remove("palette3_icon2"); //palette 3
    icon2.classList.remove("palette4_icon2"); //palette 4
    icon3.classList.remove("palette1_icon3"); //palette 1
    icon3.classList.add("palette2_icon3"); //palette 2
    icon3.classList.remove("palette3_icon3"); //palette 3
    icon3.classList.remove("palette4_icon3"); //palette 4
    icon4.classList.remove("palette1_icon4"); //palette 1
    icon4.classList.add("palette2_icon4"); //palette 2
    icon4.classList.remove("palette3_icon4"); //palette 3
    icon4.classList.remove("palette4_icon4"); //palette 4
  }

  //Palette 3

  if (palette3.checked === true) {
    //Name
    name.classList.remove("palette1_name"); //palette 1
    name.classList.remove("palette2_name"); //palette 2
    name.classList.add("palette3_name"); //palette 3
    name.classList.remove("palette4_name"); //palette 4

    //Border
    border1.classList.remove("palette1_border1"); //palette 1
    border1.classList.remove("palette2_border1"); //palette 2
    border1.classList.add("palette3_border1"); //palette 3
    border1.classList.remove("palette4_border1"); //palette 4
    border2.classList.remove("palette1_border2"); //palette 1
    border2.classList.remove("palette2_border2"); //palette 2
    border2.classList.add("palette3_border2"); //palette 3
    border2.classList.remove("palette4_border2"); //palette 4

    //Circles
    circle1.classList.remove("palette1_circle1"); //palette 1
    circle1.classList.remove("palette2_circle1"); //palette 2
    circle1.classList.add("palette3_circle1"); //palette 3
    circle1.classList.remove("palette4_circle1"); //palette 4
    circle2.classList.remove("palette1_circle2"); //palette 1
    circle2.classList.remove("palette2_circle2"); //palette 2
    circle2.classList.add("palette3_circle2"); //palette 3
    circle2.classList.remove("palette4_circle2"); //palette 4
    circle3.classList.remove("palette1_circle3"); //palette 1
    circle3.classList.remove("palette2_circle3"); //palette 2
    circle3.classList.add("palette3_circle3"); //palette 3
    circle3.classList.remove("palette4_circle3"); //palette 4
    circle4.classList.remove("palette1_circle4"); //palette 1
    circle4.classList.remove("palette2_circle4"); //palette 2
    circle4.classList.add("palette3_circle4"); //palette 3
    circle4.classList.remove("palette4_circle4"); //palette 4

    //Icons
    icon1.classList.remove("palette1_icon1"); //palette 1
    icon1.classList.remove("palette2_icon1"); //palette 2
    icon1.classList.add("palette3_icon1"); //palette 3
    icon1.classList.remove("palette4_icon1"); //palette 4
    icon2.classList.remove("palette1_icon2"); //palette 1
    icon2.classList.remove("palette2_icon2"); //palette 2
    icon2.classList.add("palette3_icon2"); //palette 3
    icon2.classList.remove("palette4_icon2"); //palette 4
    icon3.classList.remove("palette1_icon3"); //palette 1
    icon3.classList.remove("palette2_icon3"); //palette 2
    icon3.classList.add("palette3_icon3"); //palette 3
    icon3.classList.remove("palette4_icon3"); //palette 4
    icon4.classList.remove("palette1_icon4"); //palette 1
    icon4.classList.remove("palette2_icon4"); //palette 2
    icon4.classList.add("palette3_icon4"); //palette 3
    icon4.classList.remove("palette4_icon4"); //palette 4
  }

  //Palette 4

  if (palette4.checked === true) {
    //Name
    name.classList.remove("palette1_name"); //palette 1
    name.classList.remove("palette2_name"); //palette 2
    name.classList.remove("palette3_name"); //palette 3
    name.classList.add("palette4_name"); //palette 4

    //Border
    border1.classList.remove("palette1_border1"); //palette 1
    border1.classList.remove("palette2_border1"); //palette 2
    border1.classList.remove("palette3_border1"); //palette 3
    border1.classList.add("palette4_border1"); //palette 4
    border2.classList.remove("palette1_border2"); //palette 1
    border2.classList.remove("palette2_border2"); //palette 2
    border2.classList.remove("palette3_border2"); //palette 3
    border2.classList.add("palette4_border2"); //palette 4

    //Circles
    circle1.classList.remove("palette1_circle1"); //palette 1
    circle1.classList.remove("palette2_circle1"); //palette 2
    circle1.classList.remove("palette3_circle1"); //palette 3
    circle1.classList.add("palette4_circle1"); //palette 4
    circle2.classList.remove("palette1_circle2"); //palette 1
    circle2.classList.remove("palette2_circle2"); //palette 2
    circle2.classList.remove("palette3_circle2"); //palette 3
    circle2.classList.add("palette4_circle2"); //palette 4
    circle3.classList.remove("palette1_circle3"); //palette 1
    circle3.classList.remove("palette2_circle3"); //palette 2
    circle3.classList.remove("palette3_circle3"); //palette 3
    circle3.classList.add("palette4_circle3"); //palette 4
    circle4.classList.remove("palette1_circle4"); //palette 1
    circle4.classList.remove("palette2_circle4"); //palette 2
    circle4.classList.remove("palette3_circle4"); //palette 3
    circle4.classList.add("palette4_circle4"); //palette 4

    //Icons
    icon1.classList.remove("palette1_icon1"); //palette 1
    icon1.classList.remove("palette2_icon1"); //palette 2
    icon1.classList.remove("palette3_icon1"); //palette 3
    icon1.classList.add("palette4_icon1"); //palette 4
    icon2.classList.remove("palette1_icon2"); //palette 1
    icon2.classList.remove("palette2_icon2"); //palette 2
    icon2.classList.remove("palette3_icon2"); //palette 3
    icon2.classList.add("palette4_icon2"); //palette 4
    icon3.classList.remove("palette1_icon3"); //palette 1
    icon3.classList.remove("palette2_icon3"); //palette 2
    icon3.classList.remove("palette3_icon3"); //palette 3
    icon3.classList.add("palette4_icon3"); //palette 4
    icon4.classList.remove("palette1_icon4"); //palette 1
    icon4.classList.remove("palette2_icon4"); //palette 2
    icon4.classList.remove("palette3_icon4"); //palette 3
    icon4.classList.add("palette4_icon4"); //palette 4
  }
  paintCard();
}

palette1.addEventListener("click", selectPalette1);
palette2.addEventListener("click", selectPalette2);
palette3.addEventListener("click", selectPalette3);
palette4.addEventListener("click", selectPalette4);

// ---- Activated by RESET button - Changes selected palette to default palette 1
function erasePalettes() {
  if (palette1.checked != true) {
    palette1.checked = true;
  } else if ((palette2.checked = true)) {
    palette2.checked = false;
  } else if ((palette3.checked = true)) {
    palette3.checked = false;
  } else if ((palette4.checked = true)) {
    palette4.checked = false;
  }
  changeColors();
}
