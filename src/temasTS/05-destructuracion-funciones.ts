//destructuración en funciones
export interface Producto{
    nombre:string,
    precio:number
}
 
const telefono:Producto={
    nombre:"Iphone 14",
    precio:1500
}
const tablet:Producto={
    nombre:"Ipad Air",
    precio:1200
}
function calcularISV(productos:Producto[]):[number,number]{//la funcion recibe un arreglo de productos y retorna una tupla con dos numeros
    let total=0;
    for(let producto of productos){
        total+=producto.precio;//suma el precio de cada producto al total
    }
    return [total, total * 0.15];//retorna el total y el ISV (15% del total)
}
 
const articulos=[telefono,tablet];//arreglo de productos
const [isv,total]=calcularISV(articulos);
console.log("ISV: "+isv);
 
//destructuracion en el parametro de la funcion
export function calcularISV2(productos:Producto[]):[number,number]{//la funcion recibe un arreglo de productos y retorna una tupla con dos numeros
    let total=0;
    for(let {precio} of productos){//destructuracion en el parametro del for
        total+=precio;//suma el precio de cada producto al total
    }
    return [total,total*0.15];//retorna el total y el ISV (15% del total)
}
const [isv2,total2]=calcularISV2(articulos);
console.log("ISV2: "+isv2);
console.log("Total: "+total2);