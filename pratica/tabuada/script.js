function cont(){
    var inicio = document.getElementById('idni');
    var fim = document.getElementById('ifim');
    var passo = document.getElementById('ipas');
    var res = document.getElementById('num');

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Erro!')
    } else{
        num.innerHTML = 'Contando: ';
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
    if (p <=0){
        alert('Passo invalido! Considerando PASSO 1')
        p = 1
    }
    if (i < f){
        for(let c = i; c <= f; c += p){
            num.innerHTML += `${c} \u{1F449}`
        }
    }else {
        for(let c = i; c >= f; c -= p){
            num.innerHTML += `${c} \u{1F449}`
        }
    }
        
        num.innerHTML += `\u{1F3C1}`
    }
}