<!DOCTYPE html>
<html lang="pt-BR">
<head>

    <link rel="stylesheet" href="css/estilo.css?<?php echo mt_rand(1, 9) ?>">
    <link rel="stylesheet" href="css/bootstrap.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula 03</title>
</head>
<body>
    <div class="box">    
        <h2 class="titulo">Conversor de temperatura</h2>
        <label class="opção">temperatura em</label>
        <select id="seleciona-temperatura1"> 
            <option value="0">Kelvin</option>
            <option value="1">Fahrenheit</option>
            <option value="2">Celsius</option>
        </select>
        <input class="local" type="text" name="temperatura" id="temperatura" maxlength="4">
        <label>para</label>
        <select id="seleciona-temperatura2"> 
            <option value="0">Kelvin</option>
            <option value="1">Fahrenheit</option>
            <option value="2">Celsius</option>
        </select>
        <input class="botão" type="submit" name="converter" value="converter" id="converter" onclick="converter()">
        <div id="resultado">Resultado</div>
        <script type="text/javascript" src="js/javascript.js?<?php echo mt_rand(1, 100) ?>"></script>
    </div>

</body>
</html>