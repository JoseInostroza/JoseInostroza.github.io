//vistas del flujo principal 
export const home = (req, res) => {
        res.render("home");  
}

export const listaPersonajes = (req, res) => {
        res.render("listaPersonajes");  
}

export const listaTiendas = (req, res) => {
        res.render("listaTiendas");  
}

//vistas de sub flujo
export const taberna = (req, res) => {
        res.render("taberna");  
}

export const ayuda = (req, res) => {
        res.render("ayuda");  
}

export const main = (req, res) => {
        res.render("main");  
}