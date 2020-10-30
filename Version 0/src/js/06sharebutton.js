"use strict";

const btnShare = document.querySelector(".collapsableShare__btn");
const twitterCollapsable = document.querySelector(
  ".collapsableShare__createLink"
);

function createCard() {
  showLink();
  sendRequest();
}

// --- Shows card link & Twitter link button
function showLink() {
  btnShare.classList.add("btnClick");
  twitterCollapsable.classList.remove("hideCollapsable");
}

btnShare.addEventListener("click", createCard);
