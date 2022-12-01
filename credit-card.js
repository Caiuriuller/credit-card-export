const table = document.querySelector('#frm2 > div:nth-child(6) > table')

let gastos = []

for (var r = 14, n = table.rows.length; r < n; r++) {
  let gasto = {
    data: '',
    descricao: '',
    valor: ''
  }

  for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
    if (c === 0) gasto.data = table.rows[r].cells[c].innerHTML
    if (c === 1) gasto.descricao = table.rows[r].cells[c].innerHTML
    if (c === 3) gasto.valor = table.rows[r].cells[c].innerHTML


  }
  gastos.push(gasto)
}

let g

for (const i of gastos) {
  let desc = i.descricao.replace(/[^a-zA-Z0-9 ]/g, '')
  desc = i.descricao.replaceAll('&nbsp;', '')

  g = g + desc + ';' + i.valor + '\n'
}

prompt('CTRL + C', g)
