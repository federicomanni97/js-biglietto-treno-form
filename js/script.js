let nameSurname = document.getElementById('nome-cognome');
let numberCode = document.getElementById('code');
let ticketPrice = document.getElementById('price');
let tripTicket = document.getElementById ('trip-ticket');

const button =  document.querySelector('.btn-success');
console.log(button);
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

button.addEventListener('click', function(){
    let nome = document.getElementById('nome').value;
    let kilometri = document.getElementById('km').value;
    let eta = document.getElementById('eta').value;
    const price = 0.21;
    let travelCost = kilometri * price;
    const twentyDiscount = 20/100;
    const fortyDiscount = 40/100;
    let fullPrice

    if(nome === '' || kilometri === ''){
        alert('Inserire i valori!')
    }
    
    else if (isNaN(kilometri)){
        alert('Inserire i valori!')
    }

    if (eta === 'minorenne'){
        fullPrice = travelCost - (travelCost * twentyDiscount);
        console.log(fullPrice); 
    } else if (eta === 'over-65'){
        fullPrice = travelCost - (travelCost * fortyDiscount);
        console.log(fullPrice);
    } else {
        fullPrice = travelCost;
        console.log(fullPrice);
    }

    nameSurname.innerHTML = nome;
    numberCode.innerHTML = getRndInteger(10000, 99999);
    ticketPrice.innerHTML = fullPrice;
    tripTicket.classList.remove('d-none');


    console.log(nome);
    console.log(kilometri);

});





// if (eta < 18){
//     fullPrice = travelCost - (travelCost * twentyDiscount); 
// } else if (eta >= 65){
//     fullPrice = travelCost - (travelCost * fortyDiscount);
// } else {
//     fullPrice = travelCost;
// }
// document.getElementById('total-price').innerHTML = ` ${fullPrice.toFixed(2)}
// `

// console.log(fullPrice.toFixed(2));