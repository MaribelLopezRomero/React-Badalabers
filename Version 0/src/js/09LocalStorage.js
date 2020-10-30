"use strict";

function setLocalStorage() {
  localStorage.setItem("formData", JSON.stringify(form));
}

function getLocalStorage() {
  const localFormData = JSON.parse(localStorage.getItem("formData"));
  if (localFormData !== null) {
    form = localFormData;
  }
  paintCard();
  listenSaveField();
}

// ---- Start app
getLocalStorage();
