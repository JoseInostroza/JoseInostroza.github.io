var billeteras = document.querySelectorAll('#personajes span')
var armadura_ligera = document.querySelectorAll('#liviana p')
const botonArmadura = document.getElementsByName('armadura')
const lienzo = document.querySelector('#carrito')
const jugadores = document.querySelectorAll('#personajes input')
const botonCompras = document.getElementById('botonCompra')
const comprador = document.getElementById('comprador')
var aviso = document.getElementById('aviso')
let n
let p
let base = 0
let billeteraActiva
var creditoDisponible = 0
let total = {'PP':0,'PO':0,'PT':0,'PC':0};
const listaJugadores = {'nhala':{'PP':0,'PO':15,'PT':0,'PC':0},'kroz':{'PP':0,'PO':2,'PT':0,'PC':0},'dove':{'PP':0,'PO':7,'PT':0,'PC':0},'layka':{'PP':0,'PO':25,'PT':0,'PC':0},'gasef':{'PP':0,'PO':7,'PT':0,'PC':0},'sou-ken':{'PP':0,'PO':10,'PT':0,'PC':0},}
let jugadorActivo

function baseC(m,c){
    switch(m){
        case 'PP':
            return parseInt(c)*1000
        case 'PO':
            return parseInt(c)*100
        case 'PT':
            return parseInt(c)*10
        case 'PC':
            return parseInt(c)
    }
}

function actualizar(){
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
})}

document.addEventListener('DOMContentLoaded',actualizar())
botonArmadura.forEach((e)=>{
    e.addEventListener('click',()=>{
        let activo = e.id
        n = document.querySelector(`p[name=${activo}Titulo]`)
        p = document.querySelector(`p[name=${activo}Precio]`)
        let nombre = n.innerHTML
        let precio = p.innerHTML
        lienzo.innerHTML += `<div class='text-xs shadow-lg rounded-t-md mb-2'><span>${nombre}</span> <span>${precio}</span>`   
        var datos = precio.split(':')
        base += baseC(datos[0],datos[1])
        total[datos[0]] += parseInt(datos[1])
        var subtotal = document.getElementById(datos[0])
        subtotal.innerHTML = total[datos[0]]
    })
})

jugadores.forEach((i)=>{
    i.addEventListener('change',(radio)=>{
        if (i.checked){
            jugadorActivo = i.id
            billeteraActiva = listaJugadores[jugadorActivo]
            creditoDisponible = 0
            comprador.innerText = `${jugadorActivo}`
            for (var moneda in billeteraActiva){
                creditoDisponible += baseC(moneda,billeteraActiva[moneda])
            }
        }
    })
})

botonCompras.addEventListener('click', ()=>{
    if (creditoDisponible < base ){
        aviso.innerHTML='Fondos insuficientes amigo, pide ayuda a tus compañeros'
    }
    else{
        resto = creditoDisponible - base
        j= listaJugadores[jugadorActivo]
        for (moneda in j){
            switch(moneda){
                case 'PP':
                    j['PP']=resto/1000
                    resto = resto%1000
                    break
                case 'PO':
                    j['PO']=resto/100
                    resto = resto%100
                    break
                case 'PT':
                    j['PT']=resto/10
                    resto = resto%10
                    break
                case 'PC':
                    j['PP']=resto
                    break
            }
        }
        actualizar()
        aviso.innerHTML= 'Transaccion terminada'
    }
})