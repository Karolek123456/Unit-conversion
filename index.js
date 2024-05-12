

let inputEl = document.getElementById('Converting-Number').value
const par1 = document.getElementById('paragraph1')
const par2 = document.getElementById('paragraph2')
const par3 = document.getElementById('paragraph3')
const LaunchBtn = document.getElementById('convert-Btn')


// unit conversion data
const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204


//Launcher
LaunchBtn.addEventListener('click', function () {
    let baseValue = inputEl.value
    
    // length convert sentence
   par1.textContent = `${baseValue} meters = ${baseValue * meterToFeet} feet | ${baseValue} feet = ${baseValue / meterToFeet} meters` 
   
   // volume convert sentence
   par2.textContent = `${baseValue} liters = ${baseValue * literToGallon} gallons | ${baseValue} gallons = ${baseValue / literToGallon} liters` 
   
   //mass convert sentence
   par3.textContent = `${baseValue} kilo = ${baseValue * kiloToPound} pounds | ${baseValue} kilo = ${baseValue / kiloToPound} pounds`
})

