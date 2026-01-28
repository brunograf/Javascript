var num = [8, 1, 7, 4, 2, 9]
/*
for (var pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/
for (var pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
var pos = num.indexOf(7)
console.log(`O valor 7 está na posição ${pos}`)