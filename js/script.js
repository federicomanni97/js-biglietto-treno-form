let km = ("Inserisci i km");
console.log(km)
let eta = ("Inserisci la tua età");
console.log(eta)
const price = 0.21;
const twentyDiscount = 20/100;
const fortyDiscount = 40/100;
let travelCost = ( km * price);
let fullPrice

const button =  document.querySelector('.btn-success');
console.log(button);

button.addEventListener('click', function(){
    let nome = document.getElementById('nome').value;
    let kilometri = document.getElementById('km').value;
    
    if(nome === '' || kilometri === ''){
        alert('Inserire i valori!')
    }
    
    else if (isNaN(kilometri)){
        alert('Inserire i valori!')
    }

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