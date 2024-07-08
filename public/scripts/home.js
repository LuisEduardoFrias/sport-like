//
import Fetch from './fetch.js';

function clickedProduct(id) {
  alert('producto: ' + id);
}

export function addClickCardProduct() {
  const productCard = document.querySelectorAll('.card_product');
  productCard.forEach(element => element.addEventListener('click', () => clickedProduct(element.id)));
}