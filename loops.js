// print 0-5 using console.log
let m =0;
console.log(0)
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
//or for loop
for(let l = 0; l <= 5; l ++){
    console.log(l)
}

for(let x = 5; x>=0;x --){
    console.log(x)
}


let numbers = [1, 2, 3, 4, 5];
let add = 0;

for (let y = 0; y < numbers.length; y++) {
  add += numbers[y];
}

console.log(add)
//initialization,conditions,increment/decrement

let sum2= 0
for(i = 0; i < numbers.length; i++){
sum2 = sum2 + numbers[i]
}
console.log(sum2)


let girls = ['esther', 'sarah','mary','jane','gloria','mable','shanitah']
console.log(girls.length)
let allGrils = 'all girls are;'
for (let index = 0; index < girls.length; index++){
    let oneGirl = girls[index]
    allGrils = allGrils + oneGirl
}
console.log(allGrils)

//a loop which prints the word hello five times on screen
for (let w = 0; i < 5; w++) {
    console.log("hello");
  }
 //while loop
 let l = 0
 while( l <= 5 ){
    console.log(l)
    l++
}
  //do while
  let n = 1;

do {
  console.log(n);
  n++;
}
 while (n <= 5);
 //for of (in arrys)
 let number = [1, 2, 3, 4, 5];
let sum = 0;

for (let y = 0; y < numbers.length; y++) {
  sum += numbers[y];
  console.log(add)

}
for(const digit of number){
    console.log(digit);
}
let cereals = ['maize','beans','cow peas','g nuts']
for (const grains of cereals){
    console.log(grains)
}
const produceList = [{name :'beans',type:'grains',weight:1000,cost:5000000},
    {name:'rice', type:'legumes',weight:2000,cost:4000000},
    {name:'gnuts',type:'grains',weight:3000,cost:2000000}]
    
    for(const produce of produceList){
        console.log(`name:${produce.name},type:${produce.type},weight:${produce.weight}kg,cost:${produce.cost}ugx`)
    }

