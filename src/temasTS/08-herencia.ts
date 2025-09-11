
class Persona3{
    protected nombre:string;
    private edad:number;
    private direccion:string;

    constructor(nombre:string,edad:number,direccion:string){
        this.nombre=nombre;
        this.edad=edad;
        this.direccion=direccion;
    }
    mostrarPersona(){
        console.log(`Nombre: ${this.nombre},
            Edad: ${this.edad},
            Direccion: ${this.direccion}`);
    }

}

class Empleado3 extends Persona3{
    private salario:number;
    constructor(nombre:string,edad:number,direccion:string, salario:number){
        super(nombre,edad,direccion)
        this.salario=salario;
    }
    imprimir(){
        if(this.salario>1500){
            console.log(`Empleado: ${this.nombre}, Salario: ${this.salario}`);
        } else{
            console.log('No tiene salario suficiente')
        }
    }

}

const persona3=new Persona3('Juan', 30,'Calle 123');
persona3.mostrarPersona();
const empleado3=new Empleado3('Pedro',28,'Avenida 456',1600);
empleado3.imprimir();