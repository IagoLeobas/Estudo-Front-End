function imprimeSoma(x, y){
    console.log(x + y)
}

imprimeSoma(2,3)
imprimeSoma()

//pega apenas os dois primeiros pq é o escopo
imprimeSoma(1,2,3,4)

function soma(a,b=1){
    return a + b
}
console.log(soma(2,3))
console.log(soma(2))
