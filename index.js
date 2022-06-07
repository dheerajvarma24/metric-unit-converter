let tempNum = 45
let numObj = document.getElementById("number-convert")

numObj.textContent = tempNum

function lengthConverter() {
    let meters = tempNum
    let feet = tempNum
    
    let convFeet = Number(( meters * 3.2 ).toFixed(3))
    let convMeters = Number(( feet / 3.2 ).toFixed(3))
    
    document.getElementById("length").textContent = meters + " meters" + " = " + convFeet + " feet | " + feet + " feet" + " = " + convMeters + " meters"
    
}
function volumnConverter() {
    let liters = tempNum
    let gallons = tempNum
    
    let convGallons = ( liters / 3.78 ).toFixed(3)
    let convLiters = Number(( gallons * 3.78 ).toFixed(3))
    
    document.getElementById("volumn").textContent = liters + " liters" + " = " + convGallons + " gallons | " + gallons + " gallons" + " = " + convLiters + " liters"
    
}

function massConverter() {
    let kgs = tempNum
    let pounds = tempNum
    
    let convPounds = Number(( kgs * 2.2 ).toFixed(3))
    let convKgs = Number(( pounds * 0.45 ).toFixed(3))
    
    document.getElementById("mass").textContent = kgs + " kgs" + " = " + convPounds + " pounds | " + pounds + " pounds" + " = " + convKgs + " kgs"
    
}


lengthConverter()
volumnConverter()
massConverter()


//let x = "7.5644"

//to round decimal - toFixed
//str to number - Number() or parseFloat()

//console.log(x.toFixed(3))
//console.log(parseFloat(x).toFixed(3))
//console.log(Number(Number(x).toFixed(3)))
