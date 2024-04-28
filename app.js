let CelciusInput =document.querySelector('#Celcius>input')
let FahrenheitInput =document.querySelector('#Fahrenheit>input')
let KelvinInput =document.querySelector('#Kelvin>input')

let btn = document.querySelector('.button button')

function roundnumber(number){
    return Math.round(number*100)/100
}

Celciusinput.addEventListener('input', function(){
    let CTemp = parseFloat(Celciusinput.value)
    let FTemp = (CTemp*(9/5)) + 32
    let KTemp = CTemp + 273.15
    FahrenheitInput.value = roundNumber(FTemp)
    KelvinInput.value = roundNumber(KTemp)

})



Fahrenheitinput.addEventListener('input', function(){
    let FTemp = parseFloat(Fahrenheitinput.value)
    let CTemp = (FTemp - 32) * (5/9)
    let KTemp = (FTemp - 32) * (5/9) + 273.15
    FahrenheitInput.value = roundNumber(CTemp)
    KelvinInput.value = roundNumber(KTemp)

})  


Kelvininput.addEventListener('input', function(){
    let KTemp = parseFloat(Kelvininput.value)
    let CTemp = KTemp - 273.15
    let FTemp = (KTemp - 273.15) * (9/5) + 32
    CelciusInput.value = roundNumber(CTemp)
    FahrenheitInput.value = roundNumber(FTemp)

})  
