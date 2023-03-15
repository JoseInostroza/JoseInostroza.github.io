var billeteras = document.querySelectorAll('#personajes span')
var armadura_ligera = document.querySelectorAll('#liviana p')
const botonArmadura = document.getElementsByName('armadura')
const lienzo = document.querySelector('#carrito')
const jugadores = document.querySelectorAll('#personajes input')
let n
let p
let base = 0
let billeteraActiva
let creditoDisponible
let total = {'PP':0,'PO':0,'PT':0,'PC':0};
const listaJugadores = {'nhala':{'PP':0,'PO':15,'PT':0,'PC':0},'kroz':{'PP':0,'PO':2,'PT':0,'PC':0},'dove':{'PP':0,'PO':7,'PT':0,'PC':0},'layka':{'PP':0,'PO':25,'PT':0,'PC':0},'gasef':{'PP':0,'PO':7,'PT':0,'PC':0},'sou-ken':{'PP':0,'PO':10,'PT':0,'PC':0},}

function baseC(m,c){
    switch(m){
        case 'PP':
            base += parseInt(c)*1000
            break
        case 'PO':
            base += parseInt(c)*100
            break
        case 'PT':
            base += parseInt(c)*10
            break
        case 'PC':
            base += parseInt(c)
            break
    }
}

billeteras.forEach((b)=>{
    switch(b.id){
        case 'billetera-nhala':
            var a = listaJugadores['nhala']
            b.innerHTML=`PP:${a['PP']} PO:${a['PO']} PT:${a['PT']} PC:${a['PC']}`;
            break
        case 'billetera-kroz':
            var a = listaJugadores['kroz']
            b.innerHTML=`PP:${a['PP']} PO:${a['PO']} PT:${a['PT']} PC:${a['PC']}`;
            break
        case 'billetera-layka':
            var a = listaJugadores['layka']
            b.innerHTML=`PP:${a['PP']} PO:${a['PO']} PT:${a['PT']} PC:${a['PC']}`;
            break
        case 'billetera-dove':
            var a = listaJugadores['dove']
            b.innerHTML=`PP:${a['PP']} PO:${a['PO']} PT:${a['PT']} PC:${a['PC']}`;
            break
        case 'billetera-gasef':
            var a = listaJugadores['gasef']
            b.innerHTML=`PP:${a['PP']} PO:${a['PO']} PT:${a['PT']} PC:${a['PC']}`;
            break
        case 'billetera-souken':
            var a = listaJugadores['sou-ken']
            b.innerHTML=`PP:${a['PP']} PO:${a['PO']} PT:${a['PT']} PC:${a['PC']}`;
            break
    }
})
botonArmadura.forEach((e)=>{
    e.addEventListener('click',()=>{
        let activo = e.id
        n = document.querySelector(`p[name=${activo}Titulo]`)
        p = document.querySelector(`p[name=${activo}Precio]`)
        let nombre = n.innerHTML
        let precio = p.innerHTML
        lienzo.innerHTML += `<div class='text-xs shadow-lg rounded-t-md mb-2'><span>${nombre}</span> <span>${precio}</span>`   
        var datos = precio.split(':')
        baseC(datos[0],datos[1])
        total[datos[0]] += parseInt(datos[1])
        var subtotal = document.getElementById(datos[0])
        subtotal.innerHTML = total[datos[0]]
    })
})

jugadores.forEach((i)=>{
    i.addEventListener('change',(radio)=>{
        if (i.checked){
            billeteraActiva = listaJugadores[i.id]
            console.log(billeteraActiva)
        }
    })
})