'use strict';

// uživatel může vybírat barvu košile pomocí tlačítek s barvami = při kliknutí na příslušné tlačíko se obrázek košile přebarví na zvolenou barvu.
// Díky vlastnosti style na prvku svg můžete pomocí JavaScriptu měnit barvu košile.
// HTML košile:
/* <svg
        id="product-image"
        class="product__image t-shirt"
        style="fill: #a6a6a6" */

const shirtElm = document.querySelector('#product-image');

const btnElm = document.querySelector('.button');
btnElm.addEventListener('click', (event) => {
  if (event.target === '<button class="circle white"></button>') {
    shirtElm.style = 'fill: #ffffff';
  } else if (event.target === '<button class="circle black"></button>') {
    shirtElm.style = 'fill: #000000';
  } else if (event.target === '<button class="circle red"></button>') {
    shirtElm.style = 'fill: #7a0adb';
  } else if (event.target === '<button class="circle blue"></button>') {
    shirtElm.style = 'fill: #7bd3ee';
  }
});
