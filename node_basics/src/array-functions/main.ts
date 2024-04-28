
/*
    Ejercicios:

    Abajo verá tipos de datos llamados 'ItemMenu' y 'Categoria', un arreglo llamado 'menu', y un objeto llamado 'promociones'.
    Utilizando estos recursos, complete lo siguiente:
*/

type Categoria = 'plato fuerte' | 'adicional' | 'postre' | 'bebida';

type ItemMenu = {
    nombre: string,
    categoria: Categoria,
    precio: number
}

const menu: ItemMenu[] = [
    {
        nombre: 'hamburguesa',
        categoria: 'plato fuerte',
        precio: 5000
    },
    {
        nombre: 'coca cola',
        categoria: 'bebida',
        precio: 1000
    },
    {
        nombre: 'pinto con huevo',
        categoria: 'plato fuerte',
        precio: 3000
    },
    {
        nombre: 'crepa de pollo',
        categoria: 'plato fuerte',
        precio: 3500
    },
    {
        nombre: 'papas fritas',
        categoria: 'adicional',
        precio: 1350
    },
    {
        nombre: 'tres leches',
        categoria: 'postre',
        precio: 1800
    },
    {
        nombre: 'cafe',
        categoria: 'bebida',
        precio: 800
    },
    {
        nombre: 'horchata',
        categoria: 'bebida',
        precio: 800
    },
    {
        nombre: 'flan de coco',
        categoria: 'postre',
        precio: 1100
    },
    {
        nombre: 'sopa azteca',
        categoria: 'plato fuerte',
        precio: 2500
    }
];

const promociones: {
    [ key: string ]: {
        categoria: Categoria,
        porcentajeDescuento: number
    }
} = {
    clienteFrecuente: {
        categoria: 'plato fuerte',
        porcentajeDescuento: 15
    },
    semanaSanta: {
        categoria: 'plato fuerte',
        porcentajeDescuento: 10
    },
    domingoEnLaTarde: {
        categoria: 'postre',
        porcentajeDescuento: 20
    },
};

//1.  Cree una función 'getItemPorNombre' que encuentre un ítem del menú por nombre. El nombre es un parámetro de la función, y la función devuelve el ítem
//encontrado si existe.

function getItemPorNombre(name: string){
    const searchedItem = menu.find( item => item.nombre === name );

    if(searchedItem){
        return searchedItem;
    } else {
        return "That item does not exist yet";
    }
}

console.log("1", getItemPorNombre("cafe"));

// 2.  Cree una variable 'bebidas' que contenga todos ítems en la categoría 'bebida'.

const drinks = menu.filter(item => item.categoria === "bebida");

console.log("2", drinks);

// 3.  Cree una variable 'menuPorPrecio' que contenga el menú ordenado por precio descendentemente.
const descendingPriceMenu = menu.sort( (a, b) => b.precio - a.precio);

console.log("3", descendingPriceMenu);

// 4.  Cree una variable 'opciones' que contenga únicamente los nombres de los ítems del menú, ordenados alfabéticamente.

const options = menu.map(item => item.nombre).sort( (a, b) => a - b);

console.log("4", options);

// 5.  Suponga que los descuentos se suman (si varios aplican para el mismo item). Cree una variable 'menuFullDescuentos'
// que contenga los items del menú con todos los descuentos aplicados.

// const groupKey = 'categoria';

// const groupingByCategory: {
//     [key in Categoria]?: ItemMenu[]
// } = {};

// for (const item of menu) {
    
//     const category = item[groupKey];

//     if ( !(category in groupingByCategory) )
//         groupingByCategory[category] = [];

//     groupingByCategory[category].push(item);
// }

// const fullDiscountsMenu = function(){
//     return menu.map(item => {
//         for(const key in promociones){
//             if(item.categoria === promociones[key].categoria){
//                 const porcentaje = 0.01 * promociones[key].porcentajeDescuento * item.precio;
//                 item.precio -= porcentaje;
//             }
//         }
//         return item;
//     });
// }

// console.log(fullDiscountsMenu());

