import { type Producto, calcularISV2 } from './05-destructuracion-funciones';


const carrito: Producto[] = [
    {nombre: 'Iphone 14' ,  precio: 1500},
    {nombre: 'Ipad Air', precio: 1200},
    {nombre: 'Macbook Pro', precio: 3000}
];

const[total,isv]=calcularISV2(carrito);
console.log('Total: ' ,total);
console.log('ISV', isv);