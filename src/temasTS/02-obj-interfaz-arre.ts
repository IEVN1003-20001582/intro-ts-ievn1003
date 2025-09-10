

//Las interfaces en TypeScript son una herramienta poderosa que te permite definir la estructura de un objeto,
interface Alumno{
    nombre:string,
    edad:number,
    activo:boolean,
    email?:string, //el ? indica que es opcional 
    nota:number | string //puede ser numero o string
}

const alumno:Alumno={
    nombre:"Juan",
    edad:23,
    activo:true,
    email:"juan@gmail.com",
    nota:9.5
}

console.table(alumno)



let mascotas:string[]=['perro','gato','loro']
mascotas.push('tortuga') //INSERTA OTRO DATO
console.log(mascotas)
mascotas[1]='pez' //REMPLAZA UN DATO POR OTRO
console.log(mascotas)



let idades:(number|string)[]=[23,45,67,'89']
idades.push(99)
idades.push('180')
console.log(idades)

               