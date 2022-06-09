
    /*
     Função inputs irá receber os valores do
     peso e altura do usuário.
    */

    function inputs(){
        const peso = document.querySelector('#inputPeso').value
        const altura = document.querySelector('#inputAltura').value
        
        if(peso < 0 || altura < 0){
            error = document.querySelector('#erro').innerHTML = ('# Insira apenas valores positivos.')
        }
        else if(altura == 0){
            error = document.querySelector('#erro').innerHTML = ('# Insira uma altura maior que 0')
        }  
        else{
            error = document.querySelector('#erro').innerHTML = ('')
            calcularImc(peso,altura)
        }
    }

    /*
     A função calcularImc irá efetuar o cálculo do
     imc do usuário de acordo com os valores obtidos.
    */ 

    function calcularImc(peso,altura){
        
        const imc = Number(peso) / (Number(altura) ** 2)

        let infoImc = imc
        let mensagemImc = ''

        if(imc < 20){
            mensagemImc = 'Abaixo do peso'
            infoImc = document.querySelector('#imc').innerHTML = (`IMC: ${infoImc}`)
            mensagemImc = document.querySelector('#mensagem').innerHTML = (`Situação: ${mensagemImc}`)
        }
        else if(imc <= 25){
            mensagemImc = 'Peso normal'
            infoImc = document.querySelector('#imc').innerHTML = (`IMC: ${infoImc}`)
            mensagemImc = document.querySelector('#mensagem').innerHTML = (`Situação: ${mensagemImc}`)
        }
        else if(imc <= 30){
            mensagemImc = 'Sobrepeso'
            infoImc = document.querySelector('#imc').innerHTML = (`IMC: ${infoImc}`)
            mensagemImc = document.querySelector('#mensagem').innerHTML = (`Situação: ${mensagemImc}`)
        }
        else if(imc <= 35){
            mensagemImc = 'Obesidade grau I'
            infoImc = document.querySelector('#imc').innerHTML = (`IMC: ${infoImc}`)
            mensagemImc = document.querySelector('#mensagem').innerHTML = (`Situação: ${mensagemImc}`)   
        }
        else if(imc <= 40){
            mensagemImc = 'Obesidade grau II' 
            infoImc = document.querySelector('#imc').innerHTML = (`IMC: ${infoImc}`)
            mensagemImc = document.querySelector('#mensagem').innerHTML = (`Situação: ${mensagemImc}`)    
        }
        else if(imc > 40){
            mensagemImc = 'Obesidade grau III'
            infoImc = document.querySelector('#imc').innerHTML = (`IMC: ${infoImc}`)
            mensagemImc = document.querySelector('#mensagem').innerHTML = (`Situação: ${mensagemImc}`)    
        }
    }

    /*
     A função resertar irá efetuar o reset do campo
     RESULTADO caso o usuário queira limpar o campo.
    */

    function resetar(){

        infoImc = document.querySelector('#imc').innerHTML = ('')
        mensagemImc = document.querySelector('#mensagem').innerHTML = ('')
    }

    //DECLARAÇÕES DE VARIÁVEIS

    const btn = document.getElementById('botao')
    const btnReset =  document.getElementById('botao-resetar')

    //EVENTOS NOS BOTÕES

    btn.addEventListener("click", inputs)
    btnReset.addEventListener('click', resetar)



