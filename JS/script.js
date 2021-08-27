
let tempValue ;
let type ;
let final;
let tempValueKelvin;
let typeKelvin;
// adicionar o toFixed
function transform(tempValue, type){
    tempValue = document.querySelector('#tempValue');
    type = document.querySelector('#type');

    const celsius = type.value.toUpperCase().includes('C');
    const fahrenheit = type.value.toUpperCase().includes('F');
    const numberFahrenheit = parseInt(tempValue.value);
    let valor
    
    if (!celsius && !fahrenheit){
       valor = console.log("error")
    }else {
        if (celsius){
            valor = (((numberFahrenheit* 1.8) + 32 ).toFixed('2')) + " em fahrenheit"
        }else if (fahrenheit){
            valor = (((numberFahrenheit -32) * 1.8).toFixed('2')) + " em celsius "
        }
        
        final =  document.querySelector("#final").innerHTML=`A temperatura é: ${valor} `
          return final
    }
    
    return valor
}
function transformKelvin (tempValueKelvin, typeKelvin){
    tempValueKelvin = document.querySelector('#tempValueKelvin');
    typeKelvin = document.querySelector('#typeKelvin');

    const kelvin = typeKelvin.value.toUpperCase().includes('K');
    const celsius = typeKelvin.value.toUpperCase().includes('C');
    const numberKelvin = parseInt(tempValueKelvin.value);
    let valor 
    if (!celsius && !kelvin){
        valor = console.log("error")
     }else {
         if (celsius){
             valor = (((numberKelvin)  + 273 ).toFixed('2')) + " em kelvin"
         }else if (kelvin){
             valor = (((numberKelvin) - 273).toFixed('2')) + " em celsius "
         }
         
         final =  document.querySelector("#final").innerHTML=`A temperatura é: ${valor} `
           return final
     }
     
     return valor
}

function kelvinFahrenheit(tempValueFahrenheit, typeFahrenheit){
    tempValueFahrenheit = document.querySelector('#tempValueFahrenheit');
    typeFahrenheit = document.querySelector('#typeFahrenheit');

    const kelvin = typeFahrenheit.value.toUpperCase().includes('K');
    const fahrenheit = typeFahrenheit.value.toUpperCase().includes('F');
    let valor ;
    const numberFahrenheit = parseInt(tempValueFahrenheit.value);
    if (!fahrenheit && !kelvin){
        valor = console.log("error")
     }else {
         if (kelvin){
             valor = ((((numberFahrenheit) * 1.8 ) - 459.67).toFixed('2')) + " em kelvin"
         }else if (fahrenheit){
             valor = ((((numberFahrenheit) + 459.67) / 1.8 ).toFixed('2')) + " em fahrenheit "
         }
         
         final =  document.querySelector("#final").innerHTML=`A temperatura é: ${valor} `
           return final
     }
     
     return valor

}


























// function transform (tempValue, type, number, final,valor){
//     let total
//     tempValue = document.querySelector("#tempValue")
//     type = document.querySelector("#type"); 
//     number = tempValue.value
//     valor = type.value

//     if (valor = "C"){
//         total = (number *9/5 + 32)  + " em fahrenheit"
//     }else if (valor = "F"){
//         total = ((number -32) *5/2) + " em celsius "
//     }else{
//         console.log("erro na conversão ")
//     }
//   // final =  document.querySelector("#final").innerHTML=`A temperatura é: ${total} `
//     //return final
//      console.log( `A temperatura é: ${total} `)
//     // return console.log(tempValue.value);
// }
