
let lista = new Array(5).fill(undefined);
console.log(lista);


let lista1 = new Array(6).fill("A", 4,5);
console.log(lista1);

let lista2 = new Array(6).fill("Ab", -1);
console.log(lista2);

let generar =()=>Math.trunc(Math.random()*10);
let lista3 = new Array(20).fill(null);
for (let i in lista3){
    lista3[i]=generar();
}
console.log(lista3);
console.log(lista3.slice(5,10))

let generar1 =()=>Math.trunc(Math.random()*10);
let lista4 = new Array(20).fill(null);
for (let i in lista4){
    lista4[i]=generar1();

}

lista4.splice(5,0, "Rafael")
console.log(lista4)

lista5=["A", "B", "C", "D", "E", "F"]
lista5.splice(4,1,"Rafael")
console.log(lista5)

lista6=["A", "B", "C", "D", "E", "F"]
lista6.splice(4,0,"Rafael")
console.log(lista6)

lista7=["A", "B", "C", "D", "E", "F"]
lista7.splice(-2,1,"Rafael")
console.log(lista7)


const array1=["A", "B", "C", "D", "E", "F"];
console.log(array1.copyWithin(0,3,4));


array4=["Ford", "Chevrolet", "Mazda", "Fiat", "Toyota", "Opel"];
console.log(array4);

const array2=["Ford", "Chevrolet", "Mazda", "Fiat", "Toyota", "Opel"];
console.log(array2.copyWithin(0,3,4));


array5=["Ford", "Chevrolet", "Mazda", "Fiat", "Toyota", "Opel"];
console.log(array5.copyWithin(1,4,3));

array3=["Ford", "Chevrolet", "Mazda", "Fiat", "Toyota", "Opel"];
console.log(array3.copyWithin(1,3));