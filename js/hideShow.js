const hideShowButton = document.querySelector(".ingredients-button");
const ingredientsText = document.querySelector(".ingredients-text");
const ingredientsDivider = document.querySelector(".ingredients-divider");
const hideShowButton2 = document.querySelector(".ingredients-button2");
const ingredientsTitle2 = document.querySelector(".ingredients-title2");
const ingredientsText2 = document.querySelector(".ingredients-text2");
const ingredientsDivider2 = document.querySelector(".ingredients-divider2");
const ingredientsButton2 = document.querySelector(".ingredients-button2");
ingredientsText.classList.add("hidden");



ingredientsDivider.style.top = "57px";


hideShowButton.addEventListener("click", () => {
  let computedStyleTitle2 = getComputedStyle(ingredientsTitle2);
  let topTitle2 = computedStyleTitle2.getPropertyValue("top");

  if (hideShowButton.textContent === "-") {
    ingredientsText.classList.add("hidden");
    ingredientsDivider.style.top = "57px";
    ingredientsTitle2.style.top = `${parseInt(topTitle2) - 87}px`;



    hideShowButton.textContent = "+";
  } else {
    ingredientsText.classList.remove("hidden");
    ingredientsDivider.style.top = "144px";
    ingredientsTitle2.style.top = `${parseInt(topTitle2) + 87}px`;



    hideShowButton.textContent = "-";
  }
});

ingredientsText2.classList.add("hidden");

hideShowButton2.addEventListener("click", () => {
  if (hideShowButton2.textContent === "-") {
    ingredientsText2.classList.add("hidden");
    ingredientsDivider2.style.top = `55px`;
    hideShowButton2.textContent = "+";
  } else {
    ingredientsText2.classList.remove("hidden");
    ingredientsDivider2.style.top = `144px`;
    hideShowButton2.textContent = "-";
  }
});
