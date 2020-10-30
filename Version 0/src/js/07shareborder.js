"use strict";

const menu = document.querySelector(".navShare");

function shareBorder() {
  menu.classList.toggle("hideLineShare");
}

menu.addEventListener("click", shareBorder);
