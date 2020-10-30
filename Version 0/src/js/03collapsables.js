"use strict";

const arrowList = document.querySelectorAll(".js-button");

for (let i = 0; i < arrowList.length; i++) {
  arrowList[i].addEventListener("click", getCollapsable);
}

// ----- Rotates each arrow & hides/shows each collapsable section on click
function getCollapsable(event) {
  event.currentTarget.classList.toggle("changeArrow");
  const idArrow = event.currentTarget.id;

  const section = document.querySelector(".section-" + idArrow);
  section.classList.toggle("hideCollapsable");
}
