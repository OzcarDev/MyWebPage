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

export let miTriangulo = new Triangulo(5);
export let miCuadrado = new Cuadrado(3);
export let miPentagono = new Pentagono(3,3);




