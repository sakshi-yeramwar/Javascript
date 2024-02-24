let a = 10;
let b = 8;

add(a,b);

function add(x,y){
    console.log(x+y);
    sub(x,y);
    multi(x,y);
    div(x,y);
    mod(x,y);
}


function sub(x,y){
    console.log(x-y);
}
function multi(x,y){
    console.log(x*y);
}
function div(x,y){
    console.log(x/y);
}
function mod(x,y){
    console.log(x%y);
}

a+=3;
console.log(a);

a-=3
console.log(a);

let m=5;
let n=6;

console.log(m==n);
console.log(m>=n);
console.log(m<=n);
console.log(m===n);
console.log(m!==n);

++m;
console.log(m);
--n;
console.log(n);