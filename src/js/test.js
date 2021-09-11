console.log("Hello world!");

const pi = 3.14;
let r = 2;
let S = pi * r * r;

console.log('Площадь круга радиуса 2 см равна', S, 'см^2');

function print_pi(){
    console.log(pi);
}

print_pi()

//Comment
/*Comment*/

console.log(true && false)
console.log(true || false)
console.log(!false)

if (1 == 1){
    console.log('1 equal 1')
}

else{
    console.log('it is lie')
}

(1 == 1) ? console.log('da'):console.log('net')

let n = 0

while (n < 5){
    console.log(n);
    n++
}

do{
    console.log(n);
    n++
}
while (n < 4)
    
for(let count = 0; count < 5; count += 2){
    console.log(count * 3)
}

let getsum = (a, b) => a + b;

console.log(getsum(10, 23));

confirm('push ok')

alert('PUSH OK!')

prompt("How are you old?", "5")

console.log('ARRAY');

let matrix=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
]

console.log(matrix[1][1])

matrix.push([9, 10, 11]) //end

matrix.unshift([-3, -2, -1]) //start

console.log(matrix) 

matrix.pop(); //end

matrix.shift() //start

console.log(matrix)