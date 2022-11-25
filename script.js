function tabuada() {

    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um numero')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}
/*var multiplicador = 5

for (numerador = 0; numerador <= 10; numerador++) {
    resultado = multiplicador * numerador
    console.log(`${multiplicador} X ${numerador} = ${resultado}`)
}*/