class Poligono{

    constructor(numLados,medidaLado){
        this.numLados = numLados;
        this.medidaLado = medidaLado;
    }

    perimetro(){
        return this.medidaLado*this.numLados; 
    }

    area(){

    }
}

class Triangulo extends Poligono{
    constructor(medidaLado){
        super(3,medidaLado);
       
    }

    area(){

        return (Math.sqrt(3)/4)*Math.pow(this.medidaLado,2);
    }
}

class Cuadrado extends Poligono{
    constructor(medidaLado){
        super(4,medidaLado);
    }

    area(){
        return Math.pow(this.medidaLado,2);
    }
}

class Pentagono extends Poligono{
    constructor(medidaLado,apotema){
        super(5,medidaLado);
        this.apotema = apotema;
    }

    area(){
        return(this.perimetro()*this.apotema)/2;
    }
}

let miTriangulo = new Triangulo(5);
let miCuadrado = new Cuadrado(3);
let miPentagono = new Pentagono(3,3);

console.log(`El área del triangulo es: ${miTriangulo.area()} y su perímetro es: ${miTriangulo.perimetro()}`);
console.log(`El área del cuadrado es: ${miCuadrado.area()} y su perímetro es: ${miCuadrado.perimetro()}`);
console.log(`El área del pentágono es: ${miPentagono.area()} y su perímetro es: ${miPentagono.perimetro()}`);



