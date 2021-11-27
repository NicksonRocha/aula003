
function converter() {
    let select1 = parseInt(document.getElementById('seleciona-temperatura1').value);
    let select2 = parseInt(document.getElementById('seleciona-temperatura2').value);
    let temperatura = parseInt(document.getElementById('temperatura').value);
    let formulaF = (parseInt(temperatura) * 1.8) + 32;
    let formulaK = parseInt(temperatura) + 273;
    let resultado = document.getElementById('resultado');
    // let nome = '';

    // if(select1 === 0 || select2 === 0){
    //     let nome = 'Kelvin';
    // } else if(select1 === 1 || select2 ===1){
    //     let nome = '°Farenheit';
    // } else if(select1 === 2 || select2 === 2){
    //     let nome = '°Celsius';
    // }

    if(select1 === 0 && select2 === 0 || select1 === 1 && select2 === 1 || select1 === 2 && select2 === 2 ){
        switch(select1 || select2){
            case 0:
                resultado.innerHTML = (`A temperatura em kelvin é ${temperatura}`)
            break;    
            case 1:
                resultado.innerHTML = (`A temperatura em °Fahrenheit é ${temperatura}`)
            break;    
            case 2:
                resultado.innerHTML = (`A temperatura em °Celsius é ${temperatura}`)
            break;    
        
        }




        // if()
            // resultado.innerHTML = (`A temperatura é ${temperatura}`)
        // resultado.innerHTML = (`${temperatura}°C em kelvin é ${formulaK}K`);
    }  else if(select1 === 0 && select2 ===1){
        let formulaF = temperatura - 459.67;
        resultado.innerHTML = (`${temperatura}K em fahrenheit é ${formulaF}°farenheit`)
    }  else if(select1 === 0 && select2 ===2){
        let formulaC = temperatura - 273.15;
        resultado.innerHTML = (`${temperatura}K em Celsius é ${formulaC}°Celsius`)
    }  else if(select1 === 1 && select2 ===0){
        let formulak = (temperatura - 32) * 5/9 + 273.15;
        resultado.innerHTML = (`${temperatura}°farenheit em Kelvin é ${formulak}K`)
    }  else if(select1 === 1 && select2 ===2){
        let formulaC = (temperatura - 32) * 5/9;
        resultado.innerHTML = (`${temperatura}°farenheit em Celsius é ${formulaC}°Celsius`)
    }  else if(select1 === 2 && select2 ===0){
        let formulak = temperatura + 273.15;
        resultado.innerHTML = (`${temperatura}°Celsius em Kelvin é ${formulak}K`)
    }  else if(select1 === 2 && select2 ===1){
        let formulaF = (temperatura * 9/5) + 32;
        resultado.innerHTML = (`${temperatura}°Celsius em Farenheit é ${formulaF}°farenheit`)
    } 
    //resultado.innerHTML ='Sua temperatura é <strong> ' + calculo + '°F</strong>';


    // switch(select1){
    //     case 0:
    //         resultado.innerHTML = (`${temperatura}°C em kelvin é ${formulaK}K`);
    //     break;
    //     case 1:
    //         resultado.innerHTML = (`${temperatura}°C em Farenheit é ${formulaF}°F`);
    //     break;
    //     default:
    //         resultado.innerHTML = ('Erro');
    //     break;
    // }


} 
