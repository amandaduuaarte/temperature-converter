let tempValue = 0;
let type;
let number;
let final
let valor

function transform (tempValue, type, number, final,valor){
    let total
    tempValue = document.querySelector("#tempValue")
    type = document.getElementById("type"); 
    number = tempValue.value
    valor = type.value

    if (valor = "celsius"){
        total = (number *9/5 + 32)  + " em celsius"
    }else if (valor = "fahrenheit"){
        total = ((number -32) *5/2) + " em fahrenheit "
    }else{
        console.log("erro na conversão ")
    }
   final =  document.querySelector("#final").innerHTML=`A temperatura é: ${total} `
    return final
    // console.log( `A temperatura é: ${total} `)
    // return console.log(tempValue.value);
}
