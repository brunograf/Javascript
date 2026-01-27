function gerarTabuada() {
    var num = document.getElementById('txtnum').value
    var tab = document.getElementById('seltabuada')
    if (num.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        tab.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}