/*
* File: app.js
* Author: Zsiga Gergely
* Copyright: 2023, Zsiga Gergely
* Group: Szoft I-2-E
* Date: 2023-02-08
* Github: https://github.com/zsi-ga/
* Licenc: GNU GPL
*/
const asideElem = document.querySelector("#aside");
const bsideElem = document.querySelector("#bside");
const csideElem = document.querySelector("#cside");

const calcButton = document.querySelector("#calcButton");
const areaElem = document.querySelector("#area");

calcButton.addEventListener('click', () => {
 
   let aside = Number(asideElem.value);
   let bside = Number(bsideElem.value);
   let cside = Number(csideElem.value);
   

   let area = calcArea(aside, bside, cside);
   areaElem.value = area;
});

function calcArea(a, b, c) {
    let terfogat = ((Math.PI/3)*a*b*c).toFixed(3)

    return terfogat;
}
