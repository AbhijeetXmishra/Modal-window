"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
// console.log(btnsOpenModal)

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  // console.log(btnsOpenModal[i].textContent)

  // btnsOpenModal[i].addEventListener('click', function(){
  //     // console.log("Click btn")

  //     modal.classList.remove('hidden');
  //     overlay.classList.remove('hidden');
  // })

  btnsOpenModal[i].addEventListener("click", openModal);
}

// ------------------------WAY TO CLOSE POPUP WITH X BUTTON CLICK-------------------
btnCloseModel.addEventListener("click", closeModal);

// ------------------------WAY TO CLOSE POPUP WITH ANYWERE CLICK-------------------
overlay.addEventListener("click", closeModal);


// ------------------WAY TO CLOSE POPUP WITH Esc KEY-----------------
document.addEventListener("keydown", function (e) {
    // console.log(e.key)
    
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
