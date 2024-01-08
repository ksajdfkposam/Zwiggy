console.log("hello");

function f(){
    console.log("hello everyone")
}

f();

function f1(){
    return 2*2;
}
console.log(f1());

const q=(name)=>{
    let out=`This is ${name}`;
    return out;
}

 console.log(q("udit"));
 //console.log(global);
 //command line argument
// console.log(process.argv);
 console.log(process.argv[1]);
 console.log(window)



