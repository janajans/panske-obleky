'use strict';

// uživatel může vybírat barvu košile pomocí tlačítek s barvami = při kliknutí na příslušné tlačíko se obrázek košile přebarví na zvolenou barvu.
// Díky vlastnosti style na prvku svg můžete pomocí JavaScriptu měnit barvu košile.
// HTML košile:
/* <svg
        id="product-image"
        class="product__image t-shirt"
        style="fill: #a6a6a6" */

const shirtElm = document.querySelector('#product-image');
// const btnElm = document.querySelector('.button');

const whiteElm = document.querySelector('.white');
const blackElm = document.querySelector('.black');
const redElm = document.querySelector('.red');
const blueElm = document.querySelector('.blue');

whiteElm.addEventListener('click', () => (shirtElm.style = 'fill: #ffffff'));
blackElm.addEventListener('click', () => (shirtElm.style = 'fill: #000000'));
redElm.addEventListener('click', () => (shirtElm.style = 'fill: #7a0a0a'));
blueElm.addEventListener('click', () => (shirtElm.style = 'fill: #7bd3ee'));

// -----POKUS O KOMPONENTU-----
// Struktura:
//  <div class="color">
//             <div class="color-box">
//               <button class="circle black"></button>
//             </div>
//             <p class="color__name">černá</p>
//           </div>

// const Shirt = (props) => {
//   const element = document.createElement('div');
//   element.classList.add('color');
//   element.innerHTML = `
//         <div class="color-box">
//                 <button class="circle ${props.color}"></button>
//         </div>
//         <p class="color__name">${props.name}</p>
//   `;
//   ???Elm.addEventListener('click', () => (shirtElm.style = `${colorHexadecimal}`));
// return element
// };

// element.appendChild();
