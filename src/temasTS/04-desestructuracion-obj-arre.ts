
interface Reproductor{//interfaz Reproductor
    volumen:number,
    segundo:number,
    cancion:string,
    detalles:Detalles
}
interface Detalles{//interfaz Detalles
    autor:string,
    anio:number
}
const reproductor:Reproductor={//objeto de tipo Reproductor
    volumen:90,
    segundo:36,
    cancion:"La bilirrubina",
    detalles:{
        autor:"Juan Luis Guerra",
        anio:1990
    }
}
console.log("El volumen actual es: "+reproductor.volumen);
console.log("El segundo actual es: "+reproductor.segundo);
console.log("La cancion actual es: "+reproductor.cancion);//acceso a los atributos del objeto
console.log("El autor es: "+reproductor.detalles.autor);   //acceso a los atributos del objeto
console.log("El anio es: "+reproductor.detalles.anio);//acceso a los atributos del objeto
 
//Desestructuracion de objetos
const {volumen,segundo,cancion,detalles}=reproductor;
const {autor,anio}=detalles;
console.log("El volumen actual es: "+volumen);
console.log("El segundo actual es: "+segundo);
console.log("La cancion actual es: "+cancion);
console.log("El autor es: "+autor);
console.log("El anio es: "+anio);
 
//Desestructuracion de arreglos
const dbz:string[]=["Goku","Vegeta","Trunks"];
console.log("Personaje 1: "+dbz[0]);
console.log("Personaje 2: "+dbz[1]);
console.log("Personaje 3: "+dbz[2]);
//Desestructuracion
const [p1,p2,p3]=dbz;
console.log("Personaje 1: "+p1);
console.log("Personaje 2: "+p2);
console.log("Personaje 3: "+p3);
 
 
 