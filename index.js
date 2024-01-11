let body = document.body
let aziza = document.createElement('div')
let item1 = document.createElement('div')
let img = document.createElement('img')
let p = document.createElement('p')
let p1 = document.createElement('p')
let btn = document.createElement('button')

aziza.classList.add('aziza')
item1.classList.add ('item1')
img.srs = `./img/honor.jpg`
img.alt = ''
p.innerHTML='Honor X7b 8/128GB'
p1.classList.add('narx')
p1.innerHTML = '2 550 000 сум'
btn.classList.add('zard')
btn.innerHTML='425 000 сум х 6 мес'

body.append(aziza)
aziza.append(item1)
item1.append(img , p ,p1 ,btn)