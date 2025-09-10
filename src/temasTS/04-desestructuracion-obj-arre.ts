interface Reproductor{
    volumen:number,
    segundo:number,
    cancion:string,
    detalles:Detalles,
}

interface Detalles{
    autor:string,
    anio:number
}

const reproductor:Reproductor={
    volumen:90,
    segundo:36,
    cancion:'Mess',
    detalles:{
        autor:'Ed Sheeran',
        anio:2015
    }
}

console.log("El volumen actual es de: ", reproductor.volumen);
console.log("El volumen actual es de: ", reproductor.segundo);
console.log("La cancion actual es de: ", reproductor.cancion);
console.log("EL autor es: ",reproductor.detalles.autor);
console.log("El año es: " ,reproductor.detalles.anio);


const {volumen, segundo,cancion,detalles}=reproductor;
const {autor,anio}=detalles;
console.log("El volumen actual es de: ",volumen);
console.log("El volumen actual es de: ",segundo);
console.log("La cancion actual es de: ",cancion);
console.log("EL autor es: ",autor);
console.log("El año es: " ,anio);


const dbz:string[]=['Goku','Vegeta','Trunks']

console.log('Personaje 1:', dbz[0]);
console.log('Personaje 2:', dbz[1]);
console.log('Personaje 3:', dbz[2]);

//Destructuracion de arreglos
const [p1,p2,p3]=dbz
console.log('Personaje 1:', p1);
console.log('Personaje 2:', p2);
console.log('Personaje 3:', p3);





interface Producto {
    nombre: string;
    precio: number;
}

const telefono: Producto = {
    nombre: 'Iphone 14',
    precio: 1500
}

const tablet: Producto = {
    nombre: 'Ipad Air',
    precio: 1200
}

function calcularISV(productos: Producto[]): [number, number] {
    let total = 0;
    for (let producto of productos) {
        total += producto.precio;
    }
    return [total, total * 0.15];
}

// Ejemplo de uso
const resultado = calcularISV([telefono, tablet]);
console.log(`Total: ${resultado[0]}, ISV: ${resultado[1]}`);


const articulos=[telefono,tablet]
const isv = calcularISV(articulos)
console.log('ISV:', isv)


function calcularISV2(productos:Producto[]):[number,number]{
    let total=0;
    for (let producto of productos){
        total+=producto.precio ;
    }
    return [total,total*0.15];
}
const [total, isv2]=calcularISV2(articulos)
console.log('Total', total);
console.log('ISV 2', isv2)