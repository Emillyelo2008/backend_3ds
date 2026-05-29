// Funções podem ou não receber parâmetros
// São blocos reaproveitáveis

function dizOla(){
    console.log("Olá!")
}

function dizOlaPessoa(nome) {
    if(typeof nome !== "string"){
    console.error("Por favor, digite um valor de texto!")
    } else {
        console.log(nome + " , diz Olá ")
    }
}

dizOla()
dizOlaPessoa("Pedro")
dizOlaPessoa("Maria")
dizOlaPessoa(1321)