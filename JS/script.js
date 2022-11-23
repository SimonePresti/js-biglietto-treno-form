
    const inputDistanceElement = document.querySelector('input#distance');
    const inputAgeElement = document.querySelector('input#age');

    const button = document.querySelector('div.buttons a.btn');
    const output = document.getElementById('output');


    button.addEventListener('click', function () {

        let howManyKm = (0.2762 * inputDistanceElement.value);

        console.log(`Quanti km: ${inputDistanceElement.value}`);

        console.log(`Quanti anni ha: ${inputAgeElement.value}`);

        let discountMinors = ((howManyKm / 100) * 17.5);

        let discountMayors = ((howManyKm / 100) * 33.3);

        let ticketCost = howManyKm;

        console.log(`Il Prezzo del biglietto senza sconto è di: ${ticketCost.toFixed(2)}€`);


        if (parseInt(inputAgeElement.value) < 18) {
            ticketCost = (howManyKm - discountMinors);
            console.log(`Il Prezzo del biglietto scontato per i Minorenni è di: ${ticketCost.toFixed(2)}€`)

        } else if (parseInt(inputAgeElement.value) > 65) {
            ticketCost = (howManyKm - discountMayors);
            console.log(`Il Prezzo del biglietto scontato per gli Anziani è di: ${ticketCost.toFixed(2)}€`)
        }


        output.innerHTML = `Il costo del biglietto è di: ${ticketCost.toFixed(2)}&euro;`;
    })
