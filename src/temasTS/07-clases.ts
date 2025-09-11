class Persona{
    nombre:string;
    edad:number;

    constructor(nombre:string,edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log(`${this.nombre},${this.edad}`)
    }
}

let persona:Persona;
persona=new Persona('Tony', 45);
persona.imprimir();