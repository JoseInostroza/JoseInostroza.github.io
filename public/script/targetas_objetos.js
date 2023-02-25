import csv from 'csv-parser';

//armor cards
const armaduras = [];
fs.createReadStream('../data/Tiendas D&D - Armaduras.csv')
    .pipe(csv())
    .on('data', (row) => {
        armaduras.push(row);
    })
    .on('end', () => {
        console.log(armaduras);
    });
    