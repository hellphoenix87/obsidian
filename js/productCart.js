const numberElement = document.querySelector(".number-element");
const number = numberElement.querySelector(".number");
const plusButton = numberElement.querySelector(".plus");
const minusButton = numberElement.querySelector(".minus");
const cartNumber = document.querySelector(".cart-number");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const label2Option1 = document.querySelector(".label2-option1");
const label2Option2 = document.querySelector(".label2-option2");

let count = parseInt(number.textContent);

plusButton.addEventListener("click", () => {
  count++;
  number.textContent = count;
  label2Option1.textContent = `${count * 38}`;
  label2Option2.textContent = `${count * 30}`;
});

minusButton.addEventListener("click", () => {
  if (count > 1) {
    count--;
    number.textContent = count;
    label2Option1.textContent = `$${count * 38}`;
    label2Option2.textContent = `$${count * 30}`;
  }
});

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const quantity = parseInt(number.textContent);
    cartNumber.textContent = parseInt(cartNumber.textContent) + quantity;

    // Dispatch custom event when addToCart is clicked
    const customEvent = new Event("addToCartClicked");
    window.dispatchEvent(customEvent);
  });
});
