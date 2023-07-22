import fs from "fs"
const leerDocumento = (archivo)=>{
    return new Promise((resolve, reject)=>{
        fs.readFile(`src/db/${archivo}`,"utf-8", (error, data)=>{
            if(error){
                console.log(error);
                reject("No se pudo conecata a la base de datos");
            }
            resolve(JSON.parse(data));
        })
    })
};
const escribirArchivo= (archivo, data) =>{
    return  new Promise((resolve, reject)=>{
        fs.writeFile(`src/db/${archivo}`, JSON.stringify(data, null, 2),"utf8", (error)=>{
            if (error){
            console.log(error);
            reject("Error al conectar con base de datos.");
            }
            resolve("Se ha guardado correctamente la información");
        })
        
    }) 
}

export {leerArchivo, escribirArchivo};