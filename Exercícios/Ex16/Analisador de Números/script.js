var num = document.getElementById('num')
var analist = document.getElementById('analist')
var res = document.getElementById('res')
var lista = []

function isNumero(n) {
    if (n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, lista)) {
        lista.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        analist.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (lista.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        var maior = lista[0]
        var menor = lista[0]
        var soma = 0
        var media = 0
        for (var pos in lista) {
            soma += lista[pos]
            if (lista[pos] > maior) {
                maior = lista[pos]
            }
            if (lista[pos] < menor) {
                menor = lista[pos]
            }
        }
        media = soma / lista.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${lista.length} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores informados foi ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores informados foi ${media}.</p>`
    }
}