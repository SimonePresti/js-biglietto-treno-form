
const inputDistanceElement = document.querySelector ('input#distance');
const inputAgeElement = document.querySelector ('input#age');

const button = document.querySelector ('div.buttons a.btn');
const output = document.querySelector ('output');

const km = inputDistanceElement.value;

console.log (`Quanti km: ${km}`)

const age = inputAgeElement.value;

console.log (`Quanti anni ha il cliente: ${age}`)

let howManyKm = (0.2762 * km);

console.log (`Il prezzo base del biglietto al km è di: ${howManyKm.toFixed(2)}€ `);

let discountMinors = ((howManyKm / 100) * 17.5);

let discountMayors = ((howManyKm / 100) * 33.3);

let ticketCost = howManyKm


 button.addEventListener ('click', function (){

    output.innerHTML = `Il costo del biglietto è di: ${ticketCost}&euro;`;

if (parseInt (km.value) < 18)  {
    ticketCost = (howManyKm - discountMinors);

} else if (parseInt (age.value) > 65)  {
    ticketCost = (howManyKm - discountMayors);
}

 })
