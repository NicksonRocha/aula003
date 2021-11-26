
function converter() {
    let select = parseInt(document.getElementById('seleciona-temperatura').value);
    let temperatura = document.getElementById('temperatura').value;
    let formulaF = (parseInt(temperatura) * 1.8) + 32;
    let formulaK = parseInt(temperatura) + 273;
    let resultado = document.getElementById('resultado');
//     if(select == 0){
//         resultado.innerHTML = (`${temperatura}°C em kelvin é ${formulaK}K`);
//     }  else if(select == 1){
//         resultado.innerHTML = (`${temperatura}°C em Farenheit é ${formulaF}°F`);
//     }
//     //resultado.innerHTML ='Sua temperatura é <strong> ' + calculo + '°F</strong>';


    switch(select){
        case 0:
            resultado.innerHTML = (`${temperatura}°C em kelvin é ${formulaK}K`);
        break;
        case 1:
            resultado.innerHTML = (`${temperatura}°C em Farenheit é ${formulaF}°F`);
        break;
        default:
            resultado.innerHTML = ('Erro');
        break;
    }


} 
