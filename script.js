function inflationCalculator() {
    let infr=document.querySelector('#inflationRate');
    infr=parseFloat(inflationRate.value);
    

    let money=document.querySelector('#money');
    money=parseFloat(money.value);

    let years=document.querySelector('#years');
    years=parseFloat(years.value)

    let worth= money +(money *(infr/100));

    console.log(worth);
     
    for(let i=1; i<years; i++){
       worth += worth*(infr/ 100);
    }
    worth=worth.toFixed(2);
    let newElement= document.createElement('div');
    newElement.className='new-value';
    newElement.innerText=`In todays market ${money} is worth like ${worth}€ in ${years} years `

    document.querySelector('.container').appendChild(newElement);
}