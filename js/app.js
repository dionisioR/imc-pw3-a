let btn = document.getElementById('btn');
let div = document.getElementById('resultado')

const arrPessoa = []

function cadastrar(){
    
    let nomeInput = document.getElementById('nome').value
    let sobrenomeInput = document.getElementById('sobrenome').value
    let categoriaInput = document.getElementById('categoria').value
    let pesoInput = document.getElementById('peso').value
    let alturaInput = document.getElementById('altura').value
    //----------------------------------------------------
    //let Imc = IMC(pesoInput, alturaInput)
    //let categoriaImc = categoriaIMC(Imc)

    const pessoa = {
        nome: nomeInput,
        sobrenome: sobrenomeInput,
        categoria: categoriaInput,
        peso: pesoInput,
        altura: alturaInput,
        imc: IMC(pesoInput, alturaInput),
        categoriaIMC: categoriaIMC(IMC(pesoInput, alturaInput))
    }

    arrPessoa.push(pessoa)

    imprimir()

    console.log(arrPessoa);


     
}


function IMC(peso, altura){
   // calcular o imc
   // peso / (altura * altura)
   return peso / Math.pow(altura,2)
}

function categoriaIMC(imc){
    //calcular a categoria do IMC

    if(imc <= 18.5){
        return 'Abaixo do normal'
    }else if(imc <= 24.9){
        return 'Normal'
    }else if(imc <= 29.9){
        return 'Sobrepeso'
    }else if(imc <= 34.9){
        return 'Obesidade Grau I'
    }else if(imc <= 39.0){
        return 'Obesidade Grau II'
    }else{
        return 'Obesidade Grau III'
    }
}


function imprimir(){

    div.innerHTML = ''

    for( let i = 0; arrPessoa.length; i++){
    div.innerHTML += `
    <tr>
        <th scope="row">${i+1}</th>
        <td>${arrPessoa[i].nome} - ${arrPessoa[i].sobrenome}</td>
        <td>${arrPessoa[i].peso}</td>
        <td>${arrPessoa[i].altura}</td>
        <td>${arrPessoa[i].imc} - ${arrPessoa[i].categoria}  </td> 
    </tr>
`  }
}

btn.addEventListener('click', cadastrar)

