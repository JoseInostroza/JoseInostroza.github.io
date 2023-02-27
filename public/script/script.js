var billeteras = document.querySelectorAll('#personajes span')

let listaJugadores = {'nahala':{'PP':0,'PO':15,'PT':0,'PC':0},'kroz':{'PP':0,'PO':2,'PT':0,'PC':0},'dove':{'PP':0,'PO':7,'PT':0,'PC':0},'layka':{'PP':0,'PO':25,'PT':0,'PC':0},'gasef':{'PP':0,'PO':7,'PT':0,'PC':0},'sou-ken':{'PP':0,'PO':10,'PT':0,'PC':0},}

billeteras.forEach((b)=>{
    switch(b.id){
        case 'billetera-nahala':
            var a = listaJugadores['nahala']
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
console.log(billeteras)