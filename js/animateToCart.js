
const productImage = document.querySelector('.product-image');
const cartContainer = document.querySelector('.cart-container');

window.addEventListener('addToCartClicked', () => {
  const copiedImage = productImage.cloneNode(true);
  copiedImage.classList.add('copied-image');
  cartContainer.appendChild(copiedImage);

  // Apply the animation to the cloned image
  copiedImage.classList.add('move-to-cart');
});
