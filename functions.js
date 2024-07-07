/*function greet(name){
    console.log( "hi"+ name + ".")
    greet("Esther");

}*/
//declaring a function without aparameter
function areaOfCircle(radius){


let area = Math.PI*radius*radius
return area;

}
console.log (areaOfCircle(200))

function sum (x,y){
    let add = x + y
    return add;
}
console.log(sum(5,5))
//arrow functions
const sum2 = (x,y) =>  x + y;

console.log (sum2(4,8))
//functions to multiply
function product(m,g = 9.67){
    let weight = m*g
    return weight + 'N'
}
console .log(product(6));
