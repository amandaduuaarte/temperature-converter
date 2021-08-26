
let tempValue ;
let type ;
let final;
// adicionar o toFixed
function transform(tempValue, type){
    tempValue = document.querySelector('#tempValue');
    type = document.querySelector('#type');

    const celsius = type.value.toUpperCase().includes('C');
    const fahrenheit = type.value.toUpperCase().includes('F');
    let valor 
    if (!celsius && !fahrenheit){
       valor = console.log("error")
    }else {
        if (celsius){
            valor = ((tempValue.value * 9/5) + 32 ) + " em fahrenheit"
        }else if (fahrenheit){
            valor = ((tempValue.value -32) * 5/9) + " em celsius "
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
