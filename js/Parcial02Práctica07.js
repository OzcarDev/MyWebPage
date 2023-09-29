function factorial(){
    let num=9;
    let resultado=1;
    for(let i = num;i>=1;i--){
        resultado *= i;
    }

    return resultado;
}

console.log(factorial());